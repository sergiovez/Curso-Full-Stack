// EJERCICIO CALCULADORA

class Calculadora {
    #resultado

    constructor(){
        this.#resultado = 0;
    }

    sumar(numero){
        try {
            if (!Number.isFinite(numero)) {
                throw Error('No se ha introducido un número válido')
            }        
            else {
                this.#resultado = this.#resultado + numero
            }} 
        catch (err) {
            console.error(err.message);
        }   
    }

    restar(numero){
        try {
            if (!Number.isFinite(numero)) {
                throw Error('No se ha introducido un número válido')
            }        
            else {
                this.#resultado = this.#resultado - numero
            }} 
        catch (err) {
            console.error(err.message);
        }   
    }

    multiplicar(numero){
        try {
            if (!Number.isFinite(numero)) {
                throw Error('No se ha introducido un número válido')
            }        
            else {
                this.#resultado = this.#resultado * numero
            }} 
        catch (err) {
            console.error(err.message);
        }   
    }

    dividir(numero){
        try {
            if (!Number.isFinite(numero)) {
                throw Error('No se ha introducido un número válido')
            }
            else if (numero == 0){
                throw Error('No se puede dividir por 0')
            }    
            else {
                this.#resultado = this.#resultado / numero
            }} 
        catch (err) {
            console.error(err.message);
        }  
    }

    obtenerResultado(){
        console.log(this.#resultado)
    }

    reiniciar(){
        this.#resultado = 0
    }
}

let calc = new Calculadora();
console.log(calc.obtenerResultado());
calc.sumar(5);
console.log(calc.obtenerResultado());
calc.dividir(2);
console.log(calc.obtenerResultado());
calc.restar(2);
console.log(calc.obtenerResultado());
calc.multiplicar(5);
console.log(calc.obtenerResultado());
calc.dividir(2);
console.log(calc.obtenerResultado());
calc.sumar('hola');
console.log(calc.obtenerResultado());
calc.dividir(0);
console.log(calc.obtenerResultado());

// EJERCICIO AUTO

class Auto {
    #encendido
    #velocidad

    constructor(marca, modelo, patente){
        this.#encendido = false
        this.#velocidad = 0
        this.marca = marca
        this.modelo = modelo
        this.patente = patente
    }

    arrancar(){
        this.#encendido = true
    }

    apagar(){
        if (this.#velocidad ==0) {
            this.#encendido = false}
        else {
            console.info('El vehículo va una velocidad mayor a 0');
        }
    }

    acelerar(){
        if (this.#encendido == true) {
            this.#velocidad += 10}
        else {
            console.info('El vehículo no se puede acelerar estando apagado');
        }
    }

    desacelerar(){
        if (this.#encendido == true) {
            if (this.#velocidad < 10) {
                this.#velocidad = 0}
            else {
            this.#velocidad -= 10
            }
        }
        else {
            console.info('El vehículo no se puede acelerar estando apagado');
        }
    }

    toString(){
        return `Este es un coche de la marca ${this.marca} modelo ${this.modelo} y cuya patente es ${this.patente}`   
    }
}

let coche = new Auto('Audi', 'Q3', 'ZZ');
console.log(coche.toString());

coche.arrancar()
coche.acelerar();
coche.apagar();
coche.desacelerar();
console.log(coche);
coche.desacelerar();
console.log(coche);

// EJERCICIO TELEVISOR

class Televisor{
    #encendido
    #canal
    #volumen

    constructor(marca, canales){
        this.#encendido = false
        this.#canal = 0
        this.#volumen = 0
        this.marca = marca
        this.canales = canales
    }

    prender(){
        this.#encendido = true
    }

    apagar(){
        this.#encendido = false
    }

    verCanalSiguiente(){
        if (this.#encendido == true){
            if (this.#canal!==this.canales){
                this.#canal += 1
            }
            else{
                this.#canal = 1
            }
        }
        else {
            console.log('No se puede cambiar de canal con el televisor apagado')
        }
    }

    verCanalAnterior(){
        if (this.#encendido == true){
            if (this.#canal!==1){
                this.#canal -= 1
            }
            else{
                this.#canal = this.canales
            }
        }
        else {
            console.log('No se puede cambiar de canal con el televisor apagado')
        }
    }

    cambiarCanal(canal){
        if (this.#encendido == true){
            if ((canal>0) && (canal<=this.canales)){
                this.#canal = canal
            }
            else {
                console.log('El canal no existe');
            }
        }
        else {
            console.log('No se puede cambiar de canal con el televisor apagado')
        }
    }

    subirVolumen(){
        if (this.#encendido == true){
            if (this.#volumen<100){
                this.#volumen += 1
            }
            else {
                this.#volumen = 100
            }
        }
        else {
            console.log('No se puede cambiar de volumen con el televisor apagado')
        }
    }

    bajarVolumen(){
        if (this.#encendido == true){
            if (this.#volumen>0){
                this.#volumen -= 1
            }
            else {
                this.#volumen = 0
            }
        }
        else {
            console.log('No se puede cambiar de volumen con el televisor apagado')
        }
    }

    toString(){
        return `Televisor ${this.marca}\n- Canales: ${this.canales}\n- Canal actual: ${this.#canal}\n- Volumen actual: ${this.#volumen}\n- Estado: ${this.#encendido}\n`
    }
}



let tele = new Televisor('Samsung', 23);
console.log(tele.toString());
tele.prender();
console.log(tele.toString());
tele.verCanalSiguiente();
console.log(tele.toString());
tele.verCanalAnterior();
console.log(tele.toString());
tele.verCanalAnterior();
console.log(tele.toString());
tele.subirVolumen();
console.log(tele.toString());
tele.bajarVolumen();
console.log(tele.toString());
tele.bajarVolumen();
console.log(tele.toString());
tele.cambiarCanal(90);
console.log(tele.toString());
tele.cambiarCanal(23);
console.log(tele.toString());
tele.verCanalSiguiente();
console.log(tele.toString());
tele.apagar();
console.log(tele.toString());
tele.verCanalSiguiente();
console.log(tele.toString());

// EJERCICIO ANOTADOR

class Anotador{
    #notas

    constructor(titulo){
        this.#notas =[] 
        this.titulo = titulo
    }

    agregarNota(nota){
        this.#notas.push(nota)
    }

    actualizarNota(id, nota){
        if (this.#notas[id-1] !== undefined && this.#notas[id-1] !== null) {
            this.#notas[id-1]=nota
        }
        else{
            console.log('No existe esa id')
        }
    }

    obtenerNota(id){
        if (this.#notas[id-1] !== undefined && this.#notas[id-1] !== null) {
            console.log(`${id}. ${this.#notas[id-1]}`)
        }
        else{
            console.log('No existe esa id')
        }
    }

    eliminarNota(id){
        if (this.#notas[id-1] !== undefined && this.#notas[id-1] !== null) {
            this.#notas.splice(id-1,1)
        }
        else{
            console.log('No existe esa id')
        }
    }

    eliminarNotas(){
        this.#notas.length = 0
    }

    listarNotas(){
        return this.#notas.reduce(
            (salida, nota, index) => {
            return `${salida} \n ${index+1}. ${nota}`
        }
        , `${this.titulo} \n----------------\n`);
  }
}

let lista = new Anotador('Lista de la compra');
lista.agregarNota('Leche');
lista.agregarNota('Pan');
lista.agregarNota('Refrescos');
lista.agregarNota('Lentejas');
console.log(lista.listarNotas());

lista.actualizarNota(1, 'Leche desnatada');
console.log(lista.listarNotas());
console.log(lista.obtenerNota(2));
lista.eliminarNota(3);
console.log(lista.listarNotas());
lista.eliminarNotas();
console.log(lista.listarNotas());

// EJERCICIO WALLET

class Movimiento{
    constructor(desc, cantidad, fecha, tipo, categoria) {
        this.descripcion = desc;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.tipo = tipo;
        this.categoria = categoria;
  }
}


class BilleteraVirtual{
    #operaciones

    constructor(montoInicial){
        this.#operaciones = []
        this.monto = montoInicial
    }

    agregarMovimiento(movimiento){
        this.#operaciones.push(movimiento)
        if (movimiento.tipo == 'GASTO'){
            this.monto -= movimiento.cantidad
        }
        else{
            this.monto += movimiento.cantidad
        }
    }

    obtenerGastosPorMes(mes){
        return this.#operaciones.filter(movimiento => movimiento.fecha.getMonth() === mes && movimiento.tipo === 'GASTO')
    }

    obtenerGananaciasPorMes(mes){
        return this.#operaciones.filter(movimiento => movimiento.fecha.getMonth() === mes && movimiento.tipo === 'GANANCIA')
    }

    obtenerGastosPorCategoria(categoria){
        return this.#operaciones.filter(movimiento => movimiento.categoria === categoria && movimiento.tipo === 'GASTO')
    }

    obtenerGananciasPorCategoria(categoria){
        return this.#operaciones.filter(movimiento => movimiento.categoria === categoria && movimiento.tipo === 'GANANCIA')
    }

    calcularTotalPorMes(mes){
        return this.#operaciones.filter(movimiento => movimiento.fecha.getMonth() === mes)
        .reduce(
            (total, movimiento) =>{
                if(movimiento.tipo === 'GASTO'){
                    total -= movimiento.cantidad
                }
                else {
                    total += movimiento.cantidad
                }
                return total
            },0
        )
    }

    calcularTotalPorCategoria(categoria){
        return this.#operaciones.filter(movimiento => movimiento.categoria === categoria)
        .reduce(
            (total, movimiento) =>{
                if(movimiento.tipo === 'GASTO'){
                    total -= movimiento.cantidad
                }
                else {
                    total += movimiento.cantidad
                }
                return total
            },0
        )
    }

    obtenerMonto(){
        return this.monto
    }
}

let miBilletera = new BilleteraVirtual(0)

let m1 = new Movimiento(
    'Nomina',
    3000,
    new Date(2024, 1, 1, 0, 0, 0, 0),
    'GANANCIA',
    'Nominas'
)

miBilletera.agregarMovimiento(m1);

let m2 = new Movimiento(
    'Gasolina',
    500,
    new Date(2024, 2, 23, 0, 0, 0, 0),
    'GASTO',
    'Nominas'
)

miBilletera.agregarMovimiento(m2);

console.log(miBilletera);

miBilletera.obtenerGastosPorMes(2);