const letra = document.querySelector('#letra');
letra.focus();
const palabraNueva = document.querySelector("#nueva_palabra");
const resultado = document.querySelector('#resultado');
const btnVerificar = document.querySelector('#verificar');
const btnIniciar = document.querySelector('#inicio');
const btnNuevaPalabra = document.querySelector("#agregar_palabra");
const btnGuardarNuevaPalabra = document.querySelector("#guardar");
const btnCancelar = document.querySelector("#cancelar");
const btnNuevoJuego = document.querySelector('#nuevo');
const btnRendirse = document.querySelector('#rendirse');
const resultadoPalabraIngresada = document.querySelector("#palabraIngresada").value;
const intentosFallidos = document.querySelector('#intentos_fallidos');
const resultadoFinal = document.querySelector('#resultado_juego').value;
const palabras = ['caleidoscopio','rinoceronte', 'confites','papanicolao','perro','lampara'];
const caract_validos = "QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopñlkjhgfdsazxcvbnm";

document.getElementById("contenedorIngresarPalabra").style.display = "none"; // ocultar
document.getElementById('contenedorAhorcado').style.display = "none"; // ocultar
document.getElementById("contenedorPaginaInicial").style.display = "block"; // mostrar

function mostrarJuego() {
    document.getElementById("contenedorIngresarPalabra").style.display = "none"; // ocultar
    document.getElementById('contenedorAhorcado').style.display = "block"; // ocultar
    document.getElementById("contenedorPaginaInicial").style.display = "none"; // mostrar
}
btnIniciar.addEventListener('click',mostrarJuego);

const ingresarPalabra = () => {
    document.getElementById("contenedorPaginaInicial").style.display = "none"; // mostrar
    document.getElementById("contenedorIngresarPalabra").style.display = "block"; // ocultar
}
btnNuevaPalabra.addEventListener('click',ingresarPalabra);

const cancelarPalabra = () => {
    document.getElementById("contenedorPaginaInicial").style.display = "block"; // mostrar
    document.getElementById("contenedorIngresarPalabra").style.display = "none"; // ocultar
}
btnCancelar.addEventListener('click',cancelarPalabra);

let palabraAleatoria = aleatoria();

let guiones = palabraAleatoria.replace(/./g, "_ ");//Reemplazo las letras de las palabras aleatorias con guiones
resultado.innerHTML = guiones;

//Funcion generica prototipe, para reemplazar un caracter del string por otro caracter siempre q este aparesca.   
  String.prototype.replaceAt=function(index, character) {
     return this.substr(0, index) + character + this.substr(index+character.length); 
    } 

function aleatoria(){//Creamos una funcion q elija un elemento del array palabras.
    return palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
}

/*const verificarPalabraNueva = () =>{

    if (palabraNueva.value == "" || palabraNueva == null){ 
        //cont_errores = null 
        document.querySelector('#palabraIngresada').innerHTML = "El campo no puede estar vacío";
        return false;
    }
    if (palabraNueva.value.length < 1){
        //cont_errores = null;
        document.querySelector('#palabraIngresada').innerHTML = "El caracter no es aceptable";
        return false;
    }
    
    if(caract_validos.indexOf(palabraNueva.value) == -1) {
        //cont_errores = null;
        document.querySelector('#palabraIngresada').innerHTML = "El caracter no es aceptable";
        return false;
    }
    else{
        document.querySelector('#palabraIngresada').value = ""; 
	    return true;
	}
}*/

const palabraIngresada = () => {
    palabras.push(palabraNueva.value);  
    palabraNueva.value = ""; 

    document.getElementById("contenedorIngresarPalabra").style.display = "none"; // ocultar
    document.getElementById('contenedorAhorcado').style.display = "block"; // mostrar
    document.getElementById("contenedorPaginaInicial").style.display = "none"; // ocultar 
}
btnGuardarNuevaPalabra.addEventListener('click', palabraIngresada)


console.log(palabras);
const meRindo = () => {
    
    document.getElementById("contenedorIngresarPalabra").style.display = "none"; // ocultar
    document.getElementById('contenedorAhorcado').style.display = "none"; // ocultar
    document.getElementById("contenedorPaginaInicial").style.display = "block"; // mostrar*/
    nuevoJuego();
}
btnRendirse.addEventListener('click',meRindo);

console.log(palabras);

//Inicializo el canvas con getContext y le damos sus medidas
var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');// seleccionamos el contexto 2d a partir del elemento

const horca = () => {
pincel.clearRect(0,0,pantalla.width,pantalla.height); //Borramos todo lop que haya 
pincel.lineWidth = 8; // Grosor de la linea
pincel.canvas.width = 200;//tamaño del canvas
pincel.canvas.height = 300;
pincel.beginPath();
pincel.fillStyle = 'brown';//Para empezar a pintar donde esta colgado el tipito
pincel.fillRect(0,250,70,10);//FillRect dibuja un rectangulo. le pasamos las medidas de los 4 rectangulos que forman el dibujo//rect piso
pincel.fillRect(10,0,10,250);//esto explicado seria: en la posicion 10 de "x" pintamos 10 px y en la posicion 0 de "y" pintamos 300 px.//rect principal
pincel.fillRect(20,5,100,10);//En la posicion 20 de "x", pintamos 90 px y en la posicion 90 de "y" pintamos 10px.//rect arriba
pincel.fillRect(110,10,10,16);
}
horca();

//Inicializo las partes del cuerpo de nuestro dibujo en canvas
const cabeza = () => {

    horca();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 57; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath();
    pincel.arc(startx, starty, 30, 0, 2 * Math.PI); // Creamos un circulo para la cabeza. el orden de los parámetros son: posición x, posición y ancho y alto
    pincel.stroke();
}

const cuerpo = () => {
    horca();
    cabeza();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 67; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath(); // Cuerpo
    pincel.moveTo(startx, starty+20);
    pincel.lineTo(startx, starty+100);
    pincel.stroke();
}

const brazo_1 = () => {

    horca();
    cabeza();
    cuerpo();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 72; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath(); // Dibujar brazo izq
    pincel.moveTo(startx, starty+25);
    pincel.lineTo(startx-30, starty+60);
    pincel.stroke();
}

const brazo_2 = () => {

    horca();
    cabeza();
    cuerpo();
    brazo_1();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 72; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath(); // Dibujar brazo der
    pincel.moveTo(startx, starty+25);
    pincel.lineTo(startx+30, starty+60);
    pincel.stroke();
}

const pierna_1 = () => {
    horca();
    cabeza();
    cuerpo();
    brazo_1();
    brazo_2();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 67; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath(); // Pierna Izq
    pincel.moveTo(startx, starty+100);
    pincel.lineTo(startx-30, starty+150);
    pincel.stroke();
}

const pierna_2 = () => {

    horca();
    cabeza();
    cuerpo();
    brazo_1();
    brazo_2();
    pierna_1();
    pincel.lineWidth = 2; // Grosor de la linea
    var startx = 115; // Posicion X
    var starty = 67; // Posicion Y
    pincel.strokeStyle = 'black'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath(); // Pierna der
    pincel.moveTo(startx, starty+100);
    pincel.lineTo(startx+30, starty+150);
    pincel.stroke();

}

const cara = () => {
    horca();
    cabeza();
    cuerpo();
    brazo_1();
    brazo_2();
    pierna_1();
    pierna_2();
    pincel.lineWidth = 4; // Grosor de la linea
    var startx = 100; // Posicion X
    var starty = 40; // Posicion Y
    pincel.strokeStyle = 'red'; // el color de la linea, azul, se pueden usar colores en ingles, en formato hexadecimal, en rgb y rgba
    pincel.beginPath();
    //ojo1
    pincel.moveTo(startx+10, starty+25);
    pincel.lineTo(startx-15, starty+15);
    pincel.moveTo(startx-10, starty+25);
    pincel.lineTo(startx+10, starty+15);
    //boca
    var startx = 115; // Posicion X
    var starty = 70; // Posicion Y
    pincel.moveTo(startx-10, starty+10);
    pincel.lineTo(startx+10, starty+10);
    //ojo2
    var startx = 132; // Posicion X ancho
    var starty = 40; // Posicion Y alto
    pincel.moveTo(startx+10, starty+25);
    pincel.lineTo(startx-15, starty+15);
    pincel.moveTo(startx-10, starty+25);
    pincel.lineTo(startx+10, starty+15);
    pincel.stroke();

}

//Llamo a la funcion bloqueadorDeTeclasEsp cada vez q hay acción en el input(#letras):
document.querySelector('#letra').addEventListener("keypress", bloqueoDeTeclasCaractEsp);

function bloqueoDeTeclasCaractEsp(event) { //Funcion para bloquear teclas de caracteres especiales del teclado de nuestro ordenador.
    
    if(caract_validos.indexOf(event.key) == -1){ // colocar la cadena de caracteres permitidos
        event.preventDefault();
    }
}

var cont_errores = 0;
var aciertos = 0;
const verificarLetra = ()  => {;
    
    if (letra.value == "" || letra == null){ 
        //cont_errores = null 
        document.querySelector('#resultado_juego').innerHTML = "El campo no puede estar vacío";
        return false;
    }
    if (letra.value.length > 1){
        //cont_errores = null;
        document.querySelector('#resultado_juego').innerHTML = "El caracter no es aceptable";
        return false;
    }
    
    if(caract_validos.indexOf(letra.value) == -1) {
        //cont_errores = null;
        document.querySelector('#resultado_juego').innerHTML = "El caracter no es aceptable";
        return false;
    }
    else{
        document.querySelector('#resultado_juego').value = ""; 
	    return true;
	}
    
}
   
console.log(palabraAleatoria) 

const verificarJuego = () => { 
    verificarLetra();
    let errores = true;
    for( var i = 0; i < palabraAleatoria.length; i++){
        if(palabraAleatoria[i] == letra.value.toUpperCase()){
           guiones = guiones.replaceAt(i*2,letra.value)//Llamo a la funcion prototipe. (i*2) porque tiene q reemplazar dos caracteres:("_ ") 
           aciertos++;
           errores = false;
        }
    } 

    if(errores == true) {
        cont_errores++;
        intentosFallidos.innerHTML += letra.value.toUpperCase();
    }
    if(cont_errores == 1){
        cabeza();
    } 
    if(cont_errores == 2){
        cuerpo();
    }
    if(cont_errores == 3){       
        brazo_1();
    }
    if(cont_errores == 4){            
        brazo_2();
    }   
    if(cont_errores == 5){       
        pierna_1();
    }
    if (cont_errores == 6){        
        pierna_2();
    }
    if(cont_errores == 7){ 
        cara();
        document.querySelector('#resultado_juego').innerHTML = "Game Over... La palabra secreta era "+ palabraAleatoria;
       
    }
      
    if(guiones.indexOf("_") < 0) {
        document.querySelector('#resultado_juego').innerHTML = "Felicitaciones, Ganaste!!!";
        
    }
    document.querySelector('#resultado_juego').value = ""; 
    console.log("cantidad de errores " + cont_errores)
    console.log("errores " + errores)
    console.log("aciertos " + aciertos)
    resultado.innerHTML = guiones.toUpperCase();//Pinto el resultado del reemplazo en el parrafo id=#resultado 
    document.querySelector("#letra").value = "";
    document.querySelector('#letra').focus();
    
  
}    

btnVerificar.addEventListener('click',verificarJuego); //Al hacer click en el boton id=Verificar... 

const nuevoJuego = () => {
    
    document.querySelector('#letra').innerHTML = "";
    document.querySelector('#intentos_fallidos').innerHTML = "";
    document.querySelector('#resultado_juego').innerHTML = "";
    cont_errores = 0;
    aciertos = 0;
    pincel.clearRect(0,0,pantalla.width,pantalla.height);
    //pantalla.width = pantalla.width;
    horca();
    palabraAleatoria = aleatoria();
    guiones = palabraAleatoria.replace(/./g, "_ ");
    resultado.innerHTML = guiones;
    document.querySelector('#letra').focus();
    console.log(palabraAleatoria);
}

btnNuevoJuego.addEventListener('click',nuevoJuego);








