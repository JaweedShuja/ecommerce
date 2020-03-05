import React,{Component} from 'react'
import mobile1 from '../images/mobile1.jpeg'
import mobile2 from '../images/mobile2.jpeg'
import mobile3 from '../images/mobile3.jpeg'
import mobile4 from '../images/mobile4.jpeg'
import mobile5 from '../images/mobile5.jpeg'


export default class Products extends Component{
    constructor(props){
        super(props)

        
    }
    render(){
        return(
            <div className="container">

            <div className="row" >    
            
            <div class="card" style={{width: '20%', height:'10%', margin:10}}>
                <img class="card-img-top" src={mobile1} style={{height:'60%', width:'60%', alignSelf:'center'}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Samsung S10</h5>
                    <p class="card-text">Rs: 95,000</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
            </div>

            <div class="card" style={{width: '20%', height:'10%', margin:10}}>
                <img class="card-img-top" src={mobile2} style={{height:'60%', width:'60%', alignSelf:'center'}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">I Phone 8</h5>
                    <p class="card-text">Rs: 85,000</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
            </div>

            <div class="card" style={{width: '20%', height:'10%', margin:10}}>
                <img class="card-img-top" src={mobile3} style={{height:'60%', width:'60%', alignSelf:'center'}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Motorola e2</h5>
                    <p class="card-text">Rs: 25,000</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
            </div>

            <div class="card" style={{width: '20%', height:'10%', margin:10}}>
                <img class="card-img-top" src={mobile4} style={{height:'60%', width:'60%', alignSelf:'center'}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">QMobile v1</h5>
                    <p class="card-text">Rs: 5,200</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
            </div>

            <div class="card" style={{width: '20%', height:'10%', margin:10}}>
                <img class="card-img-top" src={mobile5} style={{height:'60%', width:'60%', alignSelf:'center'}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Sony Ericson</h5>
                    <p class="card-text">Rs: 7,000</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                </div>
            </div>

            

            
            </div>

            </div>

        );
    }
}