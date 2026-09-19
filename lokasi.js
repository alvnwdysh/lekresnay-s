/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
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
   SEARCH LOCATION
========================= */

const searchInput = document.getElementById("searchInput");
const locationCards = document.querySelectorAll(".location-card");
const notFound = document.getElementById("notFound");

searchInput.addEventListener("input", () => {

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    let found = 0;

    locationCards.forEach(card => {

        const searchData =
            card.dataset.search.toLowerCase();

        if (searchData.includes(keyword)) {
            card.classList.remove("hidden");
            found++;
        } else {
            card.classList.add("hidden");
        }
    });

    if (found === 0) {
        notFound.style.display = "block";
    } else {
        notFound.style.display = "none";
    }
});


/* =========================
   SELECT BRANCH
========================= */

const modal = document.getElementById("branchModal");
const closeModal = document.getElementById("closeModal");
const selectedBranch = document.getElementById("selectedBranch");
const saveBranch = document.getElementById("saveBranch");

let currentBranch = "";

document.querySelectorAll(".choose-btn").forEach(button => {

    button.addEventListener("click", () => {

        currentBranch = button.dataset.branch;

        selectedBranch.textContent =
            currentBranch;

        modal.classList.add("active");
    });

});


/* CLOSE MODAL */

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});


/* =========================
   SAVE BRANCH
========================= */

saveBranch.addEventListener("click", () => {

    localStorage.setItem(
        "selectedBranch",
        currentBranch
    );

    saveBranch.textContent =
        "✓ Tersimpan";

    setTimeout(() => {
        modal.classList.remove("active");
        saveBranch.textContent =
            "Simpan Pilihan";
    }, 900);
});


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
            threshold: 0.12
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


/* =========================
   SHOW SAVED BRANCH
========================= */

const savedBranch =
    localStorage.getItem("selectedBranch");
