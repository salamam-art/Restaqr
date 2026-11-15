/* ════════════════════════════════════════════════════════════════
   نسخة تجريبية — محاكاة Firebase داخل المتصفح (لا يوجد أي اتصال بـ Firebase الحقيقي)
   - كل البيانات تتخزن في ذاكرة الصفحة + localStorage الخاص بالنسخة التجريبية فقط (مفاتيح بادئتها TEST_)
   - تسجيل الدخول: أي إيميل + أي باسورد يعمل (للأدمن اكتب إيميل الأدمن الحقيقي)
   - تحميل هذا الملف بدل سكريبتات Firebase الأربعة في Restaevents-test.html
   ════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    // ── عزل localStorage: كل المفاتيح تأخذ بادئة TEST_ حتى لا تختلط ببيانات النسخة الحقيقية ──
    var P = 'TEST_';
    var _get = Storage.prototype.getItem, _set = Storage.prototype.setItem, _rem = Storage.prototype.removeItem;
    Storage.prototype.getItem = function (k) { return _get.call(this, P + k); };
    Storage.prototype.setItem = function (k, v) { return _set.call(this, P + k, v); };
    Storage.prototype.removeItem = function (k) { return _rem.call(this, P + k); };

    // ── شريط "نسخة تجريبية" ──
    document.addEventListener('DOMContentLoaded', function () {
        var bar = document.createElement('div');
        bar.textContent = '⚠️ نسخة تجريبية — البيانات محلية على جهازك فقط ولا تُرفع إلى Firebase';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:2147483647;background:#b91c1c;color:#fff;font:700 12px sans-serif;text-align:center;padding:4px 8px;pointer-events:none;direction:rtl';
        document.body.appendChild(bar);
        var rst = document.createElement('button');
        rst.textContent = 'مسح بيانات التجربة';
        rst.style.cssText = 'position:fixed;bottom:22px;left:8px;z-index:2147483647;background:#111;color:#fff;font:700 11px sans-serif;padding:4px 8px;border-radius:8px;opacity:.75';
        rst.onclick = function () {
            if (!confirm('مسح كل بيانات النسخة التجريبية من هذا المتصفح؟')) return;
            Object.keys(localStorage).filter(function (k) { return k.indexOf(P) === 0; }).forEach(function (k) { localStorage.removeItem(k.slice(P.length)); });
            location.reload();
        };
        document.body.appendChild(rst);
    });

    // ── قاعدة بيانات في الذاكرة ──
    var DB_KEY = '__mockdb';
    var root = {};
    try { root = JSON.parse(localStorage.getItem(DB_KEY) || '{}') || {}; } catch (e) { root = {}; }
    var TS = { '.sv': 'timestamp' };
    var listeners = [];
    var lastPushMs = 0, pushCounter = 0;

    function clone(v) { return v === undefined ? null : JSON.parse(JSON.stringify(v)); }
    function parts(path) { return String(path || '').split('/').filter(Boolean); }
    function resolveSV(v) {
        if (v && typeof v === 'object') {
            if (v['.sv'] === 'timestamp') return Date.now();
            Object.keys(v).forEach(function (k) { v[k] = resolveSV(v[k]); });
        }
        return v;
    }
    function getAt(path) {
        var cur = root, p = parts(path);
        for (var i = 0; i < p.length; i++) {
            if (cur == null || typeof cur !== 'object') return null;
            cur = cur[p[i]];
        }
        return cur === undefined ? null : cur;
    }
    function prune(obj) {
        if (obj && typeof obj === 'object') {
            Object.keys(obj).forEach(function (k) {
                var v = prune(obj[k]);
                if (v === null || v === undefined || (typeof v === 'object' && !Object.keys(v).length)) delete obj[k]; else obj[k] = v;
            });
        }
        return obj;
    }
    function setAt(path, value) {
        var p = parts(path);
        value = value == null ? null : resolveSV(clone(value));
        if (!p.length) { root = value && typeof value === 'object' ? value : {}; }
        else {
            var cur = root;
            for (var i = 0; i < p.length - 1; i++) {
                if (cur[p[i]] == null || typeof cur[p[i]] !== 'object') cur[p[i]] = {};
                cur = cur[p[i]];
            }
            if (value === null) delete cur[p[p.length - 1]]; else cur[p[p.length - 1]] = value;
        }
        prune(root);
        try { _set.call(localStorage, P + DB_KEY, JSON.stringify(root)); } catch (e) {}
    }

    function Snap(path, val) {
        this._p = path; this._v = val;
        this.key = parts(path).slice(-1)[0] || null;
    }
    Snap.prototype.val = function () { return clone(this._v); };
    Snap.prototype.exists = function () { return this._v !== null && this._v !== undefined; };
    Snap.prototype.child = function (c) { return new Snap(this._p + '/' + c, this._v && typeof this._v === 'object' ? (this._v[c] === undefined ? null : this._v[c]) : null); };
    Snap.prototype.forEach = function (cb) {
        var v = this._v, self = this;
        if (!v || typeof v !== 'object') return false;
        var keys = Object.keys(v);
        for (var i = 0; i < keys.length; i++) { if (cb(new Snap(self._p + '/' + keys[i], v[keys[i]])) === true) return true; }
        return false;
    };
    Snap.prototype.numChildren = function () { return this._v && typeof this._v === 'object' ? Object.keys(this._v).length : 0; };

    function queryVal(path, opts) {
        var v = getAt(path);
        if (opts && opts.limitLast && v && typeof v === 'object') {
            var keys = Object.keys(v).sort().slice(-opts.limitLast), out = {};
            keys.forEach(function (k) { out[k] = v[k]; });
            return out;
        }
        return v;
    }

    function notify() {
        listeners.slice().forEach(function (l) {
            var cur = queryVal(l.path, l.opts);
            if (l.type === 'value') {
                var s = JSON.stringify(cur);
                if (s !== l.last) { l.last = s; setTimeout(function () { if (l.active) l.cb(new Snap(l.path, clone(cur))); }, 0); }
            } else if (l.type === 'child_added') {
                var seen = l.seen || (l.seen = {});
                if (cur && typeof cur === 'object') Object.keys(cur).sort().forEach(function (k) {
                    if (!seen[k]) { seen[k] = 1; setTimeout(function () { if (l.active) l.cb(new Snap(l.path + '/' + k, clone(cur[k]))); }, 0); }
                });
            }
        });
    }

    function Ref(path, opts) { this._path = parts(path).join('/'); this._opts = opts || null; this.key = parts(path).slice(-1)[0] || null; }
    var R = Ref.prototype;
    R.child = function (c) { return new Ref(this._path + '/' + c); };
    R.orderByKey = function () { return new Ref(this._path, Object.assign({}, this._opts)); };
    R.orderByChild = R.orderByKey;
    R.limitToLast = function (n) { return new Ref(this._path, Object.assign({}, this._opts, { limitLast: n })); };
    R.once = function () { var self = this; return Promise.resolve(new Snap(self._path, clone(queryVal(self._path, self._opts)))); };
    R.get = R.once;
    R.on = function (type, cb) {
        var path = this._path, opts = this._opts;
        if (path === '.info/connected') { setTimeout(function () { cb(new Snap(path, true)); }, 0); return cb; }
        if (path === '.info/serverTimeOffset') { setTimeout(function () { cb(new Snap(path, 0)); }, 0); return cb; }
        var l = { path: path, opts: opts, type: type, cb: cb, active: true, last: null };
        listeners.push(l);
        notify();
        return cb;
    };
    R.off = function (type, cb) {
        var path = this._path;
        listeners = listeners.filter(function (l) {
            var match = l.path === path && (!type || l.type === type) && (!cb || l.cb === cb);
            if (match) l.active = false;
            return !match;
        });
    };
    R.set = function (v) { setAt(this._path, v); notify(); return Promise.resolve(); };
    R.remove = function () { setAt(this._path, null); notify(); return Promise.resolve(); };
    R.update = function (obj) {
        var base = this._path;
        Object.keys(obj || {}).forEach(function (k) { setAt((base ? base + '/' : '') + k, obj[k]); });
        notify();
        return Promise.resolve();
    };
    R.transaction = function (fn) {
        var next = fn(clone(getAt(this._path)));
        if (next !== undefined) { setAt(this._path, next); notify(); }
        return Promise.resolve({ committed: next !== undefined, snapshot: new Snap(this._path, clone(getAt(this._path))) });
    };
    R.push = function (v) {
        var now = Date.now();
        if (now === lastPushMs) pushCounter++; else { lastPushMs = now; pushCounter = 0; }
        var key = '-M' + now.toString(36) + ('000' + pushCounter.toString(36)).slice(-3) + Math.random().toString(36).slice(2, 5);
        var child = new Ref(this._path + '/' + key);
        var p = v === undefined ? Promise.resolve() : child.set(v);
        child.then = p.then.bind(p);
        child.catch = p.catch.bind(p);
        return child;
    };
    R.onDisconnect = function () {
        var ok = function () { return Promise.resolve(); };
        return { update: ok, set: ok, remove: ok, cancel: ok };
    };

    function Database() {}
    Database.prototype.ref = function (path) { return new Ref(path || ''); };
    Database.prototype.goOffline = function () {};
    Database.prototype.goOnline = function () {};

    // ── Auth وهمي ──
    var authCbs = [];
    var AUTH_KEY = '__mockauth';
    var curUser = null;
    try { curUser = JSON.parse(localStorage.getItem(AUTH_KEY) || 'null'); } catch (e) {}
    function wrapUser(u) { return u ? Object.assign({}, u, { getIdToken: function () { return Promise.resolve('mock-token'); } }) : null; }
    function setUser(u) {
        curUser = u;
        try { if (u) _set.call(localStorage, P + AUTH_KEY, JSON.stringify(u)); else _rem.call(localStorage, P + AUTH_KEY); } catch (e) {}
        authCbs.slice().forEach(function (cb) { setTimeout(function () { cb(wrapUser(curUser)); }, 0); });
    }
    var authObj = {
        get currentUser() { return wrapUser(curUser); },
        setPersistence: function () { return Promise.resolve(); },
        onAuthStateChanged: function (cb) {
            authCbs.push(cb);
            setTimeout(function () { cb(wrapUser(curUser)); }, 0);
            return function () { authCbs = authCbs.filter(function (x) { return x !== cb; }); };
        },
        signInWithEmailAndPassword: function (email) {
            var u = { uid: 'mock-' + String(email).toLowerCase(), email: String(email).toLowerCase(), isAnonymous: false };
            setUser(u);
            return Promise.resolve({ user: wrapUser(u) });
        },
        signInAnonymously: function () {
            var u = { uid: 'mock-guest-' + Math.random().toString(36).slice(2, 8), email: null, isAnonymous: true };
            setUser(u);
            return Promise.resolve({ user: wrapUser(u) });
        },
        signOut: function () { setUser(null); return Promise.resolve(); },
        sendPasswordResetEmail: function () { return Promise.resolve(); }
    };

    // ── Storage وهمي (رفع الصور لا يتم فعلياً) ──
    function SRef(path) { this.path = path || ''; }
    SRef.prototype.child = function (c) { return new SRef(this.path + '/' + c); };
    SRef.prototype.put = function () { var self = this; return Promise.resolve({ ref: self }); };
    SRef.prototype.getDownloadURL = function () { return Promise.resolve(''); };
    SRef.prototype.delete = function () { return Promise.resolve(); };
    var storageObj = { ref: function (p) { return new SRef(p); }, refFromURL: function () { return new SRef(''); } };

    var dbObj = new Database();
    var dbFn = function () { return dbObj; };
    dbFn.ServerValue = { TIMESTAMP: TS };
    var authFn = function () { return authObj; };
    authFn.Auth = { Persistence: { LOCAL: 'local', SESSION: 'session', NONE: 'none' } };

    window.firebase = {
        initializeApp: function () { return {}; },
        database: dbFn,
        auth: authFn,
        storage: function () { return storageObj; },
        apps: [{}]
    };
})();
