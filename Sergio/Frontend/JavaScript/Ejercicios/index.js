    /*Ejercicio 1
    Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!.*/
    console.log('¡Hola Mundo!');

    /*Ejercicio 2
    Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable y luego muestre por pantalla el contenido de la variable.*/
    let textoEjericio2 = '¡Hola Mundo!';
    console.log(textoEjericio2);

    /*Ejercicio 3
    Escribir un programa que pregunte el nombre del usuario usando "promt" y después de que el usuario lo introduzca muestre por pantalla 
    la cadena ¡Hola <nombre>!, donde <nombre> es el nombre que el usuario haya introducido.*/
    let nombreUsuario = prompt('¿Cual es tu nombre?');
    console.log('Hola ' + nombreUsuario);    

    /*Ejercicio 4
    Escribir un programa que realice la siguiente operación aritmética:*/
    console.log(((3+2)/(2*5))**2);

    /*Ejercicio 5
    Escribir un programa que pregunte al usuario por el número de horas trabajadas y el coste por hora. Después debe mostrar por pantalla 
    la paga que le corresponde.*/
    let horasTrabajadas = prompt('Horas trabajadas: ');
    let costeHora = prompt('Coste horario: ');
    console.log(horasTrabajadas * costeHora);

    /*Ejercicio 6
    Escribir un programa que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una v
    ariable, y muestre por pantalla la frase Tu índice de masa corporal es <imc> donde <imc> es el índice de masa corporal calculado redondeado con dos decimales.*/
    let pesoUsuario = prompt('Peso kg: ');
    let estaturaUsuario = prompt('Estatura metros: ');
    let imc = pesoUsuario / (estaturaUsuario**2);
    console.log('Tu indice de masa corporal es '+ Math.round(imc * 100) / 100);

    /*Ejercicio 7
    Escribir un programa que pida al usuario dos números enteros y muestre por pantalla: La división resultande de dividir <n> entre <m> da 
    un cociente <c> y un resto <r> donde <n> y <m> son los números introducidos por el usuario, y <c> y <r> son el cociente y el resto de la 
    división entera respectivamente.*/
    let numeroDividendo = prompt('Dividendo: ');
    let numeroDivisor = prompt('Divisor: ');
    let numeroCociente = numeroDividendo/numeroDivisor;
    let numeroResto = numeroDividendo%numeroDivisor;
    console.log('La división resultande de dividir '+ numeroDividendo +' entre '+numeroDivisor + ' da un cociente ' +numeroCociente +' y un resto ' +numeroResto + ' donde '+numeroDividendo+' y '
        +numeroDivisor +' son los números introducidos por el usuario, y ' +numeroCociente +' y ' +numeroResto+ ' son el cociente y el resto de la división entera respectivamente.');

    /*Ejercicio 8
    Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el 
    capital obtenido en la inversión.*/
    let dineroInvertido = prompt('Inversion: ');
    let interesAnual = prompt('Interes anual %: ');
    let numeroAnos = prompt('Numero años: ');
    let capitalObtenido = dineroInvertido*(1+interesAnual/100)**numeroAnos;
    console.log(capitalObtenido);

    /*Ejercicio 9
    Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les 
    cobra por peso de cada paquete así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda. Cada payaso 
    pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos y muñecas vendidos en el último pedido y calcule el peso 
    total del paquete que será enviado.*/
    let payasosVendidos = prompt('Numero de payasos: ');
    let munecasVendidas = prompt('Numero de muñecas: ');
    let pesoTotal = 112*payasosVendidos + 75*munecasVendidas;
    console.log('Peso total de '+pesoTotal+' gramos');

    /*Ejercicio 10
    Una panadería vende barras de pan a 3.49€ cada una. El pan que no es el día tiene un descuento del 60%. Escribir un programa que comience 
    leyendo el número de barras vendidas que no son del día. Después el programa debe mostrar el precio habitual de una barra de pan, el descuento 
    que se le hace por no ser fresca y el coste final total.*/
    let numeroBarrasNoDia = prompt('Numero de barras que no son del dia: ');
    console.log('El precio habitual de la barra de pan es de 3.49€, con el descuento del 60% es '+0.4*3.49+' y el precio total de las barras es: '+numeroBarrasNoDia*0.4*3.49+' euros');