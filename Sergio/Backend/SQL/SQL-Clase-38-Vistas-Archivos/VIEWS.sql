/**	  VISTAS 	**/
/*
	- Una vista es una SELECT que funciona como una tabla virtual
    
	- Esta SELECT se ejecuta cada vez que invocamos la vista, por lo tanto las filas y columnas de esta
    tabla virtual, realmente no están guardadas en ningún sitio, solamente se generan en el momento de hacer la consulta
    
	- Podríamos verlo como guardar una query con un nombre
    
    SINTAXIS:
    
    CREATE VIEW NOMBRE AS SELECT...
    
*/

SELECT * FROM COUNTRY;
SELECT * FROM CITY;

CREATE VIEW VIDA60 AS 
SELECT * FROM COUNTRY
WHERE LIFEEXPECTANCY>=60;

SELECT * FROM VIDA60;

SELECT city.NAME FROM CITY JOIN VIDA60 ON COUNTRYCODE = CODE WHERE CONTINENT = 'EUROPE';


-- Ciudad y pais al que pertenece. Columnas repetidas 

CREATE VIEW CIUDAD_PAIS AS
SELECT COUNTRY.NAME, CITY.NAME FROM CITY JOIN COUNTRY ON COUNTRYCODE = CODE;

CREATE VIEW CIUDAD_PAIS AS
SELECT COUNTRY.NAME AS COUNTRYNAME, CITY.NAME AS CITYNAME FROM CITY JOIN COUNTRY ON COUNTRYCODE = CODE;

SELECT * FROM CIUDAD_PAIS;

DROP VIEW CIUDAD_PAIS;

CREATE VIEW CIUDAD_PAIS(PAIS, CIUDAD) AS
SELECT COUNTRY.NAME, CITY.NAME FROM CITY JOIN COUNTRY ON COUNTRYCODE = CODE;

CREATE OR REPLACE VIEW CIUDAD_PAIS(NOMBRE_PAIS, NOMBRE_CIUDAD) AS
SELECT COUNTRY.NAME, CITY.NAME FROM CITY JOIN COUNTRY ON COUNTRYCODE = CODE;

CREATE OR REPLACE VIEW MAX_MIN_POPULATION(CONTINENTE, POB_MAX, POB_MIN) AS 
SELECT CONTINENT, MAX(POPULATION), MIN(POPULATION)
FROM COUNTRY
GROUP BY CONTINENT;

SELECT * FROM MAX_MIN_POPULATION;







