import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import DataTable from "react-data-table-component";
import "./estyleBarraBuscadora.css";

var Datos=[
    {id:1, nombre:"zucaritas", precio:45, existencia:2,stockminimo:3,stockmaximo:20},
    {id:2, nombre:"Sabritas", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:3, nombre:"Cacahuates", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:4, nombre:"Pistaches", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:5, nombre:"Rancheritos", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:6, nombre:"Pan molido", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:7, nombre:"Takis", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:8, nombre:"Chocorroles", precio:53, existencia:1,stockminimo:3,stockmaximo:30},
    {id:9, nombre:"Tortillas", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:10, nombre:"Rellerindos", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:11, nombre:"Bolitochas", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:12, nombre:"Tamarindos", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:13, nombre:"Salchichas", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:14, nombre:"Jamon", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
    {id:15, nombre:"Camarones", precio:53, existencia:5,stockminimo:3,stockmaximo:30},
];
/*

Configuración de las columnas

*/
const columnas=[
    {
        name: "Código",
        selector:"id",
        sortable: true,
    },
    {
        name: "Producto",
        selector:"nombre",
        sortable: true, 
    },
    {
        name: "Precio",
        selector:"precio",
        sortable: true,
    },
    {
        name: "Existencia",
        selector:"existencia",
        sortable: true,
    },
    {
        name: "Stock Minimo",
        selector:"stockminimo",
        sortable: true,
    },
    {
        name: "Stock Maximo",
        selector:"stockmaximo",
        sortable: true,
        right:true
    }
];
/*

Configuración de las opciones de paginación

*/
const opcionespag={
    rowsPerPageText:"filas por página",
    rangeSeparatorText: "de",
    selectorAllRowsItem: true,
    selectorAllRowsItemText:"Todos"
};
/*

Configuracion de las condicionales de cada renglon

*/
const conditionalRowStyles = [
    {
      when: row => row.existencia <= row.stockminimo,
      style: {
        backgroundColor: 'orange',
        color: 'white',
        '&:hover': {
          cursor: 'pointer',
        },
      },
    },
    {
        when: row => row.existencia > row.stockminimo && row.existencia < row.stockmaximo,
        style: {
          backgroundColor: 'white',
          color: 'black',
          '&:hover': {
            cursor: 'pointer',
          },
        },
    },
  ];
/*

Se llaman la conexion a base de datos para obtener todos los productos

*/
/*const consultar= async()=>{

    console.log('Consultando la base de datos');
    const ruta='http://localhost:8080/Laboratorio/prueba.php';
    const query=await fetch(`${ruta}`,{

        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content.Type':'application/json'
        },
        body:JSON.stringify()
    }).then((response)=>response.json()).then((data)=>{
        return data.Datos
    }).catch((error)=>{
        console.error(error+' no se que paso carnal');
    });
    console.log(query);
    return query;
}*/
const consultar=  async()=>{
    const query= await fetch('http://localhost:8080/Laboratorio/prueba.php/')
    .then(res=>res.json()).then(data=>{
        console.log(data.Datos);
        return data.Datos;
    })
    Datos=query
    return query;

}


/*
Aqui el componente DataTableProductos
*/

class Productos extends Component{
    state ={
        busqueda:"",
        datos:[],
        visible:false
    }
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded:false,
            Datos:[],
            visible:props.visible
        }
    }
    componentDidMount=async ()=>{
        await consultar()
        this.setState({
            datos:Datos,
            isLoaded:true
        });
    }
    onChange=async e=>{
        e.persist();
        await this.setState({busqueda: e.target.value});
        //console.log(this.state.busqueda);
        this.filtrarElementos();
    }
    filtrarElementos=()=>{
        //aqui le falta para que pueda filtrar a mas columnas
        var search=Datos.filter(item=>{
            if (item.nombre.toLowerCase().includes(this.state.busqueda)||item.stockminimo.toString().includes(this.state.busqueda)
            ||item.stockmaximo.toString().includes(this.state.busqueda)){
                return item;
            }
        });
        this.setState({
            datos:search
        });
    }
    render(){
        const contenido=this.props.visible ?
        this.state.isLoaded ?  
            <div className="resposnive-table">
                <div className="barraBusqueda">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="textField"
                        name="busqueda"
                        value={this.state.busqueda}
                        onChange={this.onChange} 
                    />
                </div>
                <DataTable 
                    className="table table-striped"
                    columns={columnas}
                    data={this.state.datos}
                    title="Productos"
                    pagination
                    paginationComponentOptions={opcionespag}
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                    conditionalRowStyles={conditionalRowStyles}
                    noDataComponent={<span>No se encontró ningún elemento</span>}
                />
            </div>
            :
            <div>Cargando...</div>
        :""
        return(
            contenido
        );
    }
}
export default Productos;
