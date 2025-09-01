        // Comprehensive pharmacy categories and products
        const pharmacyCategories = {
            'Medicines & Healthcare': {
                icon: '💊',
                subcategories: [
                    'Prescription Medicines (Upload Prescription)',
                    'Over-the-Counter (OTC) Medicines',
                    'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)',
                    'First Aid & Emergency (Bandages, Antiseptics, Ointments, Thermometers)',
                    'Pain Relief & Fever',
                    'Allergy & Cold Care',
                    'Digestive Health (Antacids, Probiotics, Laxatives)'
                ]
            },
            'Mother Care & Maternity': {
                icon: '🤱',
                subcategories: [
                    'Maternity Wear (Dresses, Nursing Wear, Innerwear)',
                    'Pregnancy Nutrition (Prenatal Vitamins, Supplements)',
                    'Skincare for Moms (Stretch Mark Cream, Sunscreen, Moisturizers)',
                    'Trimester Kits (1st, 2nd, 3rd Trimester Essentials)',
                    'Postpartum Recovery (Belly Belts, Nursing Pads, Sitz Baths)',
                    'Breastfeeding Essentials (Pumps, Bottles, Nipple Creams)'
                ]
            },
            'Baby Care': {
                icon: '👶',
                subcategories: [
                    'Diapers & Wipes',
                    'Baby Skin & Hair Care',
                    'Feeding & Nursing',
                    'Baby Health & Safety',
                    'Toys & Learning',
                    'Baby Clothing & Accessories'
                ]
            },
            'Wellness & Personal Care': {
                icon: '💆',
                subcategories: [
                    'Vitamins & Supplements',
                    'Skin & Hair Care',
                    'Oral Care',
                    'Menstrual & Intimate Care',
                    'Fitness & Weight Management'
                ]
            },
            'Medical Devices & Equipment': {
                icon: '🩺',
                subcategories: [
                    'Monitoring Devices (BP Monitors, Glucometers, Pulse Oximeters)',
                    'Mobility Aids (Walkers, Wheelchairs, Sticks)',
                    'Respiratory Care (Nebulizers, Oxygen Supplies)'
                ]
            },
            'Speciality Care': {
                icon: '🏥',
                subcategories: [
                    "Women's Health",
                    "Men's Health",
                    'Senior Care',
                    'Immunity Boosters',
                    'Ayurveda & Herbal Products'
                ]
            }
        };

        // Create comprehensive search terms including variations and keywords
        const searchTerms = [];
        
        // Add main categories
        Object.keys(pharmacyCategories).forEach(category => {
            searchTerms.push({
                term: category,
                type: 'main_category',
                icon: pharmacyCategories[category].icon,
                category: category
            });
            
            // Add subcategories
            pharmacyCategories[category].subcategories.forEach(sub => {
                searchTerms.push({
                    term: sub,
                    type: 'subcategory',
                    icon: '🔸',
                    category: category,
                    parent: pharmacyCategories[category].icon
                });
            });
        });

        // Add additional searchable keywords for better matching
        const additionalKeywords = [
            // Medicines keywords
            { term: 'medicines', matches: 'Medicines & Healthcare', icon: '💊' },
            { term: 'prescription', matches: 'Prescription Medicines (Upload Prescription)', icon: '📋' },
            { term: 'otc', matches: 'Over-the-Counter (OTC) Medicines', icon: '💊' },
            { term: 'diabetes', matches: 'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)', icon: '🩺' },
            { term: 'blood pressure', matches: 'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)', icon: '🩺' },
            { term: 'hypertension', matches: 'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)', icon: '🩺' },
            { term: 'asthma', matches: 'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)', icon: '🩺' },
            { term: 'thyroid', matches: 'Chronic Care (Diabetes, Hypertension, Cardiac, Asthma, Thyroid)', icon: '🩺' },
            { term: 'bandages', matches: 'First Aid & Emergency (Bandages, Antiseptics, Ointments, Thermometers)', icon: '🩹' },
            { term: 'first aid', matches: 'First Aid & Emergency (Bandages, Antiseptics, Ointments, Thermometers)', icon: '🚑' },
            { term: 'pain relief', matches: 'Pain Relief & Fever', icon: '💊' },
            { term: 'fever', matches: 'Pain Relief & Fever', icon: '🌡️' },
            { term: 'allergy', matches: 'Allergy & Cold Care', icon: '🤧' },
            { term: 'cold', matches: 'Allergy & Cold Care', icon: '🤧' },
            
            // Mother Care keywords
            { term: 'maternity', matches: 'Maternity Wear (Dresses, Nursing Wear, Innerwear)', icon: '👗' },
            { term: 'pregnancy', matches: 'Pregnancy Nutrition (Prenatal Vitamins, Supplements)', icon: '🤰' },
            { term: 'prenatal', matches: 'Pregnancy Nutrition (Prenatal Vitamins, Supplements)', icon: '🤰' },
            { term: 'breastfeeding', matches: 'Breastfeeding Essentials (Pumps, Bottles, Nipple Creams)', icon: '🍼' },
            
            // Baby Care keywords
            { term: 'diapers', matches: 'Diapers & Wipes', icon: '👶' },
            { term: 'baby', matches: 'Baby Care', icon: '👶' },
            { term: 'toys', matches: 'Toys & Learning', icon: '🧸' },
            
            // Wellness keywords
            { term: 'vitamins', matches: 'Vitamins & Supplements', icon: '💊' },
            { term: 'supplements', matches: 'Vitamins & Supplements', icon: '💊' },
            { term: 'skincare', matches: 'Skin & Hair Care', icon: '🧴' },
            { term: 'oral care', matches: 'Oral Care', icon: '🦷' },
            { term: 'fitness', matches: 'Fitness & Weight Management', icon: '💪' },
            
            // Medical Devices keywords
            { term: 'bp monitor', matches: 'Monitoring Devices (BP Monitors, Glucometers, Pulse Oximeters)', icon: '🩺' },
            { term: 'glucometer', matches: 'Monitoring Devices (BP Monitors, Glucometers, Pulse Oximeters)', icon: '🩺' },
            { term: 'wheelchair', matches: 'Mobility Aids (Walkers, Wheelchairs, Sticks)', icon: '♿' },
            { term: 'nebulizer', matches: 'Respiratory Care (Nebulizers, Oxygen Supplies)', icon: '🫁' },
            
            // Specialty Care keywords
            { term: 'women health', matches: "Women's Health", icon: '♀️' },
            { term: 'men health', matches: "Men's Health", icon: '♂️' },
            { term: 'ayurveda', matches: 'Ayurveda & Herbal Products', icon: '🌿' },
            { term: 'herbal', matches: 'Ayurveda & Herbal Products', icon: '🌿' },
            { term: 'immunity', matches: 'Immunity Boosters', icon: '🛡️' }
        ];

        // Flatten all products for search including keywords
        const allProducts = [...searchTerms];
        additionalKeywords.forEach(keyword => {
            allProducts.push({
                term: keyword.matches,
                type: 'keyword',
                icon: keyword.icon,
                keyword: keyword.term
            });
        });

        const searchInput = document.getElementById('searchInput');
        const suggestionsContainer = document.getElementById('suggestions');

        function createSuggestionItem(item, isMainCategory = false, icon = '🔍', parentIcon = '') {
            const div = document.createElement('div');
            div.className = 'suggestion-item flex items-center p-3 cursor-pointer rounded-lg transition-colors duration-150 hover:bg-blue-50';
            
            let displayIcon = icon;
            let textColor = 'text-gray-800';
            let displayText = item.term || item;
            
            if (isMainCategory) {
                textColor = 'text-blue-700 font-semibold';
                displayIcon = item.icon || icon;
                displayText = item.term || item;
            } else if (item.type === 'subcategory') {
                textColor = 'text-gray-700';
                displayIcon = item.parent + ' ' + item.icon;
                displayText = item.term;
            } else if (item.type === 'keyword') {
                textColor = 'text-green-600';
                displayIcon = item.icon;
                displayText = item.term;
            }
            
            div.innerHTML = `
                <span class="mr-3 text-lg">${displayIcon}</span>
                <span class="flex-1 ${textColor}">${displayText}</span>
                <span class="text-sm text-gray-400">→</span>
            `;
            
            div.addEventListener('click', () => {
                const searchValue = displayText;
                searchInput.value = searchValue;
                suggestionsContainer.classList.add('hidden');
                performSearch(searchValue);
            });
            
            return div;
        }

        function showSuggestions(query = '') {
            const suggestionsContent = suggestionsContainer.querySelector('.space-y-1');
            suggestionsContent.innerHTML = '';

            if (query.length === 0) {
                // Show main categories
                suggestionsContainer.querySelector('h3').textContent = 'Browse Categories';
                Object.keys(pharmacyCategories).forEach(category => {
                    const categoryData = pharmacyCategories[category];
                    const categoryItem = {
                        term: category,
                        type: 'main_category',
                        icon: categoryData.icon
                    };
                    suggestionsContent.appendChild(
                        createSuggestionItem(categoryItem, true)
                    );
                });
            } else {
                // Filter and show matching items
                suggestionsContainer.querySelector('h3').textContent = 'Search Results';
                
                // Smart search: check for matches in term, keywords, and partial matches
                const filtered = allProducts.filter(product => {
                    const searchTerm = query.toLowerCase();
                    const productTerm = (product.term || product).toLowerCase();
                    
                    // Direct match
                    if (productTerm.includes(searchTerm)) return true;
                    
                    // Keyword match
                    if (product.keyword && product.keyword.toLowerCase().includes(searchTerm)) return true;
                    
                    // Partial word match
                    const words = productTerm.split(/[\s,()&-]+/);
                    return words.some(word => word.includes(searchTerm) && word.length > 2);
                }).slice(0, 10);

                if (filtered.length > 0) {
                    // Remove duplicates and prioritize main categories
                    const seen = new Set();
                    const uniqueFiltered = filtered.filter(item => {
                        const key = item.term || item;
                        if (seen.has(key)) return false;
                        seen.add(key);
                        return true;
                    });

                    // Sort: main categories first, then subcategories, then keywords
                    uniqueFiltered.sort((a, b) => {
                        const typeOrder = { 'main_category': 0, 'subcategory': 1, 'keyword': 2 };
                        return (typeOrder[a.type] || 3) - (typeOrder[b.type] || 3);
                    });

                    uniqueFiltered.forEach(item => {
                        const isMainCategory = item.type === 'main_category';
                        suggestionsContent.appendChild(
                            createSuggestionItem(item, isMainCategory, item.icon)
                        );
                    });
                } else {
                    const noResults = document.createElement('div');
                    noResults.className = 'p-3 text-gray-500 text-center';
                    noResults.innerHTML = `
                        <div class="text-2xl mb-2">🔍</div>
                        <div>No products found for "${query}"</div>
                        <div class="text-sm mt-1">Try searching for "Vitamins", "Baby Care", "Diabetes" or "Prescription"</div>
                    `;
                    suggestionsContent.appendChild(noResults);
                }
            }

            suggestionsContainer.classList.remove('hidden');
        }

        function performSearch(query) {
            console.log('Searching for:', query);
            // Here you would typically make an API call or redirect to search results
            alert(`Searching for: ${query}`);
        }

        // Event listeners
        searchInput.addEventListener('focus', () => showSuggestions(searchInput.value));
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length > 0) {
                showSuggestions(query);
            } else {
                showSuggestions();
            }
        });

        searchInput.addEventListener('blur', (e) => {
            // Delay hiding suggestions to allow clicks
            setTimeout(() => {
                suggestionsContainer.classList.add('hidden');
            }, 150);
        });

        // Search button functionality
        document.querySelector('button[class*="bg-blue-600"]').addEventListener('click', () => {
            performSearch(searchInput.value);
        });

        // Enter key search
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });

        // Category button functionality
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const categoryMap = {
                    'Medicines': 'Medicines & Healthcare',
                    'Mother Care': 'Mother Care & Maternity',
                    'Baby Care': 'Baby Care',
                    'Wellness': 'Wellness & Personal Care',
                    'Medical Devices': 'Medical Devices & Equipment'
                };
                
                const buttonText = btn.textContent.trim();
                const categoryKey = Object.keys(categoryMap).find(key => buttonText.includes(key));
                const fullCategory = categoryMap[categoryKey] || buttonText;
                
                searchInput.value = fullCategory;
                performSearch(fullCategory);
            });
        });

        // Click outside to close suggestions
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
                suggestionsContainer.classList.add('hidden');
            }
        });

        // Sample data for 6 categories
        const categories = [
            { name: "Medicines and Healthcare", image: "https://i.pinimg.com/736x/5f/2a/27/5f2a2756630109eff806d9d0016c8753.jpg" },
            { name: "Ayurvedic Products", image: "https://i.pinimg.com/736x/69/7a/e6/697ae6759c62b242373dbec1c479b8c3.jpg" },
            { name: "Mother Care", image: "https://i.pinimg.com/736x/cc/51/7c/cc517c8747a0811de78f92910f4e0d90.jpg" },
            { name: "Baby Care", image: "https://i.pinimg.com/736x/dc/67/ec/dc67ec35b8779bd048ec4845b5cbaccd.jpg" },
            { name: "Monitoring Devices", image: "https://i.pinimg.com/736x/81/d4/dd/81d4ddbaa09ad53d075f96a95a2d5d26.jpg" },
            { name: "Wellness", image: "https://i.pinimg.com/1200x/13/5e/73/135e735adc0539ef080fc3ab5f26edf2.jpg" },
        ];

        // Sample data for products
        const products = [
            { name: "Stayfree Secure Cottony Soft Cover", image: "https://via.placeholder.com/100?text=Stayfree+Secure" },
            { name: "Stayfree Dry Max Ultra-Dry Wings 16's", image: "https://via.placeholder.com/100?text=Dry+Max" },
            { name: "Dynamic Newmom Maternity Pads", image: "https://via.placeholder.com/100?text=Newmom" },
            { name: "Stayfree Secure Ultra Thin Dry Cover", image: "https://via.placeholder.com/100?text=Ultra+Thin" },
            { name: "Stayfree Secure Cottony with Wings", image: "https://via.placeholder.com/100?text=Cottony+Wings" },
            { name: "Briyo Elderberry Plus Vitamin C", image: "https://via.placeholder.com/100?text=Elderberry" },
            { name: "Inlife Natural Vitamin C + Zinc", image: "https://via.placeholder.com/100?text=Vitamin+C+Zinc" },
            { name: "Inlife Natural Vitamin C Amla", image: "https://via.placeholder.com/100?text=Amla" },
             { name: "Stayfree Secure Cottony with Wings", image: "https://via.placeholder.com/100?text=Cottony+Wings" },
            { name: "Briyo Elderberry Plus Vitamin C", image: "https://via.placeholder.com/100?text=Elderberry" },
            { name: "Inlife Natural Vitamin C + Zinc", image: "https://via.placeholder.com/100?text=Vitamin+C+Zinc" },
            { name: "Inlife Natural Vitamin C Amla", image: "https://via.placeholder.com/100?text=Amla" },
        ];

        // Function to render categories dynamically
        function renderCategories() {
            const grid = document.getElementById('categoryGrid');
            grid.innerHTML = ''; // Clear existing content
            categories.forEach(category => {
                const card = document.createElement('div');
                card.className = 'bg-blue-100 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-shadow';
                card.innerHTML = `
                    <img src="${category.image}" alt="${category.name}" class="w-full h-40 object-cover rounded-md mb-1">
                    <p class="text-gray-800 font-medium text-sm">${category.name}</p>
                `;
                grid.appendChild(card);
            });
        }

        // Function to render products dynamically with scrolling
        function renderProducts() {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = ''; // Clear existing content
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'bg-pink-100 rounded-lg p-2 text-center shadow-md hover:shadow-lg transition-shadow min-w-[120px]';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-24 object-cover rounded-md mb-1">
                    <p class="text-gray-800 font-medium text-xs">${product.name}</p>
                `;
                grid.appendChild(card);
            });

            // Scroll functionality
            const scrollContainer = document.getElementById('productGrid');
            const scrollLeft = document.getElementById('scrollLeft');
            const scrollRight = document.getElementById('scrollRight');

            scrollLeft.addEventListener('click', () => {
                scrollContainer.scrollLeft -= 300;
            });

            scrollRight.addEventListener('click', () => {
                scrollContainer.scrollLeft += 300;
            });
        }

        // Call the functions when the page loads
        window.onload = () => {
            renderCategories();
            renderProducts();
        };
