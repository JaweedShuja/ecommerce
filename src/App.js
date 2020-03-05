import React,{Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './component/main'
import AddProduct from './component/AddProduct'
import ProductView from './component/ProductView'


export default class App extends Component{
  render(){
    return(
      <div>
        {/* <Main /> */}
        {/* <AddProduct /> */}
        <ProductView/>
      </div>
    );
  }
}