-- Entra en la base de datos academia y carga el fichero TARJETAS.sql.
-- 1. Crear un procedimiento llamado “listar_profesores” que tengan un cursor. 
	-- Debemos ir pintando el nombre completo del profesor en mayúsculas y la edad. Hacerlo con un bucle LOOP
-- 2. Crear un procedimiento denominado “notas_max_mix” que tenga un curso que extraiga las notas máximas y mínimas de cada curso. 
	-- Hacerlo con un bucle WHILE
-- 3. Crear un trigger llamado “insert_profesores” sobre profesores que al insertar un registro realice lo siguiente:
	-- a. Ponga el nombre y apellidos en mayúsculas o Si la edad está en blanco, ponemos de forma automática 24
	-- b. Debemos comprobar que el correo está OK. De lo contrario disparamos un error 45000. 
		-- Para que esté bien debe tener una ‘@’ y luego un punto en algún lugar o Insertar el insert en la tabla de auditoría.
	-- c. Modificar el trigger para que sea de tipo after
-- 4. Crear un trigger de borrado de alumnos de tipo before. Si se intenta borrar fuera del horario laboral debe rechazar el borrado con un signal de error 45000.
	-- a. El horario laboral será de 8 a 18
	-- b. Además debemos guardar en la tabla auditorías el borrado si es satisfactorio.
	-- c. Modificar el trigger para que sea de tipo after. ¿impedimos el borrado?