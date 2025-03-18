document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownArrow = document.getElementById("dropdownArrow");

    // Función para alternar el menú
    function toggleDropdown() {
        const isOpen = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isOpen ? "none" : "block";
        dropdownArrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
    }

    // Mostrar/ocultar menú al hacer click en el botón
    dropdownButton.addEventListener("click", function (event) {
        toggleDropdown();
    });

    // Cerrar el menú cuando se hace click en una opción
    dropdownMenu.addEventListener("click", function (event) {
        if (event.target.tagName === "A") {
            dropdownMenu.style.display = "none";
            dropdownArrow.style.transform = "rotate(0deg)";
        }
    });

    // Cerrar el menú si se hace click fuera de él
    document.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
            dropdownArrow.style.transform = "rotate(0deg)";
        }
    });
});