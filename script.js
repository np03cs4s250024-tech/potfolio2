/* ================= Smooth Scrolling ================= */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        // Close menu on mobile
        document.getElementById("nav-menu").classList.remove("active");
    });
});


/* ================= Highlight Active Nav Link ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === `#${current}`) {
            a.classList.add("active");
        }
    });
});


/* ================= Navbar Background Change on Scroll ================= */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".top-nav");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.75)";
        navbar.style.backdropFilter = "blur(5px)";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
    }
});


/* ================= Mobile Menu Toggle ================= */
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
