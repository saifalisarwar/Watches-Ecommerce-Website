
/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

}


/* =========================
   PRODUCT SEARCH
========================= */

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");
const noProducts = document.getElementById("noProducts");

let selectedCategory = "all";
let wishlistOnly = false;

function filterProducts() {

    let searchValue = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    let visibleCount = 0;

    products.forEach(product => {

        let name = product.dataset.name.toLowerCase();
        let category = product.dataset.category;

        let matchesSearch = name.includes(searchValue);

        let matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;

        let matchesWishlist =
            !wishlistOnly ||
            product.querySelector(".wishlist-btn").classList.contains("active");

        if (matchesSearch && matchesCategory && matchesWishlist) {

            product.style.display = "";

            visibleCount++;

        } else {

            product.style.display = "none";

        }

    });

    if (noProducts) {

        noProducts.style.display =
            visibleCount === 0 ? "block" : "none";

    }

}

if (searchInput) {

    searchInput.addEventListener("input", filterProducts);

}


/* =========================
   CATEGORY FILTER
========================= */

const categoryButtons = document.querySelectorAll(".category-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.category;

        wishlistOnly = false;

        filterProducts();

    });

});


/* =========================
   SHOPPING CART
========================= */

let cart = [];

const cartCount = document.getElementById("cartCount");
const cartButton = document.querySelector(".cart-button");
const cartMessage = document.getElementById("cartMessage");

function updateCart() {

    if (cartCount) {

        cartCount.textContent = cart.length;

    }

}


// Add To Cart

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        let name = button.dataset.name;
        let price = Number(button.dataset.price);

        cart.push({
            name: name,
            price: price
        });

        updateCart();

        if (cartMessage) {

            cartMessage.textContent = name + " added to cart!";

            cartMessage.classList.add("show");

            setTimeout(() => {
                cartMessage.classList.remove("show");
            }, 2000);

        }

    });

});


// Show Cart Details

if (cartButton) {

    cartButton.addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

        } else {

            let message = "Your Shopping Cart:\n\n";
            let total = 0;

            cart.forEach(item => {

                message += item.name + " - ₹" + item.price + "\n";

                total += item.price;

            });

            message += "\nTotal Amount: ₹" + total;

            alert(message);

        }

    });

}


/* =========================
   WISHLIST
========================= */

const wishlistButtons = document.querySelectorAll(".wishlist-btn");
const wishlistBtn = document.getElementById("wishlistBtn");

wishlistButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.innerHTML = '<i class="ri-heart-fill"></i>';

        } else {

            button.innerHTML = '<i class="ri-heart-line"></i>';

        }

        if (wishlistOnly) {
            filterProducts();
        }

    });

});


// Show Wishlist Products

if (wishlistBtn) {

    wishlistBtn.addEventListener("click", () => {

        wishlistOnly = !wishlistOnly;

        if (wishlistOnly) {

            selectedCategory = "all";

            categoryButtons.forEach(button => {
                button.classList.remove("active");
            });

            document.querySelector('[data-category="all"]')
                .classList.add("active");

        }

        filterProducts();

    });

}


/* =========================
   HERO IMAGE SLIDER
========================= */

const slides = [

    {
        title: "Time To Upgrade Your Style",
        text: "Discover premium watches at amazing prices. Make every second special.",
        discount: "UP TO 50% OFF",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
    },

    {
        title: "Luxury That Defines You",
        text: "Explore stylish and premium watches for every occasion.",
        discount: "UP TO 40% OFF",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=900"
    },

    {
        title: "Smart Watches, Smart Life",
        text: "Stay connected and track your fitness with smart watches.",
        discount: "UP TO 30% OFF",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=900"
    }

];

let currentSlide = 0;

const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const heroDiscount = document.getElementById("heroDiscount");
const heroImage = document.getElementById("heroImage");

function showSlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    if (heroTitle && heroText && heroDiscount && heroImage) {

        heroTitle.textContent = slides[currentSlide].title;

        heroText.textContent = slides[currentSlide].text;

        heroDiscount.textContent = slides[currentSlide].discount;

        heroImage.src = slides[currentSlide].image;

    }

}

const nextSlide = document.getElementById("nextSlide");
const prevSlide = document.getElementById("prevSlide");

if (nextSlide) {

    nextSlide.addEventListener("click", () => {

        showSlide(currentSlide + 1);

    });

}

if (prevSlide) {

    prevSlide.addEventListener("click", () => {

        showSlide(currentSlide - 1);

    });

}


/* =========================
   LOGIN BUTTON
========================= */

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        alert("Welcome to WatchZone! Login feature coming soon.");

    });

}




// Shop By Category Filter + Auto Scroll

const categoryCards = document.querySelectorAll(".category-card");
const homeProducts = document.querySelectorAll(".product-section .product-card");

categoryCards.forEach(function (card) {
    card.addEventListener("click", function () {

        // Active category change
        categoryCards.forEach(function (item) {
            item.classList.remove("active");
        });

        card.classList.add("active");

        // Selected category
        const selectedCategory = card.dataset.category;

        // Filter products
        homeProducts.forEach(function (product) {
            const productCategory = product.dataset.category;

            if (selectedCategory === "all" ||
                productCategory === selectedCategory) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });

        // Scroll to products
        const productsSection = document.getElementById("deals");

        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
