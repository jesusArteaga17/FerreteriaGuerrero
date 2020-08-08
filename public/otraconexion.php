<?php

header('Content_Type: application/json; charset=utf-8');

define('DB_HOST','localhost');
define('DB_USERNAME','root');
define('DB_PASSWORD'.'');
define('DB_NAME','ferreteria_guerrero');
$mysqli=new mysqli(DB_HOST,DB_USERNAME,DB_PASSWORD,DB_NAME);
$mysqli-> query('SET NAMES "utf8"');
if (!$mysqli){
    die ("La conexión a fallado: ".$mysqli->error);
}
$query=sprintf("Select * from productos");
$result=$mysqli->query($query);
$datos=array();
foreach ($result as $row){
    $datos[]=$row;
}
$result->close();
$mysqli->close();

print json_encode(array('Datos'=>$datos));

?>