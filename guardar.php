<?php	
	$Servidor='localhost';
	$Usuario='grios';
	$Password='grios';
	$BaseDeDatos='nodejs'; 
  
  	$conexion=mysql_connect($Servidor,$Usuario,$Password) or die("Error: El servidor no puede conectar con la base de datos");  
  	$descriptor=mysql_select_db($BaseDeDatos,$conexion);

	$id = $_POST['id'];
	$nombre = $_POST['nombre'];
	$lat = $_POST['lat'];
	$lon = $_POST['lon'];
	$estado = $_POST['estado'];
	$incidente = $_POST['incidente'];

	// Consulta
	$query="INSERT INTO users (user_id, user_name, user_lat, user_lon, user_state, user_incident) 
					VALUES ('$id', '$nombre', '$lat', '$lon', '$estado', '$incidente')";
					// VALUES ('', '$mar_descripcion', '0')";		

	// Ejecutar consulta
	$ex_query=mysql_query($query);

	// if ($ex_query) { 
	// 	alert("Los datos de la marca han sido modificados correctamente"); 
	// }

	//echo $id;
	// echo '</br>';
	// echo $nombre;
	// echo '</br>';
	// echo $lat;
	// echo '</br>';
	// echo $lon;
	// echo '</br>';
	// echo $estado;
	// echo '</br>';
	// echo $incidente;
?>