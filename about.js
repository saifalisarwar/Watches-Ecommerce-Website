
// Mobile Navbar
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

// Login Button
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login feature coming soon!");
    });
}
