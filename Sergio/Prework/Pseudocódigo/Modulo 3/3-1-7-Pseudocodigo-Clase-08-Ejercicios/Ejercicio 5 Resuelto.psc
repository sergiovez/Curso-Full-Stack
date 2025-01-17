Algoritmo Ejercicio5
	//1. Definir e inicializar variables
	Definir array, fila, columna, num, apariciones Como Entero
	Dimension array[5,5]
	fila = 0
	columna = 0
	num = 0
	apariciones = 0
		
	//2. Inicializar el array con n�meros aleatorios, del 0 al 9
	Para fila = 0 Hasta 4 Con Paso 1 Hacer //Recordad que el valor_final de la variable "fila" es (dimension - 1)
		Para columna = 0 Hasta 4 Con Paso 1 Hacer //Y lo mismo para el valor_final de la variable "columna" (dimension - 1)
			array[fila,columna] = azar(10)
		FinPara
	FinPara
	
	//2. Pedimos un n�mero, de 0 a 9
	Escribir "Introduce un n�mero, entre 0 y 9"
	Leer num
	
	//3. Comprobamos que el n�mero est� entre 0 y 9 y, si es as�, lo buscamos en el array
	Si (num >= 0) y (num <= 9) Entonces
		//3.1. Buscamos cu�ntas veces aparece el n�mero en el array
		Para fila = 0 Hasta 4 Con Paso 1 Hacer 
			Para columna = 0 Hasta 4 Con Paso 1 Hacer
				Si array[fila,columna] = num Entonces
					apariciones = apariciones + 1
				FinSi
			FinPara
		FinPara
	SiNo
		Escribir "El n�mero no est� entre 0 y 9"
	FinSi
	Escribir "" //Salto de l�nea, solo para que se vea mejor :-)
	
	//4. Escribir todos los n�meros del array
	Para fila = 0 Hasta 4 Con Paso 1 Hacer
		Para columna = 0 Hasta 4 Con Paso 1 Hacer
			Escribir array[fila,columna], " " Sin Saltar
		FinPara
		Escribir "" //Para hacer un salto de l�nea
	FinPara
	Escribir "" //Para hacer un salto de l�nea
	
	//5. Escribir el n�mero de veces que aparece el n�mero
	Escribir "El n�mero ", num, " aparece ", apariciones, " veces"
	
FinAlgoritmo