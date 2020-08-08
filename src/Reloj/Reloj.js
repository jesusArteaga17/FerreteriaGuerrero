import React,{Component} from "react";
class Reloj extends Component{
    constructor(props){
        super(props);
        this.state={
            hora:new Date()
        }
    }
    state={
        hora: new Date().toLocaleDateString()
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),1000
            );
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({
            hora:new Date()
        });
    }
    render(){
        console.log(this.state.hora);
        return(
            <div>
                <span>{this.state.hora.toLocaleDateString()}</span>
            </div>
        );
    }
}

export default  Reloj;