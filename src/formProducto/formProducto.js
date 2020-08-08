import React,{Component,Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
class FormProducto extends Component{
    state={
        visible:null,
        nombre:"",
        codigo:null,
        grupo:"",
        descuento:0,
        stockminimo:0,
        stockmaximo:0,
        precio:0,
        existencia:0,
    }
    constructor(props){
        super(props);
        this.state={
            visible:props.visible
        }
    }
    handleImputChange=(event)=>{
        console.log(event.target.value);
        var variable=event.target.name
        var valor=event.target.value
        this.setState({
            ...this.state,
            [variable]  : valor
        });
        console.log(this.state);
    }
    render(){
        
        const formulario= this.state.visible ?
        <Fragment>  
        <div className="container">
		    <div className="row justify-content-center">
			    <div className="col-md-5">
                    <div>
                    <form>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" required="required" placeholder="Producto*" type="text" name="producto"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" placeholder="código" type="text" name="codigo"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" placeholder="Grupo" type="text" name="grupo"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" placeholder="Descripción" type="text" name="descripcion"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" placeholder="Descuento" type="text" name="descuento"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" required="required" placeholder="Stock mínimo*" type="text" name="stockminimo"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" required="required" placeholder="Stock máximo*" type="text" name="stockmaximo"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" required="required" placeholder="Precio unitario*" type="text" name="precio"/>
                        </div>
                        <div className="form-group">
                        <input className="form-control" placeholder="Existencia" type="text" name="existencia"/>
                        </div>
                        <div className="form-group" align="center">
                        <input type="submit" className="btn btn-primary" name="Enviar" onClick={this.registra} />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div></Fragment>
        :""
        return(
            formulario
        );
    }
}
export default FormProducto;