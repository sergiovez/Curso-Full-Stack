Algoritmo Ejercicio2
	//1. Definir e inicializar variables
	Definir letra Como Texto
	letra = ""
	
	//2. Pedir la letra a comprobar
	Escribir "Introduce una letra"
	Leer letra
	
	//3. Comprobar si la letra es una vocal
	Si (letra = "a") O (letra = "e") O (letra = "i") O (letra = "o") O (letra = "u")
		Escribir "La letra SI es una vocal"
	SiNo
		Escribir "La letra NO es una vocal"
	FinSi
FinAlgoritmo
