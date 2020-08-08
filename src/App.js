import React,{Component} from 'react';
import Productos from "./DatatableProductos/dataTableProductos.js";
//import Reloj from "./Reloj/Reloj.js";
//import MSupUsuario from "./MSupUsuario/MSupUsuario.js";
//import Proveedores from "./formProveedores/formProveedores.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userlogged:true
    }
  }
  loguea=()=>{
    this.setState({
      userlogged:!this.state.userlogged
    });
  }
  render(){
    return (
      <div>
        <Productos visible/>
      </div>
    );


  }
}
/*<MSupUsuario visible={this.state.userlogged}/>
        <Productos visible/>
        <button onClick={this.loguea}>Loguear</button>*/
export default App;
