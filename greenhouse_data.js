/* بيانات منيو Green House — تم إنشاؤه بواسطة صفحة التعديل */

const MENU_SECTIONS = [
  {
    id: "appetizers", ar: "المشهيات", en: "Appetizers",
    items: [
      { ar: "سبرينج رول صيني", en: "Chinese Spring Roll", price: 170,
        descAr: "عجينة سبرينج محشوة بالمشروم والكرنب مع الخضروات — تقدم مع صلصة الصويا والحلو والحامض",
        descEn: "Spring dough stuffed with mushroom, cabbage and vegetables — served with soya sauce & sweet and sour sauce" },

      { ar: "سمك وبطاطس", en: "Fish & Chips", price: 300,
        descAr: "شرائح السمك المقلية مع البطاطس المقلية وصوص الترتار",
        descEn: "Fried fish served with crispy French fries accompanied with tartar sauce" },

      { ar: "سلطة يونانية", en: "Typical Greek Salad", price: 130,
        descAr: "خضروات طازجة مع جبنة الفيتا والأوريجانو مزيّنة بالزيتون الأسود",
        descEn: "Fresh vegetables with feta cheese and oregano, garnished with black olives" },

      { ar: "سلطة موسمية مشكّلة", en: "Seasonal Mixed Salad", price: 70,
        descAr: "الخضروات الطازجة تقدم مع الصوص الإيطالي",
        descEn: "Fresh vegetables served with Italian sauce" },

      { ar: "كوكتيل جمبري", en: "Cocktail di Gamberetti", price: 500,
        descAr: "جمبري مسلوق يقدم على وسادة من الخس مع صوص الكوكتيل",
        descEn: "Boiled shrimp served on a pillow of lettuce with cocktail sauce" },

      { ar: "سلطة قيصر", en: "Caesar Salad", price: 300,
        descAr: "سلطة القيصر الشهيرة تقدم مع خبز التوست والجبن البارميزان واختيارك من صدور الدجاج والأنشوجة",
        descEn: "Iceberg salad with herbed croutons, parmesan cheese, Caesar sauce — served with grilled chicken breast and anchovies" },

      { ar: "تشكيلة مزة شرقية باردة", en: "Variety of Cold Oriental Mezzah", price: 90,
        descAr: "اختيارك من: طحينة · بابا غنوج · حمص · زبادي · سلطة بلدي",
        descEn: "Your choice from: Tehina · Baba Ghanoush · Hummus · Yogurt · Baladi Salad" },
    ]
  },

  {
    id: "soups", ar: "الحساء", en: "Soups",
    items: [
      { ar: "شوربة أورزو", en: "Orzo Soup", price: 40,
        descAr: "شوربة لسان عصفور مع الكرفس",
        descEn: "broth with celery and orzo pasta" },

      { ar: "شوربة كريمة الطماطم", en: "Tomato Cream Soup", price: 65,
        descAr: "شوربة الطماطم بالأعشاب تقدم مع خبز الكريتون المحمص",
        descEn: "Served with herb crispy croutons" },

      { ar: "شوربة البصل الفرنسية", en: "French Onion Soup", price: 55,
        descAr: "شوربة البصل الفرنسية تقدم مع شريحة من التوست المحمص والجبن الشيدر",
        descEn: "Served with sliced French bread covered with melted cheese" },

      { ar: "شوربة العدس المصرية", en: "Egyptian Lentil Soup", price: 45,
        descAr: "شوربة العدس المصرية مع التوست المحمص",
        descEn: "Served with toast bread" },

      { ar: "شوربة المأكولات البحرية", en: "Seafood Soup", price: 180,
        descAr: "شوربة المأكولات البحرية بالكريمة",
        descEn: "Assorted seafood with fresh cream" },

      { ar: "شوربة كريمة الدجاج والمشروم", en: "Chicken Mushroom Cream Soup", price: 120,
        descAr: "مكعبات صدور الدجاج مع الماشروم والكريمة الطازجة",
        descEn: "Chicken breast cubes with mushroom and fresh cream" },
    ]
  },

  {
    id: "sandwiches", ar: "السندوتشات", en: "Sandwiches",
    items: [
      { ar: "ساندوتش تونة", en: "Tuna Sandwich", price: 200,
        descAr: "ساندوتش تونة يقدم على الخبز الفرنسي",
        descEn: "Tuna salad served on French baguette" },

      { ar: "كلوب ساندوتش", en: "Club Sandwich", price: 350,
        descAr: "طبقات من التوست محشو بالبيض و الروزبيف و الجبنة والدجاج على شرائح الخس و الطماطم ويقدم مع صوص المايونيز",
        descEn: "Slices white Toast bread with rose beef, Chicken and Eggs Cheese with Lettuce and mayonnaise served with French fries" },

      { ar: "برجر كلاسيك", en: "Classic Burger Sandwich", price: 330,
        descAr: "برجر مشوي يقدم مع المايونيز الكريمي وحلقات البصل والخس والطماطم مع صوص الجبنة الشيدر والبطاطس المقرمشة",
        descEn: "Grilled burger with creamy mayonnaise, onion rings, lettuce and cheddar cheese sauce" },

      { ar: "أباتشي برجر", en: "Apache Burger", price: 350,
        descAr: "برجر مشوي مع أصابع الموتزاريلا المقلية والمايونيز وصوص الجبنة الشيدر وصوص تكساس والطماطم والبصل والخس والبطاطس المقرمشة",
        descEn: "Grilled burger with fried mozzarella sticks, creamy mayonnaise, cheddar, Texas sauce, tomatoes, onions, lettuce and crunchy potatoes" },

      { ar: "شيش دجاج باربيكيو", en: "BBQ Chicken Shish", price: 250,
        descAr: "الدجاج المشوي يقدم في الخبز الباجت مع الخضار وصوص الباربيكيو وصوص الشيدر والبطاطس المقرمشة",
        descEn: "Chicken shish in baguette bread with vegetables, barbeque sauce, cheddar sauce and crunchy potatoes" },

      { ar: "دجاج سوبر كرانشي", en: "Super Crunchy Chicken", price: 220,
        descAr: "صدور الدجاج الكرسبي مع أصابع الموتزاريلا المقلية وحلقات البصل المقلية والخيار المخلل وصوص الجبنة الشيدر تقدم في عيش البرجر والبطاطس المقرمشة",
        descEn: "Crispy chicken breasts with fried mozzarella sticks, fried onion rings, pickled cucumber and cheddar cheese sauce in baguette bread" },

      { ar: "دجاج جوردون بلو", en: "Chicken Gordon Blue", price: 220,
        descAr: "صدور الدجاج محشوة بالجبن مع صوص البيف والجبنة الشيدر والبطاطس المقرمشة",
        descEn: "Chicken breasts stuffed with cheddar cheese, served with beef and cheddar sauces and French fries" },

      { ar: "كفتة ريستا الخاصة", en: "Resta Special Kofta", price: 300,
        descAr: "كفتة مشوية تقدم في الخبز الباجيت مع صوص الطحينة وصوص الباربيكيو والطماطم والبطاطس المقلية",
        descEn: "Grilled kofta on baguette with tehina sauce, barbecue sauce and tomatoes — served with French fries" },

      { ar: "جمبري مقلي", en: "Fried Shrimps", price: 390,
        descAr: "جمبري بانيه يقدم على الخبز الباجت مع صوص الطحينة وصوص الرانش والبطاطس المقرمشة",
        descEn: "Fried shrimp with tehina sauce, ranch sauce and French fries" },

      { ar: "حلقات كاليماري", en: "Calamari Rings", price: 350,
        descAr: "حلقات الكاليماري المقلية تقدم على الخبز الباجيت مع صوص الطحينة والخس وصوص الرانش والبطاطس المقرمشة",
        descEn: "Calamari rings on sesame baguette with tehina and ranch sauce, served with French fries" },

      { ar: "مكس حار", en: "Spicy Mix", price: 380,
        descAr: "الجمبري والسيبيا والسمك الفيلية المقلي بالكزبرة الخضراء وصوص الكاري الحار والبطاطس المقرمشة",
        descEn: "Shrimp, calamari and fried fish with curry sauce, green coriander and French fries" },

      { ar: "هوت دوج", en: "Hot Dog", price: 190,
        descAr: "يقدم على عيش الباجت بالمستردة والجبن الموتزاريلا المقلية وصوص الباربيكيو والبطاطس المقرمشة",
        descEn: "Served on baguette bread with mustard, fried mozzarella sticks, BBQ sauce and crispy fries" },
    ]
  },

  {
    id: "pasta", ar: "العجائن", en: "Pasta",
    items: [
      { ar: "باستا نابوليتانا", en: "Napoletana Pasta", price: 120,
        descAr: "مكرونة مع صوص الطماطم الفريش والريحان وزيت الزيتون",
        descEn: "Pasta with fresh tomato sauce, basil and olive oil" },

      { ar: "باستا راجو (بولونيز)", en: "Ragu Pasta (Bolognese)", price: 220,
        descAr: "إسباجيتي تقدم مع صوص اللحم المفروم الطازج",
        descEn: "Spaghetti pasta served with rich meat sauce" },

      { ar: "نيجريسكو", en: "Negressco", price: 280,
        descAr: "مكرونة مع صوص الكريمة والدجاج وجبنة الموزاريلا",
        descEn: "Penne pasta with cream sauce, chicken and mozzarella cheese" },

      { ar: "طاجن مكرونة بالفرن", en: "Oven Pasta Tajjin", price: 320,
        descAr: "طاجن المكرونة المطبوخة في الفرن مع صوص اللحم المفروم مغطاة بالجبن الموتزريلا",
        descEn: "Pasta with Alfredo sauce combined with Bolognese, covered with mozzarella and baked in the oven" },

      { ar: "باستا مأكولات بحرية", en: "Seafood Pasta", price: 400,
        descAr: "اختيارك من نوع المكرونة المفضلة مع الجمبري والكاليماري وصوص الكريمة أو صوص الروزاي",
        descEn: "Your choice of pasta with shrimp, calamari and cream or rosé sauce" },

      { ar: "فيتوتشيني", en: "Fettuccine", price: 300,
        descAr: "شرائح المكرونة مع الدجاج مع الصوص الأبيض والماشروم",
        descEn: "Fettuccine with chicken Alfredo sauce and mushroom" },
    ]
  },

  {
    id: "pizza", ar: "البيتزا", en: "Pizza",
    items: [
      { ar: "بيتزا مارجريتا", en: "Margretta", price: 230,
        descAr: "بيتزا مارجريتا بصوص الطماطم والموتزريلا",
        descEn: "Fresh tomato sauce with mozzarella cheese" },

      { ar: "بيتزا الدجاج", en: "Pizza di Pollo", price: 400,
        descAr: "الدجاج المتبل مع الطماطم المجففة والماشروم وجبن الموتزريلا",
        descEn: "Marinated chicken, sun-dried tomato, pesto sauce, mushroom and mozzarella cheese" },

      { ar: "بيتزا المأكولات البحرية", en: "Pizza ai Frutti di Mare", price: 500,
        descAr: "بيتزا المأكولات البحرية بصوص الطماطم والموتزريلا",
        descEn: "Assorted seafood with fresh tomato and mozzarella" },

      { ar: "بيتزا التونة", en: "Tonnata", price: 350,
        descAr: "بيتزا بالتونه مع الفلفل الأخضر والبصل وجبن الموتزريلا",
        descEn: "Tomato sauce, tuna, onion, green pepper, mozzarella cheese" },

      { ar: "بيتزا الجبن الأربعة", en: "Quattro Formaggi", price: 350,
        descAr: "بيتزا الجبن الأربعة",
        descEn: "Four cheese pizza" },

      { ar: "بيتزا أمريكانا", en: "Americana", price: 400,
        descAr: "جبنة موتزاريلا — سوسيس — شرائح اللحم المدخن",
        descEn: "Mozzarella cheese, sausage and smoked beef" },
    ]
  },

  {
    id: "mains", ar: "الأطباق الرئيسية", en: "Main Dishes",
    items: [
      { ar: "شريحة سمك مشوية بالعظم", en: "GRILLED Fish Steak with Bone ", price: 750,
        descAr: "ترانش سمك مشوي مع صوص الزبده و الليمون يقدم مع أرز أبيض ومكعبات الخضار",
        descEn: "Grilled fish Steak with lemon and butter sauce sauce Served with white Rice, diced vegetables" },

      { ar: "جمبري البحر الأحمر", en: "Red Sea Shrimps", price: 900,
        descAr: "جمبري البحر الأحمر المشوي جامبو يقدم مع الصوص وأرز أبيض وبطاطس محمرة",
        descEn: "Jumbo grilled red sea shrimps with double jus sauce, white rice and roasted potatoes" },

      { ar: "كاليماري مقلي", en: "Fried Calamari", price: 450,
        descAr: "كاليماري مقلي يقدم مع البطاطس المقلية وصوص الترتار",
        descEn: "Fried calamari served with French fries and tartar sauce" },

      { ar: "ستيك سلمون اسكتلندي", en: "Backed Scotch Salmon Steak", price: 1100,
        descAr: "ستيك سلمون متبل يقدم مع بطاطس مهروسة وخضروات مشوية وطماطم مجففة",
        descEn: "Marinated salmon steak served with mashed potatoes, grilled vegetables and sun-dried tomatoes" },

      { ar: "تشكيلة مأكولات بحرية", en: "Seafood Platter", price: 1000,
        descAr: "تشكيلة من فواكه البحر، جمبرى مشوي ، ترانش سمك مشوى ، سيبيا مقليه و الأرز الأبيض",
        descEn: "Assorted of grilled shrimps, Fish Steak, Fried Cuttlefish with white rice" },

      { ar: "طاجن مأكولات بحرية", en: "Seafood Tajian", price: 650,
        descAr: "جمبري، كاليماري، فيليه سمك مع صوص كريمة وجبنة موزاريلا تقدم مع أرز أبيض",
        descEn: "Shrimp, calamari, fish fillet, cream sauce and mozzarella cheese served with white rice" },

      { ar: "إسكالوب بتلو", en: "Veal Escalope", price: 800,
        descAr: "اسكالوب بتلو يقدم مع سباجيتي و بطاطس مقليه",
        descEn: "Bread veal escalope Served with spaghetti French Fries" },

      { ar: "مشويات مشكلة", en: "Mixed Grilled", price: 900,
        descAr: "كفتة مشوية ، إستيك مشوى ، شيش طاووق \n يقدم مع أرز شرقي ومكعبات خضروات مشوية",
        descEn: "Grilled kofta, grilled beef steak, shish tawook, served with oriental rice and grilled vegetable cubes" },

      { ar: "فيليه بقري", en: "BEEF Fillet", price: 850,
        descAr: "قطعه من اللحم بقري مع صلصة الفلفل أو الماشروم\nخضار سوتيه وبطاطس مع أعشاب",
        descEn: "beef filet with pepper or mushroom sauce\nSautéed vegetables and potatoes with herbs" },

      { ar: "بيف ستروجانوف", en: "Beef Stroganoff", price: 650,
        descAr: "شرائح لحم سوتيه مع صوص بني مع الفلفل الحلو، بصل طازج بالكريمة يقدم مع الأرز الأبيض",
        descEn: "Sautéed beef slices with brown sauce, bell pepper, onion and fresh cream — served with white rice" },

      { ar: "بتلو بيكاتا", en: "Veal Picatta", price: 900,
        descAr: "شرائح لحم بتلو مطبوخ بالزبدة مع صوص مشروم أو صوص روكفور تقدم مع خضار سوتيه وبطاطا مهروسة",
        descEn: "Sliced veal cooked in butter with mushroom or roquefort sauce, sautéed vegetables and mashed potatoes" },

      { ar: "دجاج كاري (مدراس)", en: "Chicken Curry (Madras)", price: 450,
        descAr: "يقدم مع الخضروات وصلصة الكاري على طريقة مدراس تقدم مع الأرز الأبيض",
        descEn: "Served with vegetables and curry sauce, Madras style — with white rice" },

      { ar: "كوردن بلو", en: "Corden Blue", price: 500,
        descAr: "صدور دجاج محشوة بلحم بقري مدخن وجبنة موتزاريلا تقدم مع البطاطس المقلية والخضروات",
        descEn: "Chicken breasts stuffed with smoked beef, smoked turkey and mozzarella — served with French fries and vegetables" },

      { ar: "دجاج مشوي متبّل", en: "Marinated Grilled Chicken", price: 450,
        descAr: "نصف دجاجة مخلية متبلة بالأعشاب تقدم مع خضار مشوي وأرز أحمر",
        descEn: "Marinated half boneless chicken with herbs, served with grilled vegetables and red rice" },

      { ar: "شيش طاووق", en: "Shish Tawook", price: 450,
        descAr: "مكعبات دجاج مشوي مع خضار مشوية وبطاطس مقلية وصوص باربيكيو",
        descEn: "Chicken cubes with grilled vegetables, French fries and BBQ sauce" },

      { ar: "طاجن خضار", en: "Vegetable Tajein", price: 500,
        descAr: "مكعبات لحم بقري في صلصة الطماطم مع الخضار تقدم مع أرز أبيض",
        descEn: "Cubes of beef in tomato sauce with vegetables served with white rice" },

      { ar: "كباب وكفتة مصرية", en: "Egyptian Kebab and Kofta", price: 800,
        descAr: "كباب و كفته مشوى على الفحم يقدم مع أرز شرقي",
        descEn: "Served with oriental rice" },
    ]
  },

  {
    id: "desserts", ar: "الحلويات", en: "Desserts",
    items: [
      { ar: "مولتن شوكولاتة كيك", en: "Molten Chocolate Cake", price: 140,
        descAr: "مولتن كيك تقدم مع آيس كريم وشوكولاتة ساخنة ومكسرات",
        descEn: "Molten cake served with ice cream, hot chocolate and nuts" },

      { ar: "سلطة فواكه", en: "Fruit Salad", price: 140,
        descAr: "مزيج من الفاكهة الموسمية يقدم مع آيس كريم الفانيليا",
        descEn: "Mix of seasonal fruits served with vanilla ice cream" },

      { ar: "آيس كريم", en: "Ice Cream", price: 90,
        descAr: "اختيارك من الآيس كريم اللذيذ المفضل مغطى بصوص الشوكولاتة الساخن بالكريمة المخفوقة والمكسرات",
        descEn: "Your choice of ice cream, topped with hot chocolate sauce, whipped cream and nuts" },

      { ar: "طبق فواكه طازجة موسمية", en: "Seasonal Fresh Fruit Platter", price: 150,
        descAr: "تقدم مع صوص فراولة",
        descEn: "Served with strawberry sauce" },

      { ar: "كيك الشوكولاتة", en: "Chocolate Cake", price: 150,
        descAr: "تقدم مع اختيارك من صوص الفانيليا أو صوص الشوكولاتة",
        descEn: "Served with your choice of vanilla sauce or chocolate sauce" },

      { ar: "أم علي", en: "Om Ali", price: 150,
        descAr: "حلويات شرقية تقدم دافئة مباشرة من الفرن",
        descEn: "Oriental sweet served warm directly from the oven" },

      { ar: "بونجو بونجو", en: "Bongo Bongo", price: 140,
        descAr: "بروفيترول محشو بآيس كريم الفانيليا ومغطى بصوص الشيكولاتة الساخنة",
        descEn: "Profiteroles filled with vanilla ice cream, topped with hot chocolate sauce" },

      { ar: "كيك موس الشيكولاتة", en: "Chocolate Mousse Cake", price: 180,
        descAr: "كيك موس الشيكولاتة الداكنة والبيضاء",
        descEn: "Dark and white chocolate mousse cake" },

      { ar: "جاتوه فرنسي", en: "French Pastries", price: 70,
        descAr: "جاتوه فرنسى",
        descEn: "Freshly French pastries" },
    ]
  },
];
