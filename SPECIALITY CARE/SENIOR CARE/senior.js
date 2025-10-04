 // Full app script: products, rendering, filters, cart, product details, and Upload Prescription modal integration.

document.addEventListener('DOMContentLoaded', () => {
  // ================
  // Data
  // ================
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const products = [
    // Adult Diapers & Incontinence
    { id: 524, name: 'Adult Diapers Pack', price: 85, originalPrice: 100, discount: '15% off', category: 'Adult Diapers & Incontinence', brand: 'BrandX', image: 'https://i.pinimg.com/736x/8e/47/48/8e4748db259afe17876d2a40cbdaee34.jpg', prescriptionRequired: false },
    { id: 525, name: 'Incontinence Pads', price: 60, originalPrice: null, discount: '', category: 'Adult Diapers & Incontinence', brand: 'BrandZ', image: 'https://via.placeholder.com/150/incontinence-pads.jpg', prescriptionRequired: false },
    { id: 526, name: 'Pull-Up Diapers', price: 95, originalPrice: null, discount: '', category: 'Adult Diapers & Incontinence', brand: 'BrandW', image: 'https://via.placeholder.com/150/pull-up-diapers.jpg', prescriptionRequired: false },
    { id: 527, name: 'Disposable Underwear', price: 50, originalPrice: null, discount: '', category: 'Adult Diapers & Incontinence', brand: 'BrandY', image: 'https://via.placeholder.com/150/disposable-underwear.jpg', prescriptionRequired: false },
    { id: 528, name: 'Overnight Diapers', price: 40, originalPrice: null, discount: '', category: 'Adult Diapers & Incontinence', brand: 'BrandX', image: 'https://via.placeholder.com/150/overnight-diapers.jpg', prescriptionRequired: false },
    { id: 529, name: 'Incontinence Wipes', price: 120, originalPrice: 150, discount: '20% off', category: 'Adult Diapers & Incontinence', brand: 'BrandZ', image: 'https://via.placeholder.com/150/incontinence-wipes.jpg', prescriptionRequired: false },

    // Joint & Bone Health
    { id: 530, name: 'Glucosamine Supplement', price: 120, originalPrice: 150, discount: '20% off', category: 'Joint & Bone Health', brand: 'BrandY', image: 'https://via.placeholder.com/150/glucosamine.jpg', prescriptionRequired: false },
    { id: 531, name: 'Calcium + Vitamin D', price: 100, originalPrice: null, discount: '', category: 'Joint & Bone Health', brand: 'BrandW', image: 'https://via.placeholder.com/150/calcium-vitd.jpg', prescriptionRequired: false },
    { id: 532, name: 'Joint Support Formula', price: 150, originalPrice: 180, discount: '17% off', category: 'Joint & Bone Health', brand: 'BrandX', image: 'https://via.placeholder.com/150/joint-formula.jpg', prescriptionRequired: false },
    { id: 533, name: 'Collagen Peptides', price: 90, originalPrice: null, discount: '', category: 'Joint & Bone Health', brand: 'BrandY', image: 'https://via.placeholder.com/150/collagen-peptides.jpg', prescriptionRequired: false },
    { id: 534, name: 'Bone Density Supplement', price: 250, originalPrice: 300, discount: '17% off', category: 'Joint & Bone Health', brand: 'BrandZ', image: 'https://via.placeholder.com/150/bone-density.jpg', prescriptionRequired: false },
    { id: 535, name: 'Turmeric Curcumin', price: 110, originalPrice: null, discount: '', category: 'Joint & Bone Health', brand: 'BrandW', image: 'https://via.placeholder.com/150/turmeric-curcumin.jpg', prescriptionRequired: false },

    // Memory & Brain Support
    { id: 536, name: 'Omega-3 Fish Oil', price: 50, originalPrice: null, discount: '', category: 'Memory & Brain Support', brand: 'BrandY', image: 'https://via.placeholder.com/150/omega-3.jpg', prescriptionRequired: false },
    { id: 537, name: 'Ginkgo Biloba', price: 70, originalPrice: 80, discount: '12% off', category: 'Memory & Brain Support', brand: 'BrandZ', image: 'https://via.placeholder.com/150/ginkgo-biloba.jpg', prescriptionRequired: false },
    { id: 538, name: 'Brain Health Supplement', price: 120, originalPrice: null, discount: '', category: 'Memory & Brain Support', brand: 'BrandW', image: 'https://via.placeholder.com/150/brain-health.jpg', prescriptionRequired: false },
    { id: 539, name: 'Phosphatidylserine', price: 100, originalPrice: 120, discount: '17% off', category: 'Memory & Brain Support', brand: 'BrandX', image: 'https://via.placeholder.com/150/phosphatidylserine.jpg', prescriptionRequired: false },
    { id: 540, name: 'Bacopa Monnieri', price: 95, originalPrice: null, discount: '', category: 'Memory & Brain Support', brand: 'BrandY', image: 'https://via.placeholder.com/150/bacopa.jpg', prescriptionRequired: false },
    { id: 541, name: 'Lion\'s Mane Mushroom', price: 130, originalPrice: 150, discount: '13% off', category: 'Memory & Brain Support', brand: 'BrandZ', image: 'https://via.placeholder.com/150/lions-mane.jpg', prescriptionRequired: false },

    // Mobility Support
    { id: 542, name: 'Walking Cane', price: 500, originalPrice: 600, discount: '17% off', category: 'Mobility Support', brand: 'BrandX', image: 'https://via.placeholder.com/150/walking-cane.jpg', prescriptionRequired: false },
    { id: 543, name: 'Rollator Walker', price: 300, originalPrice: null, discount: '', category: 'Mobility Support', brand: 'BrandY', image: 'https://via.placeholder.com/150/rollator-walker.jpg', prescriptionRequired: false },
    { id: 544, name: 'Wheelchair', price: 800, originalPrice: 1000, discount: '20% off', category: 'Mobility Support', brand: 'BrandZ', image: 'https://via.placeholder.com/150/wheelchair.jpg', prescriptionRequired: false },
    { id: 545, name: 'Knee Brace', price: 400, originalPrice: null, discount: '', category: 'Mobility Support', brand: 'BrandW', image: 'https://via.placeholder.com/150/knee-brace.jpg', prescriptionRequired: false },
    { id: 546, name: 'Ankle Support', price: 600, originalPrice: 700, discount: '14% off', category: 'Mobility Support', brand: 'BrandX', image: 'https://via.placeholder.com/150/ankle-support.jpg', prescriptionRequired: false },
    { id: 547, name: 'Mobility Scooter', price: 1200, originalPrice: null, discount: '', category: 'Mobility Support', brand: 'BrandY', image: 'https://via.placeholder.com/150/mobility-scooter.jpg', prescriptionRequired: false }
  ];

  // ================
  // DOM Elements
  // ================
  const productGrid = document.getElementById('productGrid');
  const categoryList = document.getElementById('categoryList');
  const brandList = document.getElementById('brandList');
  const brandToggle = (brandList && brandList.previousElementSibling) ? brandList.previousElementSibling.querySelector('span') : null;
  const brandFilters = document.querySelectorAll('.brand-filter');
  const sortSelect = document.getElementById('sortSelect');
  const uploadModal = document.getElementById('uploadModal');
  const validPrescriptionModal = document.getElementById('validPrescriptionModal');
  const validPrescriptionBtn = document.getElementById('validPrescriptionBtn');
  const cartCountElement = document.getElementById('cart-count');

  // keep track of active filters
  let activeCategory = null; // null = all
  let activeSort = null;

  // ================
  // Helpers
  // ================
  function updateCartCount() {
    if (!cartCountElement) return;
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    cartCountElement.textContent = totalItems;
    localStorage.setItem('cartCount', totalItems);
  }

  // Initialize cart from localStorage
  (function loadCart() {
    const stored = JSON.parse(localStorage.getItem('cart') || 'null');
    if (Array.isArray(stored)) cart = stored;
    updateCartCount();
  })();

  // ================
  // Product Rendering
  // ================
  function createProductCard(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card bg-white p-4 shadow rounded-lg flex flex-col justify-between relative cursor-pointer hover:shadow-lg transition-shadow';

    const prescriptionBadge = product.prescriptionRequired
      ? '<div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Rx Required</div>'
      : '';

    const actionButton = product.prescriptionRequired
      ? `<button 
            class="mt-3 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2 upload-pres-btn" 
            data-product='${escapeHtml(JSON.stringify(product))}'>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            Upload Prescription
          </button>`
      : `<button 
            class="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-2 add-to-cart-btn" 
            data-id="${product.id}">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            View Details
          </button>`;

    productDiv.innerHTML = `
      ${prescriptionBadge}
      <img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-image w-full h-32 rounded-lg mb-3">
      <p class="text-sm text-gray-600 font-medium">${escapeHtml(product.name)}</p>
      <p class="text-xs text-gray-500">${escapeHtml(product.brand)}</p>
      ${product.prescriptionRequired ? '<p class="text-red-600 text-xs mt-1 font-semibold">⚠️ Prescription needed</p>' : ''}
      <p class="text-green-600 font-bold mt-2">₹${product.price.toFixed(2)} 
        ${product.originalPrice ? `<span class="text-gray-500 line-through text-sm">₹${product.originalPrice.toFixed(2)}</span> <span class="text-green-600 text-sm">${escapeHtml(product.discount)}</span>` : ''}</p>
      ${actionButton}
    `;

    // click handlers
    productDiv.addEventListener('click', (event) => {
      // If clicked a button inside, ignore (buttons have own handlers)
      if (event.target.tagName === 'BUTTON' || event.target.closest('button')) return;
      if (product.prescriptionRequired) {
        // for card click, open modal as well
        openUploadModalForProduct(product);
      } else {
        openProductDetails(product);
      }
    });

    // attach inner button handlers after insertion (or via delegation later)
    return productDiv;
  }

  function displayProducts(list) {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    list.forEach(product => productGrid.appendChild(createProductCard(product)));
  }

  // initial display (all)
  displayProducts(products);

  // ================
  // Product interactions
  // ================
  function openProductDetails(product) {
    // go to productdetails with id query param
    const productDetailsUrl = `/productdetails.html?id=${product.id}`;
    window.location.href = productDetailsUrl;
  }
  window.openProductDetails = openProductDetails; // expose

  // add to cart (used by other pages too)
  function addToCartById(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity = (existing.quantity || 1) + 1;
    else cart.push({ ...product, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    // optional: small toast can be added, but keep as alert for now
    // alert(`${product.name} added to cart`);
  }
  window.addToCart = addToCartById;

  // ================
  // Category & Brand Filters
  // ================
  // Single combined click handler for category list (expand / filter)
  categoryList?.addEventListener('click', (e) => {
    // expand toggle
    if (e.target.classList.contains('expand-toggle')) {
      const li = e.target.parentElement;
      const subcategory = li.querySelector('.subcategory');
      if (subcategory) {
        subcategory.classList.toggle('hidden');
      } else {
        const category = li.querySelector('.category-link')?.textContent?.trim();
        if (category) {
          const subItems = products
            .filter(p => p.category === category)
            .map(p => p.name);
          if (subItems.length) {
            const ul = document.createElement('ul');
            ul.className = 'subcategory hidden ml-4 space-y-2';
            subItems.forEach(item => {
              const li2 = document.createElement('li');
              li2.innerHTML = `<a href="#" class="subcategory-link text-sm text-gray-600 hover:text-primary">${escapeHtml(item)}</a>`;
              ul.appendChild(li2);
            });
            li.appendChild(ul);
            ul.classList.toggle('hidden');
          }
        }
      }
      e.target.textContent = e.target.textContent === '+' ? '-' : '+';
      return;
    }

    // filter by category link or subcategory link
    if (e.target.classList.contains('category-link') || e.target.classList.contains('subcategory-link')) {
      e.preventDefault();
      const text = e.target.textContent.trim();
      // if it's a product name (subcategory-link), filter by name else by category
      let filtered;
      if (e.target.classList.contains('subcategory-link')) {
        filtered = products.filter(p => p.name === text);
      } else {
        filtered = products.filter(p => p.category === text);
      }
      activeCategory = text;
      applyFilters(filtered);
    }
  });

  // brand toggle (expand/collapse)
  if (brandToggle) {
    brandToggle.addEventListener('click', () => {
      brandList.classList.toggle('hidden');
      brandToggle.textContent = brandToggle.textContent === '+' ? '-' : '+';
    });
  }

  brandFilters.forEach(filter => {
    filter.addEventListener('change', () => {
      applyFilters(products);
    });
  });

  // sorting
  sortSelect?.addEventListener('change', () => {
    activeSort = sortSelect.value;
    applyFilters(products);
  });

  // Apply filters: input is a starting list (filtered by category already if provided)
  function applyFilters(startList) {
    let list = Array.isArray(startList) ? [...startList] : [...products];

    // brand filters
    const selectedBrands = Array.from(brandFilters).filter(f => f.checked).map(f => f.value);
    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }

    // sorting
    if (activeSort === 'Price: Low to High') {
      list.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'Price: High to Low') {
      list.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'Discount') {
      list.sort((a, b) => {
        const da = parseFloat((a.discount || '').replace(/[^0-9.]/g, '')) || 0;
        const db = parseFloat((b.discount || '').replace(/[^0-9.]/g, '')) || 0;
        return db - da;
      });
    }
    displayProducts(list);
  }

  // ================
  // Upload Prescription Modal Integration
  // ================
  // Helper to open modal for a product
  function openUploadModalForProduct(product) {
    if (!uploadModal) {
      // fallback: redirect to prescribed page
      window.location.href = `/prescribed.html?id=${product.id}`;
      return;
    }

    // set dataset and update modal placeholders
    uploadModal.dataset.productId = product.id;
    // Product name display area (assumes #modalProductName exists in HTML)
    const modalProductName = uploadModal.querySelector('#modalProductName') || uploadModal.querySelector('#modalProductName') || document.getElementById('modalProductName');
    if (modalProductName) modalProductName.textContent = `Upload Prescription for: ${product.name}`;

    // product image placeholder if present
    const modalProductImage = uploadModal.querySelector('.modal-product-image');
    if (modalProductImage) modalProductImage.src = product.image;

    // ensure file input exists and bind change handler
    let fileInput = uploadModal.querySelector('#prescriptionFile');
    if (!fileInput) {
      // try to find any input[type=file]
      fileInput = uploadModal.querySelector('input[type="file"]');
    }
    if (!fileInput) {
      fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*,.pdf';
      fileInput.id = 'prescriptionFile';
      fileInput.className = 'hidden';
      uploadModal.querySelector('label')?.appendChild(fileInput) || uploadModal.appendChild(fileInput);
    }

    // show file name display element if present
    const fileNameDisplay = uploadModal.querySelector('#fileNameDisplay') || document.getElementById('fileNameDisplay');

    // remove previous change listeners to avoid duplicates
    const newFileInput = fileInput.cloneNode();
    newFileInput.id = fileInput.id;
    newFileInput.accept = fileInput.accept;
    newFileInput.className = fileInput.className;
    fileInput.parentNode.replaceChild(newFileInput, fileInput);
    fileInput = newFileInput;

    fileInput.addEventListener('change', function () {
      const file = fileInput.files[0];
      if (!file) {
        if (fileNameDisplay) fileNameDisplay.textContent = '';
        return;
      }
      if (fileNameDisplay) fileNameDisplay.textContent = file.name;

      // optionally preview if image
      if (file.type.startsWith('image/')) {
        const previewImg = uploadModal.querySelector('#prescriptionPreviewImg');
        const reader = new FileReader();
        reader.onload = (evt) => {
          if (previewImg) {
            previewImg.src = evt.target.result;
            previewImg.classList.remove('hidden');
          }
          // store temporarily on modal to submit on click of Submit
          uploadModal.dataset.tempDataURL = evt.target.result;
          uploadModal.dataset.tempFileName = file.name;
        };
        reader.readAsDataURL(file);
      } else {
        // not an image (pdf etc.), just store filename
        uploadModal.dataset.tempDataURL = ''; // not stored as preview
        uploadModal.dataset.tempFileName = file.name;
      }
    });

    // wire Choose File label (if label exists) to open file input
    const label = uploadModal.querySelector('label');
    if (label) {
      // remove previous listeners and add one
      label.addEventListener('click', (ev) => {
        ev.preventDefault();
        const fi = uploadModal.querySelector('#prescriptionFile');
        if (fi) fi.click();
      }, { once: true });
    }

    // Submit button logic
    const submitBtn = uploadModal.querySelector('#submitPrescription') || document.getElementById('submitPrescription');
    if (submitBtn) {
      // remove previous handler if any by cloning
      const newBtn = submitBtn.cloneNode(true);
      submitBtn.parentNode.replaceChild(newBtn, submitBtn);
      newBtn.addEventListener('click', () => {
        const prodId = uploadModal.dataset.productId;
        const tmpName = uploadModal.dataset.tempFileName;
        const tmpData = uploadModal.dataset.tempDataURL || null;
        // fallback: if file input has file but we didn't capture dataset, read now
        const fi = uploadModal.querySelector('#prescriptionFile');
        if (!tmpName && fi && fi.files[0]) {
          const file = fi.files[0];
          const reader = new FileReader();
          reader.onload = function (evt) {
            savePrescription(prodId, file.name, evt.target.result);
            uploadModal.classList.add('hidden');
            clearModalTempState();
          };
          reader.readAsDataURL(file);
          return;
        }

        if (!tmpName) {
          alert('Please choose a prescription file before submitting.');
          return;
        }

        // Save to localStorage
        savePrescription(prodId, tmpName, tmpData);
        // hide modal
        uploadModal.classList.add('hidden');
        clearModalTempState();
        // optional feedback
        alert('Prescription uploaded successfully.');
      });
    }

    // finally show the modal
    uploadModal.classList.remove('hidden');
  }

  // function to save prescription into localStorage
  function savePrescription(productId, fileName, dataURL) {
    if (!productId) return;
    const prescriptions = JSON.parse(localStorage.getItem('prescriptions') || '{}');
    prescriptions[productId] = {
      fileName,
      dataURL: dataURL || null,
      uploadedAt: new Date().toISOString()
    };
    localStorage.setItem('prescriptions', JSON.stringify(prescriptions));
  }

  function clearModalTempState() {
    if (!uploadModal) return;
    delete uploadModal.dataset.tempFileName;
    delete uploadModal.dataset.tempDataURL;
    // clear preview if present
    const previewImg = uploadModal.querySelector('#prescriptionPreviewImg');
    if (previewImg) {
      previewImg.src = '';
      previewImg.classList.add('hidden');
    }
    const fileNameDisplay = uploadModal.querySelector('#fileNameDisplay');
    if (fileNameDisplay) fileNameDisplay.textContent = '';
    // reset file input
    const fi = uploadModal.querySelector('#prescriptionFile');
    if (fi) fi.value = '';
  }

  // attach upload buttons via event delegation (handles dynamically created cards too)
  document.body.addEventListener('click', (e) => {
    // upload button
    const up = e.target.closest('.upload-pres-btn');
    if (up) {
      e.stopPropagation();
      const productData = up.getAttribute('data-product');
      if (productData) {
        try {
          const product = JSON.parse(unescapeHtml(productData));
          openUploadModalForProduct(product);
        } catch (err) {
          // fallback: if data not parseable, use redirect
          window.location.href = `/prescribed.html`;
        }
      }
      return;
    }

    // add-to-cart / view-details button -> open product details page (onclick uses openProductDetails)
    const atc = e.target.closest('.add-to-cart-btn');
    if (atc) {
      e.stopPropagation();
      const pid = atc.getAttribute('data-id');
      if (pid) openProductDetails({ id: pid });
      return;
    }
  });

  // modal backdrop click to close
  if (uploadModal) {
    uploadModal.addEventListener('click', (e) => {
      if (e.target === uploadModal) {
        uploadModal.classList.add('hidden');
        clearModalTempState();
      }
    });

    // close button (if you have one with id closeUploadModal)
    const closeUploadModalBtn = document.getElementById('closeUploadModal');
    if (closeUploadModalBtn) {
      closeUploadModalBtn.addEventListener('click', () => {
        uploadModal.classList.add('hidden');
        clearModalTempState();
      });
    }
  }

  // valid prescription modal wiring
  if (validPrescriptionBtn && validPrescriptionModal) {
    validPrescriptionBtn.addEventListener('click', () => validPrescriptionModal.classList.remove('hidden'));
    validPrescriptionModal.addEventListener('click', (e) => { if (e.target === validPrescriptionModal) validPrescriptionModal.classList.add('hidden'); });
    const validClose = validPrescriptionModal.querySelector('#closeValidPrescriptionModal') || validPrescriptionModal.querySelector('button');
    if (validClose) validClose.addEventListener('click', () => validPrescriptionModal.classList.add('hidden'));
  }

  // ================
  // Utility functions
  // ================
  function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/&/g, '&amp;')
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;')
              .replace(/'/g, '&#039;');
  }

  function unescapeHtml(encoded) {
    // small helper in case we stored JSON with escaped quotes
    if (!encoded) return encoded;
    return encoded.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  }

  // safe JSON parse wrapper
  function safeParseProductData(attr) {
    if (!attr) return null;
    try {
      const jsonStr = attr.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      return JSON.parse(jsonStr);
    } catch (err) {
      return null;
    }
  }

  // ================
  // Finalize & Expose
  // ================
  // Expose upload function globally in case generated HTML uses onclick inline attributes
  window.uploadPrescription = function (productObjOrId) {
    // If called with a number or string id, find product object
    if (typeof productObjOrId === 'number' || typeof productObjOrId === 'string') {
      const p = products.find(x => x.id == productObjOrId);
      if (p) openUploadModalForProduct(p);
      else window.location.href = `/prescribed.html?id=${productObjOrId}`;
    } else if (typeof productObjOrId === 'object' && productObjOrId !== null) {
      openUploadModalForProduct(productObjOrId);
    } else {
      // fallback
      window.location.href = '/prescribed.html';
    }
  };

  // Expose addToCart in global scope
  window.addToCart = addToCartById;

  // ensure page has products shown with current filters
  applyFilters(products);
});