/* ═══════════════════════════════════════════════════════════
   بيانات قائمة المشروبات — Resta Port Said
   عدّل الأسعار هنا فقط، وافتح beverage-menu.html يتحدث تلقائياً.

   • تغيير سعر:   غيّر الرقم بعد  price:
   • إضافة صنف:   انسخ سطر صنف كامل والصقه داخل القسم المطلوب
   • حذف صنف:     امسح سطره بالكامل
   • ترتيب الأصناف في الصفحة = ترتيبها هنا
   • السعر يُكتب رقم فقط (مثال 55 أو 55.5) والصفحة تعرضه 55.00
   • انتبه للفواصل ,  والأقواس { }  عند النسخ واللصق
   ═══════════════════════════════════════════════════════════ */

const MENU_SECTIONS = [

  {
    icon: '🍷', ar: 'الأنبذة المصرية', en: 'Egyptian Wines',
    // قسم بسعرين: سعر الزجاجة (price) وسعر الكأس (price2)
    columns: [ { en: 'Bottle', ar: 'زجاجة' }, { en: 'Glass', ar: 'كأس' } ],
    items: [
      { ar: 'أحمر، أبيض', en: 'Red, White', price: 760, price2: 190 },
    ]
  },

  {
    icon: '☕', ar: 'المشروبات الساخنة', en: 'Hot Drinks',
    items: [
      { ar: 'شاى',               en: 'Tea',                    price: 55  },
      { ar: 'قهوة تركى',         en: 'Turkish Coffee',         price: 75  },
      { ar: 'قهوة تركى باللبن',  en: 'Turkish Coffee w. Milk', price: 100 },
      { ar: 'كابوتشينو',         en: 'Cappuccino',             price: 100 },
      { ar: 'قهوة إسبريسو',      en: 'Espresso',               price: 75  },
      { ar: 'نسكافية',           en: 'Nescafé',                price: 100 },
      { ar: 'شيكولاته ساخنة',    en: 'Hot Chocolate',          price: 100 },
    ]
  },

  {
    icon: '🍺', ar: 'البيرة', en: 'Beer',
    items: [
      { ar: 'ستيلا',             en: 'Stella',            price: 180 },
      { ar: 'سقارة',             en: 'Sakara',            price: 180 },
      { ar: 'هينيكين',           en: 'Heineken Beer',     price: 180 },
      { ar: 'بيرة غير كحولية',   en: 'Nonalcoholic Beer', price: 75  },
    ]
  },

  {
    icon: '🥃', ar: 'مشروبات كحولية محلية', en: 'Local Hard Liquors',
    items: [
      { ar: 'جين',             en: 'Gin',            price: 90 },
      { ar: 'ويسكى',           en: 'Whisky',         price: 75 },
      { ar: 'فودكا أزرق ID',   en: 'Vodka ID Blue',  price: 85 },
      { ar: 'فودكا أسود ID',   en: 'Vodka ID Black', price: 85 },
    ]
  },

  {
    icon: '🥤', ar: 'مشروبات غير كحولية', en: 'Soft Drinks',
    items: [
      { ar: 'كولا، سبرايت',                 en: 'Cola, Sprite',          price: 60 },
      { ar: 'كولا، سبرايت منخفضة السعرات',  en: 'Diet Cola, Sprite',     price: 60 },
      { ar: 'عصير طازج',                    en: 'Fresh Juices',          price: 90 },
      { ar: 'كوكتيل فلوريدا',               en: 'Florida Cocktail',      price: 90 },
      { ar: 'عصير ليمون',                   en: 'Lemon Juice',           price: 75 },
      { ar: 'عصير ليمون بالنعناع',          en: 'Lemon Juice with Mint', price: 80 },
      { ar: 'مياه معدنية كبيرة',            en: 'Mineral Water Large',   price: 50 },
      { ar: 'مياه معدنية صغيرة',            en: 'Mineral Water Small',   price: 30 },
    ]
  },

];
