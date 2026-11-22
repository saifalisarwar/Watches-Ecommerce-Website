
// Mobile Menu
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

// Contact Form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        formMessage.textContent =
            "Thank you " + name + "! Your message has been submitted.";

        contactForm.reset();
    });
}
