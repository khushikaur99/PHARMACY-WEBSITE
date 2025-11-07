// fitnessnutrition.js - Properly isolated for fitness & nutrition products page
(function() {
    'use strict';
    // ================ PRIVATE VARIABLES ================
    const products = [
        // Protein Powders & Shakes
        { id: 330, name: 'Whey Protein Powder', price: 85, originalPrice: 100, discount: '15% off', category: 'Protein Powders & Shakes', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/45/b1/4a/45b14a58c1aa48c2746085c978d489f4.jpg', prescriptionRequired: false },
        { id: 331, name: 'Plant-Based Protein Shake', price: 60, originalPrice: null, discount: '', category: 'Protein Powders & Shakes', brand: 'BrandZ', image: 'https://via.placeholder.com/150/plant-protein.jpg', prescriptionRequired: false },
        { id: 332, name: 'Casein Protein Powder', price: 95, originalPrice: null, discount: '', category: 'Protein Powders & Shakes', brand: 'BrandW', image: 'https://via.placeholder.com/150/casein-protein.jpg', prescriptionRequired: false },
        { id: 333, name: 'Meal Replacement Shake', price: 50, originalPrice: null, discount: '', category: 'Protein Powders & Shakes', brand: 'BrandY', image: 'https://via.placeholder.com/150/meal-shake.jpg', prescriptionRequired: false },
        { id: 334, name: 'Collagen Protein Powder', price: 40, originalPrice: null, discount: '', category: 'Protein Powders & Shakes', brand: 'BrandX', image: 'https://via.placeholder.com/150/collagen-protein.jpg', prescriptionRequired: false },
        { id: 335, name: 'Protein Isolate Shake', price: 120, originalPrice: 150, discount: '20% off', category: 'Protein Powders & Shakes', brand: 'BrandZ', image: 'https://via.placeholder.com/150/isolate-shake.jpg', prescriptionRequired: false },

        // Weight Gain Supplements
        { id: 336, name: 'Mass Gainer Powder', price: 120, originalPrice: 150, discount: '20% off', category: 'Weight Gain Supplements', brand: 'BrandY', image: 'https://via.placeholder.com/150/mass-gainer.jpg', prescriptionRequired: false },
        { id: 367, name: 'Weight Gain Capsules', price: 100, originalPrice: null, discount: '', category: 'Weight Gain Supplements', brand: 'BrandW', image: 'https://via.placeholder.com/150/gain-capsules.jpg', prescriptionRequired: false },
        { id: 368, name: 'High Calorie Shake', price: 150, originalPrice: 180, discount: '17% off', category: 'Weight Gain Supplements', brand: 'BrandX', image: 'https://via.placeholder.com/150/calorie-shake.jpg', prescriptionRequired: false },
        { id: 369, name: 'Creatine Supplement', price: 90, originalPrice: null, discount: '', category: 'Weight Gain Supplements', brand: 'BrandY', image: 'https://via.placeholder.com/150/creatine.jpg', prescriptionRequired: false },
        { id: 370, name: 'Gainer Protein Blend', price: 250, originalPrice: 300, discount: '17% off', category: 'Weight Gain Supplements', brand: 'BrandZ', image: 'https://via.placeholder.com/150/gainer-blend.jpg', prescriptionRequired: false },
        { id: 371, name: 'Carb Loader Supplement', price: 110, originalPrice: null, discount: '', category: 'Weight Gain Supplements', brand: 'BrandW', image: 'https://via.placeholder.com/150/carb-loader.jpg', prescriptionRequired: false },

        // Weight Loss Supplements
        { id: 372, name: 'Fat Burner Capsules', price: 50, originalPrice: null, discount: '', category: 'Weight Loss Supplements', brand: 'BrandY', image: 'https://via.placeholder.com/150/fat-burner.jpg', prescriptionRequired: false },
        { id: 373, name: 'Green Tea Extract', price: 70, originalPrice: 80, discount: '12% off', category: 'Weight Loss Supplements', brand: 'BrandZ', image: 'https://via.placeholder.com/150/green-tea.jpg', prescriptionRequired: false },
        { id: 374, name: 'Appetite Suppressant', price: 120, originalPrice: null, discount: '', category: 'Weight Loss Supplements', brand: 'BrandW', image: 'https://via.placeholder.com/150/appetite-suppressant.jpg', prescriptionRequired: false },
        { id: 375, name: 'CLA Supplement', price: 100, originalPrice: 120, discount: '17% off', category: 'Weight Loss Supplements', brand: 'BrandX', image: 'https://via.placeholder.com/150/cla.jpg', prescriptionRequired: false },
        { id: 376, name: 'Keto Diet Pills', price: 95, originalPrice: null, discount: '', category: 'Weight Loss Supplements', brand: 'BrandY', image: 'https://via.placeholder.com/150/keto-pills.jpg', prescriptionRequired: false },
        { id: 377, name: 'Detox Tea', price: 130, originalPrice: 150, discount: '13% off', category: 'Weight Loss Supplements', brand: 'BrandZ', image: 'https://via.placeholder.com/150/detox-tea.jpg', prescriptionRequired: false },

        // Energy Drinks & Bars
        { id: 378, name: 'Energy Drink Pack', price: 500, originalPrice: 600, discount: '17% off', category: 'Energy Drinks & Bars', brand: 'BrandX', image: 'https://via.placeholder.com/150/energy-drink.jpg', prescriptionRequired: false },
        { id: 379, name: 'Protein Energy Bar', price: 300, originalPrice: null, discount: '', category: 'Energy Drinks & Bars', brand: 'BrandY', image: 'https://via.placeholder.com/150/energy-bar.jpg', prescriptionRequired: false },
        { id: 380, name: 'Electrolyte Drink', price: 800, originalPrice: 1000, discount: '20% off', category: 'Energy Drinks & Bars', brand: 'BrandZ', image: 'https://via.placeholder.com/150/electrolyte-drink.jpg', prescriptionRequired: false },
        { id: 381, name: 'Nutrient Bar Pack', price: 400, originalPrice: null, discount: '', category: 'Energy Drinks & Bars', brand: 'BrandW', image: 'https://via.placeholder.com/150/nutrient-bar.jpg', prescriptionRequired: false },
        { id: 382, name: 'Caffeine Energy Shot', price: 600, originalPrice: 700, discount: '14% off', category: 'Energy Drinks & Bars', brand: 'BrandX', image: 'https://via.placeholder.com/150/caffeine-shot.jpg', prescriptionRequired: false },
        { id: 383, name: 'Vegan Energy Bar', price: 1200, originalPrice: null, discount: '', category: 'Energy Drinks & Bars', brand: 'BrandY', image: 'https://via.placeholder.com/150/vegan-bar.jpg', prescriptionRequired: false },

        // Sports Nutrition
        { id: 384, name: 'BCAA Supplement', price: 1500, originalPrice: null, discount: '', category: 'Sports Nutrition', brand: 'BrandW', image: 'https://via.placeholder.com/150/bcaa.jpg', prescriptionRequired: false },
        { id: 385, name: 'Pre-Workout Powder', price: 300, originalPrice: null, discount: '', category: 'Sports Nutrition', brand: 'BrandX', image: 'https://via.placeholder.com/150/pre-workout.jpg', prescriptionRequired: false }
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
    // DOM Elements (scoped to fitnessnutrition page)
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
    function initializeFitnessNutritionPage() {
        console.log('Initializing fitness & nutrition products page...');
       
        // Get DOM elements specific to fitnessnutrition page
        productGrid = document.getElementById('productGrid');
        sortSelect = document.getElementById('sortSelect');
        resetFiltersBtn = document.getElementById('resetFilters');
        // Check if we're on the fitnessnutrition page
        if (!productGrid) {
            console.log('Not on fitness & nutrition products page, skipping initialization');
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
        console.log('Fitness & nutrition products page initialized successfully');
    }
    // ================ GLOBAL EXPORTS ================
    // Only expose what's absolutely necessary
    window.openProductDetails = function(id) {
        window.location.href = `/productdetails.html?id=${id}`;
    };
    window.toggleBrandList = toggleBrandList;
    // ================ AUTO-INITIALIZATION ================
    // Only initialize if we're on a fitnessnutrition products page
    if (document.getElementById('productGrid')) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeFitnessNutritionPage);
        } else {
            // DOM already loaded
            setTimeout(initializeFitnessNutritionPage, 100);
        }
    }
})(); // End of IIFE