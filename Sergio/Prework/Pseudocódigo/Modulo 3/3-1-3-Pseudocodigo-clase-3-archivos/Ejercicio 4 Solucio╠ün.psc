Algoritmo Ejercicio4
	//1. Definir e inicializar variables
	Definir numSeguidores Como Entero
	Definir siguesCuenta, cumplesRequisitos Como Logico
	Definir paisResidencia Como Texto
	numSeguidores = 0
	siguesCuenta = Falso
	paisResidencia = ""
	cumplesRequisitos = Falso
	
	//2. Pedir los datos a comprobar
	Escribir "Introduce tu n�mero de seguidores"
	Leer numSeguidores
	Escribir "�Sigues a la cuenta sorteo_conquer_blocks? Verdadero | Falso"
	Leer siguesCuenta
	Escribir "Introduce tu pa�s de residencia"
	Leer paisResidencia
	
	//3. Realizar las verificaciones para ver si puede participar en el sorteo
	Si (numSeguidores > 1000) Y (siguesCuenta = Verdadero) Entonces
		Si (paisResidencia = "Francia" O paisResidencia = "Alemania" o paisResidencia = "Italia") Entonces
			cumplesRequisitos = Verdadero
		SiNo
			cumplesRequisitos = Falso
		FinSi
	SiNo
		cumplesRequisitos = Falso
	FinSi
	
	//4. Comprobar si cumple todos los requisitos
	Si cumplesRequisitos = Verdadero Entonces
		Escribir "Puedes participar en el sorteo"
	SiNo
		Escribir "No puedes participar en el sorteo"
	FinSi
FinAlgoritmo
