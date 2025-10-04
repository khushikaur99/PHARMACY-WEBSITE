const products = [
  {
    id: 200,
    title: "Maternity Maxi Dress",
    description: "Comfortable and stylish maxi dress for expecting mothers...",
    category: "maternity-wear",
    price: 3817.17,
    originalPrice: 4983.17,
    discount: 23,
    rating: 4.5,
    reviewCount: 128,
    images: ["../images/maxi2.jpeg", "../images/maternity_maxi.jpeg", "../images/maternity_maxi.jpeg", "../images/maxi2.jpeg"],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    stockQuantity: 10, // Added stock quantity
    brand: "MomStyle",
    features: ["Soft, stretchy fabric", "Empire waistline", "Machine washable", "Available in 4 colors", "Nursing-friendly design"],
    specifications: {
      Material: "95% Cotton, 5% Elastane",
      "Care Instructions": "Machine wash cold, tumble dry low",
      Fit: "True to size",
      Length: "Maxi (ankle length)",
      "Sleeve Type": "Short sleeve",
    },
  },
  {
    id: 201,
    title: "Prenatal Vitamins - 90 Count",
    description: "Essential vitamins and minerals specifically formulated for pregnant and nursing mothers...",
    category: "nutrition",
    price: 2489.17,
    originalPrice: 3319.17,
    discount: 25,
    rating: 4.8,
    reviewCount: 256,
    images: ["./images/vitamin/vit1.jpeg", "./images/vitamin/vit2.jpeg", "./images/vitamin/vit3.jpeg", "./images/vitamin/vit1.jpeg"],
    inStock: true,
    stockQuantity: 50, // Added stock quantity
    brand: "VitaMom",
    features: ["Contains 23 essential nutrients", "Easy-to-swallow capsules", "Third-party tested for purity", "90-day supply", "Doctor recommended"],
    specifications: {
      "Serving Size": "1 capsule daily",
      "Capsules per Bottle": "90",
      "Key Nutrients": "Folic Acid, Iron, Calcium, DHA",
      "Allergen Info": "Gluten-free, dairy-free",
      Expiration: "2 years from manufacture date",
    },
  },
  {
    id: 3,
    title: "Stretch Mark Prevention Cream",
    description: "Natural ingredients to prevent and reduce stretch marks during pregnancy...",
    category: "skincare",
    price: 2074.17,
    originalPrice: 2904.17,
    discount: 29,
    rating: 4.3,
    reviewCount: 89,
    images: ["./images/strectmarks/mark1.jpeg", "./images/strectmarks/mark2.jpeg", "./images/strectmarks/mark3.jpeg", "./images/strectmarks/mark4.jpeg"],
    inStock: true,
    stockQuantity: 20, // Added stock quantity
    brand: "NaturalCare",
    features: ["100% natural ingredients", "Clinically proven formula", "Non-greasy texture", "Pleasant vanilla scent", "Safe for pregnancy and nursing"],
    specifications: {
      Size: "8 oz (240ml)",
      "Key Ingredients": "Cocoa Butter, Shea Butter, Vitamin E",
      Application: "Apply twice daily",
      "Skin Type": "All skin types",
      "Pregnancy Safe": "Yes",
    },
  },
  {
    id: 4,
    title: "First Trimester Essentials Kit",
    description: "Natural Complete kit for first trimester comfort and wellness...",
    category: "trimester-kits",
    price: 7469.17,
    originalPrice: 9959.17,
    discount: 25,
    rating: 4.7,
    reviewCount: 67,
    images: ["./images/1st kit/kit1.jpeg", "./images/1st kit/kit2.jpeg", "./images/1st kit/kit3.jpeg", "./images/1st kit/kit4.jpeg"],
    inStock: true,
    stockQuantity: 15, // Added stock quantity
    brand: "TrimesterCare",
    features: ["Prenatal vitamins with folic acid & iron", "Morning sickness relief tea", "Moisturizing stretch mark cream", "Gentle pregnancy-safe body wash", "Relaxing herbal foot soak"],
    specifications: {
      "Kit Contents": "Vitamins, Skincare, Herbal Tea, Body Wash, Foot Soak",
      "Recommended Use": "Daily throughout the first trimester",
      "Target": "Expecting mothers (Weeks 1–12)",
      "Pregnancy Safe": "Yes",
      "Shelf Life": "18 months",
    },
  },
  {
    id: 5,
    title: "Postpartum Recovery Belt",
    description: "A supportive postpartum recovery belt designed to aid in abdominal muscle healing...",
    category: "postpartum-recovery",
    price: 4149.17,
    originalPrice: 5819.17,
    discount: 29,
    rating: 4.8,
    reviewCount: 142,
    images: ["./images/Recovery Belt/belt1.jpeg", "./images/Recovery Belt/belt2.jpeg", "./images/Recovery Belt/belt3.jpeg", "./images/Recovery Belt/belt4.jpeg"],
    inStock: true,
    stockQuantity: 8, // Added stock quantity
    brand: "MomEase",
    features: ["Supports abdominal muscle recovery", "Reduces postpartum belly bulge", "Adjustable straps for customized fit", "Lightweight and breathable material", "Helps improve posture and relieve back pain"],
    specifications: {
      "Material": "Breathable cotton and elastic blend",
      "Sizes Available": "S, M, L, XL",
      "Closure Type": "Velcro adjustable straps",
      "Recommended Use": "6–12 weeks postpartum",
      "Care Instructions": "Hand wash, air dry",
    },
  },
  {
    id: 6,
    title: "Electric Breast Pump",
    description: "A quiet and efficient electric breast pump designed for modern mothers...",
    category: "breastfeeding",
    price: 12449.17,
    originalPrice: 16599.17,
    discount: 25,
    rating: 4.6,
    reviewCount: 234,
    images: ["./images/Breastpump/pump1.jpg", "./images/Breastpump/pump2.jpeg", "./images/Breastpump/pump3.jpeg", "./images/Breastpump/pump4.jpeg"],
    inStock: true,
    stockQuantity: 5, // Added stock quantity
    brand: "PumpPro",
    features: ["Quiet motor for discreet pumping", "Adjustable suction and speed settings", "Lightweight and portable design", "Anti-backflow protection for hygiene", "Easy to clean and assemble"],
    specifications: {
      "Power Source": "Rechargeable battery / USB cable",
      "Modes": "Massage & Expression",
      "Material": "BPA-free plastic and silicone",
      "Bottle Compatibility": "Standard wide-neck bottles",
      "Weight": "Approx. 500g",
      "Warranty": "1 year manufacturer warranty",
    },
  },
];

const reviewsData = {
  1: [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      date: "2024-01-15",
      title: "Perfect maternity dress!",
      comment: "This dress is so comfortable and flattering. I wore it throughout my entire pregnancy and even after. The fabric is soft and stretchy, and the style is very elegant.",
      verified: true,
    },
    {
      id: 2,
      name: "Jennifer L.",
      rating: 4,
      date: "2024-01-10",
      title: "Great quality",
      comment: "Love the material and fit. The only reason I'm giving 4 stars instead of 5 is that I wish it came in more colors. But overall, very happy with this purchase.",
      verified: true,
    },
    {
      id: 3,
      name: "Maria R.",
      rating: 5,
      date: "2024-01-05",
      title: "Highly recommend",
      comment: "Bought this for a wedding when I was 7 months pregnant. Got so many compliments! The dress is well-made and the price is reasonable.",
      verified: false,
    },
  ],
  2: [
    {
      id: 1,
      name: "Amanda K.",
      rating: 5,
      date: "2024-01-20",
      title: "Best prenatal vitamins",
      comment: "My doctor recommended these and I'm so glad I tried them. Easy to swallow and no nausea. My blood work has been perfect throughout my pregnancy.",
      verified: true,
    },
    {
      id: 2,
      name: "Lisa P.",
      rating: 5,
      date: "2024-01-18",
      title: "No side effects",
      comment: "I've tried several prenatal vitamins and these are the only ones that don't make me sick. Great quality and good value for the price.",
      verified: true,
    },
  ],
  3: [
    {
      id: 1,
      name: "Rachel T.",
      rating: 4,
      date: "2024-01-12",
      title: "Works well",
      comment: "I started using this cream early in my pregnancy and I have minimal stretch marks. The texture is nice and it absorbs well. Would recommend.",
      verified: true,
    },
    {
      id: 2,
      name: "Nicole B.",
      rating: 4,
      date: "2024-01-08",
      title: "Good moisturizer",
      comment: "This cream keeps my skin very moisturized. I can't say for sure if it prevents stretch marks, but my skin feels great and it smells nice.",
      verified: false,
    },
  ],
};

let currentProduct = null;
let selectedSize = null;
let quantity = 1;
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.addEventListener("DOMContentLoaded", () => {
  const productId = localStorage.getItem("selectedProductId");
  if (productId) {
    currentProduct = products.find((p) => p.id === Number.parseInt(productId));
    if (currentProduct) {
      loadProductDetails();
      setupEventListeners();
      updateCartCount();
      updateWishlistCount();
      setupMagnifier();
      setupAccordion();
    } else {
      window.location.href = "index.html";
    }
  } else {
    window.location.href = "index.html";
  }
});

function loadProductDetails() {
  document.getElementById("breadcrumbCategory").textContent = formatCategory(currentProduct.category);
  document.getElementById("breadcrumbProduct").textContent = currentProduct.title;

  document.getElementById("productTitle").textContent = currentProduct.title;
  document.getElementById("productDescription").textContent = currentProduct.description;
  document.getElementById("productPrice").textContent = `₹${currentProduct.price.toFixed(2)}`;
  document.getElementById("productBrand").textContent = `by ${currentProduct.brand}`;

  document.getElementById("productRating").innerHTML = generateStarRating(currentProduct.rating);
  document.getElementById("productReviewCount").textContent = `(${currentProduct.reviewCount} reviews)`;

  if (currentProduct.originalPrice > currentProduct.price) {
    document.getElementById("productOriginalPrice").textContent = `₹${currentProduct.originalPrice.toFixed(2)}`;
    document.getElementById("productOriginalPrice").classList.remove("hidden");
    document.getElementById("productDiscount").textContent = `${currentProduct.discount}% OFF`;
    document.getElementById("productDiscount").classList.remove("hidden");
  }

  // Update stock status
  updateStockStatus();

  loadProductImages();
  if (currentProduct.sizes) {
    loadSizeOptions();
  }
  loadProductFeatures();
  loadProductSpecifications();
  loadProductReviews();
  updateWishlistButton();
}

function updateStockStatus() {
  const stockStatus = document.getElementById("stockStatus");
  const addToCartBtn = document.getElementById("addToCartBtn");
  if (currentProduct.inStock && currentProduct.stockQuantity > 0) {
    stockStatus.textContent = `${currentProduct.stockQuantity} items left`;
    stockStatus.className = "text-green-600 font-medium";
    addToCartBtn.disabled = false;
    addToCartBtn.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    stockStatus.textContent = "Out of Stock";
    stockStatus.className = "text-red-600 font-medium";
    addToCartBtn.disabled = true;
    addToCartBtn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

function loadProductImages() {
  const mainImage = document.getElementById("mainImage");
  const magnifiedImage = document.getElementById("magnifiedImage");
  const thumbnailContainer = document.getElementById("thumbnailContainer");

  mainImage.src = currentProduct.images[0];
  mainImage.alt = currentProduct.title;
  magnifiedImage.src = currentProduct.images[0];

  thumbnailContainer.innerHTML = currentProduct.images
    .map(
      (image, index) => `
    <img src="${image}" alt="${currentProduct.title}" 
         class="thumbnail" 
         data-index="${index}">
  `
    )
    .join("");

  document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      mainImage.src = currentProduct.images[index];
      magnifiedImage.src = currentProduct.images[index];
      document.querySelectorAll(".thumbnail").forEach((t) => t.classList.remove("thumbnail-active"));
      thumb.classList.add("thumbnail-active");
    });
  });
}

function setupMagnifier() {
  const mainImage = document.getElementById("mainImage");
  const magnifierLens = document.getElementById("magnifierLens");
  const magnifierView = document.getElementById("magnifierView");
  const magnifiedImage = document.getElementById("magnifiedImage");

  const lensSize = { width: 120, height: 120 }; // Updated to match CSS
  const viewSize = { width: 320, height: 320 }; // Updated to match CSS
  const zoomLevel = 2.5;

  mainImage.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 1024) {
      magnifierLens.style.display = "block";
      magnifierView.style.display = "block";
    }
  });

  mainImage.addEventListener("mouseleave", () => {
    magnifierLens.style.display = "none";
    magnifierView.style.display = "none";
  });

  mainImage.addEventListener("mousemove", (e) => {
    if (window.innerWidth < 1024) return;

    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let lensX = x - lensSize.width / 2;
    let lensY = y - lensSize.height / 2;

    lensX = Math.max(0, Math.min(lensX, rect.width - lensSize.width));
    lensY = Math.max(0, Math.min(lensY, rect.height - lensSize.height));

    magnifierLens.style.left = `${lensX}px`;
    magnifierLens.style.top = `${lensY}px`;

    magnifiedImage.style.width = `${rect.width * zoomLevel}px`;
    magnifiedImage.style.height = `${rect.height * zoomLevel}px`;
    magnifiedImage.style.left = `-${lensX * zoomLevel}px`;
    magnifiedImage.style.top = `-${lensY * zoomLevel}px`;
  });
}

function loadSizeOptions() {
  const sizeSelection = document.getElementById("sizeSelection");
  const sizeOptions = document.getElementById("sizeOptions");

  sizeSelection.classList.remove("hidden");
  sizeOptions.innerHTML = currentProduct.sizes
    .map(
      (size) => `
    <button class="size-option px-4 py-2 border border-gray-300 rounded-md hover:border-pink-500 hover:text-pink-600 transition-colors" 
            data-size="${size}">
      ${size}
    </button>
  `
    )
    .join("");

  document.querySelectorAll(".size-option").forEach((option) => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".size-option").forEach((o) => {
        o.classList.remove("bg-pink-600", "text-white", "border-pink-600");
        o.classList.add("border-gray-300");
      });
      option.classList.add("bg-pink-600", "text-white", "border-pink-600");
      option.classList.remove("border-gray-300");
      selectedSize = option.dataset.size;
    });
  });
}

function loadProductFeatures() {
  const featuresContainer = document.getElementById("productFeatures");
  featuresContainer.innerHTML = currentProduct.features
    .map(
      (feature) => `
    <li class="flex items-center text-gray-700">
      <i class="fas fa-check text-green-500 mr-2"></i>
      ${feature}
    </li>
  `
    )
    .join("");
}

function loadProductSpecifications() {
  const specsList = document.getElementById("specificationsList");
  specsList.innerHTML = Object.entries(currentProduct.specifications)
    .map(
      ([key, value]) => `
    <div class="spec-row">
      <span class="font-medium text-gray-900">${key}</span>
      <span class="text-gray-700">${value}</span>
    </div>
  `
    )
    .join("");
}

function loadProductReviews() {
  const reviews = reviewsData[currentProduct.id] || [];

  document.getElementById("avgRating").textContent = currentProduct.rating;
  document.getElementById("avgRatingStars").innerHTML = generateStarRating(currentProduct.rating);
  document.getElementById("totalReviews").textContent = `Based on ${currentProduct.reviewCount} reviews`;

  const ratingBreakdown = document.getElementById("ratingBreakdown");
  const breakdown = calculateRatingBreakdown(reviews, currentProduct.reviewCount);
  ratingBreakdown.innerHTML = [5, 4, 3, 2, 1]
    .map((stars) => {
      const percentage = breakdown[stars] || 0;
      return `
      <div class="flex items-center">
        <span class="text-sm text-gray-600 w-8">${stars}★</span>
        <div class="flex-1 mx-2 rating-bar">
          <div class="rating-bar-fill" style="width: ${percentage}%"></div>
        </div>
        <span class="text-sm text-gray-600 w-8">${percentage}%</span>
      </div>
    `;
    })
    .join("");

  const reviewsList = document.getElementById("reviewsList");
  if (reviews.length === 0) {
    reviewsList.innerHTML = `
      <div class="text-center py-8 text-gray-500">
        No reviews yet. Be the first to review this product!
      </div>
    `;
  } else {
    reviewsList.innerHTML = reviews
      .map(
        (review) => `
      <div class="review-card">
        <div class="flex items-start justify-between mb-3">
          <div>
            <div class="flex items-center mb-2">
              <span class="font-semibold text-gray-900 mr-2">${review.name}</span>
              ${review.verified ? '<span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified Purchase</span>' : ""}
            </div>
            <div class="flex items-center">
              <div class="flex text-yellow-400 mr-2">
                ${generateStarRating(review.rating)}
              </div>
              <span class="text-sm text-gray-500">${formatDate(review.date)}</span>
            </div>
          </div>
        </div>
        <h4 class="font-semibold text-gray-900 mb-2">${review.title}</h4>
        <p class="text-gray-700">${review.comment}</p>
      </div>
    `
      )
      .join("");
  }
}

function setupEventListeners() {
  const decreaseQty = document.getElementById("decreaseQty");
  const increaseQty = document.getElementById("increaseQty");
  const quantityDisplay = document.getElementById("quantity");

  // Fix quantity controls
  decreaseQty.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  increaseQty.addEventListener("click", () => {
    if (currentProduct.stockQuantity && quantity >= currentProduct.stockQuantity) {
      showNotification(`Only ${currentProduct.stockQuantity} items available`, "error");
      return;
    }
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  document.getElementById("addToCartBtn").addEventListener("click", () => {
    if (currentProduct.sizes && !selectedSize) {
      showNotification("Please select a size", "error");
      return;
    }
    if (!currentProduct.inStock || currentProduct.stockQuantity <= 0) {
      showNotification("This product is out of stock", "error");
      return;
    }
    if (quantity > currentProduct.stockQuantity) {
      showNotification(`Only ${currentProduct.stockQuantity} items available`, "error");
      return;
    }
    addToCart();
  });

  document.getElementById("addToWishlistBtn").addEventListener("click", () => {
    toggleWishlist();
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.id.replace("Tab", "Content");
      switchTab(button, tabId);
    });
  });

  document.getElementById("cartBtn").addEventListener("click", () => {
    showCartModal();
  });

  document.getElementById("wishlistBtn").addEventListener("click", () => {
    showWishlistModal();
  });
}

function showCartModal() {
  const cartModal = document.createElement("div");
  cartModal.id = "cartModal";
  cartModal.className = "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4";
  cartModal.innerHTML = `
    <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
      <div class="flex items-center justify-between p-6 border-b">
        <h2 class="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <button id="closeCartModal" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      <div id="cartContent" class="p-6 overflow-y-auto max-h-96">
        ${cart.length === 0 ? `
          <p class="text-center text-gray-500">Your cart is empty</p>
        ` : cart.map(item => `
          <div class="flex items-center justify-between py-2 border-b">
            <div>
              <h4 class="text-sm font-semibold">${item.title}</h4>
              <p class="text-sm text-gray-600">${item.selectedSize ? `Size: ${item.selectedSize}, ` : ''}₹${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <p class="text-sm font-bold">₹${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        `).join("")}
      </div>
      <div class="border-t p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="text-lg font-semibold">Total: </span>
          <span id="cartTotal" class="text-2xl font-bold text-pink-600">₹${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
        </div>
        <div class="flex space-x-4">
          <button id="clearCart" class="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors">Clear Cart</button>
          <button id="checkoutBtn" class="flex-1 bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 transition-colors">Checkout</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(cartModal);

  document.getElementById("closeCartModal").addEventListener("click", () => cartModal.remove());
  document.getElementById("clearCart").addEventListener("click", () => {
    cart.length = 0;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    cartModal.remove();
    showNotification("Cart cleared", "info");
  });
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    showNotification("Proceeding to checkout", "success");
    cartModal.remove();
  });
  cartModal.addEventListener("click", (e) => {
    if (e.target.id === "cartModal") cartModal.remove();
  });
}

function showWishlistModal() {
  const wishlistModal = document.createElement("div");
  wishlistModal.id = "wishlistModal";
  wishlistModal.className = "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4";
  wishlistModal.innerHTML = `
    <div class="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
      <div class="flex items-center justify-between p-6 border-b">
        <h2 class="text-2xl font-bold text-gray-900">My Wishlist</h2>
        <button id="closeWishlistModal" class="text-gray-500 hover:text-gray-700">
          <i class="fas fa-times text-xl"></i>
        </button>
      </div>
      <div id="wishlistContent" class="p-6 overflow-y-auto max-h-96">
        ${wishlist.length === 0 ? `
          <p class="text-center text-gray-500">Your wishlist is empty</p>
        ` : wishlist.map(item => `
          <div class="flex items-center justify-between py-2 border-b">
            <div>
              <h4 class="text-sm font-semibold">${item.title}</h4>
              <p class="text-sm text-gray-600">₹${item.price.toFixed(2)}</p>
            </div>
            <button class="text-pink-600 hover:text-pink-800" onclick="toggleWishlist(${item.id}); document.getElementById('wishlistModal').remove(); showWishlistModal();">Remove</button>
          </div>
        `).join("")}
      </div>
      <div class="border-t p-6">
        <button id="clearWishlist" class="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors">Clear Wishlist</button>
      </div>
    </div>
  `;
  document.body.appendChild(wishlistModal);

  document.getElementById("closeWishlistModal").addEventListener("click", () => wishlistModal.remove());
  document.getElementById("clearWishlist").addEventListener("click", () => {
    wishlist.length = 0;
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    wishlistModal.remove();
    showNotification("Wishlist cleared", "info");
  });
  wishlistModal.addEventListener("click", (e) => {
    if (e.target.id === "wishlistModal") wishlistModal.remove();
  });
}

function setupAccordion() {
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      const icon = header.querySelector("i");
      const isActive = content.classList.contains("active");

      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.classList.remove("active");
        c.previousElementSibling.querySelector("i").classList.remove("fa-chevron-up");
        c.previousElementSibling.querySelector("i").classList.add("fa-chevron-down");
      });

      if (!isActive) {
        content.classList.add("active");
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });
}

function addToCart() {
  if (currentProduct.stockQuantity < quantity) {
    showNotification(`Only ${currentProduct.stockQuantity} items available`, "error");
    return;
  }

  const existingItem = cart.find(
    (item) => item.id === currentProduct.id && (!currentProduct.sizes || item.selectedSize === selectedSize)
  );

  if (existingItem) {
    if (existingItem.quantity + quantity > currentProduct.stockQuantity) {
      showNotification(`Only ${currentProduct.stockQuantity} items available`, "error");
      return;
    }
    existingItem.quantity += quantity;
  } else {
    const cartItem = {
      ...currentProduct,
      quantity: quantity,
    };
    if (selectedSize) {
      cartItem.selectedSize = selectedSize;
    }
    cart.push(cartItem);
  }

  // Update stock
  currentProduct.stockQuantity -= quantity;
  if (currentProduct.stockQuantity <= 0) {
    currentProduct.inStock = false;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateStockStatus();
  showNotification(`Added ${quantity} item(s) to cart!`, "success");
}

function toggleWishlist() {
  const existingIndex = wishlist.findIndex((item) => item.id === currentProduct.id);

  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
    showNotification("Removed from wishlist", "info");
  } else {
    wishlist.push(currentProduct);
    showNotification("Added to wishlist!", "success");
  }

  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  updateWishlistButton();
}

function updateWishlistButton() {
  const wishlistBtn = document.getElementById("addToWishlistBtn");
  const isInWishlist = wishlist.some((item) => item.id === currentProduct.id);

  if (isInWishlist) {
    wishlistBtn.innerHTML = '<i class="fas fa-heart"></i>';
    wishlistBtn.classList.add("bg-pink-50", "text-pink-600");
  } else {
    wishlistBtn.innerHTML = '<i class="far fa-heart"></i>';
    wishlistBtn.classList.remove("bg-pink-50", "text-pink-600");
  }
}

function switchTab(activeButton, activeContentId) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });
  activeButton.classList.add("active");

  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });
  document.getElementById(activeContentId).classList.remove("hidden");
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const count = cart.reduce((total, item) => total + item.quantity, 0);

  if (count > 0) {
    cartCount.textContent = count;
    cartCount.classList.remove("hidden");
  } else {
    cartCount.classList.add("hidden");
  }
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlistCount");
  const count = wishlist.length;

  if (count > 0) {
    wishlistCount.textContent = count;
    wishlistCount.classList.remove("hidden");
  } else {
    wishlistCount.classList.add("hidden");
  }
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star text-yellow-400"></i>';
  }
  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star text-yellow-400"></i>';
  }
  return starsHTML;
}

function formatCategory(category) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function calculateRatingBreakdown(reviews, totalReviews) {
  const breakdown = {};
  reviews.forEach((review) => {
    breakdown[review.rating] = (breakdown[review.rating] || 0) + 1;
  });
  Object.keys(breakdown).forEach((rating) => {
    breakdown[rating] = Math.round((breakdown[rating] / totalReviews) * 100);
  });
  return breakdown;
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-4 z-50 px-4 py-2 rounded-md text-white transition-all duration-300 ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
  }`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 3000);
}