/* =====================================================
   COLLAGEE - JAVASCRIPT
   ===================================================== */


/* ================= MENÚ MÓVIL ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuBtn.textContent = "×";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Cerrar menú al seleccionar una opción */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* ================= HEADER AL HACER SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= FILTRO DE PLANTILLAS ================= */

const filters = document.querySelectorAll(".filter");
const templates = document.querySelectorAll(".template-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        /* Cambiar botón activo */

        filters.forEach(button => {
            button.classList.remove("active");
        });

        filter.classList.add("active");


        /* Categoría seleccionada */

        const category = filter.dataset.filter;


        templates.forEach(template => {

            const templateCategory = template.dataset.category;

            if (
                category === "all" ||
                templateCategory === category
            ) {

                template.classList.remove("hidden");

                template.style.animation = "modalAppear .4s ease";

            } else {

                template.classList.add("hidden");

            }

        });

    });

});


/* ================= FAVORITOS ================= */

const favoriteButtons = document.querySelectorAll(".favorite");

favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


/* ================= MODAL ================= */

const modal = document.getElementById("modal");
const startCreating = document.getElementById("startCreating");
const closeModal = document.getElementById("closeModal");


startCreating.addEventListener("click", () => {

    modal.classList.add("show");

});


closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


/* Cerrar haciendo clic fuera */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/* Cerrar con ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= EFECTO PARALLAX DEL COLLAGE ================= */

const heroCollage = document.querySelector(".hero-collage");

document.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 900) return;

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    heroCollage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* ================= BOTONES DE PLANTILLAS ================= */

templates.forEach(template => {

    template.addEventListener("click", (event) => {

        /*
        Evitamos que el botón de favoritos
        active esta función.
        */

        if (event.target.classList.contains("favorite")) {
            return;
        }

        const name =
            template.querySelector("h3").textContent;

        alert(
            `Has seleccionado la plantilla "${name}".`
        );

    });

});


/* ================= ANIMACIÓN DE BOTONES ================= */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = "transform .2s ease";

    });

});