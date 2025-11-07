// personal.js - Properly isolated for personal care products page
(function() {
    'use strict';

    // ================ PRIVATE VARIABLES ================
    const products = [
        // Skincare (lotions, creams)
        { id: 220, name: 'Hydrating Moisturizer', price: 250, originalPrice: 300, discount: '17% off', category: 'Skincare (lotions, creams)', brand: 'BrandX', image: 'https://i.pinimg.com/736x/bb/9c/69/bb9c691524dc7575451ca8c0930692ea.jpg' },
        { id: 221, name: 'Night Repair Cream', price: 300, originalPrice: null, discount: '', category: 'Skincare (lotions, creams)', brand: 'BrandY', image: 'https://i.pinimg.com/736x/12/34/56/123456789abcdef0123456789abcdef.jpg' },
        { id: 222, name: 'Vitamin C Serum', price: 350, originalPrice: 400, discount: '13% off', category: 'Skincare (lotions, creams)', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/23/45/67/23456789abcdef0123456789abcdef0.jpg' },
        { id: 223, name: 'Aloe Vera Gel', price: 150, originalPrice: null, discount: '', category: 'Skincare (lotions, creams)', brand: 'BrandW', image: 'https://i.pinimg.com/736x/34/56/78/3456789abcdef0123456789abcdef01.jpg' },
        { id: 225, name: 'Face Moisturizer SPF', price: 280, originalPrice: null, discount: '', category: 'Skincare (lotions, creams)', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/56/78/90/567890abcdef0123456789abcdef0123.jpg' },

        // Hair Care (shampoos, oils)
        { id: 226, name: 'Anti-Dandruff Shampoo', price: 200, originalPrice: 250, discount: '20% off', category: 'Hair Care (shampoos, oils)', brand: 'BrandY', image: 'https://i.pinimg.com/736x/67/89/ab/6789abcdef0123456789abcdef01234.jpg' },
        { id: 227, name: 'Argan Oil Hair Serum', price: 300, originalPrice: null, discount: '', category: 'Hair Care (shampoos, oils)', brand: 'BrandW', image: 'https://i.pinimg.com/736x/78/90/bc/7890bcdef0123456789abcdef012345.jpg' },
        { id: 228, name: 'Herbal Hair Oil', price: 180, originalPrice: 220, discount: '18% off', category: 'Hair Care (shampoos, oils)', brand: 'BrandX', image: 'https://i.pinimg.com/736x/89/ab/cd/89abcdef0123456789abcdef0123456.jpg' },
        { id: 229, name: 'Volumizing Shampoo', price: 220, originalPrice: null, discount: '', category: 'Hair Care (shampoos, oils)', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/90/bc/de/90bcdef0123456789abcdef01234567.jpg' },
        { id: 231, name: 'Coconut Oil Hair Mask', price: 150, originalPrice: null, discount: '', category: 'Hair Care (shampoos, oils)', brand: 'BrandW', image: 'https://i.pinimg.com/736x/bc/de/f0/bcdef0123456789abcdef0123456789.jpg' },

        // Acne & Pimples Care
        { id: 233, name: 'Salicylic Acid Cleanser', price: 180, originalPrice: null, discount: '', category: 'Acne & Pimples Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/de/f0/12/def0123456789abcdef0123456789ab.jpg' },
        { id: 234, name: 'Acne Spot Treatment', price: 150, originalPrice: 180, discount: '17% off', category: 'Acne & Pimples Care', brand: 'BrandY', image: 'https://i.pinimg.com/736x/ef/01/23/ef0123456789abcdef0123456789abc.jpg' },
        { id: 235, name: 'Tea Tree Oil Serum', price: 220, originalPrice: null, discount: '', category: 'Acne & Pimples Care', brand: 'BrandW', image: 'https://i.pinimg.com/736x/f0/12/34/f0123456789abcdef0123456789abcd.jpg' },
        { id: 237, name: 'Acne Face Wash', price: 170, originalPrice: null, discount: '', category: 'Acne & Pimples Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/12/34/56/123456789abcdef0123456789abcdef.jpg' },

        // Sunscreens
        { id: 238, name: 'SPF 50 Sunscreen Lotion', price: 300, originalPrice: 350, discount: '14% off', category: 'Sunscreens', brand: 'BrandY', image: 'https://i.pinimg.com/736x/23/45/67/23456789abcdef0123456789abcdef0.jpg' },
        { id: 239, name: 'SPF 30 Gel Sunscreen', price: 250, originalPrice: null, discount: '', category: 'Sunscreens', brand: 'BrandW', image: 'https://i.pinimg.com/736x/34/56/78/3456789abcdef0123456789abcdef01.jpg' },
        { id: 240, name: 'Tinted Sunscreen SPF 40', price: 320, originalPrice: 380, discount: '16% off', category: 'Sunscreens', brand: 'BrandX', image: 'https://i.pinimg.com/736x/45/67/89/456789abcdef0123456789abcdef012.jpg' },
        { id: 241, name: 'Broad Spectrum SPF 50', price: 280, originalPrice: null, discount: '', category: 'Sunscreens', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/56/78/90/567890abcdef0123456789abcdef0123.jpg' },
        { id: 242, name: 'Sunscreen Spray SPF 30', price: 270, originalPrice: 320, discount: '16% off', category: 'Sunscreens', brand: 'BrandY', image: 'https://i.pinimg.com/736x/67/89/ab/6789abcdef0123456789abcdef01234.jpg' },
        { id: 243, name: 'Kids Sunscreen SPF 50', price: 260, originalPrice: null, discount: '', category: 'Sunscreens', brand: 'BrandW', image: 'https://i.pinimg.com/736x/78/90/bc/7890bcdef0123456789abcdef012345.jpg' },

        // Anti-Ageing
        { id: 244, name: 'Retinol Serum', price: 400, originalPrice: 450, discount: '11% off', category: 'Anti-Ageing', brand: 'BrandX', image: 'https://i.pinimg.com/736x/89/ab/cd/89abcdef0123456789abcdef0123456.jpg' },
        { id: 245, name: 'Hyaluronic Acid Cream', price: 350, originalPrice: null, discount: '', category: 'Anti-Ageing', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/90/bc/de/90bcdef0123456789abcdef01234567.jpg' },
        { id: 246, name: 'Collagen Booster Capsules', price: 300, originalPrice: 360, discount: '17% off', category: 'Anti-Ageing', brand: 'BrandY', image: 'https://i.pinimg.com/736x/ab/cd/ef/abcdef0123456789abcdef012345678.jpg' },
        { id: 247, name: 'Anti-Wrinkle Cream', price: 380, originalPrice: null, discount: '', category: 'Anti-Ageing', brand: 'BrandW', image: 'https://i.pinimg.com/736x/bc/de/f0/bcdef0123456789abcdef0123456789.jpg' },
        { id: 248, name: 'Vitamin C Anti-Ageing Serum', price: 420, originalPrice: 480, discount: '13% off', category: 'Anti-Ageing', brand: 'BrandX', image: 'https://i.pinimg.com/736x/cd/ef/01/cdef0123456789abcdef0123456789a.jpg' }
    ];

    const priceRanges = [
        { label: 'Under ₹200', min: 0, max: 200 },
        { label: '₹200 - ₹300', min: 200, max: 300 },
        { label: '₹300 - ₹400', min: 300, max: 400 },
        { label: 'Over ₹400', min: 401, max: Infinity }
    ];

    // Filter state (private to this module)
    let activeCategory = null;
    let activePriceRange = null;
    let selectedBrands = [];
    let activeSort = 'relevance';

    // DOM Elements (scoped to personal care page)
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
    function initializePersonalCarePage() {
        console.log('Initializing personal care products page...');
        
        // Get DOM elements specific to personal care page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');

        // Check if we're on the personal care page
        if (!productGrid) {
            console.log('Not on personal care products page, skipping initialization');
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

        console.log('Personal care products page initialized successfully');
    }

    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };

    window.toggleBrandList = toggleBrandList;

    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a personal care products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePersonalCarePage);
        } else {
            // DOM already loaded
            setTimeout(initializePersonalCarePage, 100);
        }
    }

})(); // End of IIFE