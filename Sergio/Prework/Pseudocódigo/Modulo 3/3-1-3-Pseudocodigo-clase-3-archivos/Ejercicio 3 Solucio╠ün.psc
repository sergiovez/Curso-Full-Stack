Algoritmo Ejercicio3
	//1. Definir e inicializar variables
	Definir momentoDia Como Texto
	Definir numHoras, tarifa Como Entero
	momentoDia = ""
	numHoras = 0
	tarifa = 0
	
	//2. Pedir el momento del d�a y el n�mero de horas que asistir�s al gimnasio
	Escribir "�Cu�ndo ir�s al gimnasio? Opciones: ma�anas | tardes"
	Leer momentoDia
	Escribir "�Cu�ntas horas ir�s? 1, 2 o 3 (m�s)"
	Leer numHoras
	
	//3. Ver cu�l es la tarifa en funci�n del momento del d�a y las horas
	Segun momentoDia Hacer
		"ma�anas":
			Si numHoras = 1 Entonces
				tarifa = 10
			SiNo
				Si numHoras = 2 Entonces
					tarifa = 20
				SiNo
					tarifa = 30
				FinSi
			FinSi
		"tardes":
			Si numHoras = 1 Entonces
				tarifa = 20
			SiNo
				Si numHoras = 2 Entonces
					tarifa = 30
				SiNo
					tarifa = 40
				FinSi
			FinSi
	FinSegun
	
	//4. Devolver la tarfica
	Escribir "La tarifa para ", momentoDia, " y ", numHoras, " horas es de: ", tarifa
	
FinAlgoritmo
