document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart from localStorage
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const products = [
    // Diabetes Category (6 products)
    { id: 1, name: 'Diabetes Care Kit', price: 268.80, originalPrice: 329, discount: '16% off', category: 'Diabetes', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/fc/ae/6e/fcae6eadb23d4025c2ee3fb7d12222a3.jpg', prescriptionRequired: false },
    { id: 2, name: 'Glucose Monitor', price: 312.50, originalPrice: 625, discount: '50% off', category: 'Diabetes', brand: 'BrandY', image: 'https://i.pinimg.com/736x/9b/09/c7/9b09c72b81855836ae8d27d1451f345c.jpg', prescriptionRequired: false },
    { id: 3, name: 'Insulin Pen', price: 180, originalPrice: 220, discount: '18% off', category: 'Diabetes', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/8c/98/c0/8c98c0b824d4297ac6ef98d31313e68a.jpg', prescriptionRequired: true },
    { id: 4, name: 'Blood Sugar Test Strips', price: 75, originalPrice: null, discount: '', category: 'Diabetes', brand: 'BrandW', image: 'https://i.pinimg.com/736x/50/94/3b/50943b109020ca1be3acbf7a555ef79b.jpg', prescriptionRequired: false },
    { id: 5, name: 'Diabetic Foot Cream', price: 120, originalPrice: 150, discount: '20% off', category: 'Diabetes', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/b1/3c/0a/b13c0a3f378c929991359e31b2c98b0a.jpg', prescriptionRequired: false },
    { id: 6, name: 'Glucose Tablets', price: 50, originalPrice: null, discount: '', category: 'Diabetes', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/46/13/15/46131555c6994d407730f268ee6390ef.jpg', prescriptionRequired: false },

    // Hypertension Category (6 products)
    { id: 7, name: 'BP Monitor', price: 420, originalPrice: null, discount: '', category: 'Hypertension', brand: 'BrandZ', image: 'https://i.pinimg.com/1200x/86/85/b8/8685b8bc870fd478367baee1e5065fe5.jpg', prescriptionRequired: false },
    { id: 8, name: 'Hypertension Pills', price: 105, originalPrice: null, discount: '', category: 'Hypertension', brand: 'BrandW', image: 'https://tribuneonlineng.com/wp-content/uploads/2019/10/hypertension-medication.jpg', prescriptionRequired: true },
    { id: 9, name: 'Wrist BP Monitor', price: 350, originalPrice: 400, discount: '12% off', category: 'Hypertension', brand: 'BrandX', image: 'https://i.pinimg.com/736x/73/1d/44/731d44443cdca68c78d5140fbd54602b.jpg', prescriptionRequired: false },
    { id: 11, name: 'Digital BP Cuff', price: 380, originalPrice: null, discount: '', category: 'Hypertension', brand: 'BrandZ', image: 'https://rukminim2.flixcart.com/image/292/360/kbs9k7k0/bp-monitor-cuff/h/y/c/adult-size-digital-blood-pressure-monitor-cuff-psm-original-imaft25hkpp3rmyn.jpeg?q=90&crop=false', prescriptionRequired: false },
    { id: 12, name: 'Hypertension Tea', price: 90, originalPrice: 120, discount: '25% off', category: 'Hypertension', brand: 'BrandW', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUIWfND9G-a5jv7Sg6oenF-im9IFPwG9M0A&s', prescriptionRequired: false },

    // Cardiac Category (6 products)
    { id: 13, name: 'Heart Health Supplement', price: 300, originalPrice: 350, discount: '14% off', category: 'Cardiac', brand: 'BrandX', image: 'https://i.pinimg.com/736x/84/25/86/842586edc3d1515a35a5071dd16f9fb9.jpg', prescriptionRequired: false },
    { id: 14, name: 'Cardiac Monitor', price: 450, originalPrice: null, discount: '', category: 'Cardiac', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/9a/64/da/9a64da44712c93da0dd7fefebe3c4f2f.jpg', prescriptionRequired: false },
    { id: 15, name: 'Omega-3 Capsules', price: 250, originalPrice: 300, discount: '17% off', category: 'Cardiac', brand: 'BrandZ', image: 'https://i.pinimg.com/736x/f3/e8/4c/f3e84c84576fb11c8edf2ed7442e6da2.jpg', prescriptionRequired: false },
    { id: 16, name: 'Heart Rate Tracker', price: 320, originalPrice: null, discount: '', category: 'Cardiac', brand: 'BrandW', image: 'https://i.pinimg.com/1200x/e9/bc/b7/e9bcb7f63c77a9220832993dbdbcad72.jpg', prescriptionRequired: false },
    { id: 17, name: 'Cholesterol Test Kit', price: 110, originalPrice: 140, discount: '21% off', category: 'Cardiac', brand: 'BrandX', image: 'https://i.pinimg.com/1200x/6f/02/2e/6f022e5b238c1720823d99468e7c3fd9.jpg', prescriptionRequired: false },
    { id: 18, name: 'CoQ10 Supplement', price: 280, originalPrice: null, discount: '', category: 'Cardiac', brand: 'BrandY', image: 'https://i.pinimg.com/1200x/d6/8d/00/d68d006919f9062fdd79953cb91d413f.jpg', prescriptionRequired: true },

    // Asthma Category (6 products)
    { id: 19, name: 'Inhaler', price: 200, originalPrice: 250, discount: '20% off', category: 'Asthma', brand: 'BrandZ', image: 'https://via.placeholder.com/150/inhaler.jpg', prescriptionRequired: true },
    { id: 20, name: 'Asthma Relief Spray', price: 150, originalPrice: null, discount: '', category: 'Asthma', brand: 'BrandW', image: 'https://via.placeholder.com/150/asthma-spray.jpg', prescriptionRequired: true },
    { id: 21, name: 'Nebulizer', price: 500, originalPrice: 600, discount: '17% off', category: 'Asthma', brand: 'BrandX', image: 'https://via.placeholder.com/150/nebulizer.jpg', prescriptionRequired: false },
    { id: 22, name: 'Peak Flow Meter', price: 80, originalPrice: null, discount: '', category: 'Asthma', brand: 'BrandY', image: 'https://via.placeholder.com/150/peak-flow-meter.jpg', prescriptionRequired: false },
    { id: 23, name: 'Asthma Spacer', price: 120, originalPrice: 150, discount: '20% off', category: 'Asthma', brand: 'BrandZ', image: 'https://via.placeholder.com/150/asthma-spacer.jpg', prescriptionRequired: false },
    { id: 24, name: 'Breathing Exercise Device', price: 100, originalPrice: null, discount: '', category: 'Asthma', brand: 'BrandW', image: 'https://via.placeholder.com/150/breathing-device.jpg', prescriptionRequired: false },

    // Thyroid Category (6 products)
    { id: 25, name: 'Thyroid Supplement', price: 120, originalPrice: 150, discount: '20% off', category: 'Thyroid', brand: 'BrandX', image: 'https://via.placeholder.com/150/thyroid-supplement.jpg', prescriptionRequired: false },
    { id: 26, name: 'Thyroid Test Kit', price: 90, originalPrice: null, discount: '', category: 'Thyroid', brand: 'BrandY', image: 'https://via.placeholder.com/150/thyroid-test.jpg', prescriptionRequired: false },
    { id: 27, name: 'Iodine Drops', price: 70, originalPrice: 90, discount: '22% off', category: 'Thyroid', brand: 'BrandZ', image: 'https://via.placeholder.com/150/iodine-drops.jpg', prescriptionRequired: false },
    { id: 28, name: 'Thyroid Support Capsules', price: 140, originalPrice: null, discount: '', category: 'Thyroid', brand: 'BrandW', image: 'https://via.placeholder.com/150/thyroid-capsules.jpg', prescriptionRequired: true },
    { id: 29, name: 'Selenium Supplement', price: 110, originalPrice: 130, discount: '15% off', category: 'Thyroid', brand: 'BrandX', image: 'https://via.placeholder.com/150/selenium-supplement.jpg', prescriptionRequired: false },
    { id: 30, name: 'Thyroid Monitoring Device', price: 200, originalPrice: null, discount: '', category: 'Thyroid', brand: 'BrandY', image: 'https://via.placeholder.com/150/thyroid-monitor.jpg', prescriptionRequired: false }
  ];

  const productGrid = document.getElementById('productGrid');
  const categoryList = document.getElementById('categoryList');
  const brandList = document.getElementById('brandList');
  const brandToggle = brandList.previousElementSibling.querySelector('span');
  const brandFilters = document.querySelectorAll('.brand-filter');
  const sortSelect = document.getElementById('sortSelect');

  // WhatsApp number - replace with your actual WhatsApp business number
  const whatsappNumber = '+919876543210';

  // Function to update cart count in the UI
  const updateCartCount = () => {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountElement.textContent = totalItems;
      localStorage.setItem('cartCount', totalItems);
    } else {
      console.warn('Cart count element not found on this page');
    }
  };

  // Function to handle WhatsApp order
  function orderOnWhatsApp(product) {
    const message = `Hi! I would like to order:
    
Product: ${product.name}
Brand: ${product.brand}
Price: ₹${product.price}${product.originalPrice ? ` (Original: ₹${product.originalPrice})` : ''}
⚠️ Prescription Required

Please confirm availability and delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  // Function to open product details page
  function openProductDetails(product) {
    const productDetailsUrl = `/productdetails.html?id=${product.id}`;
    window.location.href = productDetailsUrl;
  }

  // Function to handle product card click
  function handleProductCardClick(product, event) {
    // Prevent card click when button is clicked
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }
    
    if (product.prescriptionRequired) {
      orderOnWhatsApp(product);
    } else {
      openProductDetails(product);
    }
  }

  // Toggle subcategory visibility for categories
  categoryList.addEventListener('click', (e) => {
    if (e.target.classList.contains('expand-toggle')) {
      const subcategory = e.target.parentElement.querySelector('.subcategory');
      if (subcategory) {
        subcategory.classList.toggle('hidden');
      } else {
        const category = e.target.parentElement.querySelector('.category-link').textContent;
        const subItems = products
          .filter(p => p.category === category)
          .map(p => p.name);
        if (subItems.length > 0) {
          const ul = document.createElement('ul');
          ul.className = 'subcategory hidden ml-4 space-y-2';
          subItems.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#" class="subcategory-link text-sm text-gray-600 hover:text-primary">${item}</a>`;
            ul.appendChild(li);
          });
          e.target.parentElement.appendChild(ul);
          ul.classList.toggle('hidden');
        }
      }
      e.target.textContent = e.target.textContent === '+' ? '-' : '+';
    }
  });

  // Toggle brand filter visibility
  brandToggle.addEventListener('click', () => {
    brandList.classList.toggle('hidden');
    brandToggle.textContent = brandToggle.textContent === '+' ? '-' : '+';
  });

  // Filter and display products
  function displayProducts(filteredProducts) {
    productGrid.innerHTML = '';
    filteredProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product-card bg-white p-4 shadow rounded-lg flex flex-col justify-between relative cursor-pointer hover:shadow-lg transition-shadow';
      
      // Add prescription badge if required
      const prescriptionBadge = product.prescriptionRequired 
        ? '<div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Rx Required</div>' 
        : '';
      
      // Different buttons for prescription vs non-prescription products
      const actionButton = product.prescriptionRequired 
        ? `<button 
            class="mt-3 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2" 
            onclick="event.stopPropagation(); orderOnWhatsApp(${JSON.stringify(product).replace(/"/g, '&quot;')})">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
            </svg>
            Order on WhatsApp
          </button>`
        : `<button 
            class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2" 
            onclick="event.stopPropagation(); openProductDetails(${JSON.stringify(product).replace(/"/g, '&quot;')})">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            View Details
          </button>`;
      
      productDiv.innerHTML = `
        ${prescriptionBadge}
        <img src="${product.image}" alt="${product.name}" class="product-image w-full h-32 rounded-lg mb-3">
        <p class="text-sm text-gray-600 font-medium">${product.name}</p>
        <p class="text-xs text-gray-500">${product.brand}</p>
        ${product.prescriptionRequired ? '<p class="text-red-600 text-xs mt-1 font-semibold">⚠️ Prescription needed</p>' : ''}
        <p class="text-green-600 font-bold mt-2">₹${product.price.toFixed(2)} 
          ${product.originalPrice ? `<span class="text-gray-500 line-through text-sm">₹${product.originalPrice.toFixed(2)}</span> <span class="text-green-600 text-sm">${product.discount}</span>` : ''}</p>
        ${actionButton}
      `;
      
      // Add click event for the entire product card
      productDiv.addEventListener('click', (event) => handleProductCardClick(product, event));
      
      productGrid.appendChild(productDiv);
    });
  }

  // Make functions globally accessible
  window.orderOnWhatsApp = orderOnWhatsApp;
  window.openProductDetails = openProductDetails;

  // Initial display
  displayProducts(products);

  // Category filter
  categoryList.addEventListener('click', (e) => {
    if (e.target.classList.contains('category-link') || e.target.classList.contains('subcategory-link')) {
      e.preventDefault();
      const category = e.target.textContent;
      let filteredProducts = products.filter(p => 
        p.category === category || 
        (e.target.classList.contains('subcategory-link') && p.name === category)
      );
      applyFilters(filteredProducts);
    }
  });

  // Brand filter
  brandFilters.forEach(filter => {
    filter.addEventListener('change', () => {
      applyFilters(products);
    });
  });

  // Sort products
  sortSelect.addEventListener('change', () => {
    let sortedProducts = [...products];
    if (sortSelect.value === 'Price: Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortSelect.value === 'Price: High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    applyFilters(sortedProducts);
  });

  // Apply all filters
  function applyFilters(baseProducts) {
    let filteredProducts = [...baseProducts];
    const selectedBrands = Array.from(brandFilters)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter(p => selectedBrands.includes(p.brand));
    }

    displayProducts(filteredProducts);
  }

  // Listen for storage events to update cart count in real-time
  window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
      cart = JSON.parse(localStorage.getItem('cart')) || [];
      updateCartCount();
    }
  });

  // Initialize cart count on page load
  updateCartCount();
});