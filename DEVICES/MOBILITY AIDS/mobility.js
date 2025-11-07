// mobility.js - Properly isolated for mobility aids products page
(function() {
    'use strict';

    // ================ PRIVATE VARIABLES ================
    const products = [
        // Wheelchairs
        { id: 414, name: 'Manual Wheelchair', price: 250, originalPrice: 300, discount: '17% off', category: 'Wheelchairs', brand: 'BrandX', image: 'https://i.pinimg.com/736x/41/b9/1d/41b91d1ad209c25f5f952214abd579d1.jpg' },
        { id: 415, name: 'Electric Wheelchair', price: 800, originalPrice: 1000, discount: '20% off', category: 'Wheelchairs', brand: 'BrandZ', image: 'https://via.placeholder.com/150/electric-wheelchair.jpg' },
        { id: 416, name: 'Foldable Wheelchair', price: 350, originalPrice: null, discount: '', category: 'Wheelchairs', brand: 'BrandW', image: 'https://via.placeholder.com/150/foldable-wheelchair.jpg' },
        { id: 417, name: 'Lightweight Wheelchair', price: 400, originalPrice: 450, discount: '11% off', category: 'Wheelchairs', brand: 'BrandY', image: 'https://via.placeholder.com/150/lightweight-wheelchair.jpg' },
        { id: 418, name: 'Pediatric Wheelchair', price: 300, originalPrice: null, discount: '', category: 'Wheelchairs', brand: 'BrandX', image: 'https://via.placeholder.com/150/pediatric-wheelchair.jpg' },
        { id: 419, name: 'Wheelchair Cushion', price: 80, originalPrice: 100, discount: '20% off', category: 'Wheelchairs', brand: 'BrandZ', image: 'https://via.placeholder.com/150/wheelchair-cushion.jpg' },

        // Walkers & Walking Sticks
        { id: 420, name: 'Folding Walker', price: 120, originalPrice: 150, discount: '20% off', category: 'Walkers & Walking Sticks', brand: 'BrandY', image: 'https://via.placeholder.com/150/folding-walker.jpg' },
        { id: 421, name: 'Adjustable Walking Stick', price: 50, originalPrice: null, discount: '', category: 'Walkers & Walking Sticks', brand: 'BrandW', image: 'https://via.placeholder.com/150/walking-stick.jpg' },
        { id: 422, name: 'Rollator Walker', price: 200, originalPrice: 240, discount: '17% off', category: 'Walkers & Walking Sticks', brand: 'BrandX', image: 'https://via.placeholder.com/150/rollator-walker.jpg' },
        { id: 423, name: 'Quad Cane', price: 60, originalPrice: null, discount: '', category: 'Walkers & Walking Sticks', brand: 'BrandY', image: 'https://via.placeholder.com/150/quad-cane.jpg' },
        { id: 424, name: 'Walker with Seat', price: 180, originalPrice: 220, discount: '18% off', category: 'Walkers & Walking Sticks', brand: 'BrandZ', image: 'https://via.placeholder.com/150/walker-seat.jpg' },
        { id: 425, name: 'Ergonomic Walking Stick', price: 70, originalPrice: null, discount: '', category: 'Walkers & Walking Sticks', brand: 'BrandW', image: 'https://via.placeholder.com/150/ergo-stick.jpg' },

        // Crutches
        { id: 426, name: 'Underarm Crutches', price: 40, originalPrice: null, discount: '', category: 'Crutches', brand: 'BrandY', image: 'https://via.placeholder.com/150/underarm-crutches.jpg' },
        { id: 427, name: 'Forearm Crutches', price: 60, originalPrice: 75, discount: '20% off', category: 'Crutches', brand: 'BrandZ', image: 'https://via.placeholder.com/150/forearm-crutches.jpg' },
        { id: 428, name: 'Adjustable Crutches', price: 50, originalPrice: null, discount: '', category: 'Crutches', brand: 'BrandW', image: 'https://via.placeholder.com/150/adjustable-crutches.jpg' },
        { id: 429, name: 'Crutch Pads', price: 20, originalPrice: 25, discount: '20% off', category: 'Crutches', brand: 'BrandX', image: 'https://via.placeholder.com/150/crutch-pads.jpg' },
        { id: 430, name: 'Lightweight Crutches', price: 70, originalPrice: null, discount: '', category: 'Crutches', brand: 'BrandY', image: 'https://via.placeholder.com/150/light-crutches.jpg' },
        { id: 431, name: 'Crutch Grips', price: 15, originalPrice: null, discount: '', category: 'Crutches', brand: 'BrandZ', image: 'https://via.placeholder.com/150/crutch-grips.jpg' },

        // Support Belts & Braces
        { id: 432, name: 'Lumbar Support Belt', price: 45, originalPrice: 55, discount: '18% off', category: 'Support Belts & Braces', brand: 'BrandX', image: 'https://via.placeholder.com/150/lumbar-belt.jpg' },
        { id: 433, name: 'Knee Brace', price: 35, originalPrice: null, discount: '', category: 'Support Belts & Braces', brand: 'BrandY', image: 'https://via.placeholder.com/150/knee-brace.jpg' },
        { id: 434, name: 'Ankle Support', price: 30, originalPrice: 40, discount: '25% off', category: 'Support Belts & Braces', brand: 'BrandZ', image: 'https://via.placeholder.com/150/ankle-support.jpg' },
        { id: 435, name: 'Back Brace', price: 60, originalPrice: null, discount: '', category: 'Support Belts & Braces', brand: 'BrandW', image: 'https://via.placeholder.com/150/back-brace.jpg' },
        { id: 436, name: 'Wrist Support', price: 25, originalPrice: 30, discount: '17% off', category: 'Support Belts & Braces', brand: 'BrandX', image: 'https://via.placeholder.com/150/wrist-support.jpg' },
        { id: 437, name: 'Posture Corrector', price: 50, originalPrice: null, discount: '', category: 'Support Belts & Braces', brand: 'BrandY', image: 'https://via.placeholder.com/150/posture-corrector.jpg' }
    ];

    const priceRanges = [
        { label: 'Under ₹100', min: 0, max: 100 },
        { label: '₹100 - ₹300', min: 100, max: 300 },
        { label: '₹300 - ₹500', min: 300, max: 500 },
        { label: 'Over ₹500', min: 501, max: Infinity }
    ];

    // Filter state (private to this module)
    let activeCategory = null;
    let activePriceRange = null;
    let selectedBrands = [];
    let activeSort = 'relevance';

    // DOM Elements (scoped to mobility page)
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
    function initializeMobilityPage() {
        console.log('Initializing mobility aids products page...');
        
        // Get DOM elements specific to mobility page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');

        // Check if we're on the mobility page
        if (!productGrid) {
            console.log('Not on mobility aids products page, skipping initialization');
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

        console.log('Mobility aids products page initialized successfully');
    }

    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };

    window.toggleBrandList = toggleBrandList;

    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a mobility aids products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeMobilityPage);
        } else {
            // DOM already loaded
            setTimeout(initializeMobilityPage, 100);
        }
    }
document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE