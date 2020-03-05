import React,{Component} from 'react'
export default class Footer extends Component{ 
    render(){
        return(
            <div>
                <div className="" style={{ height: '5px', backgroundColor: '#27ae60' }}>

                </div>
                <div className="text-center" style={{ height: '40px', backgroundColor: '#222f3d', paddingTop:6 }}>
                    <p style={{ color: 'white', fontSize:12,}}>Created By Jaweed | 2020 Copyright</p>
                </div>
            </div>
        );
    }
}