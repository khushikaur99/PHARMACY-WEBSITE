// ayurveda.js - Properly isolated for ayurvedic products page
(function() {
    'use strict';
    // ================ PRIVATE VARIABLES ================
    const products = [
        // Digestive Care
        { id: 580, name: 'Triphala Churna', price: 85, originalPrice: 100, discount: '15% off', category: 'Digestive Care', brand: 'Patanjali', image: 'https://i.pinimg.com/736x/bf/23/03/bf23030898ad9e5e353f73adf5effbfa.jpg', prescriptionRequired: false },
        { id: 581, name: 'Ajwain Tablets', price: 520, originalPrice: null, discount: '', category: 'Digestive Care', brand: 'Himalaya', image: 'https://i.pinimg.com/7352x/d7/39/56/d739567af1096379ff95a64e55867898.jpg', prescriptionRequired: false },
        { id: 582, name: 'Digestive Tea Blend', price: 95, originalPrice: null, discount: '', category: 'Digestive Care', brand: 'Dabur', image: 'https://i.pinimg.com/1200x/65/be/2e/65be2e76552427f52f25919eefbd3316.jpg', prescriptionRequired: false },
        { id: 583, name: 'Isabgol Psyllium Husk', price: 50, originalPrice: null, discount: '', category: 'Digestive Care', brand: 'Patanjali', image: 'https://i.pinimg.com/736x/bd/de/5a/bdde5a3a79cb03ee5b9a7c6d67f59522.jpg', prescriptionRequired: false },
        { id: 584, name: 'Hingvashtak Churna', price: 40, originalPrice: null, discount: '', category: 'Digestive Care', brand: 'Baidyanath', image: 'https://i.pinimg.com/736x/88/e2/09/88e209255cf9792cde50c6c064875510.jpg', prescriptionRequired: false },
        { id: 585, name: 'Amla Murabba', price: 120, originalPrice: 150, discount: '20% off', category: 'Digestive Care', brand: 'Dabur', image: 'https://i.pinimg.com/736x/c5/88/0c/c5880c61c3ced166bf68ad1ad070ba8d.jpg', prescriptionRequired: false },

        // Liver & Kidney Care
        { id: 586, name: 'Liv.52 Tablets', price: 120, originalPrice: 150, discount: '20% off', category: 'Liver & Kidney Care', brand: 'Himalaya', image: 'https://i.pinimg.com/1200x/12/41/a1/1241a1dce9aa4bb0bd936a88498faee7.jpg', prescriptionRequired: false },
        { id: 587, name: 'Punarnava Capsules', price: 100, originalPrice: null, discount: '', category: 'Liver & Kidney Care', brand: 'Baidyanath', image: 'https://i.pinimg.com/736x/d0/9b/a9/d09ba98736754930dd700dd08d9f0ab6.jpg', prescriptionRequired: false },
        { id: 588, name: 'Kutki Powder', price: 150, originalPrice: 180, discount: '17% off', category: 'Liver & Kidney Care', brand: 'Patanjali', image: 'https://i.pinimg.com/736x/ff/be/5e/ffbe5ebb5e5abf04a5e10e09e03951df.jpg', prescriptionRequired: false },
        { id: 589, name: 'Gokshura Tablets', price: 90, originalPrice: null, discount: '', category: 'Liver & Kidney Care', brand: 'Himalaya', image: 'https://i.pinimg.com/736x/23/71/09/237109e52cd3f4aa5550eb390d37fcb4.jpg', prescriptionRequired: false },
        { id: 590, name: 'Liver Detox Syrup', price: 250, originalPrice: 300, discount: '17% off', category: 'Liver & Kidney Care', brand: 'Dabur', image: 'https://i.pinimg.com/736x/cc/61/ac/cc61ac874d79ca418e525b3efda083b6.jpg', prescriptionRequired: true },
        { id: 591, name: 'Nephro Care Tablets', price: 110, originalPrice: null, discount: '', category: 'Liver & Kidney Care', brand: 'Baidyanath', image: 'https://i.pinimg.com/736x/42/09/21/4209215a24624d1b8fa3a3bf9943f1d0.jpg', prescriptionRequired: false },

        // Stress & Sleep Support
        { id: 592, name: 'Ashwagandha Capsules', price: 50, originalPrice: null, discount: '', category: 'Stress & Sleep Support', brand: 'Himalaya', image: 'https://i.pinimg.com/736x/51/c5/de/51c5ded9cc27a4b03a34e7dced02876d.jpg', prescriptionRequired: false },
        { id: 593, name: 'Brahmi Ghrita', price: 70, originalPrice: 80, discount: '12% off', category: 'Stress & Sleep Support', brand: 'Baidyanath', image: 'https://i.pinimg.com/1200x/54/30/39/543039ba4fb61ad43b3119fe1db920c0.jpg', prescriptionRequired: false },
        { id: 594, name: 'Jatamansi Powder', price: 120, originalPrice: null, discount: '', category: 'Stress & Sleep Support', brand: 'Patanjali', image: 'https://i.pinimg.com/1200x/f7/cc/9f/f7cc9fdc4e318d6060c0f7da5aecdbe5.jpg', prescriptionRequired: false },
        { id: 595, name: 'Saraswatarishta', price: 100, originalPrice: 120, discount: '17% off', category: 'Stress & Sleep Support', brand: 'Dabur', image: 'https://i.pinimg.com/736x/bb/29/ba/bb29ba313677ad0a22cfb50a61121912.jpg', prescriptionRequired: false },
        { id: 596, name: 'Stress Relief Tea', price: 95, originalPrice: null, discount: '', category: 'Stress & Sleep Support', brand: 'Himalaya', image: 'https://via.placeholder.com/150/antiseptic-spray.jpg', prescriptionRequired: false },
        { id: 597, name: 'Melatonin Sleep Aid', price: 130, originalPrice: 150, discount: '13% off', category: 'Stress & Sleep Support', brand: 'Baidyanath', image: 'https://via.placeholder.com/150/chlorhexidine.jpg', prescriptionRequired: false },

        // Skin & Hair Remedies
        { id: 598, name: 'Neem Face Wash', price: 500, originalPrice: 600, discount: '17% off', category: 'Skin & Hair Remedies', brand: 'Patanjali', image: 'https://via.placeholder.com/150/basic-kit.jpg', prescriptionRequired: false },
        { id: 599, name: 'Bhringraj Hair Oil', price: 300, originalPrice: null, discount: '', category: 'Skin & Hair Remedies', brand: 'Himalaya', image: 'https://via.placeholder.com/150/travel-kit.jpg', prescriptionRequired: false },
        { id: 600, name: 'Turmeric Face Pack', price: 800, originalPrice: 1000, discount: '20% off', category: 'Skin & Hair Remedies', brand: 'Dabur', image: 'https://via.placeholder.com/150/home-kit.jpg', prescriptionRequired: false },
        { id: 601, name: 'Aritha Shampoo', price: 400, originalPrice: null, discount: '', category: 'Skin & Hair Remedies', brand: 'Baidyanath', image: 'https://via.placeholder.com/150/car-kit.jpg', prescriptionRequired: false },
        { id: 602, name: 'Aloe Vera Gel', price: 600, originalPrice: 700, discount: '14% off', category: 'Skin & Hair Remedies', brand: 'Patanjali', image: 'https://via.placeholder.com/150/sports-kit.jpg', prescriptionRequired: false },
        { id: 603, name: 'Rose Water Toner', price: 1200, originalPrice: null, discount: '', category: 'Skin & Hair Remedies', brand: 'Himalaya', image: 'https://via.placeholder.com/150/advanced-kit.jpg', prescriptionRequired: false },

        // RX
        { id: 604, name: 'Swarna Bhasma', price: 1500, originalPrice: null, discount: '', category: 'Skin & Hair Remedies', brand: 'Baidyanath', image: 'https://via.placeholder.com/150/epipen.jpg', prescriptionRequired: true },
        { id: 605, name: 'Makaradhwaj Gutika', price: 300, originalPrice: null, discount: '', category: 'Skin & Hair Remedies', brand: 'Patanjali', image: 'https://via.placeholder.com/150/nitro.jpg', prescriptionRequired: true }
    ];

    const priceRanges = [
        { label: 'Under ₹4000', min: 0, max: 4000 },
        { label: '₹2075 - ₹4150', min: 2075, max: 4150 },
        { label: '₹4150 - ₹8300', min: 4150, max: 8300 },
        { label: 'Over ₹8300', min: 8301, max: Infinity }
    ];
    // Filter state (private to this module)
    let activeCategory = null;
    let activePriceRange = null;
    let selectedBrands = [];
    let activeSort = 'relevance';
    // DOM Elements (scoped to ayurveda page)
    let productGrid, sortSelect, resetFiltersBtn;
    // ================ PRIVATE FUNCTIONS ================
    function escapeHtml(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function createProductCard(p) {
        const div = document.createElement('div');
        div.className = 'product-card bg-white p-4 rounded-xl shadow hover:shadow-xl transition-all border border-primary/20 cursor-pointer';
        div.innerHTML = `
            <img src="${p.image}" alt="${escapeHtml(p.name)}" class="product-image w-full h-40 rounded-lg mb-3 object-contain">
            <p class="font-semibold text-gray-800 text-sm line-clamp-2">${escapeHtml(p.name)}</p>
            <p class="text-xs text-gray-500 mt-1">${escapeHtml(p.brand)}</p>
            <div class="mt-2 flex items-center gap-2">
                <span class="price-tag text-lg font-bold text-green-600">₹${p.price.toFixed(2)}</span>
                ${p.originalPrice ? `<span class="text-sm text-gray-500 line-through">₹${p.originalPrice}</span>` : ''}
                ${p.discount ? `<span class="discount-tag text-xs px-2 py-1 rounded-full">${p.discount}</span>` : ''}
            </div>
            <button class="mt-3 w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg font-medium" onclick="window.openProductDetails(${p.id})">
                View Details
            </button>
        `;
        return div;
    }
    function displayProducts(list) {
        if (!productGrid) return;
       
        productGrid.innerHTML = list.length === 0
            ? `<div class="col-span-full text-center py-12">
                <i class="fas fa-search text-4xl text-gray-400 mb-4"></i>
                <h3 class="text-xl font-medium text-gray-700">No products found</h3>
            </div>`
            : '';
        list.forEach(p => productGrid.appendChild(createProductCard(p)));
    }
    function renderCategoryItem(cat) {
        const li = document.createElement('li');
        li.innerHTML = `<div class="flex items-center gap-3 cursor-pointer group category-item" data-category="${cat}">
            <div class="bullet"></div>
            <span class="text-gray-700 group-hover:text-primary font-medium">${cat}</span>
        </div>`;
        return li;
    }
    function renderPriceItem(r) {
        const li = document.createElement('li');
        li.innerHTML = `<div class="flex items-center gap-3 cursor-pointer group price-range-item" data-min="${r.min}" data-max="${r.max}">
            <div class="bullet"></div>
            <span class="text-gray-700 group-hover:text-primary font-medium">${r.label}</span>
        </div>`;
        return li;
    }
    function renderBrandItem(b) {
        const li = document.createElement('li');
        li.innerHTML = `<label class="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" value="${b}" class="brand-checkbox hidden">
            <div class="bullet"></div>
            <span class="text-gray-700 group-hover:text-primary">${b}</span>
        </label>`;
        return li;
    }
    function initializeFilters() {
        const uniqueCategories = ['All Products', ...new Set(products.map(p => p.category))];
        const uniqueBrands = [...new Set(products.map(p => p.brand))];
        // Desktop elements
        const catDesktop = document.getElementById('categoryListDesktop');
        const priceDesktop = document.getElementById('priceRangeListDesktop');
        const brandDesktop = document.getElementById('brandListDesktop');
       
        // Mobile elements
        const catMobile = document.getElementById('categoryList');
        const priceMobile = document.getElementById('priceRangeList');
        const brandMobile = document.getElementById('brandList');
        // Clear existing
        [catDesktop, catMobile, priceDesktop, priceMobile, brandDesktop, brandMobile].forEach(el => {
            if (el) el.innerHTML = '';
        });
        // Populate categories
        uniqueCategories.forEach(cat => {
            if (catDesktop) catDesktop.appendChild(renderCategoryItem(cat));
            if (catMobile) catMobile.appendChild(renderCategoryItem(cat));
        });
        // Populate price ranges
        priceRanges.forEach(r => {
            if (priceDesktop) priceDesktop.appendChild(renderPriceItem(r));
            if (priceMobile) priceMobile.appendChild(renderPriceItem(r));
        });
        // Populate brands
        uniqueBrands.forEach(b => {
            if (brandDesktop) brandDesktop.appendChild(renderBrandItem(b));
            if (brandMobile) brandMobile.appendChild(renderBrandItem(b));
        });
    }
    function updateCategoryUI() {
        document.querySelectorAll('.category-item .bullet').forEach(b => {
            b.classList.toggle('selected', b.parentElement.dataset.category === activeCategory);
        });
    }
    function updatePriceRangeUI() {
        document.querySelectorAll('.price-range-item .bullet').forEach(b => {
            const p = b.parentElement;
            const min = +p.dataset.min;
            const max = p.dataset.max === 'Infinity' ? Infinity : +p.dataset.max;
            b.classList.toggle('selected', activePriceRange?.min === min && activePriceRange?.max === max);
        });
    }
    function applyFilters() {
        let list = [...products];
       
        // Category filter
        if (activeCategory && activeCategory !== 'All Products') {
            list = list.filter(p => p.category === activeCategory);
        }
       
        // Price filter
        if (activePriceRange) {
            list = list.filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max);
        }
       
        // Brand filter
        if (selectedBrands.length) {
            list = list.filter(p => selectedBrands.includes(p.brand));
        }
       
        // Sorting
        if (activeSort === 'price-low') list.sort((a, b) => a.price - b.price);
        if (activeSort === 'price-high') list.sort((a, b) => b.price - a.price);
       
        displayProducts(list);
    }
    function setupEventListeners() {
        // Category click handlers
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', () => {
                const cat = item.dataset.category;
                activeCategory = activeCategory === cat ? null : cat;
                updateCategoryUI();
                applyFilters();
                if (window.innerWidth < 768) closeMobileDropdown('category');
            });
        });
        // Price range click handlers
        document.querySelectorAll('.price-range-item').forEach(item => {
            item.addEventListener('click', () => {
                const min = +item.dataset.min;
                const max = item.dataset.max === 'Infinity' ? Infinity : +item.dataset.max;
                const range = { min, max };
                activePriceRange = JSON.stringify(activePriceRange) === JSON.stringify(range) ? null : range;
                updatePriceRangeUI();
                applyFilters();
                if (window.innerWidth < 768) closeMobileDropdown('price');
            });
        });
        // Brand checkbox handlers
        document.querySelectorAll('.brand-checkbox').forEach(cb => {
            cb.addEventListener('change', () => {
                selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked')).map(c => c.value);
                applyFilters();
            });
        });
        // Sort select handler
        if (sortSelect) {
            sortSelect.addEventListener('change', () => {
                activeSort = sortSelect.value;
                applyFilters();
            });
        }
        // Reset filters handler
        if (resetFiltersBtn) {
            resetFiltersBtn.addEventListener('click', resetAllFilters);
        }
    }
    function resetAllFilters() {
        activeCategory = null;
        activePriceRange = null;
        selectedBrands = [];
        activeSort = 'relevance';
       
        if (sortSelect) sortSelect.value = 'relevance';
        document.querySelectorAll('.brand-checkbox').forEach(cb => cb.checked = false);
       
        updateCategoryUI();
        updatePriceRangeUI();
        applyFilters();
        // Show success message
        if (typeof Toastify !== 'undefined') {
            Toastify({
                text: "Filters reset successfully!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#10b981",
                stopOnFocus: true,
            }).showToast();
        }
    }
    function initializeMobileDropdowns() {
        document.querySelectorAll('.dropdown-header').forEach(header => {
            header.addEventListener('click', function () {
                const content = this.parentElement.querySelector('.dropdown-content');
                const icon = this.querySelector('i');
                content.classList.toggle('open');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
                // Close other dropdowns
                document.querySelectorAll('.dropdown-header').forEach(other => {
                    if (other !== this) {
                        const oc = other.parentElement.querySelector('.dropdown-content');
                        const oi = other.querySelector('i');
                        oc.classList.remove('open');
                        oi.classList.remove('fa-chevron-up');
                        oi.classList.add('fa-chevron-down');
                    }
                });
            });
        });
    }
    function closeMobileDropdown(type) {
        const dd = document.querySelector(`.filter-dropdown[data-type="${type}"]`);
        if (dd) {
            const content = dd.querySelector('.dropdown-content');
            const icon = dd.querySelector('.dropdown-header i');
            if (content) content.classList.remove('open');
            if (icon) {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        }
    }
    function toggleBrandList() {
        const list = document.getElementById('brandListDesktop');
        const toggle = document.getElementById('brandToggle');
        if (list && toggle) {
            list.classList.toggle('hidden');
            toggle.textContent = list.classList.contains('hidden') ? '+' : '−';
        }
    }
    // ================ INITIALIZATION ================
    function initializeAyurvedaPage() {
        console.log('Initializing ayurvedic products page...');
       
        // Get DOM elements specific to ayurveda page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');
        // Check if we're on the ayurveda page
        if (!productGrid) {
            console.log('Not on ayurvedic products page, skipping initialization');
            return;
        }
        // Initialize everything
        initializeFilters();
        initializeMobileDropdowns();
        setupEventListeners();
        applyFilters(); // Show all products initially
        updateCategoryUI();
        updatePriceRangeUI();
        // Scroll to top button visibility
        window.addEventListener('scroll', () => {
            const goTopBtn = document.querySelector('.go-top-btn');
            if (goTopBtn) {
                goTopBtn.classList.toggle('visible', window.scrollY > 300);
            }
        });
        console.log('Ayurvedic products page initialized successfully');
    }
    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };
    window.toggleBrandList = toggleBrandList;
    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on an ayurveda products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeAyurvedaPage);
        } else {
            // DOM already loaded
            setTimeout(initializeAyurvedaPage, 100);
        }
    }
})(); // End of IIFE