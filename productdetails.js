// Product data (unchanged from previous response, including IDs 1–55)
const products = [
    { 
        id: 1, 
        name: 'Diabetes Care Kit', 
        price: 268.80, 
        originalPrice: 329, 
        discount: '16% off', 
        category: 'Diabetes', 
        brand: 'BrandX', 
        image: 'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg',
            'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg',
            'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg',
            'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg'
        ],
        prescriptionRequired: false,
        description: 'Comprehensive diabetes care kit containing all essential items for daily diabetes management.',
        ingredients: 'Glucometer, test strips, lancets, control solution, carrying case',
        benefits: 'Helps in regular blood sugar monitoring, convenient all-in-one kit, portable for travel',
        directions: 'Use as directed by your physician. Perform blood sugar tests as recommended.'
    },
    { 
        id: 2, 
        name: 'Glucose Monitor', 
        price: 312.50, 
        originalPrice: 625, 
        discount: '50% off', 
        category: 'Diabetes', 
        brand: 'BrandY', 
        image: 'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg'
        ],
        prescriptionRequired: false,
        description: 'Advanced glucose monitoring system with high accuracy and easy-to-use interface.',
        ingredients: 'Electronic monitoring device, user manual, batteries',
        benefits: 'Accurate readings, large display, memory function to track readings',
        directions: 'Insert test strip, apply blood sample, wait for results. Calibrate as needed.'
    },
    { 
        id: 3, 
        name: 'Insulin Pen', 
        price: 180, 
        originalPrice: 220, 
        discount: '18% off', 
        category: 'Diabetes', 
        brand: 'BrandZ', 
        image: 'https://via.placeholder.com/500x400/0ea5e9/FFFFFF?text=Insulin+Pen',
        thumbnails: [
            'https://via.placeholder.com/80x80/0ea5e9/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: true,
        description: 'Pre-filled insulin pen for convenient and accurate insulin administration.',
        ingredients: 'Insulin solution, pen device, needles',
        benefits: 'Easy to use, precise dosing, discreet administration',
        directions: 'Prime pen before use, select dose, inject as directed by healthcare provider.'
    },
    { 
        id: 4, 
        name: 'Blood Sugar Test Strips', 
        price: 75, 
        originalPrice: null, 
        discount: '', 
        category: 'Diabetes', 
        brand: 'BrandW', 
        image: 'https://via.placeholder.com/500x400/10b981/FFFFFF?text=Test+Strips',
        thumbnails: [
            'https://via.placeholder.com/80x80/10b981/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: false,
        description: 'High-quality test strips for accurate blood glucose measurement.',
        ingredients: 'Test strips, quality control solution',
        benefits: 'Accurate results, compatible with most glucometers, easy to use',
        directions: 'Insert strip into meter, apply blood sample, wait for results.'
    },
    { 
        id: 5, 
        name: 'BP Monitor', 
        price: 420, 
        originalPrice: null, 
        discount: '', 
        category: 'Hypertension', 
        brand: 'BrandZ', 
        image: 'https://via.placeholder.com/500x400/ff6b6b/FFFFFF?text=BP+Monitor',
        thumbnails: [
            'https://via.placeholder.com/80x80/ff6b6b/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: false,
        description: 'Digital blood pressure monitor for accurate at-home readings.',
        ingredients: 'Electronic monitor, cuff, user manual',
        benefits: 'Easy to use, memory function, irregular heartbeat detection',
        directions: 'Wrap cuff around arm, press start button, remain still during measurement.'
    },
    { 
        id: 6, 
        name: 'Hypertension Pills', 
        price: 105, 
        originalPrice: null, 
        discount: '', 
        category: 'Hypertension', 
        brand: 'BrandW', 
        image: 'https://via.placeholder.com/500x400/36C2CE/FFFFFF?text=Hypertension+Pills',
        thumbnails: [
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg',
            'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg'
        ],
        prescriptionRequired: true,
        description: 'Medication for managing high blood pressure.',
        ingredients: 'Active pharmaceutical ingredients as prescribed',
        benefits: 'Lowers blood pressure, reduces risk of heart attack and stroke',
        directions: 'Take as directed by your physician, usually once daily.'
    },
    { 
        id: 7, 
        name: 'Heart Health Supplement', 
        price: 300, 
        originalPrice: 350, 
        discount: '14% off', 
        category: 'Cardiac', 
        brand: 'BrandX', 
        image: 'https://via.placeholder.com/500x400/0ea5e9/FFFFFF?text=Heart+Supplement',
        thumbnails: [
            'https://via.placeholder.com/80x80/0ea5e9/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: false,
        description: 'Natural supplement to support cardiovascular health.',
        ingredients: 'Omega-3 fatty acids, CoQ10, Hawthorn extract',
        benefits: 'Supports heart function, improves circulation, antioxidant properties',
        directions: 'Take two capsules daily with meals.'
    },
    { 
        id: 8, 
        name: 'Inhaler', 
        price: 200, 
        originalPrice: 250, 
        discount: '20% off', 
        category: 'Asthma', 
        brand: 'BrandZ', 
        image: 'https://via.placeholder.com/500x400/10b981/FFFFFF?text=Inhaler',
        thumbnails: [
            'https://via.placeholder.com/80x80/10b981/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: true,
        description: 'Relief inhaler for asthma symptoms.',
        ingredients: 'Medicated aerosol as prescribed',
        benefits: 'Quick relief from asthma symptoms, portable, easy to use',
        directions: 'Shake well before use, inhale deeply as directed.'
    },
    { 
        id: 9, 
        name: 'Thyroid Supplement', 
        price: 120, 
        originalPrice: 150, 
        discount: '20% off', 
        category: 'Thyroid', 
        brand: 'BrandX', 
        image: 'https://via.placeholder.com/500x400/ff6b6b/FFFFFF?text=Thyroid+Supplement',
        thumbnails: [
            'https://via.placeholder.com/80x80/ff6b6b/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb3',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb4'
        ],
        prescriptionRequired: false,
        description: 'Natural supplement to support thyroid function.',
        ingredients: 'Iodine, Selenium, Zinc, Ashwagandha',
        benefits: 'Supports thyroid health, improves energy levels, regulates metabolism',
        directions: 'Take one tablet daily with food.'
    },
    { 
        id: 40, 
        name: 'Whisper Ultra Clean Wings', 
        price: 279, 
        originalPrice: 329, 
        discount: '15% off', 
        category: 'Feminine Care', 
        brand: 'Whisper', 
        image: 'https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg',
            'https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg',
            'https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg',
            'https://i.pinimg.com/736x/15/b9/8d/15b98d803f2e10178711489c46061497.jpg'
        ],
        prescriptionRequired: false,
        description: 'Sanitary pads with wings for superior protection and comfort.',
        ingredients: 'Cotton, absorbent polymer, adhesive',
        benefits: 'Leak-proof protection, comfortable fit, odor control',
        directions: 'Use during menstruation, change every 4-6 hours or as needed.',
        variants: ['Small', 'Medium', 'Large'] // Added variants for size selection
    },
    { 
        id: 41, 
        name: 'Sofy Anti-Bacteria Extra Long', 
        price: 259, 
        originalPrice: 310, 
        discount: '16% off', 
        category: 'Feminine Care', 
        brand: 'Sofy', 
        image: 'https://i.pinimg.com/736x/98/8e/a0/988ea0dfd9d5d8fe68a741f6fa010c20.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/98/8e/a0/988ea0dfd9d5d8fe68a741f6fa010c20.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Extra-long sanitary pads with anti-bacterial properties for enhanced hygiene.',
        ingredients: 'Cotton, absorbent gel, anti-bacterial layer',
        benefits: 'Anti-bacterial protection, long-lasting absorbency, soft on skin',
        directions: 'Use during menstruation, change every 4-6 hours or as needed.',
        variants: ['Medium', 'Large', 'Extra Large']
    },
    { 
        id: 42, 
        name: 'Bella Regular Soft Pads', 
        price: 189, 
        originalPrice: 239, 
        discount: '21% off', 
        category: 'Feminine Care', 
        brand: 'Bella', 
        image: 'https://i.pinimg.com/1200x/9e/9a/ff/9e9aff588641655ee47d3f1430291a1f.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/9e/9a/ff/9e9aff588641655ee47d3f1430291a1f.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Soft and comfortable sanitary pads for regular flow.',
        ingredients: 'Cotton, absorbent core, breathable layer',
        benefits: 'Soft and breathable, reliable absorbency, skin-friendly',
        directions: 'Use during menstruation, change every 4-6 hours or as needed.',
        variants: ['Small', 'Medium']
    },
    { 
        id: 43, 
        name: 'Tampax Pearl Regular Tampons', 
        price: 399, 
        originalPrice: 459, 
        discount: '13% off', 
        category: 'Feminine Care', 
        brand: 'Tampax', 
        image: 'https://i.pinimg.com/1200x/05/5a/31/055a316a51a66f464c778ab07c8f7c99.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/05/5a/31/055a316a51a66f464c778ab07c8f7c99.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Regular tampons with smooth applicator for comfortable insertion.',
        ingredients: 'Cotton, rayon, plastic applicator',
        benefits: 'Comfortable insertion, reliable protection, leak-proof',
        directions: 'Insert using applicator, change every 4-8 hours.',
        variants: ['Regular', 'Super']
    },
    { 
        id: 44, 
        name: 'Carefree Panty Liners', 
        price: 149, 
        originalPrice: 179, 
        discount: '17% off', 
        category: 'Feminine Care', 
        brand: 'Carefree', 
        image: 'https://i.pinimg.com/1200x/9a/ae/62/9aae62e4e98e6bc15554dc9fd3e5c713.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/9a/ae/62/9aae62e4e98e6bc15554dc9fd3e5c713.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Thin and discreet panty liners for everyday freshness.',
        ingredients: 'Cotton, absorbent layer, adhesive',
        benefits: 'Discreet protection, breathable, odor control',
        directions: 'Use daily for freshness, change as needed.'
    },
    { 
        id: 45, 
        name: 'Sirona Reusable Menstrual Cup', 
        price: 499, 
        originalPrice: 599, 
        discount: '17% off', 
        category: 'Feminine Care', 
        brand: 'Sirona', 
        image: 'https://i.pinimg.com/736x/68/04/70/6804705cf54829aa6171565b16ecae00.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/68/04/70/6804705cf54829aa6171565b16ecae00.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Reusable silicone menstrual cup for eco-friendly period protection.',
        ingredients: 'Medical-grade silicone',
        benefits: 'Eco-friendly, cost-effective, comfortable for up to 12 hours',
        directions: 'Sterilize before use, insert and remove as per instructions, clean after each use.',
        variants: ['Small', 'Medium', 'Large']
    },
    { 
        id: 46, 
        name: 'Nua Cramp Comfort Heat Patches', 
        price: 299, 
        originalPrice: 349, 
        discount: '14% off', 
        category: 'Feminine Care', 
        brand: 'Nua', 
        image: 'https://i.pinimg.com/736x/5a/f4/0a/5af40a443e4c0c0fe65384cdf70a5508.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/5a/f4/0a/5af40a443e4c0c0fe65384cdf70a5508.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Heat patches for soothing menstrual cramps.',
        ingredients: 'Iron powder, activated carbon, salt',
        benefits: 'Relieves menstrual cramps, portable, long-lasting heat',
        directions: 'Apply to lower abdomen, use for up to 8 hours.'
    },
    { 
        id: 47, 
        name: 'VWash Plus Intimate Hygiene Wash', 
        price: 229, 
        originalPrice: 269, 
        discount: '15% off', 
        category: 'Feminine Care', 
        brand: 'VWash', 
        image: 'https://i.pinimg.com/1200x/2a/30/1f/2a301fa528e6ae13eb929c3d46ba5227.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/2a/30/1f/2a301fa528e6ae13eb929c3d46ba5227.jpg',
            'https://via.placeholder.com/80x80/FF69B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Gentle wash for intimate hygiene and pH balance.',
        ingredients: 'Tea tree oil, aloe vera, lactic acid',
        benefits: 'Maintains pH balance, prevents odor, gentle cleansing',
        directions: 'Use during bathing, apply to intimate area, rinse thoroughly.'
    },
    { 
        id: 48, 
        name: 'Paracetamol 500mg', 
        price: 49, 
        originalPrice: 59, 
        discount: '17% off', 
        category: 'General Medicine', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/1200x/df/3b/b2/df3bb27c00bb0f4b54692f9000a56b1f.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/df/3b/b2/df3bb27c00bb0f4b54692f9000a56b1f.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Pain reliever and fever reducer for mild to moderate pain.',
        ingredients: 'Paracetamol',
        benefits: 'Reduces pain and fever, fast-acting, widely used',
        directions: 'Take 1-2 tablets every 4-6 hours as needed, do not exceed 4g daily.'
    },
    { 
        id: 49, 
        name: 'Ibuprofen Tablets', 
        price: 89, 
        originalPrice: 99, 
        discount: '10% off', 
        category: 'General Medicine', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/1200x/42/a4/9d/42a49d09e810f203fd7c82999efe1c51.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/42/a4/9d/42a49d09e810f203fd7c82999efe1c51.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Anti-inflammatory drug for pain relief and inflammation.',
        ingredients: 'Ibuprofen',
        benefits: 'Relieves pain, reduces inflammation, effective for headaches and muscle pain',
        directions: 'Take 1 tablet every 4-6 hours with food, do not exceed 3.2g daily.'
    },
    { 
        id: 50, 
        name: 'Digital Thermometer', 
        price: 199, 
        originalPrice: 249, 
        discount: '20% off', 
        category: 'Medical Devices', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/736x/3f/80/34/3f803459fbfc629161ae550bee4c4b75.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/3f/80/34/3f803459fbfc629161ae550bee4c4b75.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Accurate digital thermometer for measuring body temperature.',
        ingredients: 'Electronic device, battery',
        benefits: 'Fast and accurate readings, easy to use, portable',
        directions: 'Place under tongue or armpit, wait for reading, clean after use.'
    },
    { 
        id: 51, 
        name: 'Blood Pressure Monitor', 
        price: 1299, 
        originalPrice: 1499, 
        discount: '13% off', 
        category: 'Medical Devices', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/736x/86/85/b8/8685b8bc870fd478367baee1e5065fe5.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/86/85/b8/8685b8bc870fd478367baee1e5065fe5.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Digital blood pressure monitor for accurate at-home readings.',
        ingredients: 'Electronic monitor, cuff, user manual',
        benefits: 'Easy to use, memory function, irregular heartbeat detection',
        directions: 'Wrap cuff around arm, press start button, remain still during measurement.'
    },
    { 
        id: 52, 
        name: 'Vitamin C Supplements', 
        price: 299, 
        originalPrice: 349, 
        discount: '14% off', 
        category: 'Supplements', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/736x/6e/8f/a8/6e8fa8670eacd8fdd912a4f040c47875.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/6e/8f/a8/6e8fa8670eacd8fdd912a4f040c47875.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Vitamin C supplements to boost immunity and overall health.',
        ingredients: 'Vitamin C, fillers',
        benefits: 'Boosts immunity, supports skin health, antioxidant properties',
        directions: 'Take one tablet daily with water.'
    },
    { 
        id: 53, 
        name: 'Diabetes Test Strips', 
        price: 499, 
        originalPrice: 599, 
        discount: '17% off', 
        category: 'Diabetes', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/736x/f3/fd/72/f3fd721aeac334de1a8fd9ca53a43f19.jpg',
        thumbnails: [
            'https://i.pinimg.com/736x/f3/fd/72/f3fd721aeac334de1a8fd9ca53a43f19.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'High-quality test strips for accurate blood glucose measurement.',
        ingredients: 'Test strips, quality control solution',
        benefits: 'Accurate results, compatible with most glucometers, easy to use',
        directions: 'Insert strip into meter, apply blood sample, wait for results.'
    },
    { 
        id: 54, 
        name: 'First Aid Kit', 
        price: 349, 
        originalPrice: 399, 
        discount: '13% off', 
        category: 'Medical Devices', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/1200x/94/6a/25/946a25a8467b2cfc3bbee39bb13c2751.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/94/6a/25/946a25a8467b2cfc3bbee39bb13c2751.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: false,
        description: 'Compact first aid kit for minor injuries and emergencies.',
        ingredients: 'Bandages, antiseptic wipes, gauze, adhesive tape',
        benefits: 'Portable, comprehensive, essential for emergencies',
        directions: 'Use as needed for minor injuries, follow instructions for each item.'
    },
    { 
        id: 55, 
        name: 'Asthma Inhaler', 
        price: 189, 
        originalPrice: 219, 
        discount: '14% off', 
        category: 'Asthma', 
        brand: 'Generic', 
        image: 'https://i.pinimg.com/1200x/d3/0f/4c/d30f4c670beb8884b309c0068c11afcf.jpg',
        thumbnails: [
            'https://i.pinimg.com/1200x/d3/0f/4c/d30f4c670beb8884b309c0068c11afcf.jpg',
            'https://via.placeholder.com/80x80/4682B4/FFFFFF?text=Thumb1',
            'https://via.placeholder.com/80x80/FF6347/FFFFFF?text=Thumb2',
            'https://via.placeholder.com/80x80/32CD32/FFFFFF?text=Thumb3'
        ],
        prescriptionRequired: true,
        description: 'Relief inhaler for asthma symptoms.',
        ingredients: 'Medicated aerosol as prescribed',
        benefits: 'Quick relief from asthma symptoms, portable, easy to use',
        directions: 'Shake well before use, inhale deeply as directed.'
    }
];

// Initialize cart from localStorage or create an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count in the UI
function updateCartCount() {
    const cartCountElement = document.querySelector('.fa-shopping-cart + span');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    } else {
        console.warn('Cart count element not found on this page');
    }
}

// Function to add product to cart
function addToCart(product) {
    // Check for existing item based on id, variant, and size
    const existingItem = cart.find(item => 
        item.id === product.id && 
        item.variant === product.variant && 
        item.size === product.size
    );
    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if identical item exists
    } else {
        cart.push({ ...product, quantity: 1 }); // Add new product to cart
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Function to get URL parameters
function getUrlParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    for (const [key, value] of urlParams) {
        params[key] = value;
    }
    return params;
}

// Function to render thumbnails
function renderThumbnails(thumbnails) {
    const thumbnailContainer = document.getElementById('thumbnail-container');
    if (thumbnailContainer) {
        thumbnailContainer.innerHTML = '';
        thumbnails.forEach((thumbSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = thumbSrc;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.className = 'w-20 h-20 object-contain border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-pharmacy-blue hover:shadow-md';
            thumbnail.classList.add(index === 0 ? 'border-pharmacy-blue' : 'border-gray-200');
            thumbnail.addEventListener('click', () => {
                document.getElementById('main-product-image').src = thumbSrc;
                document.querySelectorAll('#thumbnail-container img').forEach(img => {
                    img.classList.remove('border-pharmacy-blue');
                    img.classList.add('border-gray-200');
                });
                thumbnail.classList.add('border-pharmacy-blue');
                thumbnail.classList.remove('border-gray-200');
            });
            thumbnailContainer.appendChild(thumbnail);
        });
    }
}

// Function to render variants
function renderVariants(variants) {
    const variantOptions = document.getElementById('variant-options');
    if (variantOptions) {
        variantOptions.innerHTML = '';
        variants.forEach((variant, index) => {
            const button = document.createElement('button');
            button.className = `variant-btn px-4 py-2 border ${index === 0 ? 'border-2 border-pharmacy-blue bg-pharmacy-light-blue text-pharmacy-blue font-semibold' : 'border-gray-300 bg-white text-gray-700'} rounded-lg transition-all duration-200 hover:border-pharmacy-blue hover:shadow-md`;
            button.textContent = variant;
            button.addEventListener('click', () => {
                document.querySelectorAll('.variant-btn').forEach(btn => {
                    btn.classList.remove('border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                    btn.classList.add('border-gray-300', 'bg-white', 'text-gray-700');
                });
                button.classList.add('border-2', 'border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                button.classList.remove('border-gray-300', 'bg-white', 'text-gray-700');
            });
            variantOptions.appendChild(button);
        });
    }
}

// Function to render size options
function renderSizes(sizes) {
    const sizeOptions = document.getElementById('size-options');
    if (sizeOptions) {
        sizeOptions.innerHTML = '';
        sizes.forEach((size, index) => {
            const button = document.createElement('button');
            button.className = `size-btn px-4 py-2 border ${index === 0 ? 'border-2 border-pharmacy-blue bg-pharmacy-light-blue text-pharmacy-blue font-semibold' : 'border-gray-300 bg-white text-gray-700'} rounded-lg transition-all duration-200 hover:border-pharmacy-blue hover:shadow-md`;
            button.textContent = size;
            button.addEventListener('click', () => {
                document.querySelectorAll('.size-btn').forEach(btn => {
                    btn.classList.remove('border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                    btn.classList.add('border-gray-300', 'bg-white', 'text-gray-700');
                });
                button.classList.add('border-2', 'border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                button.classList.remove('border-gray-300', 'bg-white', 'text-gray-700');
            });
            sizeOptions.appendChild(button);
        });
    }
}

// Function to render related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProductsContainer = document.getElementById('related-products');
    if (relatedProductsContainer) {
        relatedProductsContainer.innerHTML = '';
        let relatedProducts = products.filter(p => p.category === category && p.id != currentProductId);
        if (relatedProducts.length < 4) {
            const otherProducts = products.filter(p => p.category !== category && p.id != currentProductId).slice(0, 4 - relatedProducts.length);
            relatedProducts = [...relatedProducts, ...otherProducts];
        }
        relatedProducts.slice(0, 4).forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group';
            productCard.innerHTML = `
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain p-4 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div class="p-4">
                    <h4 class="font-bold text-gray-900 mb-1 group-hover:text-pharmacy-blue transition-colors duration-200">${product.name}</h4>
                    <p class="text-gray-600 text-sm mb-3">${product.brand}</p>
                    <div class="flex items-center gap-2">
                        <span class="text-pharmacy-blue font-bold">₹${product.price}</span>
                        ${product.originalPrice ? `<span class="text-gray-400 line-through text-sm">₹${product.originalPrice}</span>` : ''}
                        ${product.discount ? `<span class="text-sm font-semibold text-green-600">${product.discount}</span>` : ''}
                    </div>
                    ${product.prescriptionRequired ? '<div class="text-red-500 text-xs mt-2 font-medium">Prescription Required</div>' : ''}
                    <a href="productdetails.html?id=${product.id}" class="btn-add-to-cart mt-2 bg-gradient-to-r from-pharmacy-blue to-pharmacy-dark-blue hover:from-pharmacy-dark-blue hover:to-pharmacy-blue text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                        <i class="fas fa-shopping-cart"></i>
                        Add to Cart
                    </a>
                </div>
            `;
            productCard.addEventListener('click', (e) => {
                if (!e.target.closest('.btn-add-to-cart')) {
                    window.location.href = `productdetails.html?id=${product.id}`;
                }
            });
            relatedProductsContainer.appendChild(productCard);
        });
    }
}

// Function to initialize tabs
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('border-pharmacy-blue', 'text-pharmacy-blue', 'bg-pharmacy-light-blue');
                t.classList.add('border-transparent', 'text-gray-600', 'hover:text-pharmacy-blue', 'hover:bg-gray-50');
            });
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            tab.classList.add('border-pharmacy-blue', 'text-pharmacy-blue', 'bg-pharmacy-light-blue');
            tab.classList.remove('border-transparent', 'text-gray-600', 'hover:text-pharmacy-blue', 'hover:bg-gray-50');
            document.getElementById(tab.dataset.tab).classList.remove('hidden');
        });
    });
}

// Function to initialize selection buttons (variants, age, size)
function initSelectionButtons() {
    document.querySelectorAll('.variant-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.variant-btn').forEach(b => {
                b.classList.remove('border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                b.classList.add('border-gray-300', 'bg-white', 'text-gray-700');
            });
            btn.classList.add('border-2', 'border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
            btn.classList.remove('border-gray-300', 'bg-white', 'text-gray-700');
        });
    });
    document.querySelectorAll('.age-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.age-btn').forEach(b => {
                b.classList.remove('border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                b.classList.add('border-gray-300', 'bg-white', 'text-gray-700');
            });
            btn.classList.add('border-2', 'border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
            btn.classList.remove('border-gray-300', 'bg-white', 'text-gray-700');
        });
    });
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.size-btn').forEach(b => {
                b.classList.remove('border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
                b.classList.add('border-gray-300', 'bg-white', 'text-gray-700');
            });
            btn.classList.add('border-2', 'border-pharmacy-blue', 'bg-pharmacy-light-blue', 'text-pharmacy-blue', 'font-semibold');
            btn.classList.remove('border-gray-300', 'bg-white', 'text-gray-700');
        });
    });
}

// Function to initialize cart functionality
function initCart() {
    updateCartCount();
    const addToCartButton = document.querySelector('.btn-add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const params = getUrlParams();
            const productId = params.id || '1';
            const product = products.find(p => p.id == productId);
            if (product) {
                const selectedVariant = document.querySelector('.variant-btn.border-pharmacy-blue')?.textContent || 'Default';
                const selectedAge = document.querySelector('.age-btn.border-pharmacy-blue')?.textContent || null;
                const selectedSize = document.querySelector('.size-btn.border-pharmacy-blue')?.textContent || null;
                const cartItem = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    variant: selectedVariant,
                    age: selectedAge,
                    size: selectedSize,
                    prescriptionRequired: product.prescriptionRequired,
                    brand: product.brand,
                    quantity: 1
                };
                addToCart(cartItem);
                alert(`${product.name}${selectedSize ? ' (' + selectedSize + ')' : ''} added to cart!`);
            } else {
                console.error('Product not found');
                alert('Product not found. Please try again.');
            }
        });
    } else {
        console.error('Add to Cart button not found');
    }
    const buyNowButton = document.querySelector('.btn-buy-now');
    if (buyNowButton) {
        buyNowButton.addEventListener('click', () => {
            alert('Proceeding to checkout!');
            // Add checkout logic here
        });
    }
}

// Function to load product data
function loadProductData() {
    const params = getUrlParams();
    const productId = params.id || '1';
    const product = products.find(p => p.id == productId);
    if (product) {
        // Update product details
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('selling-price').textContent = `₹${product.price}`;
        if (product.originalPrice) {
            document.getElementById('original-price').textContent = `₹${product.originalPrice}`;
            document.getElementById('discount').textContent = product.discount;
            document.getElementById('original-price').style.display = 'inline';
            document.getElementById('discount').style.display = 'inline';
        } else {
            document.getElementById('original-price').style.display = 'none';
            document.getElementById('discount').style.display = 'none';
        }
        document.getElementById('product-description').textContent = product.description || 'No description available.';
        document.getElementById('product-ingredients').textContent = product.ingredients || 'Not specified.';
        document.getElementById('product-benefits').textContent = product.benefits || 'Not specified.';
        document.getElementById('product-directions').textContent = product.directions || 'Use as directed.';
        document.getElementById('main-product-image').src = product.image;
        document.getElementById('main-product-image').alt = product.name;

        // Handle prescription badge
        const prescriptionBadge = document.getElementById('prescription-badge');
        if (prescriptionBadge) {
            if (product.prescriptionRequired) {
                prescriptionBadge.classList.remove('hidden');
            } else {
                prescriptionBadge.classList.add('hidden');
            }
        }

        // Handle conditional sections
        const babyCareSection = document.getElementById('baby-care-section');
        const motherCareSection = document.getElementById('mother-care-section');
        if (babyCareSection && motherCareSection) {
            if (product.category === 'Baby Care') {
                babyCareSection.classList.remove('hidden');
                motherCareSection.classList.add('hidden');
            } else if (product.category === 'Mother Care' || product.category === 'Feminine Care') {
                motherCareSection.classList.remove('hidden');
                babyCareSection.classList.add('hidden');
            } else {
                babyCareSection.classList.add('hidden');
                motherCareSection.classList.add('hidden');
            }
        }

        // Render thumbnails
        renderThumbnails(product.thumbnails || [product.image]);

        // Render variants and sizes
        const variants = product.variants || ['Default', 'Option 1', 'Option 2'];
        renderVariants(variants);
        const sizes = product.variants || []; // Use variants as sizes for consistency
        if (sizes.length > 0) {
            renderSizes(sizes);
        }
    } else {
        document.getElementById('product-name').textContent = 'Product Not Found';
        document.getElementById('product-description').textContent = 'The requested product could not be found. Please check the product ID and try again.';
        document.getElementById('selling-price').textContent = '';
        document.getElementById('original-price').style.display = 'none';
        document.getElementById('discount').style.display = 'none';
        document.getElementById('main-product-image').src = 'https://via.placeholder.com/500x400?text=Not+Found';
        document.getElementById('thumbnail-container').innerHTML = '';
        document.getElementById('related-products').innerHTML = '<p class="text-center text-gray-500">No related products available.</p>';
    }
}

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProductData();
    initTabs();
    initSelectionButtons();
    initCart();
});