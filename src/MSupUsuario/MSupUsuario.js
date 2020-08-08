import React,{Component} from "react";
import "./estilo_menu.css";
class MSupUsuario extends Component{
    state={
         visible:null,
         opcion: 0
    }
    constructor(props){
        super(props)
        this.state={
            visible:props.visible
        }
    }
    onClick(){
        console.log("he sido pulsado carnal");
        alert("a que estamos jugando carnal");
    }
    render(){
        const menu=this.props.visible ?
        <div>
        <nav className="navuser" >
                <a href="#" onClick={this.onClick}>"Home"</a>
                <a href="#" >"About"</a>
                <a href="#" >"Blog"</a>
                <a href="#" >"Portafolio"</a>
                <a href="#" >"Contact"</a>
                <div className="animation start-home"></div>
        </nav>    
        </div>
         : 
         ""
        return (menu);
    }
}



export default MSupUsuario;