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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Bill extends Component{
	constructor(props) {
	  super(props);

	  let bills = JSON.parse(localStorage.getItem("bills"));
	  let products = JSON.parse(localStorage.getItem("cart"));

		if(!bills){
			bills = [];
		}
	
	  this.state = {
	  	bills: bills,
	  	products:products


	  };
	  this.onDeleteClick=this.onDeleteClick.bind(this);
	 
	}
onDeleteClick(key){
		return(event)=>{
		let bills =JSON.parse(localStorage.getItem("bills"));
		bills.splice(key, 1);
		localStorage.setItem("bills",JSON.stringify(bills));

		this.setState({
			 bills:bills
		});
		
	 }
	}

render(){
	return(


<div>
<Container>
<table align="center" width="600px" border="1"  cellspacing="0" cellpadding="3" className="table table-hover table-bordered">
  <tr className="table-primary table-header" >  
    <th>STT</th>
    <th >Name Product</th>
    <th >phone</th>
    <th >email</th>
   
    <th>Delete</th> 
     <th>view</th>   
  </tr>
	{this.state.bills.map((item,key)=>(
		<tr>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>{item.phone}</td>
		<td>{item.email}</td>
         <td>
		 <div className="col-2 col-sm-2 col-md-2 text-right">
            <button type="button" className="btn btn-outline-danger btn-xs" onClick={this.onDeleteClick(key)}>
               <BsFillTrashFill></BsFillTrashFill>
            </button>
         </div>

		</td>

	
	<td>
	{this.state.products.map((item,key)=>(
	<p>
	{item.name}

	<img  src={'image/'+ item.imageUrl} height="50px" width="30px"/>

	{item.price} VND</p>
			))

		}
			</td>
		</tr>
		)


)}


			
  </table>
   </Container>
  </div>

		);
}
}
export default Bill;

