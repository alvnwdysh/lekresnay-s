/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});


/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");

function openMobileMenu() {

    mobileMenu.classList.add("active");
    menuToggle.classList.add("active");
    mobileMenuOverlay.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("no-scroll");

}

function closeMobileMenu() {

    mobileMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("no-scroll");

}

menuToggle.addEventListener("click", () => {

    if (mobileMenu.classList.contains("active")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }

});

mobileMenuOverlay.addEventListener("click", closeMobileMenu);

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeMobileMenu();
    }

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});


/* =========================
   PRODUCT FILTER
========================= */

const filters =
    document.querySelectorAll(".filter");

const products =
    document.querySelectorAll(".product-card");


filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        filter.classList.add("active");

        const category =
            filter.dataset.filter;

        products.forEach(product => {

            const productCategory =
                product.dataset.category;

            if (
                category === "all" ||
                productCategory === category
            ) {

                product.classList.remove("hidden");

            } else {

                product.classList.add("hidden");

            }

        });

    });

});


/* =========================
   ORDER MODAL
========================= */

const orderButtons =
    document.querySelectorAll(".order-btn");

const orderModal =
    document.getElementById("orderModal");

const closeModal =
    document.getElementById("closeModal");

const selectedProduct =
    document.getElementById("selectedProduct");

const whatsappButton =
    document.getElementById("whatsappButton");


const phoneNumber =
    "6289510288524";


orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product =
            button.dataset.product;

        selectedProduct.textContent =
            product;

        const message =
            `Halo Kak (LeKres Nay's), saya ingin memesan ${product}.`;

        whatsappButton.href =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        orderModal.classList.add("active");

    });

});


closeModal.addEventListener("click", () => {

    orderModal.classList.remove("active");

});


orderModal.addEventListener("click", (e) => {

    if (e.target === orderModal) {

        orderModal.classList.remove("active");

    }

});


/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials = [

    {
        text:
        "Kue Lekker nya enak, tempatnya nyaman.",

        name:
        "Raka"
    },

    {
        text:
        "Kue Lekker nya konsisten dan pelayanannya ramah.",

        name:
        "Nadia"
    },

    {
        text:
        "Tempatnya tenang, kue Lekker nya enak, dan cocok untuk menghabiskan sore bersama teman.",

        name:
        "Fajar"
    }

];


let testimonialIndex = 0;


const testimonialText =
    document.getElementById("testimonialText");

const customerName =
    document.getElementById("customerName");


function showTestimonial(index) {

    testimonialText.textContent =
        testimonials[index].text;

    customerName.textContent =
        testimonials[index].name;

}


document
    .getElementById("nextTestimonial")
    .addEventListener("click", () => {

        testimonialIndex++;

        if (
            testimonialIndex >=
            testimonials.length
        ) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    });


document
    .getElementById("prevTestimonial")
    .addEventListener("click", () => {

        testimonialIndex--;

        if (testimonialIndex < 0) {

            testimonialIndex =
                testimonials.length - 1;

        }

        showTestimonial(testimonialIndex);

    });


/* =========================
   AUTO TESTIMONIAL
========================= */

setInterval(() => {

    testimonialIndex++;

    if (
        testimonialIndex >=
        testimonials.length
    ) {

        testimonialIndex = 0;

    }

    showTestimonial(testimonialIndex);

}, 6000);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();