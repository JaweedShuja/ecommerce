import React,{Component} from 'react'
import MenuIcon from '../images/menuIcon.png'

export default class UpperBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="row" style={{backgroundColor:'#4caf50'}}>
                    <img onClick={this.props.ShowNav} src={MenuIcon} style={{height:35, width:35, marginLeft:20, marginTop:10, marginRight:10, marginBottom:10}}/>
                    <h4 style={{color:'white', marginLeft:10, marginTop:13, marginRight:10, marginBottom:10}}>Shop Online</h4>
                </div>
                

            </div>
        );
    }
}