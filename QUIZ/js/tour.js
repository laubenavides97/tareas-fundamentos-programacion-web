var panorama1 = new PANOLENS.ImagePanorama('media/img360.jpg');
//duracion del infospot para que no desaparezca en la panoramica
var duration = 1000;

var viewer = new PANOLENS.Viewer({
    container: document.querySelector('#panorama-container'),
});

//declaracion de variables infospot con radio 50 
//la instruccion final es referente al icono que va aparecer Arrow, Info
//link de iconos: https://pchen66.github.io/panolens.js/docs/module-DataImage.html
var infospot1_1 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_2 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_3 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_4 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_5 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_6 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_7 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_8 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_9 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_10 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_11 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);

//ubicacion de las zonas infospot XYZ
infospot1_1.position.set(-25 ,-136 , -500);
infospot1_2.position.set(-156 ,295 , -500);
infospot1_3.position.set(-500 ,97 , -492);
infospot1_4.position.set(-500 ,419 , -68);
infospot1_5.position.set(-420 ,-51 , 500);
infospot1_6.position.set(-200 ,-29 , 500);
infospot1_7.position.set(-59 ,293 , 499);
infospot1_8.position.set(136 ,500 , 386);
infospot1_9.position.set(500 ,348 , 282);
infospot1_10.position.set(389 ,500 , -103);
infospot1_11.position.set(500 ,92 , -173);

//agregar las zonas infospot
panorama1.add(infospot1_1);
panorama1.add(infospot1_2);
panorama1.add(infospot1_3);
panorama1.add(infospot1_4);
panorama1.add(infospot1_5);
panorama1.add(infospot1_6);
panorama1.add(infospot1_7);
panorama1.add(infospot1_8);
panorama1.add(infospot1_9);
panorama1.add(infospot1_10);
panorama1.add(infospot1_11);



//contenido de los infospot1
infospot1_1.addHoverText('Haga click en cada punto de información para pasar a la siguiente vista', -5);
infospot1_1.element.innerHTML = '<div class="tourHover">Haga click en cada punto de<br>información para pasar a la siguiente vista</div>';
// Cambiar el color del Infospot inicial
//infospot1_1.material.color.set(0x1e1595);
panorama1.add(infospot1_1);

//contenido de los infospot2
infospot1_2.addHoverText('Estrella del norte', -5);
infospot1_2.element.innerHTML = '<div class="tourHover">Estrella del norte</div>';
panorama1.add(infospot1_2);

//contenido de los infospot3
infospot1_3.addHoverText('Alojamiento', -5);
infospot1_3.element.innerHTML = '<div class="tourHover">Alojamiento</div>';
panorama1.add(infospot1_3);

//contenido de los infospot4
infospot1_4.addHoverText('Puedes ver millones de estrellas', -5);
infospot1_4.element.innerHTML = '<div class="tourHover">Puedes ver millones<br>de estrellas</div>';
panorama1.add(infospot1_4);

//contenido de los infospot5
infospot1_5.addHoverText('Calle de acceso', -5);
infospot1_5.element.innerHTML = '<div class="tourHover">Calle de acceso</div>';
panorama1.add(infospot1_5);

//contenido de los infospot6
infospot1_6.addHoverText('Puedes rentar un auto', -5);
infospot1_6.element.innerHTML = '<div class="tourHover">Puedes rentar un auto</div>';
panorama1.add(infospot1_6);

//contenido de los infospot7
infospot1_7.addHoverText('Vista #1 de las aurolas boreales', -5);
infospot1_7.element.innerHTML = '<div class="tourHover">Vista #1 de las<br>aurolas boreales</div>';
panorama1.add(infospot1_7);

//contenido de los infospot8
infospot1_8.addHoverText('Vista #2 de las aurolas boreales', -5);
infospot1_8.element.innerHTML = '<div class="tourHover">Vista #2 de las<br>aurolas boreales</div>';
panorama1.add(infospot1_8);

//contenido de los infospot9
infospot1_9.addHoverText('Vista #3 de las aurolas boreales', -5);
infospot1_9.element.innerHTML = '<div class="tourHover">Vista #3 de las<br>aurolas boreales</div>';
panorama1.add(infospot1_9);

//contenido de los infospot10
infospot1_10.addHoverText('Vista #4 de las aurolas boreales', -5);
infospot1_10.element.innerHTML = '<div class="tourHover">Vista #4 de las<br>aurolas boreales</div>';
panorama1.add(infospot1_10);

//contenido de los infospot11
infospot1_11.addHoverText('Vista #5 de las aurolas boreales', -5);
infospot1_11.element.innerHTML = '<div class="tourHover">Vista #5 de las<br>aurolas boreales</div>';
panorama1.add(infospot1_11);


// desplazamiento de los infospots
infospot1_1.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_2
    viewer.tweenControlCenter(infospot1_2.position);
});
infospot1_2.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_3.position);
});
infospot1_3.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_4
    viewer.tweenControlCenter(infospot1_4.position);
});
infospot1_4.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_5.position);
});

infospot1_5.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_6.position);
});

infospot1_6.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_7.position);
});

infospot1_7.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_8.position);
});

infospot1_8.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_9.position);
});

infospot1_9.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_10.position);
});

infospot1_10.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_11.position);
});

infospot1_11.addEventListener('click', function() {
    // Transición suave de la cámara hacia la posición de infospot1_1
    viewer.tweenControlCenter(infospot1_1.position);
});


//permiter mostrar/ocultar  la panoramica
viewer.add(panorama1);

