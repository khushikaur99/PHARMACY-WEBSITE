// first.js - Properly isolated for first aid products page
(function() {
    'use strict';

    // ================ PRIVATE VARIABLES ================
    const products = [
        // Wound Care
        { id: 60, name: 'Antiseptic Cream', price: 85, originalPrice: 100, discount: '15% off', category: 'Wound Care', brand: 'BrandX', image: 'https://i.pinimg.com/736x/35/ba/57/35ba570fdad02cac60ab97e0168f1f06.jpg' },
        { id: 61, name: 'Sterile Gauze Pads', price: 60, originalPrice: null, discount: '', category: 'Wound Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/d7/39/56/d739567af1096379ff95a64e55867898.jpg' },
        { id: 62, name: 'Wound Healing Spray', price: 95, originalPrice: null, discount: '', category: 'Wound Care', brand: 'BrandW', image: 'https://i.pinimg.com/1200x/65/be/2e/65be2e76552427f52f25919eefbd3316.jpg' },
        { id: 63, name: 'Adhesive Bandages', price: 50, originalPrice: null, discount: '', category: 'Wound Care', brand: 'BrandY', image: 'https://i.pinimg.com/736x/bd/de/5a/bdde5a3a79cb03ee5b9a7c6d67f59522.jpg' },
        { id: 64, name: 'Medical Tape', price: 40, originalPrice: null, discount: '', category: 'Wound Care', brand: 'BrandX', image: 'https://i.pinimg.com/736x/88/e2/09/88e209255cf9792cde50c6c064875510.jpg' },
        { id: 65, name: 'Wound Dressing Kit', price: 120, originalPrice: 150, discount: '20% off', category: 'Wound Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/c5/88/0c/c5880c61c3ced166bf68ad1ad070ba8d.jpg' },

        // Burns & Scalds
        { id: 66, name: 'Burn Relief Gel', price: 120, originalPrice: 150, discount: '20% off', category: 'Burns & Scalds', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/12/41/a1/1241a1dce9aa4bb0bd936a88498faee7.jpg' },
        { id: 67, name: 'Aloe Vera Cream', price: 100, originalPrice: null, discount: '', category: 'Burns & Scalds', brand: 'BrandW', image: 'https://i.pinimg.com/736x/d0/9b/a9/d09ba98736754930dd700dd08d9f0ab6.jpg' },
        { id: 68, name: 'Burn Dressing', price: 150, originalPrice: 180, discount: '17% off', category: 'Burns & Scalds', brand: 'BrandX', image: 'https://i.pinimg.com/736x/ff/be/5e/ffbe5ebb5e5abf04a5e10e09e03951df.jpg' },
        { id: 69, name: 'Cooling Burn Spray', price: 90, originalPrice: null, discount: '', category: 'Burns & Scalds', brand: 'BrandY', image: 'https://i.pinimg.com/736x/23/71/09/237109e52cd3f4aa5550eb390d37fcb4.jpg' },
        { id: 71, name: 'Burn Relief Ointment', price: 110, originalPrice: null, discount: '', category: 'Burns & Scalds', brand: 'BrandW', image: 'https://i.pinimg.com/736x/42/09/21/4209215a24624d1b8fa3a3bf9943f1d0.jpg' },

        // Antiseptics & Disinfectants
        { id: 72, name: 'Hydrogen Peroxide Solution', price: 50, originalPrice: null, discount: '', category: 'Antiseptics & Disinfectants', brand: 'BrandY', image: 'https://i.pinimg.com/736x/51/c5/de/51c5ded9cc27a4b03a34e7dced02876d.jpg' },
        { id: 73, name: 'Alcohol Wipes', price: 70, originalPrice: 80, discount: '12% off', category: 'Antiseptics & Disinfectants', brand: 'BrandZ', image: 'https://i.pinimg.com/1200x/54/30/39/543039ba4fb61ad43b3119fe1db920c0.jpg' },
        { id: 74, name: 'Betadine Solution', price: 120, originalPrice: null, discount: '', category: 'Antiseptics & Disinfectants', brand: 'BrandW', image: 'https://i.pinimg.com/1200x/f7/cc/9f/f7cc9fdc4e318d6060c0f7da5aecdbe5.jpg' },
        { id: 75, name: 'Dettol Liquid', price: 100, originalPrice: 120, discount: '17% off', category: 'Antiseptics & Disinfectants', brand: 'BrandX', image: 'https://i.pinimg.com/736x/bb/29/ba/bb29ba313677ad0a22cfb50a61121912.jpg' },
        { id: 76, name: 'Antiseptic Spray', price: 95, originalPrice: null, discount: '', category: 'Antiseptics & Disinfectants', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/80/b5/5b/80b55b8e5aea9c874cacb69b8a6a6664.jpg' },
        { id: 77, name: 'Chlorhexidine Solution', price: 130, originalPrice: 150, discount: '13% off', category: 'Antiseptics & Disinfectants', brand: 'BrandZ', image: 'https://i.pinimg.com/1200x/24/d7/ec/24d7ecd5b509901912b92bd6a6afec35.jpg' },

        // First Aid Kits
        { id: 78, name: 'Basic First Aid Kit', price: 500, originalPrice: 600, discount: '17% off', category: 'First Aid Kits', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/92/31/d8/9231d810ce9c148a495dd7a04e0a8ef4.jpg' },
        { id: 79, name: 'Travel First Aid Kit', price: 300, originalPrice: null, discount: '', category: 'First Aid Kits', brand: 'BrandY', image: 'https://i.pinimg.com/736x/b6/f4/6e/b6f46e8721af45dec8b66653f4710020.jpg' },
        { id: 80, name: 'Advanced First Aid Kit', price: 1200, originalPrice: null, discount: '', category: 'First Aid Kits', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/6d/51/45/6d5145e295566f6aa2d888a7786b81f3.jpg' }
    ];

    const priceRanges = [
        { label: 'Under ₹100', min: 0, max: 100 },
        { label: '₹100 - ₹200', min: 100, max: 200 },
        { label: '₹200 - ₹500', min: 200, max: 500 },
        { label: 'Over ₹500', min: 501, max: Infinity }
    ];

    // Filter state (private to this module)
    let activeCategory = null;
    let activePriceRange = null;
    let selectedBrands = [];
    let activeSort = 'relevance';

    // DOM Elements (scoped to first aid page)
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
    function initializeFirstAidPage() {
        console.log('Initializing first aid products page...');
        
        // Get DOM elements specific to first aid page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');

        // Check if we're on the first aid page
        if (!productGrid) {
            console.log('Not on first aid products page, skipping initialization');
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

        console.log('First aid products page initialized successfully');
    }

    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };

    window.toggleBrandList = toggleBrandList;

    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a first aid products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeFirstAidPage);
        } else {
            // DOM already loaded
            setTimeout(initializeFirstAidPage, 100);
        }
    }
document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE