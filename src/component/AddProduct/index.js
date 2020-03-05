import React,{Component} from 'react'
export default class AddProduct extends Component{
    render(){
        return(
            <div className="container">
                <h1>Add New Product</h1>
                <hr />
                 <div class="form-group">
                    <label for="usr">Product Name:</label>
                    <input type="text" class="form-control" id="usr"/>
                </div>
                <div class="form-group">
                    <label for="pwd">Price:</label>
                    <input type="text" class="form-control" id="pwd"/>
                </div>

                <div className="form-group">
                        <label>Category</label>
                        <select ref="userInput"
                            require
                            className="form-control">
                                <option>Computer</option>
                                <option>Laptop</option>
                                <option>Computer</option>   
                                <option>Hardware Component</option>
                                
                        </select>
                    </div> 
                    <div class="form-group">
                    <label for="pwd">Image:</label>
                    <input type="file" class="form-control" id="pwd"/>
                </div>

                <div className="text-right">
                    <button className="btn btn-danger" onClick={this.discart} style={{marginRight:5,}}>Discart</button>
                    <button className="btn btn-success" onClick={this.publish}>POST</button>
                </div>
                <hr/>
            </div>
        );
    }
}