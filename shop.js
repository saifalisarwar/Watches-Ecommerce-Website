
// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Search Products
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".shop-product-grid .product-card");

function filterProducts() {

    const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

    const activeFilter = document.querySelector(".shop-filter.active");

    const selectedCategory = activeFilter
        ? activeFilter.dataset.category
        : "all";

    let visibleCount = 0;

    products.forEach(function (product) {

        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category;

        const matchesSearch = name.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            product.classList.remove("hide");
            visibleCount++;
        } else {
            product.classList.add("hide");
        }

    });

    const productCount = document.getElementById("productCount");
    const noProducts = document.getElementById("noProducts");

    if (productCount) {
        productCount.textContent = visibleCount + " Products";
    }

    if (noProducts) {
        noProducts.classList.toggle("show", visibleCount === 0);
    }
}

if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
}


// Category Filter + Auto Scroll
const filterButtons = document.querySelectorAll(".shop-filter");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Active button change
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Filter products
        filterProducts();

        // Scroll to products
        const shopProducts = document.getElementById("shopProducts");

        if (shopProducts) {
            shopProducts.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// Add to Cart and Save Products
document.querySelectorAll(".add-cart").forEach(function (button) {

    button.addEventListener("click", function () {

        const product = button.closest(".product-card");

        const name = button.dataset.name;
        const price = Number(button.dataset.price);
        const image = product.querySelector("img").src;

        let cart = JSON.parse(localStorage.getItem("watchCart")) || [];

        const existingProduct = cart.find(function (item) {
            return item.name === name;
        });

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });
        }

        localStorage.setItem("watchCart", JSON.stringify(cart));

        const totalItems = cart.reduce(function (total, item) {
            return total + item.quantity;
        }, 0);

        const cartCountElement = document.getElementById("cartCount");

        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
        }

        alert(name + " added to cart!");

    });

});


// Show Saved Cart Count
const savedCart = JSON.parse(localStorage.getItem("watchCart")) || [];

const cartCountElement = document.getElementById("cartCount");

if (cartCountElement) {
    cartCountElement.textContent = savedCart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);
}


// Wishlist
document.querySelectorAll(".wishlist-btn").forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");

        const icon = button.querySelector("i");

        if (icon) {
            icon.classList.toggle("ri-heart-fill");
            icon.classList.toggle("ri-heart-line");
        }

    });

});


// Login Demo
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login feature coming soon!");
    });
}
