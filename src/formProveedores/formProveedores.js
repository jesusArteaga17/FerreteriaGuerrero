import React,{Component,Fragment} from "react";
import "bootstrap/dist/css/bootstrap.css";
import dbconnect from "./../Conexion.js";
class FormProveedores extends Component{
    state={
        visible:null,
        empresa:"",
        rfc:"",
        correo:"",
        telefono:"",
        direccion:"",
        
    }
    registra=()=>{
        console.log('');
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
                    <form>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" placeholder="Nombre de la empresa*" required="required" type="text" name="empresa"/>
                        </div>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" placeholder="RFC" type="text" name="rfc"/>
                        </div>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" placeholder="Correo electrónico" type="email" name="correo"/>
                        </div>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" placeholder="Teléfono" type="text" name="telefono"/>
                        </div>
                        <div className="form-group">
                        <input onChange={this.handleImputChange} className="form-control" placeholder="Dirección" type="text" name="direccion"/>
                        </div>
                        <div className="form-group" align="center">
                        <input type="submit" className="btn btn-primary" name="Enviar" onClick={this.registra} />
                        </div>
                    </form>
 
                </div>
            </div>
        </div></Fragment>
        :""
        return(
            formulario
        );
    }
}
export default FormProveedores;