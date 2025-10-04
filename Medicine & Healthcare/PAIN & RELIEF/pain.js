document.addEventListener('DOMContentLoaded', () => {
  // ================
  // Data
  // ================
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

  // We stored escaped JSON string in data-product (escapeHtml used earlier), recover it:
  function unescapeHtmlForJSON(escapedStr) {
    if (!escapedStr) return escapedStr;
    // replace HTML entities that were used on JSON string
    return escapedStr.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  }

  // parse helper used earlier in event delegation
  function unescapeHtml(s) {
    if (!s) return s;
    return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
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

  // earlier we referenced unescapeHtml in delegation; ensure a function exists
  function unescapeHtmlForDelegation(s) {
    return safeParseProductData(s) ? safeParseProductData(s) : null;
  }

  // Small fix: the delegation earlier used unescapeHtml/unescapeHtmlForJSON - replace with safeParseProductData call
  // So adjust the delegation code above to use safeParseProductData (we already attempted parsing with unescapeHtml in the upload handler).

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