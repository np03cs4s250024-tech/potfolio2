
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
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



window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.7)";
    } else {
        navbar.style.background = "rgba(0,0,0,0.5)";
    }
});



const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navList.classList.toggle("show");
    });
}
