// painrelief.js - Properly isolated for pain relief products page
(function() {
    'use strict';
    // ================ PRIVATE VARIABLES ================
    const products = [
        // Pain Relief Sprays & Gels
        { id: 90, name: 'Pain Relief Spray', price: 150, originalPrice: 180, discount: '17% off', category: 'Pain Relief Sprays & Gels', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/1a/ab/a9/1aaba9a835144fd7665c1d19652ed7c6.jpg', prescriptionRequired: false },
        { id: 91, name: 'Muscle Relief Gel', price: 120, originalPrice: null, discount: '', category: 'Pain Relief Sprays & Gels', brand: 'BrandY', image: 'https://i.pinimg.com/736x/38/d5/2f/38d52f8a2abbfac39a1d812a3b970fad.jpg', prescriptionRequired: false },
        { id: 92, name: 'Joint Pain Spray', price: 160, originalPrice: 200, discount: '20% off', category: 'Pain Relief Sprays & Gels', brand: 'BrandZ', image: 'https://i.pinimg.com/1200x/6e/c0/c0/6ec0c0f57d50d903b0ace51b189cee06.jpg', prescriptionRequired: false },
        { id: 93, name: 'Cooling Pain Gel', price: 100, originalPrice: null, discount: '', category: 'Pain Relief Sprays & Gels', brand: 'BrandW', image: 'https://i.pinimg.com/736x/56/3b/87/563b87aebca81b691e67f5dfa1937c18.jpg', prescriptionRequired: false },
        { id: 94, name: 'Deep Heat Spray', price: 140, originalPrice: 160, discount: '12% off', category: 'Pain Relief Sprays & Gels', brand: 'BrandX', image: 'https://i.pinimg.com/736x/6e/a5/6a/6ea56aabf3c942cd33d6cfac6bf99150.jpg', prescriptionRequired: false },
        { id: 95, name: 'Anti-Inflammatory Gel', price: 130, originalPrice: null, discount: '', category: 'Pain Relief Sprays & Gels', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/3f/5b/8c/3f5b8cce030e5344408f18d0dae694fb.jpg', prescriptionRequired: true },

        // Headache & Body Ache Relief
        { id: 96, name: 'Ibuprofen Tablets', price: 80, originalPrice: 100, discount: '20% off', category: 'Headache & Body Ache Relief', brand: 'BrandY', image: 'https://i.pinimg.com/736x/bb/fd/66/bbfd6605580ed11e32064a9aa33672db.jpg', prescriptionRequired: false },
        { id: 97, name: 'Aspirin Tablets', price: 60, originalPrice: null, discount: '', category: 'Headache & Body Ache Relief', brand: 'BrandW', image: 'https://i.pinimg.com/736x/d8/68/7f/d8687f62b438f5eb786448145adc5a15.jpg', prescriptionRequired: false },
        { id: 98, name: 'Naproxen Tablets', price: 200, originalPrice: 250, discount: '20% off', category: 'Headache & Body Ache Relief', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/ab/2e/6e/ab2e6eebb2eb22ee667f66666c2a4545.jpg', prescriptionRequired: true },
        { id: 99, name: 'Muscle Relaxant Cream', price: 110, originalPrice: null, discount: '', category: 'Headache & Body Ache Relief', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/00/70/64/007064e47946aa35e1af1df26c5cce48.jpg', prescriptionRequired: false },
        { id: 100, name: 'Diclofenac Gel', price: 90, originalPrice: 110, discount: '18% off', category: 'Headache & Body Ache Relief', brand: 'BrandY', image: 'https://i.pinimg.com/736x/c5/8a/d6/c58ad6f1ba697d39adc9e906d556e89f.jpg', prescriptionRequired: true },
        { id: 101, name: 'Pain Relief Patches', price: 120, originalPrice: null, discount: '', category: 'Headache & Body Ache Relief', brand: 'BrandW', image: 'https://i.pinimg.com/1200x/88/5e/14/885e1452ac7a308f1aec66181e497bb5.jpg', prescriptionRequired: false },

        // Fever Reducers
        { id: 102, name: 'Paracetamol Tablets', price: 50, originalPrice: 60, discount: '17% off', category: 'Fever Reducers', brand: 'BrandX', image: 'https://i.pinimg.com/736x/60/f7/e8/60f7e8b3de4f5g6h7i8j9k0l1m2n3o4.jpg', prescriptionRequired: false },
        { id: 103, name: 'Acetaminophen Syrup', price: 70, originalPrice: null, discount: '', category: 'Fever Reducers', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/71/08/f9/7108f9c4ef5g6h7i8j9k0l1m2n3o4p5.jpg', prescriptionRequired: false },
        { id: 104, name: 'Ibuprofen Suspension', price: 80, originalPrice: 100, discount: '20% off', category: 'Fever Reducers', brand: 'BrandY', image: 'https://i.pinimg.com/736x/82/19/0a/82190ad5f6h7i8j9k0l1m2n3o4p5q6.jpg', prescriptionRequired: false },
        { id: 105, name: 'Aspirin Powder', price: 65, originalPrice: null, discount: '', category: 'Fever Reducers', brand: 'BrandW', image: 'https://i.pinimg.com/736x/93/2a/1b/932a1be6g7i8j9k0l1m2n3o4p5q6r7.jpg', prescriptionRequired: true },
        { id: 106, name: 'Paracetamol Injection', price: 150, originalPrice: 180, discount: '17% off', category: 'Fever Reducers', brand: 'BrandX', image: 'https://i.pinimg.com/736x/a4/3b/2c/a43b2cf7i8j9k0l1m2n3o4p5q6r7s8.jpg', prescriptionRequired: true },
        { id: 107, name: 'Fever Relief Strips', price: 90, originalPrice: null, discount: '', category: 'Fever Reducers', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/b5/4c/3d/b54c3de8j9k0l1m2n3o4p5q6r7s8t9.jpg', prescriptionRequired: false },

        // Cold/Hot Packs
        { id: 108, name: 'Reusable Cold Pack', price: 200, originalPrice: 250, discount: '20% off', category: 'Cold/Hot Packs', brand: 'BrandY', image: 'https://i.pinimg.com/736x/c6/5d/4e/c65d4ef9k0l1m2n3o4p5q6r7s8t9u0.jpg', prescriptionRequired: false },
        { id: 109, name: 'Instant Hot Pack', price: 150, originalPrice: null, discount: '', category: 'Cold/Hot Packs', brand: 'BrandW', image: 'https://i.pinimg.com/736x/d7/6e/5f/d76e5f0al1m2n3o4p5q6r7s8t9u0v1.jpg', prescriptionRequired: false },
        { id: 110, name: 'Gel Ice Pack', price: 180, originalPrice: 220, discount: '18% off', category: 'Cold/Hot Packs', brand: 'BrandX', image: 'https://i.pinimg.com/736x/e8/7f/60/e87f60b1m2n3o4p5q6r7s8t9u0v1w2.jpg', prescriptionRequired: false },
        { id: 111, name: 'Microwavable Heat Pad', price: 250, originalPrice: null, discount: '', category: 'Cold/Hot Packs', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/f9/80/71/f98071c2n3o4p5q6r7s8t9u0v1w2x3.jpg', prescriptionRequired: false },
        { id: 112, name: 'Dual Therapy Pack', price: 300, originalPrice: 350, discount: '14% off', category: 'Cold/Hot Packs', brand: 'BrandY', image: 'https://i.pinimg.com/736x/0a/91/82/0a9182d3o4p5q6r7s8t9u0v1w2x3y4.jpg', prescriptionRequired: false },
        { id: 113, name: 'Portable Cold/Hot Wrap', price: 220, originalPrice: null, discount: '', category: 'Cold/Hot Packs', brand: 'BrandW', image: 'https://i.pinimg.com/736x/1b/a2/93/1ba293e4p5q6r7s8t9u0v1w2x3y4z5.jpg', prescriptionRequired: false },

        // RX
        { id: 114, name: 'Tramadol Tablets', price: 300, originalPrice: null, discount: '', category: 'Headache & Body Ache Relief', brand: 'BrandX', image: 'https://i.pinimg.com/736x/2c/b3/a4/2cb3a4f5q6r7s8t9u0v1w2x3y4z5a6.jpg', prescriptionRequired: true },
        { id: 115, name: 'Codeine Syrup', price: 250, originalPrice: 300, discount: '17% off', category: 'Fever Reducers', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/3d/c4/b5/3dc4b506r7s8t9u0v1w2x3y4z5a6b7.jpg', prescriptionRequired: true }
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
    // DOM Elements (scoped to painrelief page)
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
    function initializePainReliefPage() {
        console.log('Initializing pain relief products page...');
       
        // Get DOM elements specific to painrelief page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');
        // Check if we're on the painrelief page
        if (!productGrid) {
            console.log('Not on pain relief products page, skipping initialization');
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
        console.log('Pain relief products page initialized successfully');
    }
    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };
    window.toggleBrandList = toggleBrandList;
    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a painrelief products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializePainReliefPage);
        } else {
            // DOM already loaded
            setTimeout(initializePainReliefPage, 100);
        }
    }document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE