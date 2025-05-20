function actualizarTarjeta() {
    const nombre = document.getElementById('nombre').value;
    const profesion = document.getElementById('profesion').value;

    document.getElementById('nombre-tarjeta').textContent = nombre || 'Nombre no ingresado';
    document.getElementById('transparente').textContent = profesion || 'Profesión no ingresada';
}
/* defino la constante de lo que quiero asignar */
const tarjeta = document.getElementById('cuadrado');


function cambiarColor(opcionDeColor)  {
    switch(opcionDeColor) {
        case 'verde':
            tarjeta.style.background = 'linear-gradient(135deg, #058124, #058124)';
            break;
        case 'rojo':
            tarjeta.style.background = 'linear-gradient(135deg, #810505, #810505)';
            break;
        case 'aleatorio':
            const randomColor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
            tarjeta.style.background = randomColor1;
            break;
    }       
}



/*
function cambiarTamano(tamaño) {
    switch(tamaño) {
        case 'pequeño':
            tarjeta.style.fontSize = '10px';
            break;
        case 'mediano':
            tarjeta.style.fontSize = '20px';
            break;
        case 'grande':
            tarjeta.style.fontSize = '30px';
            break;
    }
}
*/
