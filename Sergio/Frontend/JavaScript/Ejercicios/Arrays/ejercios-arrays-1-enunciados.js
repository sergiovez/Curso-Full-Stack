const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];


/* Ejercicio 1

Dado un array de números, crear una función vAbsoluto que reciba un array y que devuelve un array con los valores absolutos de los números del array que se pasa como parámetro

Pista: usar Math.abs

*/
const numbers = [1, 4, -5, -20, 8, 9, 3];

function vAbsoluto(numbers){
  return numbers.map(numero => Math.abs(numero))
}

console.log(numbers);
let numerosAbsolutos = vAbsoluto(numbers);
console.log(numerosAbsolutos);


/* Ejercicio 2

Dado un array de datos aleatorios, crear una función llamada porTipos que devuelve un objeto con claves por tipo de dato y clasifique los valores del array pasado como parámetro segun su tipo

Pista: usar typeof para determinar el tipo


*/

const datosAleatorios = [
  "Paisa",
  66,
  "Qué tal estás",
  {},
  { name: 'Bienve' },
  [1, 2, 3],
  ['Hola que tal'],
  true
]

function porTipos (datosAleatorios){
  return {
    number: datosAleatorios.filter(dato => typeof(dato) == 'number'),
    string: datosAleatorios.filter(dato => typeof(dato) == 'string'),
    objetc: datosAleatorios.filter(dato => typeof(dato) == 'object'),
    boolean: datosAleatorios.filter(dato => typeof(dato) == 'boolean'),
  }
}

datosOrdenados = porTipos(datosAleatorios);

/* Ejercicio 3

Dado el array de alumnos, crear una función getFullStackStudents a la que se lo pasamos como parámetro y nos devuelva únicamente a los alumnos que pertenezcan a la formación Full Stack

Pista: usar filter

*/

const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

function getFullStackStudents(alumnos){
  return alumnos.filter((alumno) => alumno.master == 'FullStack')
}

let alumnosFullStack = getFullStackStudents(alumnos);
console.log(alumnosFullStack);


/* Ejercicio 4

Dado el array de alumnos, crear una función llamada nStudentFullStack que nos devuelva el número de usuarios que pertenecen a dicha formación. De igual manera para el resto de las formaciones

Pista: usar reduce o filter (más eficiente reduce)

*/

const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

function nStudentFullStack(alumnos){
  return{
    FullStack: alumnos.filter((alumno) => alumno.master == 'FullStack').length,
    InteligenciaArtificial: alumnos.filter((alumno) => alumno.master == 'IA').length,
    Blockchain: alumnos.filter((alumno) => alumno.master == 'BlockChain').length,
  }

}

let alumnosPorMaster = nStudentFullStack(alumnos);
console.log(alumnosPorMaster);

/* Ejercicio 5

Dado el array de alumnos, crear una función llamada getAdultStudents que reciba el array por parámetro y devuelva un array únicamente de los mayores de edad

*/

const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

function getAdultsStudents(alumnos){
  return alumnos.filter((alumno) => alumno.edad >= 18)
}

let adultsStudents = getAdultsStudents(alumnos);
console.log(adultsStudents);

/* Ejercicio 6

Dado el array de alumnos, crear una función llamada mayor que reciba el array como parámetro y que devuelva el alumno mayor de toda la lista de alumnos

Pista: usa reduce o for

*/

const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

function mayor(alumnos){
  return alumnos.filter((alumno) => alumno.edad >= 18)
}

let mayosStudent = mayor(alumnos);
console.log(mayosStudent);

/* Ejercicio 7

Haz el ejercicio 2 usando "reduce"

*/

const datosAleatorios = [
  "Paisa",
  66,
  "Qué tal estás",
  {},
  { name: 'Bienve' },
  [1, 2, 3],
  ['Hola que tal'],
  true
]

function porTipos (arr){

  return arr.reduce((acumulador, elemento) => {
      let tipo = typeof elemento;
      acumulador[tipo] = acumulador[tipo] ? acumulador[tipo] :  [];
      acumulador[tipo].push(elemento);
      return acumulador
  },{})

}

let datosOrdenados = porTipos(datosAleatorios);
console.log(datosOrdenados);

/* Ejercicio 8


Dado el array de alumnos, crear una función llamada agruparPor que reciba dos parámetros, primero el array y luego un string con la propiedad 
por la que queremos agrupar de las posibles de los alumnos. La función devolverá un objeto con una propiedad por cada uno de los valores posibles 
de la propiedad pasada como parámetro. Te lo explico con un ejemplo mejor.

*/

const alumnos = [
  {
    id: 1,
    nombre: 'Zamora',
    edad: 15,
    master: 'FullStack'
  },
  {
    id: 2,
    nombre: 'Jose Luís',
    edad: 22,
    master: 'BlockChain'
  },
  {
    id: 3,
    nombre: 'Lucía',
    edad: 19,
    master: 'IA'
  },
  {
    id: 4,
    nombre: 'Felipe',
    edad: 49,
    master: 'FullStack'
  },
  {
    id: 5,
    nombre: 'María',
    edad: 17,
    master: 'IA'
  },
  {
    id: 6,
    nombre: 'Cecilia',
    edad: 16,
    master: 'FullStack'
  },
  {
    id: 7,
    nombre: 'Cecilia',
    edad: 16,
    master: 'BlockChain'
  }
];

function agruparPor(arr, clave){
  return arr.reduce((acumulador, alumno) =>{
    let clasificacion = alumno[clave];

    acumulador[clasificacion] = acumulador[clasificacion] ? acumulador[clasificacion] :  [];
    acumulador[clasificacion].push(alumno);
    return acumulador

  },{})
}

let agrupadosMaster = agruparPor(alumnos, 'edad');
console.log(agrupadosMaster);