## Ejercicio 3
'''Supongamos que tienes un conjunto de datos de clima que contiene información sobre la
temperatura, la humedad y la presión atmosférica en una ciudad durante un año. Quieres
analizar estos datos para determinar cuál fue la temperatura promedio de cada mes, cuál
fue la humedad promedio y la presión atmosférica promedio durante todo el año. Para
ello, puedes usar NumPy para cargar los datos en un array de 3 columnas y n filas, donde
n es el número de mediciones. Luego, puedes usar operaciones de NumPy para filtrar los
datos por mes y calcular las medias de temperatura, humedad y presión atmosférica
correspondientes.
(Pista 1) Tu array de entrada podría ser algo como esto, con daros de temperatura,
humedad, presión y mes del año:'''

# importar modulos
import numpy as np

# Datos de clima
clima = np.array([
    [20, 70, 1009, 1],
    [18, 75, 1012, 2],
    [16, 72, 1011, 2],
    [19, 73, 1011, 2],
    [22, 65, 1008, 3],
    [25, 60, 1010, 4],
    [22, 60, 1013, 4],
    [24, 59, 1010, 4],
    [25, 61, 1011, 4],
    [28, 50, 1007, 5],
    [30, 45, 1005, 6],
    [10, 45, 1005, 6],
    [32, 40, 1002, 7],
    [30, 35, 1003, 8],
    [33, 35, 1001, 8],
    [32, 35, 1004, 8],
    [31, 45, 1003, 9],
    [28, 50, 1006, 10],
    [27, 48, 1008, 10],
    [25, 60, 1010, 11],
    [22, 70, 1011, 12]
])

# --- Primero obtenemos el array de los meses
meses = clima[:,3]
print(meses)

# --- Creamos los arrays unificados por mes de temperaturas, humedad y presion
temp_mes = np.zeros(12)
humedad_mes = np.zeros(12)
presion_mes = np.zeros(12)

for mes in range(12):
    temp_mes[mes] = np.mean(clima[:,0][meses == mes+1])
    print("La temperatura promedio en el mes", mes+1, " fue de", temp_mes[mes], "grados")
    humedad_mes[mes] = np.mean(clima[:,1][meses == mes+1])
    print("La temperatura promedio en el mes", mes+1, " fue de", humedad_mes[mes], "%")
    presion_mes[mes] = np.mean(clima[:,2][meses == mes+1])
    print("La temperatura promedio en el mes", mes+1, " fue de", presion_mes[mes], "bar")