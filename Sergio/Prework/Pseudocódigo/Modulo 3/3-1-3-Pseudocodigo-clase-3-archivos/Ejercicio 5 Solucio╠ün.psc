Algoritmo Ejercicio5
	//1. Definir e inicializar variables
	Definir num1, num2 Como Entero
	Definir operacion Como Texto
	Definir resultado Como Real
	num1 = 0
	num2 = 0
	operacion = ""
	resultado = 0
	
	//2. Leer los dos n�meros y la operaci�n a realizar
	Escribir "Introducir el primer n�mero"
	Leer num1
	Escribir "Introducir el segundo n�mero"
	Leer num2
	Escribir "Introducir la operaci�n a realizar: sumar | restar | multiplicar | dividir"
	Leer operacion
	
	//3. Realizar la operaci�n en funci�n de la selecci�n realizada
	Segun operacion Hacer
		"sumar":
			resultado = num1 + num2
			Escribir "El resultado de la operaci�n ", operacion, " es: ", resultado
		"restar":
			resultado = num1 - num2
			Escribir "El resultado de la operaci�n ", operacion, " es: ", resultado
		"multiplicar":
			resultado = num1 * num2
			Escribir "El resultado de la operaci�n ", operacion, " es: ", resultado
		"dividir":
			Si NO (num2 = 0) Entonces //No se puede dividir por 0
				resultado = num1 / num2
				Escribir "El resultado de la operaci�n ", operacion, " es: ", resultado
			SiNo
				Escribir "No es posible dividir por 0"
			FinSi
		De Otro Modo:
			Escribir "No es posible realizar la operaci�n solicitada"
	FinSegun
FinAlgoritmo
