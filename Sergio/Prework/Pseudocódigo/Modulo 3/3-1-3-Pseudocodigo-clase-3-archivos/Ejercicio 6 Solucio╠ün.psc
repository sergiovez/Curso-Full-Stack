Algoritmo Ejercicio6
	//1. Definir e inicializar variables
	Definir num, cifra1, cifra2, cifra3, cifraMasBaja, parteEntera Como Entero
	num = 0
	cifra1 = 0
	cifra2 = 0
	cifra3 = 0
	cifraMasBaja = 0
	parteEntera = 0
	
	//2. Pedir el n�mero de 3 cifras
	Escribir "Introduce un n�mero de 3 cifras (100 - 999)"
	Leer num
	
	//3. Comprobar que el n�mero es de 3 cifras
	Si (num >=100) Y (num <= 999) Entonces
		//3. Obtener las cifras del n�mero
		cifra1 = num MOD 10
		parteEntera = trunc(num/10)
		cifra2 = parteEntera MOD 10
		parteEntera = trunc(num/100)
		cifra3 = parteEntera MOD 10
		
		//4. Obtener la cifra m�s baja
		Si (cifra1 <= cifra2) Y (cifra1 <= cifra3)
			cifraMasBaja = cifra1
		SiNo
			Si (cifra2 <= cifra1) Y (cifra2 <= cifra3)
				cifraMasBaja = cifra2
			SiNo
				cifraMasBaja = cifra3
			FinSi
		FinSi
		
		//5. Escribir cu�l es la cifra m�s baja
		Escribir "La cifra m�s baja para el n�mero ", num, " es: ", cifraMasBaja
	SiNo
		Escribir "El n�mero introducido no es de 3 cifras"
	FinSi
FinAlgoritmo
