<?php
function conecta_db(){
    $servidor="localhost";
    $usuario="root";
    $contra="";
    $db="Ferreteria_Guerrero";
    $conn=mysqli_connect($servidor,$usuario,$contra,$db);
    if (mysqli_connect_error()){
        echo mysqli_connect_error();
        exit(0);
    }
    return $conn;
}
$conexion=conecta_db();
$query="SELECT * FROM Productos";
$result=mysqli_query($conexion,$query);
$arreglo=array();
if ($result){
    while($row=mysqli_fetch_assoc($result)){
        $arreglo[]=array_map("utf8_encode",$row);
    }
    $result=json_encode($arreglo,JSON_NUMERIC_CHECK);
}else{
    $result=null;
    echo mysqli_error($conexion);
}
mysqli_close($conexion);
header("Content-Type: application/json");
echo $result;
?>