import React,{Component} from 'react'
import SideBar from './sidebar'
import NavBar from './Navbar'
import Products from './Products'
import Footer from './Footer'

export default class Main extends Component{
    render(){
        return(
            <div>
                <SideBar/>
                <NavBar />  
                <Products/>
                <Footer />
            </div>
        );
    }
}