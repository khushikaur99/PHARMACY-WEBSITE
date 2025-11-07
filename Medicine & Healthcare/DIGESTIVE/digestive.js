// digestive.js - Properly isolated for digestive products page
(function() {
    'use strict';
    // ================ PRIVATE VARIABLES ================
    const products = [
        // Antacids & Acidity Relief
        { id: 150, name: 'Antacid Tablets', price: 80, originalPrice: 100, discount: '20% off', category: 'Antacids & Acidity Relief', brand: 'BrandX', image: 'https://i.pinimg.com/736x/fa/04/1b/fa041b6c2982c6b74abbd1d137969508.jpg', prescriptionRequired: false },
        { id: 151, name: 'Acidity Relief Syrup', price: 120, originalPrice: null, discount: '', category: 'Antacids & Acidity Relief', brand: 'BrandY', image: 'https://i.pinimg.com/736x/12/34/56/123456789abcdef0123456789abcdef.jpg', prescriptionRequired: false },
        { id: 152, name: 'Calcium Carbonate Chewables', price: 90, originalPrice: 110, discount: '18% off', category: 'Antacids & Acidity Relief', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/23/45/67/23456789abcdef0123456789abcdef0.jpg', prescriptionRequired: false },
        { id: 153, name: 'Ranitidine Tablets', price: 100, originalPrice: null, discount: '', category: 'Antacids & Acidity Relief', brand: 'BrandW', image: 'https://i.pinimg.com/736x/34/56/78/3456789abcdef0123456789abcdef01.jpg', prescriptionRequired: true },
        { id: 154, name: 'Omeprazole Capsules', price: 150, originalPrice: 180, discount: '17% off', category: 'Antacids & Acidity Relief', brand: 'BrandX', image: 'https://i.pinimg.com/736x/45/67/89/456789abcdef0123456789abcdef012.jpg', prescriptionRequired: true },
        { id: 155, name: 'Magnesium Hydroxide Suspension', price: 70, originalPrice: null, discount: '', category: 'Antacids & Acidity Relief', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/56/78/90/567890abcdef0123456789abcdef0123.jpg', prescriptionRequired: false },

        // Laxatives & Constipation Care
        { id: 156, name: 'Laxative Tablets', price: 100, originalPrice: 120, discount: '17% off', category: 'Laxatives & Constipation Care', brand: 'BrandY', image: 'https://i.pinimg.com/736x/67/89/ab/6789abcdef0123456789abcdef01234.jpg', prescriptionRequired: false },
        { id: 157, name: 'Fiber Supplement Powder', price: 150, originalPrice: null, discount: '', category: 'Laxatives & Constipation Care', brand: 'BrandW', image: 'https://i.pinimg.com/736x/78/90/bc/7890bcdef0123456789abcdef012345.jpg', prescriptionRequired: false },
        { id: 158, name: 'Bisacodyl Suppositories', price: 80, originalPrice: 100, discount: '20% off', category: 'Laxatives & Constipation Care', brand: 'BrandX', image: 'https://i.pinimg.com/736x/89/ab/cd/89abcdef0123456789abcdef0123456.jpg', prescriptionRequired: false },
        { id: 159, name: 'Senna Tea Bags', price: 60, originalPrice: null, discount: '', category: 'Laxatives & Constipation Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/90/bc/de/90bcdef0123456789abcdef01234567.jpg', prescriptionRequired: false },
        { id: 160, name: 'Lactulose Solution', price: 200, originalPrice: 250, discount: '20% off', category: 'Laxatives & Constipation Care', brand: 'BrandY', image: 'https://i.pinimg.com/736x/ab/cd/ef/abcdef0123456789abcdef012345678.jpg', prescriptionRequired: true },
        { id: 161, name: 'Prune Juice', price: 90, originalPrice: null, discount: '', category: 'Laxatives & Constipation Care', brand: 'BrandW', image: 'https://i.pinimg.com/736x/bc/de/f0/bcdef0123456789abcdef0123456789.jpg', prescriptionRequired: false },

        // Diarrhea & ORS Solutions
        { id: 162, name: 'Loperamide Tablets', price: 70, originalPrice: 90, discount: '22% off', category: 'Diarrhea & ORS Solutions', brand: 'BrandX', image: 'https://i.pinimg.com/736x/cd/ef/01/cdef0123456789abcdef0123456789a.jpg', prescriptionRequired: false },
        { id: 163, name: 'ORS Powder Packets', price: 50, originalPrice: null, discount: '', category: 'Diarrhea & ORS Solutions', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/de/f0/12/def0123456789abcdef0123456789ab.jpg', prescriptionRequired: false },
        { id: 164, name: 'Bismuth Subsalicylate Suspension', price: 100, originalPrice: 120, discount: '17% off', category: 'Diarrhea & ORS Solutions', brand: 'BrandY', image: 'https://i.pinimg.com/736x/ef/01/23/ef0123456789abcdef0123456789abc.jpg', prescriptionRequired: false },
        { id: 165, name: 'Electrolyte Solution', price: 60, originalPrice: null, discount: '', category: 'Diarrhea & ORS Solutions', brand: 'BrandW', image: 'https://i.pinimg.com/736x/f0/12/34/f0123456789abcdef0123456789abcd.jpg', prescriptionRequired: false },
        { id: 166, name: 'Anti-Diarrheal Capsules', price: 80, originalPrice: 100, discount: '20% off', category: 'Diarrhea & ORS Solutions', brand: 'BrandX', image: 'https://i.pinimg.com/736x/01/23/45/0123456789abcdef0123456789abcde.jpg', prescriptionRequired: true },
        { id: 167, name: 'Zinc Supplements for Diarrhea', price: 90, originalPrice: null, discount: '', category: 'Diarrhea & ORS Solutions', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/12/34/56/123456789abcdef0123456789abcdef.jpg', prescriptionRequired: false },

        // Digestive Enzymes & Probiotics
        { id: 168, name: 'Probiotic Capsules', price: 200, originalPrice: 250, discount: '20% off', category: 'Digestive Enzymes & Probiotics', brand: 'BrandY', image: 'https://i.pinimg.com/736x/23/45/67/23456789abcdef0123456789abcdef0.jpg', prescriptionRequired: false },
        { id: 169, name: 'Digestive Enzyme Tablets', price: 150, originalPrice: null, discount: '', category: 'Digestive Enzymes & Probiotics', brand: 'BrandW', image: 'https://i.pinimg.com/736x/34/56/78/3456789abcdef0123456789abcdef01.jpg', prescriptionRequired: false },
        { id: 170, name: 'Lactobacillus Powder', price: 180, originalPrice: 220, discount: '18% off', category: 'Digestive Enzymes & Probiotics', brand: 'BrandX', image: 'https://i.pinimg.com/736x/45/67/89/456789abcdef0123456789abcdef012.jpg', prescriptionRequired: false },
        { id: 171, name: 'Pancreatin Capsules', price: 250, originalPrice: null, discount: '', category: 'Digestive Enzymes & Probiotics', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/56/78/90/567890abcdef0123456789abcdef0123.jpg', prescriptionRequired: true },
        { id: 172, name: 'Bifidobacterium Supplements', price: 220, originalPrice: 260, discount: '15% off', category: 'Digestive Enzymes & Probiotics', brand: 'BrandY', image: 'https://i.pinimg.com/736x/67/89/ab/6789abcdef0123456789abcdef01234.jpg', prescriptionRequired: false },
        { id: 173, name: 'Multi-Enzyme Formula', price: 190, originalPrice: null, discount: '', category: 'Digestive Enzymes & Probiotics', brand: 'BrandW', image: 'https://i.pinimg.com/736x/78/90/bc/7890bcdef0123456789abcdef012345.jpg', prescriptionRequired: false },

        // RX (extra prescription-only items)
        { id: 174, name: 'Prescription Antacid', price: 150, originalPrice: null, discount: '', category: 'Antacids & Acidity Relief', brand: 'BrandX', image: 'https://i.pinimg.com/736x/89/ab/cd/89abcdef0123456789abcdef0123456.jpg', prescriptionRequired: true },
        { id: 175, name: 'Prescription Laxative', price: 200, originalPrice: 250, discount: '20% off', category: 'Laxatives & Constipation Care', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/90/bc/de/90bcdef0123456789abcdef01234567.jpg', prescriptionRequired: true }
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
    // DOM Elements (scoped to digestive page)
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
    function initializeDigestivePage() {
        console.log('Initializing digestive products page...');
       
        // Get DOM elements specific to digestive page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');
        // Check if we're on the digestive page
        if (!productGrid) {
            console.log('Not on digestive products page, skipping initialization');
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
        console.log('Digestive products page initialized successfully');
    }
    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };
    window.toggleBrandList = toggleBrandList;
    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a digestive products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeDigestivePage);
        } else {
            // DOM already loaded
            setTimeout(initializeDigestivePage, 100);
        }
    }document.getElementById('hero').style.backgroundImage = "url('https://i.pinimg.com/1200x/b3/75/ee/b375ee913e729ba6567db170935b9d07.jpg')";
})(); // End of IIFE