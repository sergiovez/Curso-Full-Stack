Algoritmo Ejercicio3
	//1. Definir e inicializar variables
	Definir array, dimen, i Como Entero
	Definir media Como Real
	dimen = 0
	i = 0
	media = 0
	
	//2. Pedir la dimensi�n por consola
	Escribir "Introduce la dimensi�n del array"
	Leer dimen
	Dimension array[dimen] //Le damos la dimensi�n al array	
	
	//3. Inicializar el array con n�meros aleatorios, del 5 al 20
	Para i = 0 Hasta dimen - 1 Con Paso 1 Hacer //Recordad que el valor_final de la variable "i" es (dimen - 1)
		array[i] = azar(16) + 5 //Para que el n�mero aleatorio est� entre 5 y 20
	FinPara
	
	//4. Calculamos la media de todos los n�meros del array
	Para i = 0 Hasta dimen - 1 Con Paso 1 Hacer
		media = media + array[i] //Primero, vamos a sumar todos los n�meros del array
	FinPara
	media = media / dimen //Segundo, para calcular la media, tenemos que dividir la suma de todos los n�meros entre la dimensi�n del array
	
	//4. Escribir todos los n�meros del array
	Para i = 0 Hasta dimen - 1 Con Paso 1 Hacer
		Escribir array[i], " " Sin Saltar
	FinPara
	Escribir "" //Para hacer un salto de l�nea
	
	Escribir "La media de los n�meros del array es: ", media
	
FinAlgoritmo
