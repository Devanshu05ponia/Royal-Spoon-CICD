// =============================================
// ROYAL SPOON
// Main JavaScript
// =============================================


// =============================================
// LOADER
// =============================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

            setTimeout(function () {

                loader.remove();

            }, 500);

        }, 1500);

    }

});


// =============================================
// NAVBAR SCROLL EFFECT
// =============================================

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        }

        else {

            navbar.classList.remove("scrolled");

        }

    });

}



// =============================================
// SCROLL TO TOP BUTTON
// =============================================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topBtn.style.display = "flex";

        }

        else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



// =============================================
// MENU SHOW MORE
// =============================================

const menuBtn = document.getElementById("menuBtn");

if (menuBtn) {

    const extraItems = document.querySelectorAll(".extra-menu");

    let opened = false;

    menuBtn.addEventListener("click", function () {

        opened = !opened;

        extraItems.forEach(function (item) {

            item.style.display = opened ? "block" : "none";

        });

        menuBtn.innerHTML = opened

            ? 'Show Less <i class="fas fa-chevron-up"></i>'

            : 'Show More <i class="fas fa-chevron-down"></i>';

    });

}



// =============================================
// CATEGORY BUTTON
// =============================================

const categoryBtn = document.getElementById("categoryBtn");

if (categoryBtn) {

    categoryBtn.addEventListener("click", function () {

        window.location.href = "pages/menu.html";

    });

}



// =============================================
// LIVE SEARCH
// =============================================

const searchInput = document.getElementById("dishSearch");

const searchBtn = document.getElementById("searchBtn");

if (searchInput && searchBtn) {

    const dishes = {

        "paneer butter masala": "pages/menu.html",

        "paneer tikka": "pages/menu.html",

        "dal makhani": "pages/menu.html",

        "pizza": "pages/menu.html",

        "pasta": "pages/menu.html",

        "biryani": "pages/menu.html",

        "fried rice": "pages/menu.html",

        "noodles": "pages/menu.html",

        "burger": "pages/menu.html",

        "brownie": "pages/menu.html",

        "cold coffee": "pages/menu.html",

        "milkshake": "pages/menu.html",

        "tea": "pages/menu.html",

        "coffee": "pages/menu.html"

    };

    function searchDish() {

        const value = searchInput.value.trim().toLowerCase();

        if (value === "") {

            alert("Please enter a dish.");

            return;

        }

        if (dishes[value]) {

            window.location.href = dishes[value];

        }

        else {

            alert("Dish not found.");

        }

    }

    searchBtn.addEventListener("click", searchDish);

    searchInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            searchDish();

        }

    });

}



// =============================================
// NEWSLETTER
// =============================================

const newsletterForm = document.querySelector(".newsletter-box form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = newsletterForm.querySelector("input").value.trim();

        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            alert("Please enter your email.");

            return;

        }

        if (!pattern.test(email)) {

            alert("Please enter a valid email.");

            return;

        }

        alert("Thank you for subscribing!");

        newsletterForm.reset();

    });

}



// =============================================
// IMAGE HOVER EFFECT
// =============================================

document.querySelectorAll(".gallery-img").forEach(function (img) {

    img.addEventListener("mouseenter", function () {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", function () {

        img.style.transform = "scale(1)";

    });

});



// =============================================
// FOOD CARD EFFECT
// =============================================

document.querySelectorAll(".food-card").forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});



// =============================================
// CHEF CARD EFFECT
// =============================================

document.querySelectorAll(".chef-card").forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0)";

    });

});



// =============================================
// FADE ANIMATION
// =============================================

const hiddenSections = document.querySelectorAll(

".about-section,.chef-section,.why-section,.category-section,.menu-section,.luxury-section,.review-section,.gallery-preview,.event-section,.newsletter-section,.map-section"

);

if (hiddenSections.length > 0) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-section");

            }

        });

    }, {

        threshold: 0.15

    });

    hiddenSections.forEach(function (section) {

        section.classList.add("hidden-section");

        observer.observe(section);

    });

}



// =============================================
// ACTIVE NAVIGATION
// =============================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar .nav-link");

if (sections.length && navLinks.length) {

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(function (section) {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

}



// =============================================
// CONSOLE
// =============================================

console.log("Royal Spoon Website Loaded Successfully");