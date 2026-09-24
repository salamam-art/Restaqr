/* ═══════════════════════════════════════════════════════════
   بيانات منيو Green House — Resta Port Said Hotel
   عدّل الأسعار والأصناف هنا فقط، وافتح greenhouse_menu.html يتحدث تلقائياً.

   • تغيير سعر:   غيّر الرقم بعد  price:
   • تغيير الوصف: عدّل النص داخل  descAr  (عربي)  أو  descEn  (إنجليزي)
   • إضافة صنف:   انسخ صنف كامل (من { إلى },) والصقه داخل القسم المطلوب
   • حذف صنف:     امسح الصنف بالكامل (من { إلى },)
   • ترتيب الأصناف في الصفحة = ترتيبها هنا
   • السعر يُكتب رقم فقط (مثال 150) والصفحة تعرضه 150.00
   • لو النص فيه علامة ' اكتبها هكذا  \'
   • الأقسام لها id (مثل appetizers) وهو اللي بيربط قائمة الأقسام في أعلى الصفحة،
     فلا تغيّره إلا لو عدّلت الرابط كمان. وأول قسم لازم يفضل appetizers
     لأن زر Explore في أول الصفحة بيودّي عليه.
   ═══════════════════════════════════════════════════════════ */

const MENU_SECTIONS = [

  {
    id: 'appetizers', ar: 'المشهيات', en: 'Appetizers',
    items: [
      { ar: 'سبرينج رول صيني', en: 'Chinese Spring Roll', price: 150,
        descAr: 'عجينة سبرينج محشوة بالمشروم والكرنب مع الخضروات — تقدم مع صلصة الصويا والحلو والحامض',
        descEn: 'Spring dough stuffed with mushroom, cabbage and vegetables — served with soya sauce & sweet and sour sauce' },

      { ar: 'سمك وبطاطس', en: 'Fish & Chips', price: 250,
        descAr: 'شرائح السمك المقلية مع البطاطس المقلية وصوص الترتار',
        descEn: 'Fried fish served with crispy French fries accompanied with tartar sauce' },

      { ar: 'ريستا جامبو ميكس', en: 'Resta Jumbo Mix', price: 350,
        descAr: 'محشي ورق عنب، سمبوسك، شرائح دجاج مقلية، أصابع جبنة موزاريلا مع صوص رانش',
        descEn: 'Stuffed wine leaves, sambousek, fried chicken strips, mozzarella cheese sticks with ranch sauce' },

      { ar: 'سلطة يونانية', en: 'Typical Greek Salad', price: 95,
        descAr: 'خضروات طازجة مع جبنة الفيتا والأوريجانو مزيّنة بالزيتون الأسود وفيليه الأنشوجة',
        descEn: 'Fresh vegetables with feta cheese and oregano, garnished with black olives and filet of anchovies' },

      { ar: 'سلطة موسمية مشكّلة', en: 'Seasonal Mixed Salad', price: 60,
        descAr: 'الخضروات الطازجة تقدم مع الصوص الإيطالي',
        descEn: 'Fresh vegetables served with Italian sauce' },

      { ar: 'كوكتيل جمبري', en: 'Cocktail di Gamberetti', price: 350,
        descAr: 'جمبري مسلوق يقدم على وسادة من الخس مع صوص الكوكتيل والبيض المسلوق',
        descEn: 'Boiled shrimp served on a pillow of lettuce with cocktail sauce and boiled eggs' },

      { ar: 'سلطة قيصر', en: 'Caesar Salad', price: 250,
        descAr: 'سلطة القيصر الشهيرة تقدم مع خبز التوست والجبن البارميزان واختيارك من صدور الدجاج والأنشوجة',
        descEn: 'Iceberg salad with herbed croutons, parmesan cheese, Caesar sauce — served with grilled chicken breast and anchovies' },

      { ar: 'تشكيلة مزة شرقية باردة', en: 'Variety of Cold Oriental Mezzah', price: 80,
        descAr: 'اختيارك من: طحينة · بابا غنوج · حمص · زبادي · سلطة بلدي',
        descEn: 'Your choice from: Tehina · Baba Ghanoush · Hummus · Yogurt · Baladi Salad' },
    ]
  },

  {
    id: 'soups', ar: 'الحساء', en: 'Soups',
    items: [
      { ar: 'شوربة أورزو', en: 'Orzo Soup', price: 40,
        descAr: 'مرق اللحم البقري مع الكرفس ومكرونة الأرزو',
        descEn: 'Meat broth with celery and orzo pasta' },

      { ar: 'شوربة كريمة الطماطم', en: 'Tomato Cream Soup', price: 50,
        descAr: 'شوربة الطماطم بالأعشاب تقدم مع خبز الكريتون المحمص',
        descEn: 'Served with herb crispy croutons' },

      { ar: 'شوربة البصل الفرنسية', en: 'French Onion Soup', price: 40,
        descAr: 'شوربة البصل الفرنسية تقدم مع شريحة من التوست المحمص والجبن الشيدر',
        descEn: 'Served with sliced French bread covered with melted cheese' },

      { ar: 'شوربة العدس المصرية', en: 'Egyptian Lentil Soup', price: 40,
        descAr: 'شوربة العدس المصرية تقدم مع خبز الثوم',
        descEn: 'Served with garlic bread' },

      { ar: 'شوربة المأكولات البحرية', en: 'Seafood Soup', price: 120,
        descAr: 'شوربة المأكولات البحرية بالكريمة',
        descEn: 'Assorted seafood with fresh cream' },

      { ar: 'شوربة كريمة الدجاج والمشروم', en: 'Chicken Mushroom Cream Soup', price: 100,
        descAr: 'مكعبات صدور الدجاج مع الماشروم والكريمة الطازجة',
        descEn: 'Chicken breast cubes with mushroom and fresh cream' },
    ]
  },

  {
    id: 'sandwiches', ar: 'السندوتشات', en: 'Sandwiches',
    items: [
      { ar: 'ساندوتش تونة', en: 'Tuna Sandwich', price: 180,
        descAr: 'ساندوتش تونة يقدم على الخبز الفرنسي',
        descEn: 'Tuna salad served on French baguette' },

      { ar: 'كلوب ساندوتش', en: 'Club Sandwich', price: 350,
        descAr: 'طبقات من التوست محشو بالبيض والسلامي والدجاج على شرائح الخس والطماطم ويقدم مع صوص المايونيز',
        descEn: 'White toast with salami, chicken, eggs, cheese, lettuce and mayonnaise — served with French fries' },

      { ar: 'برجر كلاسيك', en: 'Classic Burger Sandwich', price: 250,
        descAr: 'برجر مشوي يقدم مع المايونيز الكريمي وحلقات البصل والخس والطماطم مع صوص الجبنة الشيدر والبطاطس المقرمشة',
        descEn: 'Grilled burger with creamy mayonnaise, onion rings, lettuce and cheddar cheese sauce' },

      { ar: 'أباتشي برجر', en: 'Apache Burger', price: 270,
        descAr: 'برجر مشوي مع أصابع الموتزاريلا المقلية والمايونيز وصوص الجبنة الشيدر وصوص تكساس والطماطم والبصل والخس والبطاطس المقرمشة',
        descEn: 'Grilled burger with fried mozzarella sticks, creamy mayonnaise, cheddar, Texas sauce, tomatoes, onions, lettuce and crunchy potatoes' },

      { ar: 'شيش دجاج باربيكيو', en: 'BBQ Chicken Shish', price: 250,
        descAr: 'الدجاج المشوي يقدم في الخبز الباجت مع الخضار وصوص الباربيكيو وصوص الشيدر والبطاطس المقرمشة',
        descEn: 'Chicken shish in baguette bread with vegetables, barbeque sauce, cheddar sauce and crunchy potatoes' },

      { ar: 'دجاج سوبر كرانشي', en: 'Super Crunchy Chicken', price: 220,
        descAr: 'صدور الدجاج الكرسبي مع أصابع الموتزاريلا المقلية وحلقات البصل المقلية والخيار المخلل وصوص الجبنة الشيدر تقدم في عيش البرجر والبطاطس المقرمشة',
        descEn: 'Crispy chicken breasts with fried mozzarella sticks, fried onion rings, pickled cucumber and cheddar cheese sauce in baguette bread' },

      { ar: 'دجاج جوردون بلو', en: 'Chicken Gordon Blue', price: 220,
        descAr: 'صدور الدجاج محشوة بالجبن مع صوص البيف والجبنة الشيدر والبطاطس المقرمشة',
        descEn: 'Chicken breasts stuffed with cheddar cheese, served with beef and cheddar sauces and French fries' },

      { ar: 'كفتة ريستا الخاصة', en: 'Resta Special Kofta', price: 260,
        descAr: 'كفتة مشوية تقدم في الخبز الباجيت مع صوص الطحينة وصوص الباربيكيو والطماطم والبطاطس المقلية',
        descEn: 'Grilled kofta on baguette with tehina sauce, barbecue sauce and tomatoes — served with French fries' },

      { ar: 'جمبري مقلي', en: 'Fried Shrimps', price: 270,
        descAr: 'جمبري بانيه يقدم على الخبز الباجت مع صوص الطحينة وصوص الرانش والبطاطس المقرمشة',
        descEn: 'Fried shrimp with tehina sauce, ranch sauce and French fries' },

      { ar: 'حلقات كاليماري', en: 'Calamari Rings', price: 260,
        descAr: 'حلقات الكاليماري المقلية تقدم على الخبز الباجيت مع صوص الطحينة والخس وصوص الرانش والبطاطس المقرمشة',
        descEn: 'Calamari rings on sesame baguette with tehina and ranch sauce, served with French fries' },

      { ar: 'مكس حار', en: 'Spicy Mix', price: 260,
        descAr: 'الجمبري والسيبيا والسمك الفيلية المقلي بالكزبرة الخضراء وصوص الكاري الحار والبطاطس المقرمشة',
        descEn: 'Shrimp, calamari and fried fish with curry sauce, green coriander and French fries' },

      { ar: 'هوت دوج', en: 'Hot Dog', price: 160,
        descAr: 'يقدم على عيش الباجت بالمستردة والجبن الموتزاريلا المقلية وصوص الباربيكيو والبطاطس المقرمشة',
        descEn: 'Served on baguette bread with mustard, fried mozzarella sticks, BBQ sauce and crispy fries' },
    ]
  },

  {
    id: 'pasta', ar: 'العجائن', en: 'Pasta',
    items: [
      { ar: 'باستا نابوليتانا', en: 'Napoletana Pasta', price: 70,
        descAr: 'مكرونة مع صوص الطماطم الفريش والريحان وزيت الزيتون',
        descEn: 'Pasta with fresh tomato sauce, basil and olive oil' },

      { ar: 'باستا راجو (بولونيز)', en: 'Ragu Pasta (Bolognese)', price: 180,
        descAr: 'إسباجيتي تقدم مع صوص اللحم المفروم الطازج',
        descEn: 'Spaghetti pasta served with rich meat sauce' },

      { ar: 'نيجريسكو', en: 'Negressco', price: 280,
        descAr: 'مكرونة بيني مع صوص الكريمة والدجاج وجبنة الموزاريلا',
        descEn: 'Penne pasta with cream sauce, chicken and mozzarella cheese' },

      { ar: 'طاجن مكرونة بالفرن', en: 'Oven Pasta Tajjin', price: 270,
        descAr: 'طاجن المكرونة المطبوخة في الفرن مع صوص اللحم المفروم مغطاة بالجبن الموتزريلا',
        descEn: 'Pasta with Alfredo sauce combined with Bolognese, covered with mozzarella and baked in the oven' },

      { ar: 'باستا مأكولات بحرية', en: 'Seafood Pasta', price: 300,
        descAr: 'اختيارك من نوع المكرونة المفضلة مع الجمبري والكاليماري وصوص الكريمة أو صوص الروزاي',
        descEn: 'Your choice of pasta with shrimp, calamari and cream or rosé sauce' },

      { ar: 'فيتوتشيني', en: 'Fettuccine', price: 270,
        descAr: 'شرائح المكرونة مع الدجاج مع الصوص الأبيض والماشروم',
        descEn: 'Fettuccine with chicken Alfredo sauce and mushroom' },
    ]
  },

  {
    id: 'pizza', ar: 'البيتزا', en: 'Pizza',
    items: [
      { ar: 'بيتزا مارجريتا', en: 'Margretta', price: 230,
        descAr: 'بيتزا مارجريتا بصوص الطماطم والموتزريلا',
        descEn: 'Fresh tomato sauce with mozzarella cheese' },

      { ar: 'بيتزا الدجاج', en: 'Pizza di Pollo', price: 400,
        descAr: 'الدجاج المتبل مع الطماطم المجففة والماشروم وجبن الموتزريلا',
        descEn: 'Marinated chicken, sun-dried tomato, pesto sauce, mushroom and mozzarella cheese' },

      { ar: 'بيتزا المأكولات البحرية', en: 'Pizza ai Frutti di Mare', price: 400,
        descAr: 'بيتزا المأكولات البحرية بصوص الطماطم والموتزريلا',
        descEn: 'Assorted seafood with fresh tomato and mozzarella' },

      { ar: 'بيتزا التونة', en: 'Tonnata', price: 300,
        descAr: 'بيتزا بالتونه مع الفلفل الأخضر والبصل وجبن الموتزريلا',
        descEn: 'Tomato sauce, tuna, onion, green pepper, mozzarella cheese' },

      { ar: 'بيتزا الجبن الأربعة', en: 'Quattro Formaggi', price: 300,
        descAr: 'بيتزا الجبن الأربعة',
        descEn: 'Four cheese pizza' },

      { ar: 'بيتزا أمريكانا', en: 'Americana', price: 350,
        descAr: 'جبنة موتزاريلا — سوسيس — شرائح اللحم المدخن',
        descEn: 'Mozzarella cheese, sausage and smoked beef' },
    ]
  },

  {
    id: 'mains', ar: 'الأطباق الرئيسية', en: 'Main Dishes',
    items: [
      { ar: 'سمك مشوي', en: 'Grilled Fish', price: 500,
        descAr: 'فيليه سمك مشوي مع صوص الزبدة والليمون يقدم مع أرز أبيض ومكعبات الخضار',
        descEn: 'Fillet grilled fish with lemon and butter sauce, served with white rice and diced vegetables' },

      { ar: 'جمبري البحر الأحمر', en: 'Red Sea Shrimps', price: 850,
        descAr: 'جمبري البحر الأحمر المشوي جامبو يقدم مع الصوص وأرز أبيض وبطاطس محمرة',
        descEn: 'Jumbo grilled red sea shrimps with double jus sauce, white rice and roasted potatoes' },

      { ar: 'كاليماري مقلي', en: 'Fried Calamari', price: 350,
        descAr: 'كاليماري مقلي يقدم مع البطاطس المقلية وصوص الترتار',
        descEn: 'Fried calamari served with French fries and tartar sauce' },

      { ar: 'ستيك سلمون اسكتلندي', en: 'Backed Scotch Salmon Steak', price: 999,
        descAr: 'ستيك سلمون متبل يقدم مع بطاطس مهروسة وخضروات مشوية وطماطم مجففة',
        descEn: 'Marinated salmon steak served with mashed potatoes, grilled vegetables and sun-dried tomatoes' },

      { ar: 'تشكيلة مأكولات بحرية', en: 'Seafood Platter', price: 800,
        descAr: 'تشكيلة من فواكه البحر، جمبري مشوي، قاروص مشوي، سيبيا مشوية (سبيط) والأرز الأبيض',
        descEn: 'Assorted grilled shrimps, grilled sea bass and grilled sepia (squid) with white rice' },

      { ar: 'طاجن مأكولات بحرية', en: 'Seafood Tajian', price: 450,
        descAr: 'جمبري، كاليماري، فيليه سمك مع صوص كريمة وجبنة موزاريلا تقدم مع أرز أبيض',
        descEn: 'Shrimp, calamari, fish fillet, cream sauce and mozzarella cheese served with white rice' },

      { ar: 'إسكالوب بتلو', en: 'Veal Escalope', price: 800,
        descAr: 'إسكالوب بتلو يقدم مع سباجيتي بوتانيسكا',
        descEn: 'Breaded veal escalope served with spaghetti puttanesca' },

      { ar: 'مشكّل مشاوي', en: 'Mixed Grilled', price: 900,
        descAr: 'كفتة مشوية، كباب بتلو، شيش طاووق — يقدم مع أرز شرقي ومكعبات خضروات مشوية',
        descEn: 'Grilled kofta, veal kebab, shish tawook — served with oriental rice and grilled vegetable cubes' },

      { ar: 'ميداليون لحم بقري', en: 'Beef Medalion', price: 850,
        descAr: 'قطعتان من اللحم بقري مع صلصة الفلفل أو الماشروم خضار سوتيه وبطاطس مع أعشاب',
        descEn: 'Two medallions of beef filet with pepper or mushroom sauce, sautéed vegetables and herbed potatoes' },

      { ar: 'بيف ستروجانوف', en: 'Beef Stroganoff', price: 450,
        descAr: 'شرائح لحم سوتيه مع صوص بني مع الفلفل الحلو، بصل طازج بالكريمة يقدم مع الأرز الأبيض',
        descEn: 'Sautéed beef slices with brown sauce, bell pepper, onion and fresh cream — served with white rice' },

      { ar: 'بتلو بيكاتا', en: 'Veal Picatta', price: 900,
        descAr: 'شرائح لحم بتلو مطبوخ بالزبدة مع صوص مشروم أو صوص روكفور تقدم مع خضار سوتيه وبطاطا مهروسة',
        descEn: 'Sliced veal cooked in butter with mushroom or roquefort sauce, sautéed vegetables and mashed potatoes' },

      { ar: 'دجاج كاري (مدراس)', en: 'Chicken Curry (Madras)', price: 450,
        descAr: 'يقدم مع الخضروات وصلصة الكاري على طريقة مدراس تقدم مع الأرز الأبيض',
        descEn: 'Served with vegetables and curry sauce, Madras style — with white rice' },

      { ar: 'توب كابي', en: 'Top Kapi', price: 500,
        descAr: 'نصف دجاجة محشية أرز وخضروات وفواكه مجففة وجبنة موتزاريلا تقدم مع بطاطس محمرة وأعشاب صوص بني',
        descEn: 'Half chicken stuffed with rice, vegetables, mozzarella and dried fruit — served with roasted potatoes and herbs brown sauce' },

      { ar: 'كوردن بلو', en: 'Corden Blue', price: 500,
        descAr: 'صدور دجاج محشوة بلحم بقري مدخن وجبنة موتزاريلا تقدم مع البطاطس المقلية والخضروات',
        descEn: 'Chicken breasts stuffed with smoked beef, smoked turkey and mozzarella — served with French fries and vegetables' },

      { ar: 'دجاج مشوي متبّل', en: 'Marinated Grilled Chicken', price: 450,
        descAr: 'نصف دجاجة مخلية متبلة بالأعشاب تقدم مع خضار مشوي وأرز أحمر',
        descEn: 'Marinated half boneless chicken with herbs, served with grilled vegetables and red rice' },

      { ar: 'شيش طاووق', en: 'Shish Tawook', price: 450,
        descAr: 'مكعبات دجاج مشوي مع خضار مشوية وبطاطس مقلية وصوص باربيكيو',
        descEn: 'Chicken cubes with grilled vegetables, French fries and BBQ sauce' },

      { ar: 'طاجن خضار', en: 'Vegetable Tajein', price: 250,
        descAr: 'مكعبات لحم بقري في صلصة الطماطم مع الخضار تقدم مع أرز أبيض',
        descEn: 'Cubes of beef in tomato sauce with vegetables, served with white rice' },

      { ar: 'طاجن ألو جوبي (كشميري هندي)', en: 'Aloo Gobhi (Kashmiri Indian) Tajin', price: 250,
        descAr: 'قرنبيط، بطاطس بالزنجبيل، طماطم بالمكسرات تقدم مع الأرز الأبيض',
        descEn: 'Cauliflower, ginger, potato, tomato and nuts — served with white rice' },

      { ar: 'كباب وكفتة مصرية', en: 'Egyptian Kebab and Kofta', price: 650,
        descAr: 'يقدم مع أرز شرقي',
        descEn: 'Served with oriental rice' },
    ]
  },

  {
    id: 'desserts', ar: 'الحلويات', en: 'Desserts',
    items: [
      { ar: 'مولتن شوكولاتة كيك', en: 'Molten Chocolate Cake', price: 140,
        descAr: 'مولتن كيك تقدم مع آيس كريم وشوكولاتة ساخنة ومكسرات',
        descEn: 'Molten cake served with ice cream, hot chocolate and nuts' },

      { ar: 'سلطة فواكه', en: 'Fruit Salad', price: 120,
        descAr: 'مزيج من الفاكهة الموسمية يقدم مع آيس كريم الفانيليا',
        descEn: 'Mix of seasonal fruits served with vanilla ice cream' },

      { ar: 'آيس كريم', en: 'Ice Cream', price: 80,
        descAr: 'اختيارك من الآيس كريم اللذيذ المفضل مغطى بصوص الشوكولاتة الساخن بالكريمة المخفوقة والمكسرات',
        descEn: 'Your choice of ice cream, topped with hot chocolate sauce, whipped cream and nuts' },

      { ar: 'طبق فواكه طازجة موسمية', en: 'Seasonal Fresh Fruit Platter', price: 90,
        descAr: 'تقدم مع صوص فراولة',
        descEn: 'Served with strawberry sauce' },

      { ar: 'كيك الشوكولاتة', en: 'Chocolate Cake', price: 120,
        descAr: 'تقدم مع اختيارك من صوص الفانيليا أو صوص الشوكولاتة',
        descEn: 'Served with your choice of vanilla sauce or chocolate sauce' },

      { ar: 'أم علي', en: 'Om Ali', price: 120,
        descAr: 'حلويات شرقية تقدم دافئة مباشرة من الفرن',
        descEn: 'Oriental sweet served warm directly from the oven' },

      { ar: 'بونجو بونجو', en: 'Bongo Bongo', price: 120,
        descAr: 'بروفيترول محشو بآيس كريم الفانيليا ومغطى بصوص الشيكولاتة الساخنة',
        descEn: 'Profiteroles filled with vanilla ice cream, topped with hot chocolate sauce' },

      { ar: 'كيك موس الشيكولاتة', en: 'Chocolate Mousse Cake', price: 150,
        descAr: 'كيك موس الشيكولاتة الداكنة والبيضاء',
        descEn: 'Dark and white chocolate mousse cake' },

      { ar: 'جاتوه فرنسي', en: 'French Pastries', price: 50,
        descAr: 'معجنات فرنسية طازجة',
        descEn: 'Freshly baked French pastries' },
    ]
  },

];
