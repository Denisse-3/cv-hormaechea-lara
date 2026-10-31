document.addEventListener("DOMContentLoaded", function () {

    const botonMenu = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu-navegacion");

    if (!botonMenu || !menu) return;

    botonMenu.addEventListener("click", function () {

        const estaAbierto = menu.classList.toggle("abierto");

        botonMenu.setAttribute("aria-expanded", estaAbierto);

        botonMenu.setAttribute(
            "aria-label",
            estaAbierto ? "Cerrar menú" : "Abrir menú"
        );

    });

    /* cirra el menú al seleccionar un enlace */
    menu.querySelectorAll("a").forEach(function (enlace) {

        enlace.addEventListener("click", function () {
            menu.classList.remove("abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        });

    });

    /* cerrar el menú al tocar fuera */
    document.addEventListener("click", function (evento) {

        if (
            !menu.contains(evento.target) &&
            !botonMenu.contains(evento.target)
        ) {
            menu.classList.remove("abierto");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
        }

    });

});