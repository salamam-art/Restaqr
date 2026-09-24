/* ═══════════════════════════════════════════════════════════
   بيانات منيو De Lesseps Café & Pool
   عدّل الأسعار هنا فقط، وافتح de_lesseps_cafe_menu.html يتحدث تلقائياً.

   • تغيير سعر:   غيّر الرقم بعد  price:
   • إضافة صنف:   انسخ سطر صنف كامل والصقه داخل القسم المطلوب
   • حذف صنف:     امسح سطره بالكامل
   • ترتيب الأصناف في الصفحة = ترتيبها هنا
   • السعر يُكتب رقم فقط (مثال 100)، ويُعرض كما هو
   • سعر إضافة النكهات:  addon
   • سعر السموزي (كل النكهات):  price داخل  choose
   • النبيذ له سعران:  price = الزجاجة ،  price2 = الكوباية
   • انتبه للفواصل ,  والأقواس { }  عند النسخ واللصق
   ═══════════════════════════════════════════════════════════ */

const MENU_SECTIONS = [

  {
    icon: '☕', ar: 'المشروبات الساخنة', en: 'Hot Drinks',
    items: [
      { note: 'All prices in L.E · الأسعار بالجنيه المصري' },
      { ar: 'شاى / شاى أخضر / نعناع', en: 'Tea / Green Tea / Mint',   price: 55 },
      { ar: 'قهوة تركى',              en: 'Turkish Coffee',           price: 75 },
      { ar: 'قهوة تركى باللبن',       en: 'Turkish Coffee with Milk', price: 100 },
      { ar: 'كابوتشينو',              en: 'Cappuccino',               price: 100 },
      { ar: 'قهوة إسبريسو',           en: 'Espresso',                 price: 75 },
      { ar: 'نسكافية',                en: 'Nescafé',                  price: 100 },
      { ar: 'قرفة',                   en: 'Cinnamon',                 price: 75 },
      { ar: 'سحلب',                   en: 'Sahlab',                   price: 100 },
      { ar: 'شيكولاته ساخنة',         en: 'Hot Chocolate',            price: 100 },
      { ar: 'موكا كافيه',             en: 'Café Mocha',               price: 120 },
      { ar: 'لاتيه',                  en: 'Café Latte',               price: 120 },
      { ar: 'أميركان كوفى',           en: 'Café Americano',           price: 100 },
      { ar: 'كرامل ماكياتو',          en: 'Caramel Macchiato',        price: 150 },
      { ar: 'إسبرسو ماكياتو',         en: 'Espresso Hot Macchiato',   price: 100 },
      { flavors: {
          label: 'Coffee Flavors · نكهات القهوة',
          addon: 30,
          tags: [ 'Vanilla · فانليا', 'Hazelnut · بندق', 'Caramel · كاراميل' ] } },
    ]
  },

  {
    icon: '🧊', ar: 'فرابتشينو والمشروبات الباردة', en: 'Frappuccino & Iced',
    items: [
      { sub: 'Frappuccino · فرابتشينو' },
      { ar: 'فرابتشينو فانليا',       en: 'Vanilla Frappuccino',     price: 150 },
      { ar: 'فرابتشينو بندق',         en: 'Hazelnut Frappuccino',    price: 140 },
      { ar: 'موكا فرابيه',            en: 'Mocha Frappé',            price: 150 },
      { ar: 'موز كارامل',             en: 'Banana Caramel',          price: 140 },
      { ar: 'أيس موكا',               en: 'Ice Mocha',               price: 140 },
      { ar: 'أيس كاراميل فرابيتشينو', en: 'Ice Caramel Frappuccino', price: 150 },
      { ar: 'موخيتو',                 en: 'Mokhito (Mojito)',        price: 120 },
    ]
  },

  {
    icon: '🥤', ar: 'مشروبات غازية', en: 'Soft Drinks',
    items: [
      { ar: 'كولا / سبرايت / دايت',       en: 'Cola / Sprite / Diet',         price: 60 },
      { ar: 'عصير طازج / زبادى بالفواكه', en: 'Fresh Juices / Fruit Yoghurt', price: 90 },
      { ar: 'مياه معدنية كبيرة',          en: 'Mineral Water – Large',        price: 50 },
      { ar: 'مياه معدنية صغيرة',          en: 'Mineral Water – Small',        price: 30 },
      { ar: 'عصير ليمون',                 en: 'Lemon Juice',                  price: 75 },
      { ar: 'عصير ليمون بالنعناع',        en: 'Lemon Juice with Mint',        price: 80 },
      { ar: 'زبادى بالعسل',               en: 'Yogurt with Honey',            price: 100 },
    ]
  },

  {
    icon: '🍹', ar: 'سموزى', en: 'Smoothies',
    items: [
      // اختيار نكهة بسعر واحد لكل النكهات
      { choose: {
          label: 'Choose your flavour · اختار نكهتك',
          price: 120,
          tags: [
            'Mango · مانجو',
            'Strawberry · فراوله',
            'Mandarin · يوسفى',
            'Lemon · ليمون',
            'Blueberry · توت',
            'Raspberry · راسبرى',
            'Peach · خوخ',
            'Pineapple · أناناس',
            'Kiwi · كيوى',
            'Banana · موز',
          ] } },
    ]
  },

  {
    icon: '🥛', ar: 'ميلك شيك', en: 'Milk Shake',
    items: [
      { note: 'All flavours · جميع النكهات' },
      { ar: 'فانليا',   en: 'Vanilla',    price: 120 },
      { ar: 'شيكولاته', en: 'Chocolate',  price: 120 },
      { ar: 'كارامل',   en: 'Caramel',    price: 120 },
      { ar: 'فراوله',   en: 'Strawberry', price: 120 },
      { ar: 'مانجو',    en: 'Mango',      price: 125 },
      { ar: 'توت',      en: 'Blueberry',  price: 120 },
      { ar: 'راسبيرى',  en: 'Raspberry',  price: 120 },
      { ar: 'كيوى',     en: 'Kiwi',       price: 120 },
    ]
  },

  {
    icon: '🍷', ar: 'نبيذ محلى', en: 'Local Wine',
    // قسم بسعرين: الزجاجة ثم الكوباية
    columns: [ 'Bottle · زجاجة', 'Glass · كوباية' ],
    items: [
      { ar: 'أحمر / أبيض', en: 'Red / White Wine', price: 760, price2: 190 },
    ]
  },

  {
    icon: '🥃', ar: 'مشروبات كحولية محلية', en: 'Local Hard Liquors',
    items: [
      { note: 'Per Glass · للكوباية' },
      { ar: 'جين',           en: 'Gin',            price: 90 },
      { ar: 'ويسكى',         en: 'Whisky',         price: 75 },
      { ar: 'فودكا ID أزرق', en: 'Vodka ID Blue',  price: 85 },
      { ar: 'فودكا ID أسود', en: 'Vodka ID Black', price: 85 },
    ]
  },

  {
    icon: '🍺', ar: 'البيرة', en: 'Beer',
    items: [
      { ar: 'ستيلا',           en: 'Stella',            price: 180 },
      { ar: 'ستيلا سقارة',     en: 'Stella Sakara',     price: 180 },
      { ar: 'هينيكين',         en: 'Heineken Beer',     price: 180 },
      { ar: 'بيرة غير كحولية', en: 'Nonalcoholic Beer', price: 75 },
    ]
  },

];
