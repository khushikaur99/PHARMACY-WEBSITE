// Product data
const products = [
  {
    id: 1,
    title: "Maternity Maxi Dress",
    description: "Comfortable and stylish maxi dress for expecting mothers",
    category: "maternity-wear",
    price: 3817.17, // 45.99 * 83
    originalPrice: 4979.17, // 59.99 * 83
    discount: 23,
    rating: 4.5,
    reviewCount: 128,
    images: [
      "../images/maxi2.jpeg",
      "../images/maternity_maxi.jpeg",
      "../images/maternity_maxi.jpeg",
      "../images/maxi2.jpeg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    brand: "MomStyle",
  },
  {
    id: 2,
    title: "Prenatal Vitamins - 90 Count",
    description: "Essential vitamins for healthy pregnancy",
    category: "nutrition",
    price: 2489.17, // 29.99 * 83
    originalPrice: 3319.17, // 39.99 * 83
    discount: 25,
    rating: 4.8,
    reviewCount: 256,
    images: [
      "./images/vitamin/vit1.jpeg",
      "./images/vitamin/vit2.jpeg",
      "./images/vitamin/vit3.jpeg",
      "./images/vitamin/vit1.jpeg",
    ],
    inStock: true,
    brand: "VitaMom",
  },
  {
    id: 3,
    title: "Stretch Mark Prevention Cream",
    description: "Natural ingredients to prevent and reduce stretch marks",
    category: "skincare",
    price: 2074.17, // 24.99 * 83
    originalPrice: 2904.17, // 34.99 * 83
    discount: 29,
    rating: 4.3,
    reviewCount: 89,
    images: [
      "./images/strectmarks/mark1.jpeg",
      "./images/strectmarks/mark2.jpeg",
      "./images/strectmarks/mark3.jpeg",
      "./images/strectmarks/mark4.jpeg",
    ],
    inStock: true,
    brand: "Medaderma",
  },
  {
    id: 4,
    title: "First Trimester Essentials Kit",
    description: "Complete kit for first trimester comfort and wellness",
    category: "trimester-kits",
    price: 7469.17, // 89.99 * 83
    originalPrice: 9959.17, // 119.99 * 83
    discount: 25,
    rating: 4.7,
    reviewCount: 67,
    images: [
      "./images/1st kit/kit1.jpeg",
      "./images/1st kit/kit2.jpeg",
      "./images/1st kit/kit3.jpeg",
      "./images/1st kit/kit4.jpeg",
    ],
    inStock: true,
    brand: "TrimesterCare",
  },
  {
    id: 5,
    title: "Postpartum Recovery Belt",
    description: "Supportive belly belt for postpartum recovery",
    category: "postpartum",
    price: 2904.17, // 34.99 * 83
    originalPrice: 3734.17, // 44.99 * 83
    discount: 22,
    rating: 4.4,
    reviewCount: 143,
    images: [
      "./images/Recovery Belt/belt1.jpeg",
      "./images/Recovery Belt/belt2.jpeg",
      "./images/Recovery Belt/belt3.jpeg",
      "./images/Recovery Belt/belt4.jpeg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    brand: "RecoverWell",
  },
  {
    id: 6,
    title: "Electric Breast Pump",
    description: "Quiet and efficient electric breast pump",
    category: "breastfeeding",
    price: 12449.17, // 149.99 * 83
    originalPrice: 16599.17, // 199.99 * 83
    discount: 25,
    rating: 4.6,
    reviewCount: 234,
    images: [
      "./images/Breastpump/pump1.jpg",
      "./images/Breastpump/pump2.jpeg",
      "./images/Breastpump/pump3.jpeg",
    "./images/Breastpump/pump4.jpeg",
    ],
    inStock: true,
    brand: "PumpPro",
  },
  {
    id: 7,
    title: "Nursing Bras Set (3-Pack)",
    description: "Comfortable and supportive nursing bras",
    category: "maternity-wear",
    price: 3319.17, // 39.99 * 83
    originalPrice: 4564.17, // 54.99 * 83
    discount: 27,
    rating: 4.2,
    reviewCount: 178,
    images: [
      "./images/nursing bra/3pack.jpeg",
      "./images/nursing bra/bra2.jpeg",
      "./images/nursing bra/bra3.jpeg",
      "./images/nursing bra/bra4.jpeg",
    ],
    sizes: ["32B", "34B", "36B", "38B", "32C", "34C", "36C", "38C"],
    inStock: true,
    brand: "ComfortFit",
  },
  {
    id: 8,
    title: "Pregnancy Pillow - Full Body",
    description: "U-shaped pregnancy pillow for better sleep",
    category: "maternity-wear",
    price: 4979.17, // 59.99 * 83
    originalPrice: 6639.17, // 79.99 * 83
    discount: 25,
    rating: 4.5,
    reviewCount: 312,
    images: [
      "./images/pillow full body/pillow1.jpeg",
      "./images/pillow full body/pillow2.jpeg",
      "./images/pillow full body/pillow3.jpeg",
      "./images/pillow full body/pillow1.jpeg",
    ],
    inStock: true,
    brand: "SleepWell",
  },
  {
    id: 9,
    title: "Omega-3 DHA Supplements",
    description: "Essential fatty acids for baby's brain development",
    category: "nutrition",
    price: 2738.17, // 32.99 * 83
    originalPrice: 3568.17, // 42.99 * 83
    discount: 23,
    rating: 4.7,
    reviewCount: 189,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    inStock: true,
    brand: "OmegaCare",
  },
  {
    id: 10,
    title: "Nipple Cream for Breastfeeding",
    description: "Soothing and healing cream for nursing mothers",
    category: "breastfeeding",
    price: 1576.17, // 18.99 * 83
    originalPrice: 2074.17, // 24.99 * 83
    discount: 24,
    rating: 4.4,
    reviewCount: 156,
    images: [
      "./images/nipplecream/cream1.jpeg",
      "./images/nipplecream/cream2.jpeg",
      "./images/nipplecream/cream3.jpeg",
      "./images/nipplecream/cream1.jpeg",
      
    ],
    inStock: true,
    brand: "NursingCare",
  },
  {
    id: 11,
    title: "Maternity Leggings (2-Pack)",
    description: "High-waisted comfortable maternity leggings",
    category: "maternity-wear",
    price: 2406.17, // 28.99 * 83
    originalPrice: 3319.17, // 39.99 * 83
    discount: 28,
    rating: 4.3,
    reviewCount: 203,
    images: [
      "./images/leggings/legging1.jpeg",
      "./images/leggings/legging2.jpeg",
      "./images/leggings/legging3.jpeg",
      "./images/leggings/legging4.jpeg",
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    brand: "FlexFit",
  },
  {
    id: 12,
    title: "Third Trimester Care Package",
    description: "Everything you need for the final trimester",
    category: "trimester-kits",
    price: 10789.17, // 129.99 * 83
    originalPrice: 14109.17, // 169.99 * 83
    discount: 24,
    rating: 4.8,
    reviewCount: 94,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    inStock: true,
    brand: "TrimesterCare",
  },
  {
    id: 13,
    title: "Maternity Moisturizer with SPF",
    description: "Pregnancy-safe moisturizer with sun protection",
    category: "skincare",
    price: 1908.17, // 22.99 * 83
    originalPrice: 2489.17, // 29.99 * 83
    discount: 23,
    rating: 4.1,
    reviewCount: 76,
    images: [
      "./images/Moisturizer/M1.jpeg",
      "./images/Moisturizer/M2.jpeg",
      "./images/Moisturizer/M3.jpeg",
    ],
    inStock: true,
    brand: "SafeSkin",
  },
  {
    id: 14,
    title: "Nursing Pads (Disposable 60-Pack)",
    description: "Ultra-absorbent disposable nursing pads",
    category: "breastfeeding",
    price: 1327.17, // 15.99 * 83
    originalPrice: 1659.17, // 19.99 * 83
    discount: 20,
    rating: 4.3,
    reviewCount: 167,
    images: [
      "./images/nursingpad/pad1.jpeg",
      "./images/nursingpad/pad2.jpeg",
      "./images/nursingpad/pad3.jpeg",
      "./images/nursingpad/pad4.jpeg",
    ],
    inStock: true,
    brand: "DryComfort",
  },
  {
    id: 15,
    title: "Second Trimester Wellness Kit",
    description: "Curated products for second trimester comfort",
    category: "trimester-kits",
    price: 8299.17, // 99.99 * 83
    originalPrice: 10789.17, // 129.99 * 83
    discount: 23,
    rating: 4.6,
    reviewCount: 112,
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    inStock: true,
    brand: "TrimesterCare",
  },
  {
    id: 16,
    title: "Maternity Jeans - Skinny Fit",
    description: "Comfortable skinny maternity jeans with belly panel",
    category: "maternity-wear",
    price: 4398.17, // 52.99 * 83
    originalPrice: 5809.17, // 69.99 * 83
    discount: 24,
    rating: 4.4,
    reviewCount: 198,
    images: [
      "./images/jeans/jeans1.jpeg",
      "./images/jeans/jeans2.jpeg",
      "./images/jeans/jeans3.jpeg",
      "./images/jeans/jeans4.jpeg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    brand: " variantsDenimMom",
  },
];

// Global variables
let filteredProducts = [...products];
let currentPage = 1;
const productsPerPage = 12;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// HTML Template Functions
function getDiscountBadge(discount) {
  return discount > 0
    ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
         ${discount}% OFF
       </div>`
    : "";
}

function getWishlistIcon(isInWishlist) {
  return isInWishlist ? "fas fa-heart text-pink-500" : "far fa-heart text-gray-400";
}

function getCarouselImages(images, title, productId) {
  return `
    <div id="carousel-${productId}" class="flex transition-transform duration-300 ease-in-out h-full">
      ${images
        .map(
          (image) => `
          <img src="${image}" alt="${title}" class="w-full h-full object-cover flex-shrink-0 image-zoom">
        `,
        )
        .join("")}
    </div>
    <button id="prev-${productId}" class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <i class="fas fa-chevron-left text-gray-600"></i>
    </button>
    <button id="next-${productId}" class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <i class="fas fa-chevron-right text-gray-600"></i>
    </button>
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
      ${images
        .map(
          (_, index) => `
          <button class="carousel-dot w-2 h-2 rounded-full bg-white bg-opacity-60 hover:bg-opacity-100 transition-all" data-index="${index}"></button>
        `,
        )
        .join("")}
    </div>
  `;
}

function getPriceDisplay(price, originalPrice) {
  return `
    <span class="text-xl font-bold text-pink-600">₹${price.toFixed(2)}</span>
    ${
      originalPrice > price
        ? `<span class="ml-2 text-sm text-gray-500 line-through">₹${originalPrice.toFixed(2)}</span>`
        : ""
    }
  `;
}

function getSizesDisplay(sizes) {
  return sizes
    ? `<div class="mb-3"><span class="text-sm text-gray-600">Sizes: ${sizes.join(", ")}</span></div>`
    : "";
}

//create product card
function createProductCard(product) {
  const isInWishlist = wishlist.some((item) => item.id === product.id);
  return `
    <div class="product-card">
      <div class="relative group">
        ${getDiscountBadge(product.discount)}
        <button id="wishlist-${product.id}" class="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
          <i class="${getWishlistIcon(isInWishlist)}"></i>
        </button>
        <div class="relative h-64 overflow-hidden">
          ${getCarouselImages(product.images, product.title, product.id)}
        </div>
      </div>
      <div class="content">
        <div class="text-content">
          <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">${product.title}</h3>
          <p class="text-sm text-gray-600 line-clamp-2">${product.description}</p>
          <div class="flex items-center">
            <div class="flex text-yellow-400">
              ${generateStarRating(product.rating)}
            </div>
            <span class="ml-2 text-sm text-gray-600">(${product.reviewCount})</span>
          </div>
          <div class="flex items-center">
            ${getPriceDisplay(product.price, product.originalPrice)}
          </div>
          ${getSizesDisplay(product.sizes)}
        </div>
        <div class="button-container">
          <button id="view-details-${product.id}" class="view-details">
            View Details
          </button>
        </div>
      </div>
    </div>
  `;
}

function getEmptyCartTemplate() {
  return `
    <div class="text-center py-8">
      <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
      <p class="text-gray-500">Add some products to get started!</p>
    </div>
  `;
}

function getCartItemTemplate(item) {
  return `
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
  `;
}

function getEmptyWishlistTemplate() {
  return `
    <div class="text-center py-8">
      <i class="fas fa-heart text-6xl text-gray-300 mb-4"></i>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h3>
      <p class="text-gray-500">Save items you love for later!</p>
    </div>
  `;
}

function getWishlistItemTemplate(item) {
  return `
    <div class="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
      <img src="${item.images[0]}" alt="${item.title}" class="w-20 h-20 object-cover rounded-md">
      <div class="flex-1">
        <h4 class="font-semibold text-gray-900 mb-1">${item.title}</h4>
        <p class="text-sm text-gray-600 mb-2">${item.description}</p>
        <div class="flex items-center space-x-2">
          ${getPriceDisplay(item.price, item.originalPrice)}
        </div>
        <div class="flex text-yellow-400 text-sm mt-1">
          ${generateStarRating(item.rating)}
          <span class="ml-2 text-gray-600">(${item.reviewCount})</span>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        <button onclick="addToCart(${item.id})" 
                class="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm">
          <i class="fas fa-shopping-cart mr-1"></i> Add to Cart
        </button>
        <button onclick="removeFromWishlist(${item.id})" 
                class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm">
          <i class="fas fa-trash mr-1"></i> Remove
        </button>
      </div>
    </div>
  `;
}

function getEmptyProductsTemplate() {
  return `
    <div class="col-span-full text-center py-12">
      <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
      <h3 class="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
      <p class="text-gray-500">Try adjusting your filters or search terms</p>
    </div>
  `;
}

function getPaginationButton(page, isActive, icon = "") {
  return `
    <button class="pagination-btn px-3 py-2 rounded-md transition-colors ${
      isActive ? "bg-pink-600 text-white" : "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
    }" data-page="${page}">${icon || page}</button>
  `;
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  updateWishlistCount();
  renderProducts();
  setupEventListeners();
});

// Event listeners setup
function setupEventListeners() {
  document.getElementById("mobileMenuBtn").addEventListener("click", toggleMobileMenu);
  document.getElementById("filterToggleBtn").addEventListener("click", toggleFilterSidebar);
  document.getElementById("closeSidebarBtn").addEventListener("click", closeFilterSidebar);
  document.getElementById("filterOverlay").addEventListener("click", closeFilterSidebar);
  document.getElementById("searchInput").addEventListener("input", handleSearch);
  document.getElementById("mobileSearchInput").addEventListener("input", handleSearch);
  document.getElementById("sortSelect").addEventListener("change", handleSort);
  document.querySelectorAll(".category-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });
  document.querySelectorAll(".price-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });
  document.querySelectorAll(".rating-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });
  document.querySelectorAll(".discount-filter").forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });
  document.getElementById("clearFilters").addEventListener("click", clearAllFilters);
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
}

// Mobile menu functions
function toggleMobileMenu() {
  console.log("Mobile menu toggled");
}

function toggleFilterSidebar() {
  const sidebar = document.getElementById("filterSidebar");
  const overlay = document.getElementById("filterOverlay");
  sidebar.classList.remove("hidden-mobile");
  overlay.classList.remove("hidden");
  sidebar.style.position = "fixed";
  sidebar.style.top = "0";
  sidebar.style.left = "0";
  sidebar.style.height = "100vh";
  sidebar.style.zIndex = "50";
  sidebar.style.overflowY = "auto";
}

function closeFilterSidebar() {
  const sidebar = document.getElementById("filterSidebar");
  const overlay = document.getElementById("filterOverlay");
  sidebar.classList.add("hidden-mobile");
  overlay.classList.add("hidden");
  sidebar.style.position = "";
  sidebar.style.top = "";
  sidebar.style.left = "";
  sidebar.style.height = "";
  sidebar.style.zIndex = "";
  sidebar.style.overflowY = "";
}

// Search functionality
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  filteredProducts = searchTerm
    ? products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm),
      )
    : [...products];
  currentPage = 1;
  renderProducts();
  updateResultsCount();
}

// Sort functionality
function handleSort(e) {
  const sortValue = e.target.value;
  switch (sortValue) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    default:
      filteredProducts = [...products];
  }
  currentPage = 1;
  renderProducts();
}

// Filter functionality
function applyFilters() {
  let filtered = [...products];
  const selectedCategory = document.querySelector('input[name="category"]:checked').value;
  if (selectedCategory !== "all") {
    filtered = filtered.filter((product) => product.category === selectedCategory);
  }
  const priceFilters = document.querySelectorAll(".price-filter:checked");
  if (priceFilters.length > 0) {
    filtered = filtered.filter((product) =>
      Array.from(priceFilters).some((filter) => {
        const min = Number.parseInt(filter.dataset.min) * 83;
        const max = Number.parseInt(filter.dataset.max) * 83;
        return product.price >= min && product.price <= max;
      }),
    );
  }
  const ratingFilters = document.querySelectorAll(".rating-filter:checked");
  if (ratingFilters.length > 0) {
    filtered = filtered.filter((product) =>
      Array.from(ratingFilters).some((filter) => {
        const minRating = Number.parseInt(filter.dataset.rating);
        return product.rating >= minRating;
      }),
    );
  }
  const discountFilters = document.querySelectorAll(".discount-filter:checked");
  if (discountFilters.length > 0) {
    filtered = filtered.filter((product) =>
      Array.from(discountFilters).some((filter) => {
        const minDiscount = Number.parseInt(filter.dataset.discount);
        return product.discount >= minDiscount;
      }),
    );
  }
  filteredProducts = filtered;
  currentPage = 1;
  renderProducts();
  updateResultsCount();
}

function clearAllFilters() {
  document.querySelector('input[name="category"][value="all"]').checked = true;
  document.querySelectorAll(".price-filter").forEach((filter) => (filter.checked = false));
  document.querySelectorAll(".rating-filter").forEach((filter) => (filter.checked = false));
  document.querySelectorAll(".discount-filter").forEach((filter) => (filter.checked = false));
  document.getElementById("sortSelect").value = "default";
  document.getElementById("searchInput").value = "";
  document.getElementById("mobileSearchInput").value = "";
  filteredProducts = [...products];
  currentPage = 1;
  renderProducts();
  updateResultsCount();
}

// Update results count
function updateResultsCount() {
  const resultsCount = document.getElementById("resultsCount");
  const total = filteredProducts.length;
  const start = (currentPage - 1) * productsPerPage + 1;
  const end = Math.min(currentPage * productsPerPage, total);
  resultsCount.textContent = total === 0 ? "No products found" : `Showing ${start}-${end} of ${total} products`;
}

// Cart and wishlist functions
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

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showNotification("Product added to cart!", "success");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartItems();
  showNotification("Item removed from cart", "info");
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

function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId);
  const existingIndex = wishlist.findIndex((item) => item.id === productId);
  if (existingIndex > -1) {
    wishlist.splice(existingIndex, 1);
    showNotification("Removed from wishlist", "info");
  } else {
    wishlist.push(product);
    showNotification("Added to wishlist!", "success");
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderProducts();
  if (!document.getElementById("wishlistModal").classList.contains("hidden")) {
    renderWishlistItems();
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlistCount();
  renderWishlistItems();
  renderProducts();
  showNotification("Removed from wishlist", "info");
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
    cartContent.innerHTML = getEmptyCartTemplate();
    cartTotal.textContent = "₹0.00";
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `₹${total.toFixed(2)}`;
  cartContent.innerHTML = cart.map(getCartItemTemplate).join("");
}

function renderWishlistItems() {
  const wishlistContent = document.getElementById("wishlistContent");
  if (wishlist.length === 0) {
    wishlistContent.innerHTML = getEmptyWishlistTemplate();
    return;
  }
  wishlistContent.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">${wishlist
    .map(getWishlistItemTemplate)
    .join("")}</div>`;
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
    renderProducts();
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

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-4 z-50 px-4 py-2 rounded-md text-white transition-all duration-300 ${
    type === "success" ? "bg-green-500" : type === "error" ? "bg-red-500" : "bg-blue-500"
  }`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

// Render products function
function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  productsGrid.innerHTML = productsToShow.length === 0 ? getEmptyProductsTemplate() : productsToShow.map(createProductCard).join("");
  productsToShow.forEach((product) => {
    const addToCartBtn = document.getElementById(`add-to-cart-${product.id}`);
    if (addToCartBtn) addToCartBtn.addEventListener("click", () => addToCart(product.id));
    const wishlistBtn = document.getElementById(`wishlist-${product.id}`);
    if (wishlistBtn) wishlistBtn.addEventListener("click", () => toggleWishlist(product.id));
    const viewDetailsBtn = document.getElementById(`view-details-${product.id}`);
    if (viewDetailsBtn) viewDetailsBtn.addEventListener("click", () => viewProductDetails(product.id));
    setupImageCarousel(product.id);
  });
  renderPagination();
  updateResultsCount();
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

function setupImageCarousel(productId) {
  const carousel = document.getElementById(`carousel-${productId}`);
  const prevBtn = document.getElementById(`prev-${productId}`);
  const nextBtn = document.getElementById(`next-${productId}`);
  const dots = carousel.parentElement.querySelectorAll(".carousel-dot");
  let currentIndex = 0;
  const totalImages = dots.length;
  function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-opacity-100", index === currentIndex);
      dot.classList.toggle("bg-opacity-60", index !== currentIndex);
    });
  }
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
  });
  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });
  dots.forEach((dot, index) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      currentIndex = index;
      updateCarousel();
    });
  });
  setInterval(() => {
    currentIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);
}

function renderPagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  let paginationHTML = "";
  if (currentPage > 1) {
    paginationHTML += getPaginationButton(currentPage - 1, false, '<i class="fas fa-chevron-left"></i>');
  }
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  if (startPage > 1) {
    paginationHTML += getPaginationButton(1, false);
    if (startPage > 2) paginationHTML += '<span class="px-2 text-gray-400">...</span>';
  }
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += getPaginationButton(i, i === currentPage);
  }
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) paginationHTML += '<span class="px-2 text-gray-400">...</span>';
    paginationHTML += getPaginationButton(totalPages, false);
  }
  if (currentPage < totalPages) {
    paginationHTML += getPaginationButton(currentPage + 1, false, '<i class="fas fa-chevron-right"></i>');
  }
  pagination.innerHTML = paginationHTML;
  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = Number.parseInt(btn.dataset.page);
      renderProducts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function viewProductDetails(productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product-details.html";
}


// mothercare banners
  const slides = document.querySelectorAll("#bannerWrapper .slide");
  const dots = document.querySelectorAll("section .absolute.bottom-4 button");
  let current = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = (i === index) ? "1" : "0";
      dots[i].classList.remove("active-dot");
      dots[i].classList.remove("bg-white");
      dots[i].classList.add("bg-white/50");
    });
    dots[index].classList.add("active-dot");
    dots[index].classList.add("bg-white");
    dots[index].classList.remove("bg-white/50");
    current = index;
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      showSlide(index);
      startAutoSlide();
    });
  });

  // Init
  showSlide(current);
  startAutoSlide();


  