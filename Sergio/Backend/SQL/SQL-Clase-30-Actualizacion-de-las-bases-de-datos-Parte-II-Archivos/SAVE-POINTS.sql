-- save points -> rollbacks parciales

START TRANSACTION ;
	DELETE FROM NOTAS_ALUMNOS WHERE COD_ALUMNO = 990;
	INSERT INTO ALUMNOS VALUES(999, 'xxxxxx','xxxxxx', 'xxxxx@gmail.com',20,2);
	INSERT INTO NOTAS_ALUMNOS VALUES(999, 2, 1,0);
    
    SAVEPOINT PASO2;
    
    UPDATE ALUMNOS SET APELLIDOS = "PRUEBA";
    
SELECT * FROM  ALUMNOS;

ROLLBACK TO PASO2;

ROLLBACK;