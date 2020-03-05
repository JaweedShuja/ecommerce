import React,{Component} from 'react'
import SideBar from '../main/sidebar'
import NavBar from '../main/Navbar'
import Footer from '../main/Footer'
import Product from './product'

export default class ProductView extends Component{
    render(){
        return(
            <div>
            <SideBar/>
            <NavBar />  
            <Product/>
            <Footer />
            </div>
        );
    }
}