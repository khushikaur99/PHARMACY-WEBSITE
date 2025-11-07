// chronic.js - Properly isolated for chronic products page
(function() {
    'use strict';

    // ================ PRIVATE VARIABLES ================
    const products = [
        { id: 1, name: 'Diabetes Care Kit', price: 45.80, originalPrice: 329, discount: '16% off', category: 'Diabetes', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg' },
        { id: 2, name: 'Glucose Monitor', price: 65.50, originalPrice: 625, discount: '50% off', category: 'Diabetes', brand: 'BrandY', image: 'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg' },
        { id: 4, name: 'Blood Sugar Test Strips', price: 25, originalPrice: null, discount: '', category: 'Diabetes', brand: 'BrandW', image: 'https://i.pinimg.com/736x/50/94/3b/50943b109020ca1be3acbf7a555ef79b.jpg' },
        { id: 5, name: 'Diabetic Foot Cream', price: 35, originalPrice: 150, discount: '20% off', category: 'Diabetes', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/b1/3c/0a/b13c0a3f378c929991359e31b2c98b0a.jpg' },
        { id: 6, name: 'Glucose Tablets', price: 15, originalPrice: null, discount: '', category: 'Diabetes', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/46/13/15/46131555c6994d407730f268ee6390ef.jpg' },
        { id: 7, name: 'BP Monitor', price: 95, originalPrice: null, discount: '', category: 'Hypertension', brand: 'BrandZ', image: 'https://i.pinimg.com/1200x/86/85/b8/8685b8bc870fd478367baee1e5065fe5.jpg' },
        { id: 9, name: 'Wrist BP Monitor', price: 85, originalPrice: 400, discount: '12% off', category: 'Hypertension', brand: 'BrandX', image: 'https://i.pinimg.com/736x/73/1d/44/731d44443cdca68c78d5140fbd54602b.jpg' },
        { id: 11, name: 'Digital BP Cuff', price: 90, originalPrice: null, discount: '', category: 'Hypertension', brand: 'BrandZ', image: 'https://rukminim2.flixcart.com/image/292/360/kbs9k7k0/bp-monitor-cuff/h/y/c/adult-size-digital-blood-pressure-monitor-cuff-psm-original-imaft25hkpp3rmyn.jpeg?q=90&crop=false' },
        { id: 12, name: 'Hypertension Tea', price: 25, originalPrice: 120, discount: '25% off', category: 'Hypertension', brand: 'BrandW', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUIWfND9G-a5jv7Sg6oenF-im9IFPwG9M0A&s' },
        { id: 13, name: 'Heart Health Supplement', price: 75, originalPrice: 350, discount: '14% off', category: 'Cardiac', brand: 'BrandX', image: 'https://i.pinimg.com/736x/84/25/86/842586edc3d1515a35a5071dd16f9fb9.jpg' },
        { id: 14, name: 'Cardiac Monitor', price: 95, originalPrice: null, discount: '', category: 'Cardiac', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/9a/64/da/9a64da44712c93da0dd7fefebe3c4f2f.jpg' },
        { id: 15, name: 'Omega-3 Capsules', price: 65, originalPrice: 300, discount: '17% off', category: 'Cardiac', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/f3/e8/4c/f3e84c84576fb11c8edf2ed7442e6da2.jpg' },
        { id: 16, name: 'Heart Rate Tracker', price: 80, originalPrice: null, discount: '', category: 'Cardiac', brand: 'BrandW', image: 'https://i.pinimg.com/1200x/e9/bc/b7/e9bcb7f63c77a9220832993dbdbcad72.jpg' },
        { id: 17, name: 'Cholesterol Test Kit', price: 40, originalPrice: 140, discount: '21% off', category: 'Cardiac', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/6f/02/2e/6f022e5b238c1720823d99468e7c3fd9.jpg' }
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

    // DOM Elements (scoped to chronic page)
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
    function initializeChronicPage() {
        console.log('Initializing chronic products page...');
        
        // Get DOM elements specific to chronic page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');

        // Check if we're on the chronic page
        if (!productGrid) {
            console.log('Not on chronic products page, skipping initialization');
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

        console.log('Chronic products page initialized successfully');
    }

    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };

    window.toggleBrandList = toggleBrandList;

    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a chronic products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeChronicPage);
        } else {
            // DOM already loaded
            setTimeout(initializeChronicPage, 100);
        }
    }
   document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE