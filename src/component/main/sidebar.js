import React,{Component} from 'react'
import SideNav, {MenuIcon} from 'react-simple-sidenav'
import UpperBar from './upperBar'



export default class SideBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            showNav:false
        }
        this.ShowNav = this.ShowNav.bind(this)
    }
    ShowNav(){
        this.setState({
            showNav:true
        })
    }
    render(){
        return(
            <div>
                {/* <MenuIcon onClick={() => this.setState({showNav: true})}/>
                <button onClick={() => this.setState({showNav: true})}>=</button> */}
                <UpperBar ShowNav={this.ShowNav}/>

                <SideNav
                    showNav        =  {this.state.showNav}
                    onHideNav      =  {() => this.setState({showNav: false})}
                    title          =  "Shop Online"
                    items          =  {[
                        <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
                        <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
                        <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
                    ]}
                    titleStyle     =  {{backgroundColor: '#4CAF50'}}
                    itemStyle      =  {{backgroundColor: '#fff'}}
                    itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
                    />
            </div>
        );
    }
}