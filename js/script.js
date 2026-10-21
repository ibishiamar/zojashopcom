// ==========================================
// 1. TË DHËNAT E PRODUKTEVE (Me përkthime)
// ==========================================
const products = [
    {
        id: 1,
        name: { sq: "Bluzë e Zezë Elegante", en: "Elegant Black Blouse", sr: "Elegantna Crna Bluza" },
        price: 1000,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80"
    },
    {
        id: 2,
        name: { sq: "Bluzë e Kuqe me Detaje", en: "Red Blouse with Details", sr: "Crvena Bluza sa Detaljima" },
        price: 1000,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80"
    },
    {
        id: 3,
        name: { sq: "Kostum Zyrtar i Zi", en: "Black Formal Suit", sr: "Crni Poslovni Kostim" },
        price: 1000,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80"
    },
    {
        id: 4,
        name: { sq: "Këmishë e Bardhë me Jakë", en: "White Collared Shirt", sr: "Bela Košulja sa Kragnom" },
        price: 1000,
        image: "https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?w=500&q=80"
    }
];

// ==========================================
// 2. FJALORI I PËRKTHIMEVE (Për Të Dyja Faqet)
// ==========================================
const translations = {
    sq: {
        // Navbar
        nav_home: "Home", nav_about: "Rreth Nesh", nav_features: "Koleksioni", nav_cart: "Shporta 🛒",
        // Welcome Page
        slogan: '"For every woman, for every moment."',
        hero_desc: "Zbuloni koleksionin tonë më të ri të veshjeve. Dizajne elegante dhe cilësi e lartë, të krijuara posaçërisht për çdo grua dhe për çdo moment të ditës suaj.",
        hero_btn: "Shiko Koleksionin ✨",
        about_title: "Rreth Nesh",
        about_desc1: "Mirësevini në ZOJA. Ne besojmë se moda nuk është thjesht veshje, por një mënyrë për t'u shprehur. Çdo artikull në butikun tonë është zgjedhur me kujdes për t'u siguruar që ju të ndiheni të sigurta, elegante dhe unike.",
        about_desc2: "Ne vazhdojmë të sjellim trendet më të fundit direkt në duart tuaja.",
        about_btn: "Na Ndiqni në Instagram",
        features_title: "Pse ZOJA?",
        feat1_title: "Cilësi Premium", feat1_desc: "Materiale të zgjedhura me kujdes për rehati maksimale.",
        feat2_title: "Dërgesa të Shpejta", feat2_desc: "Porositë tuaja arrijnë tek ju në kohën më të shkurtër.",
        feat3_title: "Dizajn Unik", feat3_desc: "Modele që nuk i gjeni kudo, për të dalluar stilin tuaj.",
        footer_loc: "Lokacioni", footer_rights: "© 2024 ZOJA. Të gjitha të drejtat e rezervuara.",
        // Shop Page
        collection_title: "Koleksioni i Ri ✨", collection_subtitle: "Zgjidhni stilin tuaj të preferuar.",
        btn_add: "Shto në Shportë", cart_title: "Shporta Juaj", cart_total: "Totali:",
        cart_checkout: "Përfundo Porosinë", cart_empty: "Shporta është bosh.",
        toast_added: "Produkti u shtua në shportë!", alert_order: "Faleminderit për porosinë! Do të kontaktoheni së shpejti."
    },
    en: {
        nav_home: "Home", nav_about: "About Us", nav_features: "Collection", nav_cart: "Cart 🛒",
        slogan: '"For every woman, for every moment."',
        hero_desc: "Discover our newest clothing collection. Elegant designs and high quality, specially created for every woman and every moment of your day.",
        hero_btn: "View Collection ✨",
        about_title: "About Us",
        about_desc1: "Welcome to ZOJA. We believe fashion is not just clothing, but a way of expression. Every item in our boutique is carefully selected to ensure you feel confident, elegant, and unique.",
        about_desc2: "We continue to bring the latest trends directly to your hands.",
        about_btn: "Follow us on Instagram",
        features_title: "Why ZOJA?",
        feat1_title: "Premium Quality", feat1_desc: "Carefully selected materials for maximum comfort.",
        feat2_title: "Fast Delivery", feat2_desc: "Your orders reach you in the shortest time possible.",
        feat3_title: "Unique Design", feat3_desc: "Styles you won't find everywhere, to stand out.",
        footer_loc: "Location", footer_rights: "© 2024 ZOJA. All rights reserved.",
        collection_title: "New Collection ✨", collection_subtitle: "Choose your favorite style.",
        btn_add: "Add to Cart", cart_title: "Your Cart", cart_total: "Total:",
        cart_checkout: "Checkout", cart_empty: "Your cart is empty.",
        toast_added: "Product added to cart!", alert_order: "Thank you for your order! We will contact you soon."
    },
    sr: {
        nav_home: "Početna", nav_about: "O nama", nav_features: "Kolekcija", nav_cart: "Korpa 🛒",
        slogan: '"Za svaku ženu, za svaki trenutak."',
        hero_desc: "Otkrijte našu najnoviju kolekciju odeće. Elegantni dizajni i visok kvalitet, stvoreni posebno za svaku ženu i svaki trenutak vašeg dana.",
        hero_btn: "Pogledaj Kolekciju ✨",
        about_title: "O nama",
        about_desc1: "Dobrodošli u ZOJA. Verujemo da moda nije samo odeća, već način izražavanja. Svaki predmet u našem butiku pažljivo je odabran kako bi se pobrinuli da se osećate samouvereno, elegantno i jedinstveno.",
        about_desc2: "Nastavljamo da donosimo najnovije trendove direktno u vaše ruke.",
        about_btn: "Zaprati nas na Instagramu",
        features_title: "Zašto ZOJA?",
        feat1_title: "Vrhunski Kvalitet", feat1_desc: "Pažljivo odabrani materijali za maksimalnu udobnost.",
        feat2_title: "Brza Dostava", feat2_desc: "Vaše porudžbine stižu do vas u najkraćem mogućem roku.",
        feat3_title: "Jedinstven Dizajn", feat3_desc: "Modeli koje nećete naći svuda, da se istaknete.",
        footer_loc: "Lokacija", footer_rights: "© 2024 ZOJA. Sva prava zadržana.",
        collection_title: "Nova Kolekcija ✨", collection_subtitle: "Izaberite svoj omiljeni stil.",
        btn_add: "Dodaj u Korpu", cart_title: "Vaša Korpa", cart_total: "Ukupno:",
        cart_checkout: "Završi Kupovinu", cart_empty: "Korpa je prazna.",
        toast_added: "Proizvod je dodat u korpu!", alert_order: "Hvala na porudžbini! Kontaktiraćemo vas uskoro."
    }
};

// Variabla Globale
let currentLang = localStorage.getItem('zojaLang') || 'sq';
let cart = JSON.parse(localStorage.getItem('zojaCart')) || [];

// ==========================================
// 3. MENAXHIMI I TEMËS DHE GJUHËS
// ==========================================
const themeBtn = document.getElementById('theme-toggle');
const langSelector = document.getElementById('language-selector');
const body = document.body;

// Tema
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

// Gjuha
if(langSelector) {
    langSelector.value = currentLang;
    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('zojaLang', currentLang);
        translatePage();
        if (document.getElementById('products-container')) {
            renderProducts(); // Vetëm nëse jemi në faqen e produkteve
        }
        updateCartUI();
    });
}

function translatePage() {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

// ==========================================
// 4. FUNKSIONET E PRODUKTEVE DHE SHOPPING CART
// ==========================================
const productsContainer = document.getElementById('products-container');
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const totalPrice = document.getElementById('total-price');
const toast = document.getElementById('toast');

// Shfaqja e produkteve (Vetëm nëse kontejneri ekziston)
function renderProducts() {
    if (!productsContainer) return; // Ndalon nëse jemi në welcome.html

    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productName = product.name[currentLang] || product.name['sq'];
        const html = `
            <div class="product-card">
                <img src="${product.image}" alt="${productName}" class="product-image">
                <div class="product-info">
                    <h3>${productName}</h3>
                    <p class="price">${product.price} Din</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        ${translations[currentLang].btn_add}
                    </button>
                </div>
            </div>
        `;
        productsContainer.innerHTML += html;
    });
}

// Shtimi në shportë
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    showToast();
    
    if(cartBtn) {
        cartBtn.style.transform = "scale(1.2)";
        setTimeout(() => cartBtn.style.transform = "scale(1)", 200);
    }
}

// Përditësimi i shportës
function updateCartUI() {
    if (!cartCount) return; // Ndalon nëse jemi në welcome.html

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;

    if(cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding: 20px;">${translations[currentLang].cart_empty}</p>`;
        } else {
            cart.forEach(item => {
                total += item.price * item.quantity;
                const itemName = item.name[currentLang] || item.name['sq'];
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <img src="${item.image}" class="cart-item-img">
                            <div>
                                <h4>${itemName}</h4>
                                <p>${item.quantity} x ${item.price} Din</p>
                            </div>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                    </div>
                `;
            });
        }
        if(totalPrice) totalPrice.innerText = total;
    }
}

// ==========================================
// 1. PËRKTHIME SHTESË (për seksionet e reja)
// ==========================================
Object.assign(translations.sq, {
    nav_contact: "Kontakti",
    picks_title: "Të Zgjedhurat e Sezonit", picks_sub: "Pjesët më të dashura nga koleksioni i vjeshtës.",
    picks_btn: "Shiko të gjitha", picks_view: "Shiko",
    quote_text: "Për gratë që e dinë se stili nuk është vetëm ajo që veshin, por mënyra si ndihen.", quote_sub: "Zbuloni çastin tuaj ZOJA.",
    steps_title: "Si të Porosisni",
    step1_title: "Zgjidhni Modelin", step1_desc: "Shfletoni koleksionin dhe zgjidhni pjesën që ju pëlqen.",
    step2_title: "Na Shkruani në Instagram", step2_desc: "Klikoni \"Porosit në Instagram\", mesazhi kopjohet vetë, ju vetëm e ngjitni.",
    step3_title: "Pranoni Porosinë", step3_desc: "Konfirmojmë detajet dhe ju dërgojmë porosinë.",
    cta_title: "Ndiqni ZOJA në Instagram", cta_desc: "Modele të reja, ide stili dhe ofertat e sezonit, gjithçka në një vend.",
    contact_title: "Kontakti", contact_desc: "Na vizitoni në butikun tonë ose na shkruani në Instagram. Do të jemi të lumtur t'ju shërbejmë.",
    contact_address: "Adresa", contact_btn: "Merr Drejtimet",
    footer_rights: "© 2026 ZOJA. Të gjitha të drejtat e rezervuara."
});
Object.assign(translations.en, {
    nav_contact: "Contact",
    picks_title: "Season's Picks", picks_sub: "Our favourite pieces from the autumn collection.",
    picks_btn: "View all", picks_view: "View",
    quote_text: "For women who know that style isn't just what you wear, but how you feel.", quote_sub: "Discover your ZOJA moment.",
    steps_title: "How to Order",
    step1_title: "Choose Your Piece", step1_desc: "Browse the collection and pick the piece you love.",
    step2_title: "Message Us on Instagram", step2_desc: "Click \"Order on Instagram\", the message is copied for you, just paste it.",
    step3_title: "Receive Your Order", step3_desc: "We confirm the details and send your order to you.",
    cta_title: "Follow ZOJA on Instagram", cta_desc: "New styles, outfit ideas and seasonal offers, all in one place.",
    contact_title: "Contact", contact_desc: "Visit our boutique or message us on Instagram. We'd be happy to help.",
    contact_address: "Address", contact_btn: "Get Directions",
    footer_rights: "© 2026 ZOJA. All rights reserved."
});
Object.assign(translations.sr, {
    nav_contact: "Kontakt",
    picks_title: "Izbor Sezone", picks_sub: "Omiljeni komadi iz jesenje kolekcije.",
    picks_btn: "Pogledaj sve", picks_view: "Pogledaj",
    quote_text: "Za žene koje znaju da stil nije samo ono što nose, već način na koji se osećaju.", quote_sub: "Otkrijte svoj ZOJA trenutak.",
    steps_title: "Kako Naručiti",
    step1_title: "Izaberite Model", step1_desc: "Pregledajte kolekciju i izaberite komad koji vam se sviđa.",
    step2_title: "Pišite Nam na Instagramu", step2_desc: "Kliknite \"Naruči na Instagramu\", poruka se kopira sama, vi je samo nalepite.",
    step3_title: "Primite Porudžbinu", step3_desc: "Potvrđujemo detalje i šaljemo vam porudžbinu.",
    cta_title: "Zapratite ZOJA na Instagramu", cta_desc: "Novi modeli, ideje za stil i sezonske ponude na jednom mestu.",
    contact_title: "Kontakt", contact_desc: "Posetite naš butik ili nam pišite na Instagramu. Rado ćemo vam pomoći.",
    contact_address: "Adresa", contact_btn: "Prikaži putanju",
    footer_rights: "© 2026 ZOJA. Sva prava zadržana."
});
translatePage();

// ==========================================
// 2. EFEKTE
// ==========================================
document.documentElement.classList.add('js');

// Shfaqja gjatë scroll-it
const revealEls = document.querySelectorAll('.section-title, .section-sub, .about-image, .about-text, .feature-card, .pick, .quote-section blockquote, .step, .cta-box, .contact-info, .map-frame');
revealEls.forEach(el => {
    el.classList.add('reveal');
    const siblings = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('reveal')) : [];
    el.style.setProperty('--d', (Math.max(siblings.indexOf(el), 0) * 0.12) + 's');
});
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
        // pas animacionit hiqen klasat që të punojë hover-i normal
        setTimeout(() => e.target.classList.remove('reveal', 'in'), 1300);
    });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Shiriti i scroll-it dhe navbari
const progress = document.querySelector('.scroll-progress');
const navbar = document.querySelector('.navbar');
function onScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Heqja nga shporta
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
    localStorage.setItem('zojaCart', JSON.stringify(cart));
}

// Njoftimi (Toast)
function showToast() {
    if (!toast) return;
    toast.innerText = translations[currentLang].toast_added;
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 2500);
}

// ==========================================
// 5. NGJARJET (Events)
// ==========================================
if (cartBtn && cartModal) {
    cartBtn.addEventListener('click', () => cartModal.style.display = 'block');
    closeCart.addEventListener('click', () => cartModal.style.display = 'none');
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) cartModal.style.display = 'none';
    });
}

const checkoutBtn = document.getElementById('checkout-btn');
if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert(translations[currentLang].cart_empty);
        } else {
            alert(translations[currentLang].alert_order);
            cart = [];
            updateCartUI();
            localStorage.setItem('zojaCart', JSON.stringify(cart));
            cartModal.style.display = 'none';
        }
    });
}

// Ruajtja e shportës
setInterval(() => {
    localStorage.setItem('zojaCart', JSON.stringify(cart));
}, 1000);

// ==========================================
// 6. NISJA E APLIKACIONIT
// ==========================================
// Kontrollon nëse elementët ekzistojnë përpara se t'i ekzekutojë
translatePage();
renderProducts();
updateCartUI();