/* Ejercicio 1

Crea un nuevo array donde cada elemento del array original se duplique

*/

let numbers = [1, 2, 3, 4, 5, 6];

let duplicados = numbers.map((numero)=>{
    return numero*2})

console.log(duplicados);

/* Ejercicio 2

Calcula la suma de todos los elementos en el array creado en el ejercicio 1 e imprímelo.

*/

let suma = numbers.reduce((acumulado, currentValue)=>{
    return acumulado+currentValue})

console.log(suma);

/* Ejercicio 3

Crea un nuevo array que contenga solo los números pares del array original.

*/

let impares = numbers.filter((numero)=>{
    return numero % 2 !== 0})

console.log(impares);

/* Ejercicio 4

Pide al usuario que ingrese un número y verifica si está presente en el array.

*/

let numbers = [1, 2, 3, 4, 5, 6];

let numeroUsuario = Number(prompt('Ingrese un numero: '));

if (numbers.includes(numeroUsuario)){
    console.log('Si esta');
}
else{
    console.log('No esta');
}


//5-Ordena el array de números en orden descendente y imprímelo.

let numbers = [1, 2, 3, 4, 5, 6];
let arrayOrdenado = numbers.sort().reverse();
console.log(arrayOrdenado);

//6- Dado dos arrays de números, array1 y array2, crea una función que devuelva un nuevo array que
//contenga los elementos que son múltiplos de 3 y no sean múltiplos de 5. Además, asegúrate de que el nuevo array no contenga duplicados.

const array1 = [2, 3, 5, 9, 12, 15];
const array2 = [4, 6, 9, 12, 18, 20];

let array3 = array1.concat(array2);

console.log(array3);

array3 = array3.filter((numero)=>numero % 3 == 0 && numero % 5 !==0);
console.log(array3);

let array4 = [...new Set(array3)];
console.log(array4);

//7-// Ejercicio: Filtrar y transformar datos en un array

// Dado un array de objetos que representan libros,
// cada objeto tiene propiedades como título, autor y año de publicación.
// Filtra los libros que fueron publicados después de 2000
// y crea un nuevo array con los títulos de esos libros en mayúsculas.

 const libros = [
    {
        titulo: 'El señor de los anillos', 
        autor: 'J.R.R. Tolkien', 
        año: 1954 },
    {
        titulo: 'Harry Potter y la piedra filosofal', 
        autor: 'J.K. Rowling', 
        año: 1997 },
    { 
        titulo: 'Cien años de soledad', 
        autor: 'Gabriel García Márquez', 
        año: 1967 },
    { 
        titulo: 'El código Da Vinci', 
        autor: 'Dan Brown', 
        año: 2003 },
    { 
        titulo: '1984', 
        autor: 'George Orwell', 
        año: 1949 },
    { 
        titulo: 'El hobbit', 
        autor: 'J.R.R. Tolkien', 
        año: 1937 },
    { 
        titulo: 'Los juegos del hambre', 
        autor: 'Suzanne Collins', 
        año: 2008 },
 ];


 let titulos2000 = libros.filter(libro=>libro.año >= 2000).map(libro => libro.titulo=libro.titulo.toUpperCase());

 console.log(titulos2000);


// //9-
const estudiantes = [
    {   
        nombre: 'Ana', 
        edad: 20, 
        calificaciones: [10, 90, 87], 
    },
    {   
        nombre: 'Carlos', 
        edad: 22, 
        calificaciones: [78, 92, 87], 
    },
    {   
        nombre: 'Elena', 
        edad: 19, 
        calificaciones: [75, 88, 91], 
    },
    {   
        nombre: 'Daniel', 
        edad: 18, 
        calificaciones: [82, 79, 90], 
    },
    {   
        nombre: 'Luisa', 
        edad: 21, 
        calificaciones: [88, 85, 89], 
    },
    {   
        nombre: 'Miguel', 
        edad: 17, 
        calificaciones: [76, 84, 80], 
    },
    {   nombre: 'Sara', 
        edad: 23, 
        calificaciones: [91, 9, 94], 
    },
];

// //Filtra los estudiantes que tienen una edad mayor o igual a 18 años y guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.

 let estudiantesMayoresDeEdad = estudiantes.filter(estudiante=>estudiante.edad >= 18);
 console.log(estudiantesMayoresDeEdad);

//Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.

let promediosCalificaciones = estudiantesMayoresDeEdad.map((estudiante)=>{
    let suma = estudiante.calificaciones.reduce((acumulador, currentValue)=>{
    return acumulador+currentValue},0);
    return {
        ...estudiante,
        media: suma/estudiante.calificaciones.length
    }
})

console.log(promediosCalificaciones);

//Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones y muestra su nombre y calificación máxima en la consola.

let mayorMedia = promediosCalificaciones.reduce((mayorNota, estudiante) => {
   if (estudiante.media > mayorNota.media) {
     return estudiante;
   }
   return mayorNota;
 },promediosCalificaciones[0])
 console.log(mayorMedia);


//10-
const ventas = [
     { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
     { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
     { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
     { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
     { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
 ];

//Filtra las ventas que tienen una cantidad mayor a 8 unidades y guárdalas en un nuevo array llamado ventasElevadas.

let ventasEleveadas = ventas.filter((venta)=>venta.cantidad>8);
console.log(ventasEleveadas);

// Calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y almacena los resultados en un nuevo array llamado ingresosTotales.
let ingresosTotales = ventas.map((venta)=>{
    return{
        ...venta,
        total: venta.cantidad * venta.precioUnitario
    }
})

console.log(ingresosTotales);

//Encuentra la venta con el ingreso total más alto en el array ingresosTotales y muestra el producto y el ingreso total en la consola.
let ingresoAlto = ingresosTotales.reduce((alto, ingreso)=>{
    if (ingreso.total > alto.total){
        return ingreso;
    }
    return alto;
}, ingresosTotales[0]);

console.log(ingresoAlto);

//Ordena el array original ventas de manera ascendente según la cantidad de productos vendidos.

let ventasOrdenadas = ventas.sort((a, b)=>a.cantidad - b.cantidad);

console.log(ventasOrdenadas);