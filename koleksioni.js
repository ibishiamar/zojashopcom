// ==========================================
// 1. TË DHËNAT E PRODUKTEVE
// ==========================================
const products = [
    {
        id: 1,
        name: { sq: "Triko Pink me Butona", en: "Pink Button Cardigan", sr: "Roze Džemper sa Dugmadima" },
        category: "triko",
        price: 2000,
        image: "/assets/img/1.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Eleganca në çdo detaj.", en: "A soft, elegant knit for cosy layering on colder days. Elegance in every detail.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Elegancija u svakom detalju." },
        badge: "I RI",
        sizes: ["S", "M", "L"],
        colors: ["E Pink"]
    },
    {
        id: 2,
        name: { sq: "Triko e Kaltër me Supe të Hapura", en: "Blue Off-Shoulder Sweater", sr: "Plavi Džemper Otvorenih Ramena" },
        category: "triko",
        price: 1800,
        image: "/assets/img/2.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: "BESTSELLER",
        sizes: ["M", "L"],
        colors: ["E Kaltër"]
    },
    {
        id: 3,
        name: { sq: "Fustan i Bardhë i Thurur me Rrip", en: "White Knit Dress with Belt", sr: "Bela Pletena Haljina sa Pojasom" },
        category: "fustane",
        price: 1800,
        image: "/assets/img/3.jpg",
        description: { sq: "Fustan i thurur me rrip, për një pamje të rafinuar dhe femërore. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A knit dress with a belt for a refined, feminine look. October is here, time for layered elegance 🍂", sr: "Pletena haljina sa pojasom za otmen i ženstven izgled. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["S", "M", "L", "XL"],
        colors: ["E Bardhë"]
    },
    {
        id: 4,
        name: { sq: "Pallto e Gjatë e Zezë", en: "Long Black Coat", sr: "Dugi Crni Kaput" },
        category: "pallto",
        price: 2000,
        image: "/assets/img/4.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Eleganca në çdo detaj.", en: "A beautifully cut coat that completes any autumn outfit. Elegance in every detail.", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Elegancija u svakom detalju." },
        badge: "I RI",
        sizes: ["S", "M", "L"],
        colors: ["E Zezë"]
    },
    {
        id: 5,
        name: { sq: "Triko Kafe me Jakë", en: "Brown Polo-Collar Sweater", sr: "Braon Džemper sa Kragnom" },
        category: "triko",
        price: 1800,
        image: "/assets/img/5.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["XS", "S", "M"],
        colors: ["E Kafe"]
    },
    {
        id: 6,
        name: { sq: "Këmishë e Bardhë me Shall", en: "White Shirt with Scarf", sr: "Bela Košulja sa Šalom" },
        category: "kemisha",
        price: 1800,
        image: "/assets/img/6.jpg",
        description: { sq: "Këmishë elegante për çdo rast, nga zyra deri te mbrëmja. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "An elegant shirt for any occasion, from the office to the evening. October is here, time for layered elegance 🍂", sr: "Elegantna košulja za svaku priliku, od kancelarije do večernjeg izlaska. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: "BESTSELLER",
        sizes: ["S", "M", "L"],
        colors: ["E Bardhë"]
    },
    {
        id: 7,
        name: { sq: "Këmishë e Bardhë me Kravatë", en: "White Shirt with Tie Detail", sr: "Bela Košulja sa Kravatom" },
        category: "kemisha",
        price: 1800,
        image: "/assets/img/7.jpg",
        description: { sq: "Këmishë elegante për çdo rast, nga zyra deri te mbrëmja. Eleganca në çdo detaj.", en: "An elegant shirt for any occasion, from the office to the evening. Elegance in every detail.", sr: "Elegantna košulja za svaku priliku, od kancelarije do večernjeg izlaska. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["S", "M", "L"],
        colors: ["E Bardhë"]
    },
    {
        id: 8,
        name: { sq: "Triko Krem me Butona të Artë", en: "Cream Cardigan with Gold Buttons", sr: "Krem Džemper sa Zlatnim Dugmadima" },
        category: "triko",
        price: 2400,
        image: "/assets/img/8.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Krem"]
    },
    {
        id: 9,
        name: { sq: "Triko Krem e Gjerë", en: "Cream Oversized Sweater", sr: "Krem Široki Džemper" },
        category: "triko",
        price: 2000,
        image: "/assets/img/9.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A soft, elegant knit for cosy layering on colder days. October is here, time for layered elegance 🍂", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Krem"]
    },
    {
        id: 10,
        name: { sq: "Triko e Bardhë me Kontur të Zi", en: "White Cardigan with Black Trim", sr: "Beli Džemper sa Crnim Ivicama" },
        category: "triko",
        price: 1800,
        image: "/assets/img/10.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Eleganca në çdo detaj.", en: "A soft, elegant knit for cosy layering on colder days. Elegance in every detail.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Bardhë"]
    },
    {
        id: 11,
        name: { sq: "Komplet Bezhë me Zinxhir", en: "Beige Zip Set", sr: "Bež Komplet sa Rajsferšlusom" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/11.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Zbuloni çastin tuaj ZOJA.", en: "A two-piece set that brings comfort and style together. Discover your ZOJA moment.", sr: "Komplet iz dva dela koji spaja udobnost i stil. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Bezhë"]
    },
    {
        id: 12,
        name: { sq: "Komplet Kafe", en: "Brown Set", sr: "Braon Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/12.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A two-piece set that brings comfort and style together. October is here, time for layered elegance 🍂", sr: "Komplet iz dva dela koji spaja udobnost i stil. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Kafe"]
    },
    {
        id: 13,
        name: { sq: "Pallto Gri me Rrip", en: "Grey Belted Coat", sr: "Sivi Kaput sa Pojasom" },
        category: "pallto",
        price: 3600,
        image: "/assets/img/13.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Eleganca në çdo detaj.", en: "A beautifully cut coat that completes any autumn outfit. Elegance in every detail.", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Gri"]
    },
    {
        id: 14,
        name: { sq: "Pallto Blu e Errët me Rrip", en: "Navy Belted Coat", sr: "Teget Kaput sa Pojasom" },
        category: "pallto",
        price: 3600,
        image: "/assets/img/14.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Zbuloni çastin tuaj ZOJA.", en: "A beautifully cut coat that completes any autumn outfit. Discover your ZOJA moment.", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Blu e Errët"]
    },
    {
        id: 15,
        name: { sq: "Pallto e Zezë me Rrip", en: "Black Belted Coat", sr: "Crni Kaput sa Pojasom" },
        category: "pallto",
        price: 3600,
        image: "/assets/img/15.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A beautifully cut coat that completes any autumn outfit. October is here, time for layered elegance 🍂", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Zezë"]
    },
    {
        id: 16,
        name: { sq: "Pallto Bordo", en: "Burgundy Coat", sr: "Bordo Kaput" },
        category: "pallto",
        price: 3600,
        image: "/assets/img/16.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Eleganca në çdo detaj.", en: "A beautifully cut coat that completes any autumn outfit. Elegance in every detail.", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Bordo"]
    },
    {
        id: 17,
        name: { sq: "Pallto e Gjelbër", en: "Green Coat", sr: "Zeleni Kaput" },
        category: "pallto",
        price: 3600,
        image: "/assets/img/17.jpg",
        description: { sq: "Pallto e prerë bukur, e përsosur për ta plotësuar çdo veshje vjeshtore. Zbuloni çastin tuaj ZOJA.", en: "A beautifully cut coat that completes any autumn outfit. Discover your ZOJA moment.", sr: "Lepo krojen kaput koji upotpunjuje svaku jesenju kombinaciju. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Gjelbër"]
    },
    {
        id: 18,
        name: { sq: "Komplet Gri me Model", en: "Grey Patterned Set", sr: "Sivi Mustrirani Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/18.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A two-piece set that brings comfort and style together. October is here, time for layered elegance 🍂", sr: "Komplet iz dva dela koji spaja udobnost i stil. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Gri"]
    },
    {
        id: 19,
        name: { sq: "Triko me Model Leopardi", en: "Leopard Print Cardigan", sr: "Leopard Džemper" },
        category: "triko",
        price: 1000,
        image: "/assets/img/19.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Eleganca në çdo detaj.", en: "A soft, elegant knit for cosy layering on colder days. Elegance in every detail.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Zezë / E Bardhë"]
    },
    {
        id: 20,
        name: { sq: "Triko e Gjelbër me Butona", en: "Green Button Cardigan", sr: "Zeleni Džemper sa Dugmadima" },
        category: "triko",
        price: 1000,
        image: "/assets/img/20.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Gjelbër"]
    },
    {
        id: 21,
        name: { sq: "Triko e Shkurtër e Bardhë", en: "White Cropped Cardigan", sr: "Beli Kratki Džemper" },
        category: "triko",
        price: 1000,
        image: "/assets/img/21.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A soft, elegant knit for cosy layering on colder days. October is here, time for layered elegance 🍂", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Bardhë"]
    },
    {
        id: 22,
        name: { sq: "Triko me Vija të Bardha e të Zeza", en: "Striped Knit Cardigan", sr: "Prugasti Pleteni Džemper" },
        category: "triko",
        price: 1000,
        image: "/assets/img/22.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Eleganca në çdo detaj.", en: "A soft, elegant knit for cosy layering on colder days. Elegance in every detail.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Zezë / E Bardhë"]
    },
    {
        id: 23,
        name: { sq: "Komplet Kadife Kafe", en: "Brown Velvet Set", sr: "Braon Somot Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/23.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Zbuloni çastin tuaj ZOJA.", en: "A two-piece set that brings comfort and style together. Discover your ZOJA moment.", sr: "Komplet iz dva dela koji spaja udobnost i stil. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Kafe"]
    },
    {
        id: 24,
        name: { sq: "Komplet Sinapi me Vija", en: "Mustard Set with Side Stripes", sr: "Senf Komplet sa Prugama sa Strane" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/24.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A two-piece set that brings comfort and style together. October is here, time for layered elegance 🍂", sr: "Komplet iz dva dela koji spaja udobnost i stil. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Sinapi"]
    },
    {
        id: 25,
        name: { sq: "Komplet Kafe me Model", en: "Brown Patterned Set", sr: "Braon Mustrirani Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/25.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Eleganca në çdo detaj.", en: "A two-piece set that brings comfort and style together. Elegance in every detail.", sr: "Komplet iz dva dela koji spaja udobnost i stil. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Kafe"]
    },
    {
        id: 26,
        name: { sq: "Triko e Zezë me Mëngë të Bardha", en: "Black Cardigan with White Sleeves", sr: "Crni Džemper sa Belim Rukavima" },
        category: "triko",
        price: 1000,
        image: "/assets/img/26.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Zezë / E Bardhë"]
    },
    {
        id: 27,
        name: { sq: "Komplet Bezhë i Butë", en: "Soft Beige Set", sr: "Mekani Bež Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/27.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A two-piece set that brings comfort and style together. October is here, time for layered elegance 🍂", sr: "Komplet iz dva dela koji spaja udobnost i stil. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Bezhë"]
    },
    {
        id: 28,
        name: { sq: "Triko Kafe me Butona", en: "Brown Button Cardigan", sr: "Braon Džemper sa Dugmadima" },
        category: "triko",
        price: 1000,
        image: "/assets/img/28.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Eleganca në çdo detaj.", en: "A soft, elegant knit for cosy layering on colder days. Elegance in every detail.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Kafe"]
    },
    {
        id: 29,
        name: { sq: "Triko e Bardhë me Jakë të Zezë", en: "White Cardigan with Black Collar", sr: "Beli Džemper sa Crnim Kragnom" },
        category: "triko",
        price: 1000,
        image: "/assets/img/29.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["E Bardhë"]
    },
    {
        id: 30,
        name: { sq: "Komplet Gri i Errët me Model", en: "Dark Grey Patterned Set", sr: "Tamnosivi Mustrirani Komplet" },
        category: "komplete",
        price: 3000,
        image: "/assets/img/30.jpg",
        description: { sq: "Komplet me dy pjesë, rehati dhe stil në një kombinim të vetëm. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A two-piece set that brings comfort and style together. October is here, time for layered elegance 🍂", sr: "Komplet iz dva dela koji spaja udobnost i stil. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Gri e Errët"]
    },
    {
        id: 31,
        name: { sq: "Bluzë Bordo me Lidhje", en: "Burgundy Wrap Blouse", sr: "Bordo Bluza sa Vezivanjem" },
        category: "bluza",
        price: 1000,
        image: "/assets/img/31.jpg",
        description: { sq: "Bluzë elegante me prerje të përkryer, për çdo rast. Eleganca në çdo detaj.", en: "An elegant blouse with a flattering cut, for any occasion. Elegance in every detail.", sr: "Elegantna bluza savršenog kroja za svaku priliku. Elegancija u svakom detalju." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Bordo"]
    },
    {
        id: 32,
        name: { sq: "Triko Fuksia me Jakë të Lartë", en: "Fuchsia Turtleneck Sweater", sr: "Fuksija Džemper sa Rol Kragnom" },
        category: "triko",
        price: 1500,
        image: "/assets/img/32.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Zbuloni çastin tuaj ZOJA.", en: "A soft, elegant knit for cosy layering on colder days. Discover your ZOJA moment.", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Otkrijte svoj ZOJA trenutak." },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Fuksia"]
    },
    {
        id: 33,
        name: { sq: "Triko Bezhë e Ngushtë", en: "Beige Fitted Knit Top", sr: "Bež Pletena Bluza" },
        category: "triko",
        price: 1200,
        image: "/assets/img/33.jpg",
        description: { sq: "Triko e butë dhe elegante për shtresa të rehatshme gjatë ditëve të ftohta. Tetori ka ardhur, koha për elegancë me shtresa 🍂", en: "A soft, elegant knit for cosy layering on colder days. October is here, time for layered elegance 🍂", sr: "Mekan i elegantan pleteni komad za udobno slojevito oblačenje tokom hladnijih dana. Oktobar je stigao, vreme za slojevitu eleganciju 🍂" },
        badge: null,
        sizes: ["M", "L", "XL"],
        colors: ["Bezhë"]
    }
];

// ==========================================
// 2. FJALORI I PËRKTHIMEVE
// ==========================================
const translations = {
    sq: {
        nav_home: "Home", nav_features: "Koleksioni",
        hero_tag: "NEW SEASON COLLECTION", hero_title: "Zbulo stilin tënd",
        hero_desc: "Elegancë në çdo detaj. Zgjidh pjesët që e bëjnë stilin tënd unik.",
        hero_btn: "Eksploro koleksionin",
        search_placeholder: "Kërko produkt...",
        sort_newest: "Më të rejat", sort_price_asc: "Çmimi: Nga më i ulëti", sort_price_desc: "Çmimi: Nga më i larti", sort_name_az: "Emri: A–Z",
        results_count: "Shfaqen {count} produkte",
        no_results: "Nuk u gjet asnjë produkt që përputhet me kërkimin tuaj.",
        cat_all: "Të Gjitha", cat_bluza: "Bluza", cat_kemisha: "Këmisha", cat_fustane: "Fustane", cat_xhaketa: "Xhaketa", cat_kostume: "Kostume", cat_triko: "Triko", cat_pallto: "Pallto", cat_komplete: "Komplete",
        btn_order: "Porosit në Instagram",
        modal_sizes: "Madhësitë e disponueshme:", modal_colors: "Ngjyrat:",
        msg_order: "Përshëndetje Zoja Shop! Jam i/e interesuar për produktin: {name}, me çmim {price}. Ju lutem, më jepni më shumë informacione."
    },
    en: {
        nav_home: "Home", nav_features: "Collection",
        hero_tag: "NEW SEASON COLLECTION", hero_title: "Discover your style",
        hero_desc: "Elegance in every detail. Choose the pieces that make your style unique.",
        hero_btn: "Explore collection",
        search_placeholder: "Search product...",
        sort_newest: "Newest", sort_price_asc: "Price: Low to High", sort_price_desc: "Price: High to Low", sort_name_az: "Name: A–Z",
        results_count: "Showing {count} products",
        no_results: "No products found matching your search.",
        cat_all: "All", cat_bluza: "Blouses", cat_kemisha: "Shirts", cat_fustane: "Dresses", cat_xhaketa: "Jackets", cat_kostume: "Suits", cat_triko: "Knitwear", cat_pallto: "Coats", cat_komplete: "Sets",
        btn_order: "Order on Instagram",
        modal_sizes: "Available sizes:", modal_colors: "Colors:",
        msg_order: "Hello Zoja Shop! I am interested in the product: {name}, price {price}. Please give me more information."
    },
    sr: {
        nav_home: "Početna", nav_features: "Kolekcija",
        hero_tag: "NEW SEASON COLLECTION", hero_title: "Otkrij svoj stil",
        hero_desc: "Elegance in every detail. Choose the pieces that make your style unique.",
        hero_btn: "Istraži kolekciju",
        search_placeholder: "Pretraži proizvod...",
        sort_newest: "Najnovije", sort_price_asc: "Cena: Od najniže", sort_price_desc: "Cena: Od najviše", sort_name_az: "Ime: A–Z",
        results_count: "Prikazano {count} proizvoda",
        no_results: "Nije pronađen nijedan proizvod koji odgovara vašoj pretrazi.",
        cat_all: "Sve", cat_bluza: "Bluze", cat_kemisha: "Košulje", cat_fustane: "Haljine", cat_xhaketa: "Jakne", cat_kostume: "Kostimi", cat_triko: "Džemperi", cat_pallto: "Kaputi", cat_komplete: "Kompleti",
        btn_order: "Naruči na Instagramu",
        modal_sizes: "Dostupne veličine:", modal_colors: "Boje:",
        msg_order: "Zdravo Zoja Shop! Zainteresovan/a sam za proizvod: {name}, cena {price}. Molim vas za više informacija."
    }
};

// ==========================================
// 3. VARIABLAT GLOBALE
// ==========================================
let currentLang = localStorage.getItem('zojaLang') || 'sq';
let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'newest';

const productsContainer = document.getElementById('products-container');
const categoryFilters = document.getElementById('category-filters');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const resultsCount = document.getElementById('results-count');
const noResults = document.getElementById('no-results');
const instagramProfileUrl = "https://www.instagram.com/zojashopcom/";

// Modal Elements
const modal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalDesc = document.getElementById('modal-desc');
const modalBadge = document.getElementById('modal-badge');
const modalSizesContainer = document.getElementById('modal-sizes-container');
const modalSizes = document.getElementById('modal-sizes');
const modalColorsContainer = document.getElementById('modal-colors-container');
const modalColors = document.getElementById('modal-colors');
const modalOrderBtn = document.getElementById('modal-order-btn');

// ==========================================
// 4. MENAXHIMI I TEMËS DHE GJUHËS
// ==========================================
const themeBtn = document.getElementById('theme-toggle');
const langSelector = document.getElementById('language-selector');
const body = document.body;

// Aplikimi i temës së ruajtur
if (localStorage.getItem('zojaTheme') === 'light') {
    body.classList.add('light-mode');
    if(themeBtn) themeBtn.innerText = '☀️';
}

if(themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            themeBtn.innerText = '☀️'; 
            localStorage.setItem('zojaTheme', 'light');
        } else {
            themeBtn.innerText = '🌙'; 
            localStorage.setItem('zojaTheme', 'dark');
        }
    });
}

// Menaxhimi i Gjuhës
if(langSelector) {
    langSelector.value = currentLang;
    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('zojaLang', currentLang);
        translatePage();
        renderCategories();
        renderProducts();
    });
}

function translatePage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    if(searchInput) searchInput.placeholder = translations[currentLang].search_placeholder;
    if(sortSelect) {
        sortSelect.options[0].text = translations[currentLang].sort_newest;
        sortSelect.options[1].text = translations[currentLang].sort_price_asc;
        sortSelect.options[2].text = translations[currentLang].sort_price_desc;
        sortSelect.options[3].text = translations[currentLang].sort_name_az;
    }
    updateResultsCount();
}

// ==========================================
// 5. RENDERIMI I KATEGORIVE
// ==========================================
const categories = ['all', 'triko', 'pallto', 'komplete', 'kemisha', 'bluza', 'fustane'];

function renderCategories() {
    if(!categoryFilters) return;
    categoryFilters.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${currentCategory === cat ? 'active' : ''}`;
        btn.textContent = translations[currentLang][`cat_${cat}`] || cat;
        btn.onclick = () => {
            currentCategory = cat;
            renderCategories();
            renderProducts();
        };
        categoryFilters.appendChild(btn);
    });
}

// ==========================================
// 6. FILTRIMI DHE RENDITJA
// ==========================================
function getFilteredAndSortedProducts() {
    let filtered = products.filter(p => {
        const matchCategory = currentCategory === 'all' || p.category === currentCategory;
        const nameInLang = p.name[currentLang] ? p.name[currentLang].toLowerCase() : p.name['sq'].toLowerCase();
        const matchSearch = nameInLang.includes(currentSearch.toLowerCase());
        return matchCategory && matchSearch;
    });

    filtered.sort((a, b) => {
        const nameA = a.name[currentLang] ? a.name[currentLang].toLowerCase() : a.name['sq'].toLowerCase();
        const nameB = b.name[currentLang] ? b.name[currentLang].toLowerCase() : b.name['sq'].toLowerCase();
        
        switch(currentSort) {
            case 'price-asc': return a.price - b.price;
            case 'price-desc': return b.price - a.price;
            case 'name-az': return nameA.localeCompare(nameB);
            case 'newest': default: return b.id - a.id;
        }
    });
    return filtered;
}

// ==========================================
// 7. RENDERIMI I PRODUKTEVE
// ==========================================
function renderProducts() {
    if (!productsContainer) return;
    const filteredProducts = getFilteredAndSortedProducts();
    productsContainer.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filteredProducts.forEach(product => {
            const productName = product.name[currentLang] || product.name['sq'];
            const formattedPrice = new Intl.NumberFormat('sr-RS').format(product.price) + ' RSD';
            
            const card = document.createElement('div');
            card.className = 'product-card';
            
            const badgeHtml = product.badge ? `<span class="badge">${product.badge}</span>` : '';
            
            card.innerHTML = `
                <div class="product-image-container">
                    ${badgeHtml}
                    <img src="${product.image}" alt="${productName}" class="product-image" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500?text=Image+Not+Found'">
                    <div class="product-overlay">
                        <a href="${instagramProfileUrl}" target="_blank" class="btn-order-insta" onclick="event.stopPropagation()">
                            <i class="fab fa-instagram"></i> ${translations[currentLang].btn_order}
                        </a>
                    </div>
                </div>
                <div class="product-info">
                    <h3>${productName}</h3>
                    <p class="price">${formattedPrice}</p>
                </div>
            `;
            card.onclick = () => openModal(product);
            productsContainer.appendChild(card);
        });
    }
    updateResultsCount(filteredProducts.length);
}

function updateResultsCount(count = null) {
    if(!resultsCount) return;
    const num = count !== null ? count : getFilteredAndSortedProducts().length;
    resultsCount.textContent = translations[currentLang].results_count.replace('{count}', num);
}

// ==========================================
// 8. MODALI I PRODUKTIT
// ==========================================
function openModal(product) {
    const productName = product.name[currentLang] || product.name['sq'];
    const formattedPrice = new Intl.NumberFormat('sr-RS').format(product.price) + ' RSD';
    
    modalImg.src = product.image;
    modalImg.alt = productName;
    modalTitle.textContent = productName;
    modalPrice.textContent = formattedPrice;
    modalDesc.textContent = product.description ? (product.description[currentLang] || product.description['sq']) : '';
    
    if (product.badge) {
        modalBadge.textContent = product.badge;
        modalBadge.classList.remove('hidden');
    } else {
        modalBadge.classList.add('hidden');
    }

    if (product.sizes && product.sizes.length > 0) {
        modalSizesContainer.classList.remove('hidden');
        modalSizes.innerHTML = '';
        product.sizes.forEach(size => {
            const span = document.createElement('span');
            span.className = 'option-btn';
            span.textContent = size;
            modalSizes.appendChild(span);
        });
    } else {
        modalSizesContainer.classList.add('hidden');
    }

    if (product.colors && product.colors.length > 0) {
        modalColorsContainer.classList.remove('hidden');
        modalColors.innerHTML = '';
        product.colors.forEach(color => {
            const span = document.createElement('span');
            span.className = 'option-btn';
            span.textContent = color;
            modalColors.appendChild(span);
        });
    } else {
        modalColorsContainer.classList.add('hidden');
    }

    let msg = translations[currentLang].msg_order
        .replace('{name}', productName)
        .replace('{price}', formattedPrice);
    
    modalOrderBtn.href = instagramProfileUrl;
    modalOrderBtn.onclick = () => {
        navigator.clipboard.writeText(msg).then(() => {
            alert(currentLang === 'sq' ? "Mesazhi u kopjua! Ngjiteni në Instagram për të porositur." : 
                  currentLang === 'en' ? "Message copied! Paste it on Instagram to order." : 
                  "Poruka je kopirana! Nalepite je na Instagramu da biste naručili.");
        }).catch(err => console.error('Copy failed: ', err));
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalFunc() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

if(closeModal) closeModal.onclick = closeModalFunc;
if(modal) {
    modal.onclick = (e) => {
        if (e.target === modal) closeModalFunc();
    };
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModalFunc();
    }
});

// ==========================================
// 9. EVENT LISTENERS
// ==========================================
if(searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderProducts();
    });
}

if(sortSelect) {
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
}

// ==========================================
// 10. NISJA
// ==========================================
translatePage();
renderCategories();
renderProducts();