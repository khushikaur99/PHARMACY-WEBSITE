const products = [
  {
    id: 1,
    title: "Premium Diapers (60-Pack)",
    description: "Ultra-absorbent diapers for all-day comfort and dryness, designed with soft materials for sensitive skin.",
    category: "diapers-wipes",
    price: 1249.17,
    originalPrice: 1659.17,
    discount: 25,
    rating: 4.7,
    reviewCount: 150,
    images: ["/placeholder.svg?height=300&width=300"],
    sizes: ["Newborn", "S", "M", "L"],
    inStock: true,
    brand: "BabySoft",
  },
  {
    id: 2,
    title: "Baby Shampoo",
    description: "Gentle, tear-free shampoo for babies, formulated with natural ingredients to nourish delicate hair.",
    category: "skin-hair-care",
    price: 829.17,
    originalPrice: 1079.17,
    discount: 23,
    rating: 4.5,
    reviewCount: 120,
    images: ["/placeholder.svg?height=300&width=300"],
    inStock: true,
    brand: "GentleCare",
  },
  {
    id: 3,
    title: "Bottle Feeding Set",
    description: "Complete set for safe and easy feeding, including anti-colic bottles and sterilizer.",
    category: "feeding-nursing",
    price: 2074.17,
    originalPrice: 2574.17,
    discount: 20,
    rating: 4.6,
    reviewCount: 89,
    images: ["/placeholder.svg?height=300&width=300"],
    inStock: true,
    brand: "NurtureWell",
  },
  {
    id: 4,
    title: "Baby Monitor",
    description: "High-definition baby monitor with night vision and two-way audio for peace of mind.",
    category: "health-safety",
    price: 8299.17,
    originalPrice: 10789.17,
    discount: 23,
    rating: 4.8,
    reviewCount: 67,
    images: ["/placeholder.svg?height=300&width=300"],
    inStock: true,
    brand: "SafeWatch",
  },
  {
    id: 5,
    title: "Interactive Learning Toy",
    description: "Educational toy to stimulate baby’s senses with lights, sounds, and textures.",
    category: "toys-learning",
    price: 1659.17,
    originalPrice: 2074.17,
    discount: 20,
    rating: 4.4,
    reviewCount: 143,
    images: ["/placeholder.svg?height=300&width=300"],
    inStock: true,
    brand: "PlaySmart",
  },
  {
    id: 6,
    title: "Organic Cotton Onesie",
    description: "Soft and breathable onesie made from 100% organic cotton, perfect for baby’s sensitive skin.",
    category: "clothing-accessories",
    price: 1249.17,
    originalPrice: 1659.17,
    discount: 25,
    rating: 4.6,
    reviewCount: 234,
    images: ["/placeholder.svg?height=300&width=300"],
    sizes: ["0-3M", "3-6M", "6-12M"],
    inStock: true,
    brand: "CozyBaby",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let selectedProduct = null;
let currentImageIndex = 0;
let quantity = 1;

document.addEventListener("DOMContentLoaded", () => {
  const productId = parseInt(localStorage.getItem("selectedProductId"));
  selectedProduct = products.find((p) => p.id === productId);
  if (selectedProduct) {
    renderProductDetails();
    renderRelatedProducts();
  }
  updateCartCount();
  updateWishlistCount();
  setupEventListeners();
});

function setupEventListeners() {
  document.getElementById("addToCart").addEventListener("click", addToCart);
  document.getElementById("addToWishlist").addEventListener("click", toggleWishlist);
  document.getElementById("prevImage").addEventListener("click", showPreviousImage);
  document.getElementById("nextImage").addEventListener("click", showNextImage);
  document.getElementById("decreaseQty").addEventListener("click", () => updateQuantity(-1));
  document.getElementById("increaseQty").addEventListener("click", () => updateQuantity(1));
  document.getElementById("cartBtn").addEventListener("click", showCart);
  document.getElementById("wishlistBtn").addEventListener("click", showWishlist);
  document.getElementById("closeCartModal").addEventListener("click", closeCartModal);
  document.getElementById("closeWishlistModal").addEventListener("click", closeWishlistModal);
  document.getElementById("clearCart").addEventListener("click", clearCart);
  document.getElementById("clearWishlist").addEventListener("click", clearWishlistItems);
  document.getElementById("checkoutBtn").addEventListener("click", checkout);
  document.getElementById("cartModal").addEventListener("click", (e) => {
    if (e.target.id === "cartModal") closeCartModal();
  });
  document.getElementById("wishlistModal").addEventListener("click", (e) => {
    if (e.target.id === "wishlistModal") closeWishlistModal();
  });
  document.getElementById("searchInput").addEventListener("input", handleSearch);
  document.getElementById("mobileSearchInput").addEventListener("input", handleSearch);
}

function renderProductDetails() {
  document.getElementById("productTitle").textContent = selectedProduct.title;
  document.getElementById("productDescription").textContent = selectedProduct.description;
  document.getElementById("productPrice").textContent = `₹${selectedProduct.price.toFixed(2)}`;
  document.getElementById("originalPrice").textContent =
    selectedProduct.originalPrice > selectedProduct.price
      ? `₹${selectedProduct.originalPrice.toFixed(2)}`
      : "";
  document.getElementById("discountBadge").textContent =
    selectedProduct.discount > 0 ? `${selectedProduct.discount}% OFF` : "";
  document.getElementById("productRating").innerHTML = generateStarRating(selectedProduct.rating);
  document.getElementById("reviewCount").textContent = `(${selectedProduct.reviewCount})`;
  document.getElementById("productBrand").textContent = `Brand: ${selectedProduct.brand}`;
  document.getElementById("productCategory").textContent = `Category: ${formatCategory(selectedProduct.category)}`;
  document.getElementById("stockStatus").textContent = selectedProduct.inStock
    ? "In Stock"
    : "Out of Stock";
  document.getElementById("stockStatus").className = selectedProduct.inStock
    ? "text-sm font-semibold text-green-600"
    : "text-sm font-semibold text-red-600";

  const sizesContainer = document.getElementById("productSizes");
  if (selectedProduct.sizes && selectedProduct.sizes.length > 0) {
    sizesContainer.innerHTML = `
      <div class="flex flex-wrap gap-2">
        ${selectedProduct.sizes
          .map(
            (size) => `
          <button class="size-btn px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-blue-100" data-size="${size}">
            ${size}
          </button>
        `,
          )
          .join("")}
      </div>
    `;
    document.querySelectorAll(".size-btn").forEach((btn) => {
      btn.addEventListener("click", () => selectSize(btn));
    });
  } else {
    sizesContainer.innerHTML = "";
  }

  renderImageCarousel();
  updateWishlistButton();
}

function renderImageCarousel() {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.getElementById("thumbnailImages");
  const dotsContainer = document.querySelector(".absolute.bottom-4");

  mainImage.innerHTML = `<img src="${selectedProduct.images[currentImageIndex]}" alt="${selectedProduct.title}" class="product-image">`;
  thumbnails.innerHTML = selectedProduct.images
    .map(
      (image, index) => `
      <img src="${image}" alt="${selectedProduct.title} thumbnail" class="w-16 h-16 object-cover rounded-md cursor-pointer border ${
        index === currentImageIndex ? "border-blue-500" : "border-gray-300"
      }" data-index="${index}">
    `,
    )
    .join("");
  dotsContainer.innerHTML = selectedProduct.images
    .map(
      (_, index) => `
      <button class="carousel-dot w-3 h-3 rounded-full bg-gray-300 ${
        index === currentImageIndex ? "active bg-blue-500" : ""
      }" data-index="${index}"></button>
    `,
    )
    .join("");

  thumbnails.querySelectorAll("img").forEach((thumb) => {
    thumb.addEventListener("click", () => {
      currentImageIndex = parseInt(thumb.dataset.index);
      renderImageCarousel();
    });
  });
  dotsContainer.querySelectorAll(".carousel-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      currentImageIndex = parseInt(dot.dataset.index);
      renderImageCarousel();
    });
  });
}

function showPreviousImage() {
  currentImageIndex =
    currentImageIndex === 0 ? selectedProduct.images.length - 1 : currentImageIndex - 1;
  renderImageCarousel();
}

function showNextImage() {
  currentImageIndex =
    currentImageIndex === selectedProduct.images.length - 1 ? 0 : currentImageIndex + 1;
  renderImageCarousel();
}

function selectSize(btn) {
  document.querySelectorAll(".size-btn").forEach((b) => {
    b.classList.remove("bg-blue-100", "border-blue-500");
    b.classList.add("border-gray-300");
  });
  btn.classList.add("bg-blue-100", "border-blue-500");
  btn.classList.remove("border-gray-300");
}

function updateQuantity(change) {
  quantity = Math.max(1, quantity + change);
  document.getElementById("quantity").textContent = quantity;
}

function addToCart() {
  if (!selectedProduct.inStock) {
    showNotification("Product is out of stock", "error");
    return;
  }
  const existingItem = cart.find((item) => item.id === selectedProduct.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...selectedProduct, quantity });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification("Product added to cart!", "success");
}

// Replace the current toggleWishlist function in productdetails.js with:
async function toggleWishlist() {
    const isInWishlist = wishlist.some(item => item.id === selectedProduct.id);
    let success;
    
    if (isInWishlist) {
        success = await api.removeFromWishlist(CONFIG.userId, selectedProduct.id);
        if (success) {
            wishlist = wishlist.filter(item => item.id !== selectedProduct.id);
            showNotification("Removed from wishlist", "info");
        }
    } else {
        success = await api.addToWishlist(CONFIG.userId, selectedProduct.id);
        if (success) {
            wishlist.push(selectedProduct);
            showNotification("Added to wishlist!", "success");
        }
    }
    
    if (success) {
        updateWishlistButton();
        // Update the global wishlist count if we're on a page that has it
        if (typeof updateWishlistCount === 'function') {
            updateWishlistCount();
        }
    } else {
        showNotification("Wishlist operation failed", "error");
    }
}

// Add the API configuration to productdetails.js
const api = {
    addToWishlist: async function(userId, productId) {
        try {
            const response = await fetch(`http://localhost:8080/api/wishlists/add-to-wishlist/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return true;
        } catch (error) {
            console.error('Error adding to wishlist:', error);
            return false;
        }
    },
    removeFromWishlist: async function(userId, productId) {
        try {
            const response = await fetch(`http://localhost:8080/api/wishlists/remove-from-wishlist/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return true;
        } catch (error) {
            console.error('Error removing from wishlist:', error);
            return false;
        }
    }
};

function updateWishlistButton() {
  const wishlistBtn = document.getElementById("addToWishlist");
  const isInWishlist = wishlist.some((item) => item.id === selectedProduct.id);
  wishlistBtn.classList.toggle("active", isInWishlist);
  wishlistBtn.innerHTML = isInWishlist
    ? `<i class="fas fa-heart mr-2"></i>Remove from Wishlist`
    : `<i class="far fa-heart mr-2"></i>Add to Wishlist`;
}

function renderRelatedProducts() {
  const relatedProducts = products
    .filter((p) => p.id !== selectedProduct.id && p.category === selectedProduct.category)
    .slice(0, 4);
  const relatedProductsContainer = document.getElementById("relatedProducts");
  relatedProductsContainer.innerHTML = relatedProducts.length
    ? relatedProducts
        .map(
          (product) => `
      <div class="related-product-card">
        <div class="relative">
          ${
            product.discount > 0
              ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                   ${product.discount}% OFF
                 </div>`
              : ""
          }
          <img src="${product.images[0]}" alt="${product.title}" class="w-full">
        </div>
        <div class="p-4">
          <h3 class="text-sm font-semibold text-gray-900 line-clamp-2">${product.title}</h3>
          <div class="flex items-center my-2">
            <div class="flex text-yellow-400">${generateStarRating(product.rating)}</div>
            <span class="ml-2 text-xs text-gray-600">(${product.reviewCount})</span>
          </div>
          <div class="flex items-center">
            <span class="text-base font-bold text-blue-600">₹${product.price.toFixed(2)}</span>
            ${
              product.originalPrice > product.price
                ? `<span class="ml-2 text-xs text-gray-500 line-through">₹${product.originalPrice.toFixed(2)}</span>`
                : ""
            }
          </div>
          <button onclick="viewProduct(${product.id})" class="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-sm">
            View Details
          </button>
        </div>
      </div>
    `,
        )
        .join("")
    : "<p class='col-span-full text-center text-gray-600'>No related products found.</p>";
}

function generateStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
  if (hasHalfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
  for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star"></i>';
  return starsHTML;
}

function formatCategory(category) {
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" & ");
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;
  cartCount.classList.toggle("hidden", count === 0);
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById("wishlistCount");
  const count = wishlist.length;
  wishlistCount.textContent = count;
  wishlistCount.classList.toggle("hidden", count === 0);
}

function showCart() {
  document.getElementById("cartModal").classList.remove("hidden");
  renderCartItems();
}

function closeCartModal() {
  document.getElementById("cartModal").classList.add("hidden");
}

function showWishlist() {
  document.getElementById("wishlistModal").classList.remove("hidden");
  renderWishlistItems();
}

function closeWishlistModal() {
  document.getElementById("wishlistModal").classList.add("hidden");
}

function renderCartItems() {
  const cartContent = document.getElementById("cartContent");
  const cartTotal = document.getElementById("cartTotal");
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="text-center py-8">
        <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
        <p class="text-gray-500">Add some products to get started!</p>
      </div>
    `;
    cartTotal.textContent = "₹0.00";
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `₹${total.toFixed(2)}`;
  cartContent.innerHTML = cart
    .map(
      (item) => `
      <div class="flex items-center space-x-4 py-4 border-b last:border-b-0">
        <img src="${item.images[0]}" alt="${item.title}" class="w-16 h-16 object-cover rounded-md">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900">${item.title}</h4>
          <p class="text-sm text-gray-600">₹${item.price.toFixed(2)}</p>
        </div>
        <div class="flex items-center space-x-2">
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})" 
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
            <i class="fas fa-minus text-xs"></i>
          </button>
          <span class="w-8 text-center font-semibold">${item.quantity}</span>
          <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})" 
                  class="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
            <i class="fas fa-plus text-xs"></i>
          </button>
        </div>
        <div class="text-right">
          <p class="font-semibold text-gray-900">₹${(item.price * item.quantity).toFixed(2)}</p>
          <button onclick="removeFromCart(${item.id})" 
                  class="text-red-500 hover:text-red-700 text-sm">
            <i class="fas fa-trash"></i> Remove
          </button>
        </div>
      </div>
    `,
    )
    .join("");
}

function renderWishlistItems() {
  const wishlistContent = document.getElementById("wishlistContent");
  if (wishlist.length === 0) {
    wishlistContent.innerHTML = `
      <div class="text-center py-8">
        <i class="fas fa-heart text-6xl text-gray-300 mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h3>
        <p class="text-gray-500">Save items you love for later!</p>
      </div>
    `;
    return;
  }
  wishlistContent.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${wishlist
    .map(
      (item) => `
      <div class="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
        <img src="${item.images[0]}" alt="${item.title}" class="w-20 h-20 object-cover rounded-md">
        <div class="flex-1">
          <h4 class="font-semibold text-gray-900 mb-1">${item.title}</h4>
          <p class="text-sm text-gray-600 mb-2">${item.description}</p>
          <div class="flex items-center space-x-2">
            <span class="text-base font-bold text-blue-600">₹${item.price.toFixed(2)}</span>
            ${
              item.originalPrice > item.price
                ? `<span class="text-xs text-gray-500 line-through">₹${item.originalPrice.toFixed(2)}</span>`
                : ""
            }
          </div>
          <div class="flex text-yellow-400 text-sm mt-1">
            ${generateStarRating(item.rating)}
            <span class="ml-2 text-gray-600">(${item.reviewCount})</span>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <button onclick="addToCart(${item.id})" 
                  class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
            <i class="fas fa-shopping-cart mr-1"></i> Add to Cart
          </button>
          <button onclick="removeFromWishlist(${item.id})" 
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm">
            <i class="fas fa-trash mr-1"></i> Remove
          </button>
        </div>
      </div>
    `,
    )
    .join("")}</div>`;
}

function updateCartQuantity(productId, newQuantity) {
  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
  }
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
  showNotification("Item removed from cart", "info");
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderWishlistItems();
  updateWishlistButton();
  showNotification("Removed from wishlist", "info");
}

function clearCart() {
  if (cart.length === 0) return;
  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    showNotification("Cart cleared", "info");
  }
}

function clearWishlistItems() {
  if (wishlist.length === 0) return;
  if (confirm("Are you sure you want to clear your wishlist?")) {
    wishlist = [];
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlistItems();
    updateWishlistButton();
    showNotification("Wishlist cleared", "info");
  }
}

function checkout() {
  if (cart.length === 0) {
    showNotification("Your cart is empty", "error");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  alert(`Checkout functionality would be implemented here.\n\nOrder Summary:\n${cart.length} items\nTotal: ₹${total.toFixed(2)}`);
  if (confirm("Simulate successful checkout? This will clear your cart.")) {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    closeCartModal();
    showNotification("Order placed successfully! (Demo)", "success");
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-4 z-50 px-4 py-2 rounded-md text-white transition-all duration-300 ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
  }`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function viewProduct(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product-details.html";
}

function handleSearch(e) {
  localStorage.setItem("searchTerm", e.target.value);
  window.location.href = "babycare.html";
}