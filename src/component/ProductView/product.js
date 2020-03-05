import React,{Component} from 'react'
import mobile1 from '../images/mobile1.jpeg'
import mobile2 from '../images/mobile2.jpeg'
import mobile3 from '../images/mobile3.jpeg'
import mobile4 from '../images/mobile4.jpeg'
import mobile5 from '../images/mobile5.jpeg'

export default class Product extends Component{
    render(){
        return(
            <div className="container">
                <div className="row" >
                    <div className="col-sm-4">
                        <img src={mobile1}/>
                        <div className="row">   
                            <div className="col-sm-3" >
                                <img src={mobile2} style={{height:100, width:100, margin:5}}/>
                            </div>
                            <div className="col-sm-3">
                                <img src={mobile3} style={{height:100, width:100, margin:5}}/>
                            </div>
                            <div className="col-sm-3">
                                <img src={mobile4} style={{height:100, width:100, margin:5}}/>
                            </div>
                            <div className="col-sm-3">
                                <img src={mobile5} style={{height:100, width:100, margin:5}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8" >
                        <h2>Samsung s10</h2>
                        <hr/>
                        <p style={{fontWeight:'bold'}}>Specification</p>
                        <p>Samsung Galaxy A71 - Display 6.7 - Quadruple Back Cameras - 8GB RAM - 128 GB ROM - Battery 4500 mAh</p>
                        <hr />
                        <p style={{fontWeight:'bold'}}>Price</p>
                        <h3 style={{color:'green'}}>Rs: 95,000</h3>
                        <hr/>
                        <button className="btn btn-success">Add To Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}