import React, {Component} from "react";

import './AddProduct';
import './Products.css';

import ListProducts from './ListProducts';
import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class AddProduct extends Component{
	constructor(props) {
	  super(props);

	  let products = JSON.parse(localStorage.getItem("products"));

		if(!products){
			products = [];
		}
	
	  this.state = {
	  	products: products
	  };
	  this.onAddProduct=this.onAddProduct.bind(this);
	  this.onDeleteClick=this.onDeleteClick.bind(this);
	}
	 onAddProduct(event){
		event.preventDefault();
		let id = 0;
		let name = event.target["name"].value;
		let price = event.target["price"].value;
		let type = event.target["type"].value;
		let quantity = event.target["quantity"].value;
		let description = event.target["description"].value;
		let imageUrl = event.target["imageUrl"].files.item(0).name;
		let products = JSON.parse(localStorage.getItem("products"));

		 if (!products) {
            products = [];
            id=0;
        }
        else
        {
            id=products[products.length-1].id+1;
        }
		let product ={
			id:id,
			name:name,
			price: price,
			type:type,
			description:description,
			quantity:quantity,
			imageUrl:imageUrl
		}
	

		if(!products){
			products = [];
		}

        
		products.push(product);
		localStorage.setItem("products",JSON.stringify(products));
		this.setState({
			 products:products
		});
		
		
       

		}
onDeleteClick(){
	return(event)=>{
		let products =JSON.parse(localStorage.getItem("products"));
		products.splice(products, 1);
		localStorage.setItem("products",JSON.stringify(products));

		this.setState({
			 products:products
		});
		
	 }
}
onUpdateProduct(event){ 
	event.preventDefault(); 
	var id = event.target['id'].value; 
	var name = event.target['name'].value; 
	var price = event.target['price'].value; 
	var image = event.target['image'].value; 
	var category = event.target['category'].value; 
	var products = JSON.parse(localStorage.getItem("products")); 
	var oldItem = products.find((el)=>(el.id == id)); 
	oldItem.name = name; 
	oldItem.price = price; 
	oldItem.image = image; 
	oldItem.category = category; 
	localStorage.setItem("products",JSON.stringify(products)); 
	this.setState({products: products}); 
} 
	
 onEditProduct(item){ 
 	return (event)=>{ 

 		this.setState({ 
 			isEdit : true, formValue : item 
 		}) 
 	} 
 	}

	render(){
	return(
		<div>
		<form className="AddProduct" onSubmit={this.onAddProduct} >
		 <div className="form-row">
		    <div className="form-group col-md-2">
		      <label for="Name">Name Product</label>
		      <input type="text" class="form-control" name="name" placeholder="Name Product"/>
		    </div>
		     <div className="form-group col-md-2">
		      <label for="inputState">Type</label>
		      <select id="inputState" className="form-control" name="type">
		        <option value="dog">Dog</option>
		        <option value="cat">Cat</option>
		      </select>
    		</div>
		  </div>
		  <div className="form-group col-md-6">
		    <label for="Description">Description</label>
		    <textarea className="form-control" name="description" rows="3"></textarea>
		  </div>
		<div className="form-row">		  
		  <div className="form-group col-md-2">
		    <label for="imageUrl">Image</label>
		    <input type="file" className="form-control-file" name="imageUrl"/>
		  </div>
		  <div class="form-group col-md-2">
	      <label for="inputZip">Quantity</label>
	      <input type="number" className="form-control" name="quantity"id="quantity"/>
	    	</div>
	    	<div className="form-group col-md-2">
		    <label for="price">Price</label>
		    <input type="text" className="form-control" name="price" placeholder="Price"/>
		  </div>
		</div>
		  <button type="submit" id="add" className="btn btn-primary" >Submit</button>
		</form>
<div>
<Container>
<table align="center" width="600px" border="1"  cellspacing="0" cellpadding="3" className="table table-hover table-bordered">
  <tr className="table-primary table-header" >
  
    <th>STT</th>
    <th >Name Product</th>
    <th >Price</th>
    <th >Description</th>
    <th >Quantity</th>
    <th >Category</th>
    <th >Image</th>
    <th>Edit</th>
    <th >Delete</th>
    
  </tr>
 
	{this.state.products.map((item,key)=>(
		<tr>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.price}</td>
		<td>{item.description}</td>
		<td>{item.quantity}</td>
		<td>{item.type}</td>
		<td><CardImg src={'image/'+item.imageUrl}></CardImg></td>
		<td>
		<div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onEditProduct(item)}>
              <BsPencilSquare></BsPencilSquare>
            </button>
         </div>
         </td>
         <td>
		 <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onDeleteClick(key)}>
               <BsFillTrashFill></BsFillTrashFill>
            </button>
         </div>
		</td>
		</tr>
		)

					)}
			
  </table>
   </Container>
  </div>

  </div>

		);
}
}
export default AddProduct;

