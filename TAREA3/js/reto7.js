document.addEventListener("DOMContentLoaded", () => {
    // Obtenemos todas las áreas del mapa de imagen
    const hotspots = document.querySelectorAll("map area");

    // Información de cada hotspot
    const hotspotInfo = {
        HS1: "Isla con espacio para comer",
        HS2: "Este es el espacio de almacenamiento inferior",
        HS3: "Este es el espacio de almacenamiento superior",
        HS4: "Iluminación superior",
        HS5: "Cocina empotrada en la isla"
    };

    hotspots.forEach(hotspot => {
        // Mostrar un tooltip en hover
        hotspot.addEventListener("mouseover", () => {
            hotspot.setAttribute("title", "Haz click");
        });

        // Mostrar SweetAlert con información en click
        hotspot.addEventListener("click", (event) => {
            event.preventDefault(); // Evita comportamiento predeterminado del área
            const id = hotspot.id;
            if (hotspotInfo[id]) {
                Swal.fire({
                    icon: "info",
                    title: hotspotInfo[id],
                    confirmButtonText: "Cerrar",
                    customClass: {
                        title: "resultado",
                        popup: "popup",
                        confirmButton: "btnPopUp"
                    }
                });
            }
        });
    });
});
