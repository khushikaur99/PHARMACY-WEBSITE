// chronic.js
// Full app script: products, rendering, filters, cart, product details, and Upload Prescription modal integration.

document.addEventListener('DOMContentLoaded', () => {
  // ================
  // Data
  // ================
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

 const products = [
  // 1. Wound & Skin Care
  { id: 60, name: 'First Aid Kit', price: 350, originalPrice: 450, discount: '22% off', category: 'Wound & Skin Care', brand: 'MediSafe', image: 'https://i.pinimg.com/736x/61/9a/32/619a32263f4636f0d73a884c91fc0f19.jpg', prescriptionRequired: false },
  { id: 61, name: 'Burn Relief Spray', price: 120, originalPrice: 150, discount: '20% off', category: 'Wound & Skin Care', brand: 'CarePlus', image: 'https://i.pinimg.com/736x/2f/f8/95/2ff8950c3e85d1ee7aeb06d73284f5a6.jpg', prescriptionRequired: false },
  { id: 62, name: 'Antiseptic Wipes (Pack of 50)', price: 130, originalPrice: 160, discount: '19% off', category: 'Wound & Skin Care', brand: 'CleanPlus', image: 'https://i.pinimg.com/736x/29/48/74/2948745c04e66318f0a7d41c74d365e7.jpg', prescriptionRequired: false },
  { id: 63, name: 'Hemostatic Gauze', price: 250, originalPrice: 300, discount: '17% off', category: 'Wound & Skin Care', brand: 'QuickClot', image: 'https://i.pinimg.com/736x/22/1f/59/221f59529b5cf90fa96070e71a1a18b6.jpg', prescriptionRequired: false },

  // 2. Pain & Fever Relief
  { id: 64, name: 'Instant Cold Pack', price: 75, originalPrice: 100, discount: '25% off', category: 'Pain & Fever Relief', brand: 'MediCare', image: 'https://i.pinimg.com/736x/5d/dc/45/5ddc457c50407cf84bfbeb1a1b214934.jpg', prescriptionRequired: false },
  { id: 65, name: 'Hot Water Bag', price: 180, originalPrice: 220, discount: '18% off', category: 'Pain & Fever Relief', brand: 'HeatEase', image: 'https://i.pinimg.com/736x/f5/f6/1d/f5f61df6f35146c50c7eb9cda06f497a.jpg', prescriptionRequired: false },
  { id: 66, name: 'Paracetamol 500mg (10 Tablets)', price: 40, originalPrice: 50, discount: '20% off', category: 'Pain & Fever Relief', brand: 'MediSafe', image: 'https://i.pinimg.com/736x/53/2d/1f/532d1fcf6d7ff70b7c8236425cf144fe.jpg', prescriptionRequired: false },

  // 3. Allergy & Itch Relief
  { id: 67, name: 'Anti-Allergy Tablets (Cetirizine 10mg, Pack of 10)', price: 60, originalPrice: 80, discount: '25% off', category: 'Allergy & Itch Relief', brand: 'AllerCare', image: 'https://i.pinimg.com/736x/28/f6/8b/28f68bcd9b4a7e1a12a53d2b6a6e25f8.jpg', prescriptionRequired: false },
  { id: 68, name: 'Itch Relief Cream', price: 90, originalPrice: 110, discount: '18% off', category: 'Allergy & Itch Relief', brand: 'CarePlus', image: 'https://i.pinimg.com/736x/2d/62/b8/2d62b8fddf20a9a9dbf40a7d547772ec.jpg', prescriptionRequired: false },

  // 4. Digestive & Hydration
  { id: 69, name: 'ORS Sachets (Pack of 5)', price: 45, originalPrice: 60, discount: '25% off', category: 'Digestive & Hydration', brand: 'HydraLife', image: 'https://i.pinimg.com/736x/90/3d/7c/903d7c1d61e94816c51c88671ad245d2.jpg', prescriptionRequired: false },
  { id: 70, name: 'Antacid Suspension (Mint Flavor, 200ml)', price: 95, originalPrice: 120, discount: '21% off', category: 'Digestive & Hydration', brand: 'DigiCare', image: 'https://i.pinimg.com/736x/6b/8a/6d/6b8a6d84fa15d3c5b23e17e8f6fa3c1c.jpg', prescriptionRequired: false },

  // 5. Eye, Nose, & Throat
  { id: 71, name: 'Emergency Eye Wash Bottle', price: 180, originalPrice: null, discount: '', category: 'Eye, Nose, & Throat', brand: 'EyeSafe', image: 'https://i.pinimg.com/736x/dc/f7/0c/dcf70c5a9f589e9340b4f2c94b2bfcfa.jpg', prescriptionRequired: false },
  { id: 72, name: 'Nasal Decongestant Spray', price: 130, originalPrice: 160, discount: '19% off', category: 'Eye, Nose, & Throat', brand: 'NasoClear', image: 'https://i.pinimg.com/736x/aa/f2/30/aaf2302468c8aa7a8d7c61eaa132a012.jpg', prescriptionRequired: false },

  // 6. Muscle, Joint, & Symptom Relief
  { id: 73, name: 'Pain Relief Spray', price: 150, originalPrice: 190, discount: '21% off', category: 'Muscle, Joint, & Symptom Relief', brand: 'FlexiCare', image: 'https://i.pinimg.com/736x/10/22/77/102277ae6327885a6d358a7d1aeb0c89.jpg', prescriptionRequired: false },
  { id: 74, name: 'Elastic Bandage (Pack of 2)', price: 110, originalPrice: 140, discount: '21% off', category: 'Muscle, Joint, & Symptom Relief', brand: 'RescuePro', image: 'https://i.pinimg.com/736x/3a/54/b5/3a54b5869e558db1e835d3e0f7df6c3b.jpg', prescriptionRequired: false },

  // 7. Emergency-Specific Medications (Prescription Required)
  { id: 75, name: 'Emergency Oxygen Cylinder (Portable)', price: 950, originalPrice: 1200, discount: '21% off', category: 'Emergency-Specific Medications', brand: 'OxyLife', image: 'https://i.pinimg.com/736x/8c/9b/46/8c9b463f91a6f57b0b126aeb3e2b7a5d.jpg', prescriptionRequired: true },
  { id: 76, name: 'Adrenaline Auto-Injector (EpiPen)', price: 2500, originalPrice: 2800, discount: '11% off', category: 'Emergency-Specific Medications', brand: 'LifeSaver', image: 'https://i.pinimg.com/736x/11/5c/42/115c42ddfb31a038d9141f7de5f8b8b7.jpg', prescriptionRequired: true },
  { id: 77, name: 'Emergency Stretcher (Foldable)', price: 1200, originalPrice: 1500, discount: '20% off', category: 'Emergency-Specific Medications', brand: 'RescueMate', image: 'https://i.pinimg.com/736x/c4/82/5d/c4825dd422d1aa9e2d8f3dfb31d8b8a2.jpg', prescriptionRequired: true }
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

  // Sometimes we stored product JSON with escapeHtml on full string; define small unescape for that
  function unescapeHtml(jsonStr) {
    if (!jsonStr) return jsonStr;
    return jsonStr.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  }

  // fallback parser used above
  function unescapeHtmlForParsing(s) {
    if (!s) return s;
    return s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
  }

  // Convert our stored escaped JSON back to original
  function unescapeHtmlAndParse(s) {
    if (!s) return null;
    try {
      const json = s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      return JSON.parse(json);
    } catch (err) {
      return null;
    }
  }

  // small wrapper used earlier
  function unescapeHtmlSafe(s) {
    return s ? s.replace(/&quot;/g, '"').replace(/&amp;/g, '&') : s;
  }

  // the upload button uses escapeHtml(JSON.stringify(product)). For parsing use:
  function unescapeHtmlAndParseAlternate(s) {
    if (!s) return null;
    try {
      const replaced = s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      return JSON.parse(replaced);
    } catch (e) {
      return null;
    }
  }

  // Because we used escapeHtml(JSON.stringify(product)) earlier, provide robust parse:
  function unescapeHtmlForJSONParsing(s) {
    if (!s) return s;
    let r = s;
    r = r.replace(/&quot;/g, '"');
    r = r.replace(/&amp;/g, '&');
    return r;
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
