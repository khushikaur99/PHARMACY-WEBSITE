
        // Initialize cart count from localStorage
        function updateCartCount() {
            const cartCountElement = document.getElementById('cart-count');
            if (cartCountElement) {
                const cartCount = localStorage.getItem('cartCount') || 0;
                cartCountElement.textContent = cartCount;
            }
        }

        // Listen for storage changes to update cart count dynamically
        window.addEventListener('storage', (event) => {
            if (event.key === 'cartCount') {
                updateCartCount();
            }
        });

        // Carousel functionality
        const carousel = document.getElementById("carousel");
        const slides = carousel.children.length;
        const dots = document.querySelectorAll(".dot");

        let index = 0;

        function showSlide(i) {
            index = (i + slides) % slides; // loop around
            carousel.style.transform = `translateX(-${index * 100}%)`;

            // Update dots
            dots.forEach((dot, idx) => {
                dot.classList.toggle("opacity-100", idx === index);
                dot.classList.toggle("opacity-50", idx !== index);
            });
        }

        // Buttons
        document.getElementById("prev").onclick = () => showSlide(index - 1);
        document.getElementById("next").onclick = () => showSlide(index + 1);

        // Dots click
        dots.forEach((dot, idx) => {
            dot.addEventListener("click", () => showSlide(idx));
        });

        // Auto play every 4s
        setInterval(() => showSlide(index + 1), 4000);

        // Init
        showSlide(0);

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
            { name: "Medicines and Healthcare", image: "/IMG/Medicines & Healthcare.jpg" },
            { name: "Ayurvedic Products", image: "/IMG/Ayurvedic Products.jpg" },
            { name: "Mother Care", image: "/IMG/Mother_Care[1].jpg" },
            { name: "Baby Care", image: "/IMG/Baby Care.jpg" },
            { name: "Monitoring Devices", image: "/IMG/Monitoring Devices.jpg" },
            { name: "Wellness", image: "/IMG/Wellness.jpg" },
        ];

        // Sample data for Feminine Hygiene Products with IDs starting from 40
        const products = [
            { 
                id: 40,
                name: "Whisper Ultra Clean Wings", 
                image: "https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg",
                price: "₹279",
                originalPrice: "₹329",
                discount: "15% off",
                description: "Whisper Ultra Clean Wings provide superior protection with a comfortable fit, designed for heavy flow days."
            },
            { 
                id: 41,
                name: "Sofy Anti-Bacteria Extra Long", 
                image: "https://i.pinimg.com/736x/98/8e/a0/988ea0dfd9d5d8fe68a741f6fa010c20.jpg",
                price: "₹259",
                originalPrice: "₹310",
                discount: "16% off",
                description: "Sofy Anti-Bacteria Extra Long pads offer extended coverage and antibacterial protection for all-day comfort."
            },
            { 
                id: 42,
                name: "Bella Regular Soft Pads", 
                image: "https://i.pinimg.com/1200x/9e/9a/ff/9e9aff588641655ee47d3f1430291a1f.jpg",
                price: "₹189",
                originalPrice: "₹239",
                discount: "21% off",
                description: "Bella Regular Soft Pads are gentle on skin, providing reliable protection and comfort."
            },
            { 
                id: 43,
                name: "Tampax Pearl Regular Tampons", 
                image: "https://i.pinimg.com/1200x/05/5a/31/055a316a51a66f464c778ab07c8f7c99.jpg",
                price: "₹399",
                originalPrice: "₹459",
                discount: "13% off",
                description: "Tampax Pearl Regular Tampons offer smooth insertion and reliable leak protection."
            },
            { 
                id: 44,
                name: "Carefree Panty Liners", 
                image: "https://i.pinimg.com/1200x/9a/ae/62/9aae62e4e98e6bc15554dc9fd3e5c713.jpg",
                price: "₹149",
                originalPrice: "₹179",
                discount: "17% off",
                description: "Carefree Panty Liners are thin and comfortable, perfect for daily freshness."
            },
            { 
                id: 45,
                name: "Sirona Reusable Menstrual Cup", 
                image: "https://i.pinimg.com/736x/68/04/70/6804705cf54829aa6171565b16ecae00.jpg",
                price: "₹499",
                originalPrice: "₹599",
                discount: "17% off",
                description: "Sirona Reusable Menstrual Cup is eco-friendly and provides up to 12 hours of leak-free protection."
            },
            { 
                id: 46,
                name: "Nua Cramp Comfort Heat Patches", 
                image: "https://i.pinimg.com/736x/5a/f4/0a/5af40a443e4c0c0fe65384cdf70a5508.jpg",
                price: "₹299",
                originalPrice: "₹349",
                discount: "14% off",
                description: "Nua Cramp Comfort Heat Patches provide soothing relief from menstrual cramps."
            },
            { 
                id: 47,
                name: "VWash Plus Intimate Hygiene Wash", 
                image: "https://i.pinimg.com/1200x/2a/30/1f/2a301fa528e6ae13eb929c3d46ba5227.jpg",
                price: "₹229",
                originalPrice: "₹269",
                discount: "15% off",
                description: "VWash Plus Intimate Hygiene Wash maintains pH balance and keeps you fresh all day."
            }
        ];

        // Common Medicines and Devices products with IDs continuing from 48
        const medicines = [
            { 
                id: 48,
                name: "Paracetamol 500mg", 
                image: "https://i.pinimg.com/1200x/df/3b/b2/df3bb27c00bb0f4b54692f9000a56b1f.jpg",
                price: "₹49",
                originalPrice: "₹59",
                discount: "17% off",
                description: "Paracetamol 500mg tablets provide effective relief from pain and fever."
            },
            { 
                id: 49,
                name: "Ibuprofen Tablets", 
                image: "https://i.pinimg.com/1200x/42/a4/9d/42a49d09e810f203fd7c82999efe1c51.jpg",
                price: "₹89",
                originalPrice: "₹99",
                discount: "10% off",
                description: "Ibuprofen Tablets help reduce inflammation, pain, and fever."
            },
            { 
                id: 50,
                name: "Digital Thermometer", 
                image: "https://i.pinimg.com/736x/3f/80/34/3f803459fbfc629161ae550bee4c4b75.jpg",
                price: "₹199",
                originalPrice: "₹249",
                discount: "20% off",
                description: "Digital Thermometer provides accurate and quick temperature readings."
            },
            { 
                id: 51,
                name: "Blood Pressure Monitor", 
                image: "https://i.pinimg.com/736x/86/85/b8/8685b8bc870fd478367baee1e5065fe5.jpg",
                price: "₹1299",
                originalPrice: "₹1499",
                discount: "13% off",
                description: "Blood Pressure Monitor for easy and accurate home monitoring."
            },
            { 
                id: 52,
                name: "Vitamin C Supplements", 
                image: "https://i.pinimg.com/736x/6e/8f/a8/6e8fa8670eacd8fdd912a4f040c47875.jpg",
                price: "₹299",
                originalPrice: "₹349",
                discount: "14% off",
                description: "Vitamin C Supplements boost immunity and support overall health."
            },
            { 
                id: 53,
                name: "Diabetes Test Strips", 
                image: "https://i.pinimg.com/736x/f3/fd/72/f3fd721aeac334de1a8fd9ca53a43f19.jpg",
                price: "₹499",
                originalPrice: "₹599",
                discount: "17% off",
                description: "Diabetes Test Strips for accurate blood glucose monitoring."
            },
            { 
                id: 54,
                name: "First Aid Kit", 
                image: "https://i.pinimg.com/1200x/94/6a/25/946a25a8467b2cfc3bbee39bb13c2751.jpg",
                price: "₹349",
                originalPrice: "₹399",
                discount: "13% off",
                description: "First Aid Kit with essential supplies for emergency care."
            },
            { 
                id: 55,
                name: "Asthma Inhaler", 
                image: "https://i.pinimg.com/1200x/d3/0f/4c/d30f4c670beb8884b309c0068c11afcf.jpg",
                price: "₹189",
                originalPrice: "₹219",
                discount: "14% off",
                description: "Asthma Inhaler for quick relief from asthma symptoms."
            }
        ];

        // NEW: Dynamic data for Doctor Section
        const doctorData = [
            {
                name: "Dr. Alok Gandhi",
                title: "MBBS, DGO (ObGyn)",
                experience: "8 years",
                achievements: "8,000 successful deliveries, MyFm Sangli’s Award for excellence in infertility management",
                association: "Indian Medical Association (IMA)",
                image: "https://i.pinimg.com/736x/02/23/c5/0223c5a858e8c9e57e8f73dfadad85d0.jpg",
                description: "Dr. Alok Gandhi brings over 8 years of experience in maternal and reproductive healthcare. He has performed over 8,000 successful deliveries, including cesarean, vaginal, forceps, vacuum-assisted, preterm, and post-date cases. Recipient of MyFm Sangli’s Award for excellence in infertility management, Dr. Gandhi combines advanced medical expertise with compassion, ensuring safe and personalized care for every patient. An active member of the Indian Medical Association (IMA), he regularly updates his knowledge through seminars, workshops, and conferences. Dr. Gandhi’s patient-centered approach helps individuals navigate complex pregnancies with confidence and peace of mind.",
                backgroundImage: "IMG/BG44.jpg"
            }
            // Add more doctors if needed
        ];

        // NEW: Dynamic data for Articles
        const articlesData = [
            {
                title: "Tips for a Balanced Diet",
                image: "https://i.pinimg.com/736x/9d/22/4a/9d224aeb2f9d4a66d048b5d4d4802cd3.jpg",
                description: "Learn how to maintain a balanced diet with our expert tips on nutrition and meal planning.",
                link: "#"
            },
            {
                title: "Mental Health Matters",
                image: "https://i.pinimg.com/736x/95/50/7b/95507ba220ef508566c715ed9a6e13b1.jpg",
                description: "Explore strategies to support your mental health and reduce stress in daily life.",
                link: "#"
            },
            {
                title: "Benefits of Regular Exercise",
                image: "https://i.pinimg.com/736x/8f/8f/57/8f8f570f1021bff9305fc72ec3be82e5.jpg",
                description: "Discover how regular physical activity can improve your health and well-being.",
                link: "#"
            }
            // Add more articles if needed
        ];

        // NEW: Dynamic data for Why Choose Us
        const whyChooseData = [
            {
                icon: "fas fa-shipping-fast",
                title: "Fast & Reliable Delivery",
                description: "Enjoy swift and dependable delivery of your medications right to your doorstep, ensuring you never miss a dose."
            },
            {
                icon: "fas fa-shield-alt",
                title: "Trusted Quality Products",
                description: "We partner with certified suppliers to provide only the highest-quality medications and health products."
            },
            {
                icon: "fas fa-headset",
                title: "24/7 Expert Support",
                description: "Our dedicated team is available around the clock to answer your questions and provide personalized assistance."
            }
            // Add more features if needed
        ];

        // NEW: Dynamic data for Footer
        const footerData = {
            company: {
                name: "MediCare Pharmacy",
                description: "Your trusted source for quality medications and health products."
            },
            quickLinks: [
                { text: "Home", link: "#" },
                { text: "Shop", link: "#" },
                { text: "About Us", link: "#" },
                { text: "Contact", link: "#" }
            ],
            contact: {
                email: "support@medicarepharmacy.com",
                phone: "(123) 456-7890",
                social: [
                    { icon: "fab fa-facebook-f", link: "#" },
                    { icon: "fab fa-twitter", link: "#" },
                    { icon: "fab fa-instagram", link: "#" }
                ]
            },
            copyright: "&copy; 2025 MediCare Pharmacy. All rights reserved."
        };

        // Function to show product details by redirecting to productDetails.html
        function showProductDetails(product) {
            // Encode product data to pass as query parameters
            const queryParams = new URLSearchParams({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                originalPrice: product.originalPrice,
                discount: product.discount,
                description: product.description
            }).toString();

            // Redirect to productDetails.html with query parameters
            window.location.href = `productDetails.html?${queryParams}`;
        }

        // Function to render categories dynamically
        function renderCategories() {
            const grid = document.getElementById('categoryGrid');
            if (!grid) return;
            
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
            if (!grid) return;
            
            grid.innerHTML = ''; // Clear existing content
            
            products.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 min-w-[250px] flex flex-col';
                
                card.innerHTML = `
                    <div class="relative mb-3">
                        <div class="absolute top-2 right-2 z-10">
                            <button class="wishlist-icon bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded-md mb-2">
                    </div>
                    <div class="flex-1 flex flex-col">
                        <h3 class="text-sm font-semibold text-gray-800 mb-2">${product.name}</h3>
                        <div class="mt-auto">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-lg font-bold text-gray-900">${product.price}</span>
                                <span class="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                                <span class="text-sm font-semibold text-green-600 ml-2">${product.discount}</span>
                            </div>
                            <button class="view-details-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                <i class="fas fa-info-circle mr-2"></i>View Details
                            </button>
                        </div>
                    </div>
                `;
                
                card.querySelector('.view-details-btn').addEventListener('click', () => {
                    showProductDetails(product);
                });
                
                grid.appendChild(card);
            });

            // Scroll functionality for products
            const scrollContainer = document.getElementById('productGrid');
            const scrollLeft = document.getElementById('scrollLeft');
            const scrollRight = document.getElementById('scrollRight');

            if (scrollLeft && scrollRight) {
                scrollLeft.addEventListener('click', () => {
                    scrollContainer.scrollLeft -= 300;
                });

                scrollRight.addEventListener('click', () => {
                    scrollContainer.scrollLeft += 300;
                });
            }
        }

        function renderMedicines() {
            const grid = document.getElementById('medicineGrid');
            if (!grid) return;
            
            grid.innerHTML = ''; // Clear existing content
            
            medicines.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 min-w-[250px] flex flex-col';
                
                card.innerHTML = `
                    <div class="relative mb-3">
                        <div class="absolute top-2 right-2 z-10">
                            <button class="wishlist-icon bg-white p-2 rounded-full shadow-md text-gray-400 hover:text-red-500">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded-md mb-2">
                    </div>
                    <div class="flex-1 flex flex-col">
                        <h3 class="text-sm font-semibold text-gray-800 mb-2">${product.name}</h3>
                        <div class="mt-auto">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-lg font-bold text-gray-900">${product.price}</span>
                                <span class="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                                <span class="text-sm font-semibold text-green-600 ml-2">${product.discount}</span>
                            </div>
                            <button class="view-details-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                <i class="fas fa-info-circle mr-2"></i>View Details
                            </button>
                        </div>
                    </div>
                `;
                
                card.querySelector('.view-details-btn').addEventListener('click', () => {
                    showProductDetails(product);
                });
                
                grid.appendChild(card);
            });

            // Scroll functionality for medicines
            const scrollContainer = document.getElementById('medicineGrid');
            const scrollLeft = document.getElementById('medScrollLeft');
            const scrollRight = document.getElementById('medScrollRight');

            if (scrollLeft && scrollRight) {
                scrollLeft.addEventListener('click', () => {
                    scrollContainer.scrollLeft -= 300;
                });

                scrollRight.addEventListener('click', () => {
                    scrollContainer.scrollLeft += 300;
                });
            }
        }

        // NEW: Function to render Doctor Section dynamically
        function renderDoctorSection() {
            const section = document.getElementById('doctorSection');
            if (!section || doctorData.length === 0) return;

            const doctor = doctorData[0]; // Render first doctor; extend for multiple if needed
            section.innerHTML = `
                <!-- Background -->
                <div class="absolute inset-0">
                    <img src="${doctor.backgroundImage}" 
                         alt="Background" 
                         class="w-full h-[620px] object-cover">
                    <div class="absolute inset-0 bg-white/10"></div> <!-- Light overlay -->
                </div>

                <!-- Merged Card -->
                <div class="relative w-full py-8 px-8 lg:px-12">
                    <div class="max-w-8xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                      
                      <!-- Doctor Image (Left side) -->
                      <div class="h-[550px]">
                        <img src="${doctor.image}" 
                             alt="${doctor.name}" 
                             class="w-full h-full object-cover">
                      </div>

                      <!-- About Content (Right side) -->
                      <div class="p-8 flex flex-col justify-between">
                        <div>
                          <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            Meet ${doctor.name}
                          </h1>
                          
                          <h2 class="text-2xl font-semibold text-gray-800 mb-3">
                            ${doctor.title}
                          </h2>
                          
                          <p class="text-[17px] text-gray-800 mb-4 leading-relaxed">
                            ${doctor.description.split('.')[0]} <!-- First sentence for experience -->
                          </p>
                          
                          <p class="text-[17px] text-gray-800 mb-4 leading-relaxed">
                            Recipient of <span class="font-semibold">${doctor.achievements.split(',')[1]}</span> for excellence in infertility management, Dr. Gandhi combines advanced medical expertise with compassion, ensuring safe and personalized care for every patient.
                          </p>
                          
                          <p class="text-[17px] text-gray-700 mb-4 leading-relaxed">
                            An active member of the <span class="font-semibold">${doctor.association}</span>, he regularly updates his knowledge through seminars, workshops, and conferences. Dr. Gandhi’s patient-centered approach helps individuals navigate complex pregnancies with confidence and peace of mind.
                          </p>
                        </div>

                        <div class="mt-6 w-20 h-1 bg-pink-500"></div>
                      </div>

                    </div>
                </div>
            `;
        }

        // NEW: Function to render Articles Section dynamically
        function renderArticlesSection() {
            const section = document.getElementById('articlesSection');
            if (!section) return;

            section.innerHTML = `
                <h2 class="text-2xl font-bold text-center mb-6">Health & Wellness Articles</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${articlesData.map(article => `
                        <div class="article-card bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
                                <p class="text-gray-600 mb-4">${article.description}</p>
                                <a href="${article.link}" class="text-primary hover:text-secondary font-medium">Read More</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // NEW: Function to render Why Choose Us Section dynamically
        function renderWhyChooseSection() {
            const section = document.getElementById('whyChooseSection');
            if (!section) return;

            section.innerHTML = `
                <div class="container mx-auto px-4">
                    <h2 class="text-3xl md:text-4xl font-bold text-center text-dark mb-10">Why Choose MediCare?</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${whyChooseData.map(feature => `
                            <div class="why-choose-card bg-white rounded-lg p-8 text-center shadow-md">
                                <div class="relative inline-block mb-6">
                                    <i class="${feature.icon} text-5xl text-accent"></i>
                                    <div class="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                                        <i class="fas fa-check"></i>
                                    </div>
                                </div>
                                <h3 class="text-2xl font-semibold text-dark mb-4">${feature.title}</h3>
                                <p class="text-gray-600">${feature.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        // NEW: Function to render Footer dynamically
        function renderFooter() {
            const section = document.getElementById('footerSection');
            if (!section) return;

            const { company, quickLinks, contact, copyright } = footerData;
            section.innerHTML = `
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold mb-4">${company.name}</h3>
                            <p class="text-gray-300">${company.description}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                ${quickLinks.map(link => `<li><a href="${link.link}" class="text-gray-300 hover:text-primary">${link.text}</a></li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                            <p class="text-gray-300">Email: ${contact.email}</p>
                            <p class="text-gray-300">Phone: ${contact.phone}</p>
                            <div class="flex space-x-4 mt-4">
                                ${contact.social.map(social => `<a href="${social.link}" class="text-gray-300 hover:text-primary"><i class="${social.icon}"></i></a>`).join('')}
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 text-center text-gray-400">
                        <p>${copyright}</p>
                    </div>
                </div>
            `;
        }

        // Open Upload Prescription modal
        document.querySelectorAll('a[href="#upload-prescription"]').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('uploadModal').classList.remove('hidden');
            });
        });

        // Close Upload modal when clicking backdrop
        document.getElementById('uploadModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });

        // Open Valid Prescription Modal
        document.getElementById('validPrescriptionBtn').addEventListener('click', function() {
            document.getElementById('validPrescriptionModal').classList.remove('hidden');
        });

        // Close Valid Prescription modal when clicking backdrop
        document.getElementById('validPrescriptionModal').addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });

        // Call all functions when the page loads
        window.onload = () => {
            updateCartCount(); // Initialize cart count
            renderCategories();
            renderProducts();
            renderMedicines();
            renderDoctorSection(); // NEW
            renderArticlesSection(); // NEW
            renderWhyChooseSection(); // NEW
            renderFooter(); // NEW
        };
  