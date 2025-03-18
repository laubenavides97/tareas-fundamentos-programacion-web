window.onload = function (){
    document.getElementById("picture").innerHTML = "<img src='imagenes/italy.png' class='mapa' alt='mapa de italia' />";
    //evento que permite cambiar el objeto onchange
    document.getElementById("ciudades").onchange = function(e) {
        //destino del valor seleccionado por el usuario
        let n = e.target.value;
        //expresiones que guardan las imagenes de los estadios y la informacion de cada uno
        let imagen = "<img src='imagenes/italia/" + n + ".png' class='fotoCiudad' alt='ciudades de italia' />";
        let text = ["Roma – La Ciudad Eterna, cuna del Imperio Romano y hogar del Coliseo y la Fontana di Trevi.",
            "Venecia – Un laberinto de canales, góndolas y palacios que parecen flotar sobre el agua.",
            "Florencia – El corazón del Renacimiento, con la majestuosa cúpula de Brunelleschi y la Galería Uffizi.",
            "Verona – La ciudad de Romeo y Julieta, con su impresionante Arena y románticas callejuelas.",
            "Siena – Una joya medieval con la icónica Piazza del Campo y su imponente catedral.",
            "Cinque Terre – Un conjunto de cinco pueblos coloridos colgados sobre acantilados con vistas al mar.",
            "Nápoles – La cuna de la pizza y una ciudad vibrante llena de historia y tradiciones.",
            "Bologna – Famosa por su gastronomía, sus torres inclinadas y su histórica universidad.",
            "Palermo – La esencia de Sicilia con su mezcla de culturas, mercados animados y playas paradisíacas.",
            "Catania – A los pies del volcán Etna, con una arquitectura barroca impresionante y una energía única."
        ]
        //salida de las imagenes y los textos informativos
        document.getElementById("picture").innerHTML = imagen;
        document.getElementById("description").innerHTML = text[n - 1];
    };
};

//funcion del boton reiniciar
document.getElementById("btnBorrar").onclick = function() {
    //deja el logo principal
    document.getElementById("picture").innerHTML =  "<img src='imagenes/italy.png' class='mapa' alt='mapa de italia' />";
    //limpia los textos informativos de los estadios
    document.getElementById("description").innerHTML = "";
    //dejar el select con el texto por defecto
    document.getElementById("ciudades").value = "";
}