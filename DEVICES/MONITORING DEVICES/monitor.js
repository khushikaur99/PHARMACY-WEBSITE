// monitors.js - Properly isolated for health monitors products page
(function() {
    'use strict';

    // ================ PRIVATE VARIABLES ================
    const products = [
        // Blood Pressure Monitors
        { id: 390, name: 'Digital BP Monitor', price: 250, originalPrice: 300, discount: '17% off', category: 'Blood Pressure Monitors', brand: 'BrandX', image: 'https://i.pinimg.com/736x/9e/bb/22/9ebb22e0113a1f9be493e71f5595d2ed.jpg' },
        { id: 391, name: 'Wrist BP Monitor', price: 60, originalPrice: null, discount: '', category: 'Blood Pressure Monitors', brand: 'BrandZ', image: 'https://via.placeholder.com/150/wrist-bp.jpg' },
        { id: 392, name: 'Upper Arm BP Monitor', price: 95, originalPrice: null, discount: '', category: 'Blood Pressure Monitors', brand: 'BrandW', image: 'https://via.placeholder.com/150/arm-bp.jpg' },
        { id: 393, name: 'Bluetooth BP Monitor', price: 50, originalPrice: null, discount: '', category: 'Blood Pressure Monitors', brand: 'BrandY', image: 'https://via.placeholder.com/150/bluetooth-bp.jpg' },
        { id: 394, name: 'Portable BP Monitor', price: 40, originalPrice: null, discount: '', category: 'Blood Pressure Monitors', brand: 'BrandX', image: 'https://via.placeholder.com/150/portable-bp.jpg' },
        { id: 395, name: 'Automatic BP Monitor', price: 120, originalPrice: 150, discount: '20% off', category: 'Blood Pressure Monitors', brand: 'BrandZ', image: 'https://via.placeholder.com/150/auto-bp.jpg' },

        // Glucometers & Test Strips
        { id: 396, name: 'Digital Glucometer', price: 120, originalPrice: 150, discount: '20% off', category: 'Glucometers & Test Strips', brand: 'BrandY', image: 'https://via.placeholder.com/150/glucometer.jpg' },
        { id: 397, name: 'Glucometer Test Strips', price: 100, originalPrice: null, discount: '', category: 'Glucometers & Test Strips', brand: 'BrandW', image: 'https://via.placeholder.com/150/test-strips.jpg' },
        { id: 398, name: 'Bluetooth Glucometer', price: 150, originalPrice: 180, discount: '17% off', category: 'Glucometers & Test Strips', brand: 'BrandX', image: 'https://via.placeholder.com/150/bt-glucometer.jpg' },
        { id: 399, name: 'Lancets for Glucometer', price: 90, originalPrice: null, discount: '', category: 'Glucometers & Test Strips', brand: 'BrandY', image: 'https://via.placeholder.com/150/lancets.jpg' },
        { id: 400, name: 'Advanced Glucometer Kit', price: 250, originalPrice: 300, discount: '17% off', category: 'Glucometers & Test Strips', brand: 'BrandZ', image: 'https://via.placeholder.com/150/gluco-kit.jpg' },
        { id: 401, name: 'Strip Refill Pack', price: 110, originalPrice: null, discount: '', category: 'Glucometers & Test Strips', brand: 'BrandW', image: 'https://via.placeholder.com/150/strip-refill.jpg' },

        // Thermometers
        { id: 402, name: 'Digital Thermometer', price: 50, originalPrice: null, discount: '', category: 'Thermometers', brand: 'BrandY', image: 'https://via.placeholder.com/150/digital-therm.jpg' },
        { id: 403, name: 'Infrared Thermometer', price: 70, originalPrice: 80, discount: '12% off', category: 'Thermometers', brand: 'BrandZ', image: 'https://via.placeholder.com/150/infrared-therm.jpg' },
        { id: 404, name: 'Ear Thermometer', price: 120, originalPrice: null, discount: '', category: 'Thermometers', brand: 'BrandW', image: 'https://via.placeholder.com/150/ear-therm.jpg' },
        { id: 405, name: 'Forehead Thermometer', price: 100, originalPrice: 120, discount: '17% off', category: 'Thermometers', brand: 'BrandX', image: 'https://via.placeholder.com/150/forehead-therm.jpg' },
        { id: 406, name: 'Mercury Thermometer', price: 95, originalPrice: null, discount: '', category: 'Thermometers', brand: 'BrandY', image: 'https://via.placeholder.com/150/mercury-therm.jpg' },
        { id: 407, name: 'Smart Thermometer', price: 130, originalPrice: 150, discount: '13% off', category: 'Thermometers', brand: 'BrandZ', image: 'https://via.placeholder.com/150/smart-therm.jpg' },

        // Pulse Oximeters
        { id: 408, name: 'Finger Pulse Oximeter', price: 500, originalPrice: 600, discount: '17% off', category: 'Pulse Oximeters', brand: 'BrandX', image: 'https://via.placeholder.com/150/finger-oximeter.jpg' },
        { id: 409, name: 'Wrist Pulse Oximeter', price: 300, originalPrice: null, discount: '', category: 'Pulse Oximeters', brand: 'BrandY', image: 'https://via.placeholder.com/150/wrist-oximeter.jpg' },
        { id: 410, name: 'Bluetooth Oximeter', price: 800, originalPrice: 1000, discount: '20% off', category: 'Pulse Oximeters', brand: 'BrandZ', image: 'https://via.placeholder.com/150/bt-oximeter.jpg' },
        { id: 411, name: 'Portable Oximeter', price: 400, originalPrice: null, discount: '', category: 'Pulse Oximeters', brand: 'BrandW', image: 'https://via.placeholder.com/150/portable-oximeter.jpg' },
        { id: 412, name: 'Pediatric Oximeter', price: 600, originalPrice: 700, discount: '14% off', category: 'Pulse Oximeters', brand: 'BrandX', image: 'https://via.placeholder.com/150/ped-oximeter.jpg' },
        { id: 413, name: 'Advanced Oximeter', price: 1200, originalPrice: null, discount: '', category: 'Pulse Oximeters', brand: 'BrandY', image: 'https://via.placeholder.com/150/advanced-oximeter.jpg' }
    ];

    const priceRanges = [
        { label: 'Under ₹100', min: 0, max: 100 },
        { label: '₹100 - ₹300', min: 100, max: 300 },
        { label: '₹300 - ₹600', min: 300, max: 600 },
        { label: 'Over ₹600', min: 601, max: Infinity }
    ];

    // Filter state (private to this module)
    let activeCategory = null;
    let activePriceRange = null;
    let selectedBrands = [];
    let activeSort = 'relevance';

    // DOM Elements (scoped to monitors page)
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
        if (activeSort === 'price-high') list.sort((a, b) => b.price - b.price);
        
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
    function initializeMonitorsPage() {
        console.log('Initializing health monitors products page...');
        
        // Get DOM elements specific to monitors page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');

        // Check if we're on the monitors page
        if (!productGrid) {
            console.log('Not on health monitors products page, skipping initialization');
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

        console.log('Health monitors products page initialized successfully');
    }

    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };

    window.toggleBrandList = toggleBrandList;

    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a health monitors products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMonitorsPage);
        } else {
            // DOM already loaded
            setTimeout(initializeMonitorsPage, 100);
        }
    }
document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE