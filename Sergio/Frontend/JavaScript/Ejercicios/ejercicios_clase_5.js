/*1 Saludo
Crear un programa que pida al usuario ingresar un nombre y apellido por separado, y luego muestre un mensaje que diga, 
"Hola {nombre} {apellido}, bienvenida a Ada".*/
let nombre = prompt('Nombre: ');
let apellido = prompt('Apellido: ');
console.log(`Hola ${nombre} ${apellido}, bienvenida a Ada`);

/*2 Heladería
Crear un programa que pida al usuario ingresar, por separado, tres gustos de helado, y luego muestre un mensaje que diga, 
por ejemplo, "Aquí tiene su helado de chocolate, dulce de leche y menta granizada".*/
let gusto1 = prompt('Gusto 1: ');
let gusto2 = prompt('Gusto 2: ');
let gusto3 = prompt('Gusto 3: ');
console.log(`Aqui tiene su healdo de ${gusto1}, ${gusto2}, y ${gusto3},`);

/*6 Meses por día
Crear variables que contengan arrays de strings con los nombres de meses, un array para meses de 31 días, uno para de 30, 
y otro para 29. Completar cada array con los nombres correspondientes. Mostrarlos en un mensaje indicando cuál es cuál, 
p.ej: "Meses con 31 días: Enero, Marzo, Mayo...".*/
let meses31dias = ['Enero', 'Marzo','Mayo'];
let meses30dias = ['Abril', 'Junio','Septiembre'];
let meses29dias = ['Febrero'];

console.log(`Meses con 31 dias ${meses31dias.join(', ')}`);

/*13 Área de un triangulo
Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.*/
let baseTriangulo = prompt('Base: ');
let alturaTriangulo = prompt('Altura: ');
let area = baseTriangulo*alturaTriangulo/2;
console.log(`El area del triangulo es: ${area}`);

/*18 Incremento
Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren 
el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) 
Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).*/
let numeroPartida = prompt('Numero: ');
let valorIncremento = prompt('Incremento: ');

console.log(`Empezando con ${numeroPartida} e incrementando ${valorIncremento}:`)
for(let i=0; i<5; i++){
    let incrementado = parseFloat(numeroPartida) + (i+1)*parseFloat(valorIncremento);
    console.log(`Incremento ${i+1}: ${incrementado}`);
}

/*23 Días de vacaciones
Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días de 
vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 21 días).*/
let anosTrabajados = parseFloat(prompt('Años trabajados: '));

function calculadoraVacaciones(anosTrabajados) {
    let diasVacaciones;
    if (anosTrabajados<=3){
        diasVacaciones = 15
    }
    else {
        diasVacaciones = 15 + (anosTrabajados-3)*2;
    }
    return diasVacaciones
}

let diasVacaciones = calculadoraVacaciones(anosTrabajados);
console.log(`Te corresponden ${diasVacaciones} días de vacaciones`);

/*24 Cantidad de huéspedes
Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, 
y muestre el máximo de huéspedes que puede albergar.*/
let habitaciones2 = parseFloat(prompt('Habitaciones de 2: '));
let habitaciones3 = parseFloat(prompt('Habitaciones de 3: '));
let habitaciones4 = parseFloat(prompt('Habitaciones de 4: '));

function calculadoraHuespedesAlojables(habitaciones2,habitaciones3,habitaciones4) {
    let huespedesAlojables;
    huespedesAlojables = habitaciones2*2 +habitaciones3*3 +habitaciones4*4;
    return huespedesAlojables
}

let huespedesAlojables = calculadoraHuespedesAlojables(habitaciones2,habitaciones3,habitaciones4);
console.log(`Se puedes hospedar ${huespedesAlojables} huespedes`);

/*25 Calculador gastos
Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, 
pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, 
el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. 
Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.*/
let dineroDisponible = parseFloat(prompt('Dinero disponible: '));
let numeroServicios = parseFloat(prompt('Numero de servicios: '));

function ingresarServicio(i){
    console.log(`Te quedan ${numeroServicios-i} servicios disponibles`);
    let nombreServicio = prompt('Nombre servicio ');
    let costeServicio = parseFloat(prompt('Coste servicio '));
    dineroDisponible -= costeServicio;
    console.log(`Quedan ${dineroDisponible} euros disponibles`);
}


for (let i=0; i<numeroServicios;i++){
    ingresarServicio(i)
    if (dineroDisponible <= 0) {
        console.log("¡No tienes más fondos disponibles!");
        break;
    }
}

/*2 Número dentro de rango
Crear un programa que pida al usuario ingresar un número que represente el límite inferior del rango, uno que represente el límite mayor, 
y luego otro cualquiera y mostrar en un mensaje si el último número se encuentra dentro del rango ingresado.*/
let numeroInferior = parseFloat(prompt('Limite inferior: '));
let numeroSuperior = parseFloat(prompt('Limite superior: '));
let numeroElegido = parseFloat(prompt('Numero elegido: '));

if(numeroElegido<=numeroSuperior && numeroElegido>=numeroInferior){
    console.log('Se encuentra dentro del rango');
}
else {
    console.log('No se encuentra dentro del rango');
}

/*9 Número más grande (3 números)
Hacer un programa que pida ingresar 3 números, y muestre como resultado el más grande de ellos. Una vez hecho esto, agregar la funcionalidad 
de que si alguno de los números es igual a otro, debe mostrar un mensaje diciéndolo.*/
let numero1 = parseFloat(prompt('Numero 1: '));
let numero2 = parseFloat(prompt('Numero 2: '));
let numero3 = parseFloat(prompt('Numero 3: '));

if (numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
    console.log('Hay al menos dos numeros iguales')
}
else{
    let mayor
    if (numero1 > numero2 && numero1 > numero3){
        mayor = numero1;}
    else if (numero2 > numero1 && numero2 > numero3){
        mayor = numero2;}
    else {mayor = numero3}
    console.log(`El numero mayor es el ${mayor}`);
}

/*13 Juez de gusto
Crear un programa que pida al usuario evaluar del 1 al 10 cuánto le gusta X cosa (a elección). Dependiendo de la respuesta, debe mostrar 
un mensaje en consonancia. Hacer mínimo 4 casos posibles. Si se ingresa algo que no sea un número del 1 al 10, mostrar un mensaje de advertencia 
y volver a pedir dicho número.*/

function evaluarGusto(){
    let gustoCliente;
    while (true){
        gustoCliente = prompt('Cuanto te gusta');
        if (gustoCliente == null){
            console.error('Gracias por participar')
            return
        }
        gustoCliente = parseInt(gustoCliente);
        if (isNaN(gustoCliente)) {
            console.warn("✖ Error: Debes ingresar un número. Intenta nuevamente.");
        } else if (gustoCliente < 1 || gustoCliente > 10) {
            console.warn("✖ Error: El número debe estar entre 1 y 10. Intenta nuevamente.");
        } else {
            break;
        }
    }
    let mensaje;
    switch (true) {
        case (gustoCliente <= 2):
            mensaje = "😟 ¿En serio no te gusta el chocolate? ¡Qué pena!";
            break;
        case (gustoCliente <= 4):
            mensaje = "😐 Entiendo, el chocolate no es lo tuyo. Cada quien con sus gustos.";
            break;
        case (gustoCliente <= 6):
            mensaje = "🙂 Te gusta el chocolate, pero no es tu favorito. ¡Hay muchos tipos para probar!";
            break;
        case (gustoCliente <= 8):
            mensaje = "😊 ¡Genial! Realmente disfrutas del chocolate. ¿Cuál es tu favorito?";
            break;
        case (gustoCliente <= 9):
            mensaje = "😍 ¡Eres un verdadero amante del chocolate! Debes tener tu tipo preferido.";
            break;
        case (gustoCliente === 10):
            mensaje = "🤩 ¡CHOCOLATE ADICT@! ¿Podrías vivir sin él? ¡Es lo mejor del mundo!";
            break;
        default:
            mensaje = "Gracias por tu evaluación.";
    }
    console.log(`Tu puntuación: ${gustoCliente}/10\n${mensaje}`);
}
evaluarGusto();

/*
5 Grupo de letras
Crear un programa que pida al usuario ingresar una letra y mostrar en un mensaje a qué grupo pertenece.
grupo A = {a, e, i, o ,u}
grupo B = {b, c, d, f, g}
grupo C = {h, j, k , l, m}
grupo D = {n, p, q, r}
grupo E = {s, t, v, w, x, y, z}*/

function encontrarGrupo(letraSeleccionada){

    let grupoA = new Set(['a', 'e', 'i', 'o' ,'u'])
    let grupoB = new Set(['b', 'c', 'd', 'f' ,'h'])
    let grupoC = new Set(['h', 'j', 'k', 'l' ,'m'])
    let grupoD = new Set(['n', 'p', 'q', 'r'])
    let grupoE = new Set(['s', 't', 'v', 'w' ,'x', 'y', 'z'])

    if (grupoA.has(letraSeleccionada)){
        return 'A'
    }
    else if (grupoB.has(letraSeleccionada)){
        return 'B'
    }
    else if (grupoC.has(letraSeleccionada)){
        return 'C'
    }
    else if (grupoD.has(letraSeleccionada)){
        return 'D'
    }
    else if (grupoE.has(letraSeleccionada)){
        return 'E'
    }
    else {
        console.log('No es una letra')
    }
}

let letraSeleccionada = prompt('Elige una letra:').toLowerCase();

let grupoSeleccionado = encontrarGrupo(letraSeleccionada);

console.log(`La letra ${letraSeleccionada} se encuentra en el grupo ${grupoSeleccionado}`);


/*6 🥪 Sandwich
Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija 
una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje 
con el pedido resultante. Debe preguntar:
Tipo de pan: blanco, negro, integral
Ingrediente 1: tomate, lechuga, pimiento
Ingrediente 2: cebolla, aceituna, pepino
Aderezos: mostaza, mayonesa, picante
Gaseosa: Coca Cola, Pepsi, Sprite*/

function armarSandwich(){
    let pedido ={
        pan: '',
        ingrediente1: '',
        ingrediente2: '',
        aderezos: '',
        gaseosa: ''
    };
    const opciones ={
        pan: ['blanco', 'negro', 'integral'],
        ingrediente1: ['tomate', 'lechuga', 'pimiento'],
        ingrediente2: ['cebolla', 'aceituna', 'pepino'],
        aderezos: ['mostaza', 'mayonesa', 'picante'],
        gaseosa: ['Coca Cola', 'Pepsi', 'Sprite']
    };
    function preguntarYValidar(pregunta, opcionesValidas){
        let respuesta = prompt(pregunta).toLowerCase();
        if (opcionesValidas.includes(respuesta)){
            return respuesta;
        }
        else{
            alert('¡Opción no válida! El pedido saldrá incompleto.');
            return null;
        }
    }
    pedido.pan=preguntarYValidar('Elige un tipo de pan (blanco, negro, integral)', opciones.pan);
    pedido.ingrediente1=preguntarYValidar('Elige un ingrediente principal (tomate, lechunga, pimiento)', opciones.ingrediente1);
    pedido.ingrediente2=preguntarYValidar('Elige un ingrediente secundario (cebolla, aceituna, pepino)', opciones.ingrediente2);
    pedido.aderezos=preguntarYValidar('Elige un aderezo (mostaza, mayonesa, picante)', opciones.aderezos);
    pedido.gaseosa=preguntarYValidar('Elige una gasesosa (coca cola, pepsi, sprite)', opciones.gaseosa);
    console.log(`El sandwhich es de pan ${pedido.pan} con ${pedido.ingrediente1} y ${pedido.ingrediente2}, un aderezo de ${pedido.aderezos} y para beber ${pedido.gaseosa}`);
}

armarSandwich();



/*7 ✊🤚✌️ Piedra, papel o tijera
Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre 
en un mensaje quién ganó, con las jugadas respectivas.*/

function jugarPPT(){
    const opciones = ['piedra', 'papel', 'tijera'];
    function validar(jugada, opciones){
        if (opciones.includes(jugada)){
            return jugada;
        }
        else{
            alert('¡Opción no válida!');
            return null;
        }
    }

    while (true){
        let jugada = prompt('Elije piedra, papel o tijera');
        if (jugada == null){
            console.error('Gracias por participar')
            return
        }
        jugada = jugada.toLowerCase();
        if (!validar(jugada, opciones)){
            continue
        }
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
        let ganador = '';

        if (jugada === eleccionComputadora) {
            ganador = 'Empate';
        } else if (
            (jugada === 'piedra' && eleccionComputadora === 'tijera') ||
            (jugada === 'papel' && eleccionComputadora === 'piedra') ||
            (jugada === 'tijera' && eleccionComputadora === 'papel')
        ) {
            ganador = '¡Ganaste tú!';
        } else {
            ganador = '¡Ganó la computadora!';
        }
        alert(`Tú elegiste: ${jugada}\nLa computadora eligió: ${eleccionComputadora}\nResultado: ${ganador}`);
        return;
    }
}

jugarPPT();


/*8 🎨 Simón dice
Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. 
Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// Ejemplo
Simón dice: rojo, rojo, azul, verde, amarillo.
Ingresa el color: rojo
Ingresa el color: rojo
Ingresa el color: azul
Ingresa el color: verde
Ingresa el color: amarillo
Felicitaciones! Has ganado!*/

function jugarSimon(){
    const opcionesColor = ['rojo', 'verde', 'azul', 'amarillo'];
    let colores =[];
    let jugada = [];
    function colorAleatorio(opcionesColor){
            return opcionesColor[Math.floor(Math.random() * opcionesColor.length)];  
    }
    for (let i=1; i<=5;i++){
        colores[i]=colorAleatorio(opcionesColor);
    }
    console.log(`Simon dice: ${colores[1]}, ${colores[2]}, ${colores[3]}, ${colores[4]} y ${colores[5]}`);
    for (let i=1; i<=5;i++){
        let respuesta = prompt(`Ingresa el color ${i}:`).toLowerCase().trim();
        jugada[i] = respuesta;
    }
    let acierto = true;
    for (let i = 1; i <= 5; i++) {
        if (jugada[i] !== colores[i]) {
            acierto = false;
            break;
        }
    }
    if (acierto) {
        alert("¡Felicitaciones! ¡Has ganado!");
    } else {
        alert("¡Ups! No acertaste la secuencia.");
    }
}


jugarSimon()

/*11 🧮 Calculadora
Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y luego de elegida, ingresar dos números y 
hacer dicha operación con ella.*/

function hacerOperacion(){
    const opciones = ['suma', 'resta', 'division', 'multiplicacion'];
    function validar(operacion, opciones){
        if (opciones.includes(operacion)){
            return operacion;
        }
        else{
            alert('¡Opción no válida!');
            return null;
        }
    }

    function realizarOperacion(operacion, numero_1, numero_2){
        switch (operacion) {
            case 'suma':
                resultado = numero_1 + numero_2;
                break;
            case 'resta':
                resultado = numero_1 - numero_2;
                break;
            case 'division':
                resultado = numero_1 / numero_2;
                break;
            case 'multiplicacion':
                resultado = numero_1 * numero_2;
                break;
        }
        return resultado;
    }

    while (true){
        let operacion = prompt('SUMA, RESTA, DIVISION y MULTIPLICACION');
        if (operacion == null){
            console.error('Gracias por participar')
            return
        }
        operacion = operacion.toLowerCase();
        if (!validar(operacion, opciones)){
            continue
        }
        let numero_1 = Number(prompt('Numero 1: '));
        let numero_2 = Number(prompt('Numero 2: '));
        resultado = realizarOperacion(operacion, numero_1, numero_2);
        console.log(`El resultado de la ${operacion} entre el ${numero_1} y el ${numero_2} es ${resultado}`);
    }
}


hacerOperacion();

/*12 📺 Televisor
Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, el programa debe terminar. Si elige que sí, 
debe mostrar un mensaje con el canal actual y el el nivel de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
CAMBIAR CANAL: permite ingresar un canal (0 al 99)
CANAL SIGUIENTE: sube un canal
CANAL ANTERIOR: baja un canal
SUBIR VOLUMEN: sube en volumen en 5
BAJAR VOLUMEN: disminuye en volumen en 5
MUTEAR: pone el volumen en 0
Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el nivel del volumen actual.*/

function televisor(){
    let encender = prompt('Desea encender el televisor? (SI o NO)');
    if (encender === null || encender.toLowerCase() == "no") {
        console.log("El televisor permanece apagado. ¡Hasta luego!");
        return;
    }
    let canal = 1;
    let volumen = 10;

    while (true){
        let mensaje = (`Estas en el canal ${canal} al volumen ${volumen}.\nPuedes realizar las siguientes opciones: 
            \nCAMBIAR CANAL: permite ingresar un canal (0 al 99)
            \nCANAL SIGUIENTE: sube un canal
            \nCANAL ANTERIOR: baja un canal
            \nSUBIR VOLUMEN: sube en volumen en 5
            \nBAJAR VOLUMEN: disminuye en volumen en 5
            \nMUTEAR: pone el volumen en 0
            \nAPAGAR`);
        let opcion = prompt(mensaje);
        if (opcion === null || opcion.toLowerCase() == "apagar") {
            console.log("Apagando television...");
        return;
        }
        opcion = opcion.toLowerCase();
        switch (opcion){
            case "cambiar canal":
                let nuevoCanal = Number(prompt('Ingresa un nuevo canal (0 al 99)'));
                canal = nuevoCanal;
                break
            case "canal siguiente":
                canal += 1;
                break
            case "canal anterior":
                canal -= 1;
                break
            case "subir volumen":
                volumen += 5;
                break
            case "bajar volumen":
                volumen -= 5;
                break
            case "mutear":
                volumen = 0;
                break
                
        }
        console.log(`Estas en el canal ${canal} al volumen ${volumen}.` )
    }
    
}

televisor();

/*4 ❗️ Factorial
Crear un programa que pida ingresar un número, y muestre su factorial. Este se calcula multiplicando el mismo número y todos los números que 
le anteceden hasta el 1. Por ejemplo: 4 ⇒ 4 * 3 * 2 * 1 = 24*/

function calculoFactorial(){

    function factorialNumero(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * factorialNumero(numero - 1);
        }
    }

    while (true){
        let entrada = prompt('Elige un número:');
        if (entrada === null) {
            console.log("Programa finalizado.");
            return;
        }

        let numero = Number(entrada);

        if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
            alert('Por favor, ingresa un número entero positivo o cero.');
            continue;
        }
        let resultado = factorialNumero(numero);
        console.log(`El factorial de ${numero} es ${resultado}.` )
    }

}

calculoFactorial()


/*5 🏃‍♀️ Carrera
Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando 
el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las 
vueltas (suma de las vueltas / cantidad de vueltas). Ejemplo:
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s*/

function calculoVueltas(){

    function calculoPromedio(tiemposVuelta) {
        return (tiemposVuelta.reduce((acumulador, valorActual) => acumulador + valorActual, 0))/tiemposVuelta.length;
    }

    while (true){
        let numeroVueltas = prompt('Cantidad de vueltas:');
        if (numeroVueltas === null) {
            console.log("Programa finalizado.");
            return;
        }

        numeroVueltas = Number(numeroVueltas);

        if (isNaN(numeroVueltas) || numeroVueltas < 1 || !Number.isInteger(numeroVueltas)) {
            alert('Por favor, ingresa un número entero positivo mayor a 0.');
            continue;
        }

        let tiemposVuelta = [];

        for (let i=0; i<=(numeroVueltas-1); i++){
            while (true){
                let tiemposVueltaUsuario = prompt(`Vuelta ${i+1}: `);
                if (tiemposVueltaUsuario === null) {
                    console.log("Programa finalizado.");
                    return;
                }

                tiemposVueltaUsuario = Number(tiemposVueltaUsuario);

                if (isNaN(tiemposVueltaUsuario) || tiemposVueltaUsuario < 0 || !Number.isInteger(tiemposVueltaUsuario)) {
                    alert('Por favor, ingresa un número entero positivo o cero.');
                continue;
                }
                tiemposVuelta[i] = tiemposVueltaUsuario;
                break;
            }

        }
        for (let i=0; i<=(numeroVueltas-1); i++){
            console.log(`Tiempo de la vuelta ${i+1} es ${tiemposVuelta[i]}s.` )
        }

        let promedio = calculoPromedio(tiemposVuelta);
        console.log(`El promedio es de ${promedio}s` )
    }

}

calculoVueltas()



/*6 ✊🤚✌️ Piedra, papel, tijera II
Al ejercicio de Piedra, papel, tijera de condicionales, agregarle la posibilidad de jugar la cantidad de rondas que se deseen. Por cada ronda, 
se debe mostrar ambas jugadas (usuario y computadora), quién gano la ronda, puntaje parcial hasta el momento y rondas restantes. Al finalizar 
se debe indicar quién ganó. Ejemplo:
Ronda: 2 de 5
🙍‍♀️ Jugadora: Piedra
👾 Computadora: Tijera
Jugadora ha ganado esta ronda 🎉
Puntaje: 2 (Jugadora) - 0 (Computadora)*/

function jugarPPT(){
    const opciones = ['piedra', 'papel', 'tijera'];
    function validar(jugada, opciones){
        if (opciones.includes(jugada)){
            return jugada;
        }
        else{
            alert('¡Opción no válida!');
            return false;
        }
    }

    while (true){
        let entrada = prompt('Numero de rondas: ');
        if (entrada === null) {
            console.log("Programa finalizado.");
            return;
        }

        let numeroRondas = Number(entrada);

        if (isNaN(numeroRondas) || numeroRondas <= 0 || !Number.isInteger(numeroRondas)) {
            alert('Por favor, ingresa un número entero positivo o mayor que cero.');
            continue;
        }
    let contador = 1;
    let victoriasComputadora = 0;
    let victoriasJugadora = 0;
    while (contador <= numeroRondas){
        let jugada = prompt('Elije piedra, papel o tijera');
        if (jugada == null){
            console.error('Gracias por participar')
            return
        }
        jugada = jugada.toLowerCase();
        if (!validar(jugada, opciones)){
            continue
        }
        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
        let ganador = '';

        if (jugada === eleccionComputadora) {
            ganador = 'Empate';
        } else if (
            (jugada === 'piedra' && eleccionComputadora === 'tijera') ||
            (jugada === 'papel' && eleccionComputadora === 'piedra') ||
            (jugada === 'tijera' && eleccionComputadora === 'papel')
        ) {
            ganador = 'Jugadora';
            victoriasJugadora += 1;
        } else {
            ganador = 'Computadora';
            victoriasComputadora += 1;
        }
        console.log(`Ronda: ${contador} de ${numeroRondas}`);
        console.log(`Jugadora: ${jugada}`);
        console.log(`Computadora: ${eleccionComputadora}`);
        if (ganador == 'Empate'){
            console.log('Nadie ha ganado esta ronda');
        }
        else{
            console.log(`${ganador} ha ganado esta ronda`);
        }
        console.log(`Puntuaje: ${victoriasJugadora} Jugadora - ${victoriasComputadora} Computadora`);
        contador += 1;
    }
        console.log(`\n🏁 Juego terminado. Resultado final:`);
    console.log(`Jugadora: ${victoriasJugadora} | Computadora: ${victoriasComputadora}`);
    if (victoriasJugadora > victoriasComputadora) {
        console.log("🎉 ¡La jugadora ha ganado el juego!");
    } else if (victoriasComputadora > victoriasJugadora) {
        console.log("👾 La computadora ha ganado el juego.");
    } else {
        console.log("🤝 ¡Empate!");
    }
}
}

jugarPPT();

/*7 📐 Patrón
Crear un programa que muestre en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
************* */

function mostrarPatron() {
    while (true){
        let entrada = prompt('Elige un número:');
        if (entrada === null) {
            console.log("Programa finalizado.");
            return;
        }

        let numero = Number(entrada);

        if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
            alert('Por favor, ingresa un número entero positivo o mayor que cero.');
            continue;
        }
        let patron = "";
        for (let i = 1; i <= numero; i++) {
        patron += "*";
        console.log(patron);
        }
    }

}

mostrarPatron();

/*8 🔐 Múltiples intentos
Crear un programa que pida ingresar usuario y contraseña. El programa debe permitir hasta 3 intentos, cuando el usuario y/o la contraseña 
sean incorrectos. Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida. Si se ingresan 3 
intentos erróneos, debe mostrar un mensaje de error y terminar el programa. El usuario y la contraseña ya deben estar guardadas en variables.*/

function usuarioContrasena(){
    const usuario = 'sergio';
    const contrasena = 'vez';
    let verificacion = false;
    let contador = 1;

    while (contador<= 3){
        let usuarioIntroducido = prompt('Usuario:');
        if (usuarioIntroducido === null) {
            console.log("Programa finalizado.");
            return;
        }
        let contrasenaIntroducido = prompt('Contraseña:');
        if (contrasenaIntroducido === null) {
            console.log("Programa finalizado.");
            return;
        }
        if ((usuarioIntroducido == usuario) & (contrasenaIntroducido == contrasena)){
            verificacion = true;
        }
        if (verificacion){
            console.log('Usuario y contraseña correcto');
            break;
        }
        else{
            console.log('Usuario y contraseña incorrecto');
        }
        contador += 1;
    }


}

usuarioContrasena()


/*9 💲Cara o cruz
Crear un programa que permita escoger entre cara o cruz. El programa luego debe generar un resultado aleatorio y mostrar si se acertó o no. 
El programa debe mostrar en cada vuelta cuántas rondas seguidas acertadas van, y si en algún momento se erra, reiniciar el contador a 0. 
También debe llevar una cuenta de la cantidad máxima de rondas seguidas que se hizo sin errar. Cuando se ingresa la palabra SALIR, en vez 
de CARA o CRUZ, el programa debe mostrar la cantidad máxima de rondas seguidas acertadas junto a un mensaje de despedida, y terminar su ejecución.*/
function caraCruz(){
    const opciones = ['cara', 'cruz'];
    function validar(eleccion, opciones){
        if (opciones.includes(eleccion)){
            return eleccion;
        }
        else{
            alert('¡Opción no válida!');
            return false;
        }
    }

    let contadorActual = 0;
    let contadorMax = 0;

    while (true){
        let entrada = prompt('Elige CARA - CRUZ - SALIR:');
        if (entrada === null) {
            console.log("Programa finalizado.");
            return;
        }
        eleccion = entrada.toLowerCase();
        if (eleccion === 'salir') {
            console.log("Programa finalizado.");
            console.log(`El record de esta ronda han sido ${contadorMax} rondas seguidas ganando`);
            return;
        }
        if (!validar(eleccion, opciones)){
            continue
        }

        const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

        let acierto = true;

        if (eleccion === eleccionComputadora) {
            acierto = true;
            console.log('VICTORIA');
            contadorActual += 1;
            if (contadorMax<contadorActual){
                contadorMax = contadorActual;
            }
        } 
        else {
            acierto = false;
            console.log('DERROTA');
            contadorActual = 0;
        }
    }
}

caraCruz();

/*10 ⚖️ Mayor o menor
Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. 
Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.*/

function adivinarNumero(){
    const eleccionComputadora = Math.floor(Math.random() * 10);

    while (true){
        

        let entrada = prompt('Elige un número del 1 al 10:');
        if (entrada === null) {
            console.log("Programa finalizado.");
            return;
        }

        let numero = Number(entrada);

        if (isNaN(numero) || numero <= 0 || numero > 10 || !Number.isInteger(numero)) {
            alert('Por favor, ingresa un número entero positivo entre 1 y 10.');
            continue;
        }

        let acierto = false;


        if (numero == eleccionComputadora){
            console.log('Felicidades has acertado el numero')
            return
        }
        else if (numero < eleccionComputadora){
            console.log('El numero a avidinar es mayor')
        }
        else{
            console.log('El numero a avidinar es menor')
        }
    }
}

adivinarNumero();