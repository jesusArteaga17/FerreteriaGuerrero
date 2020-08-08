var mysql      = require('mysql');
class conexion{
    getProductos(){
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'ferreteria_guerrero'
          });
        if (connection){
            console.log('la conexion fue exitosa');
        }else{
            console.log('Error en la conexion');
        }
        connection.connect();
        
        var resultados=connection.query('SELECT * from productos', function (error, results, fields) {
            if (error) throw error;
            results.forEach(producto =>console.log(producto));
            return results;
          });
          
          connection.end();
          return(resultados);
    }
}



module.exports=conexion;
