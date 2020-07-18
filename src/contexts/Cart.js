import React, {Component} from "react";

import CartItem from './CartItem';

import './Cart.css';
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Cart extends Component{
	constructor(props) {
	  super(props);
	
	  this.state ={ 

	  	menu:"cart",
	  	cart: JSON.parse(localStorage.getItem("cart"))
	}
	  console.log(this.cart);
	
	}
	onDeleteClick(key){
		return(event)=>{
		let cart =JSON.parse(localStorage.getItem("cart"));
		cart.splice(key, 1);
		localStorage.setItem("cart",JSON.stringify(cart));

		this.setState({
			 cart:cart
		});
		console.log(cart);
	 }
	}
	getTotal(){
		var sum=0;
		let {cart}=this.state;

		for(let i=0; i<cart.length;i++){
			sum +=cart[i].price* cart[i].quantity;
		}
		return sum;
	}

	plusClicked(item){

	  	return(event)=>{
	  		var cart =JSON.parse(localStorage.getItem("cart"));
			let oldItem = cart.find((element)=> element.id === item.id);

			 oldItem.quantity =oldItem.quantity+1;
			 localStorage.setItem("cart",JSON.stringify(cart));
			 this.setState({
			 	cart:cart
			 })
			 
	  }
	}
	minusClicked(item,key){
	  	return(event)=>{
	  		var cart =JSON.parse(localStorage.getItem("cart"));
			let oldItem = cart.find((element)=> element.id === item.id);

			if(oldItem.quantity==0){
				this.onDeleteClick(key);
					}
			else{
			 oldItem.quantity =oldItem.quantity-1;
			}
			 localStorage.setItem("cart",JSON.stringify(cart));
			 this.setState({
			 	cart:cart
			 })
			 
	  }
	}
	
	getCheckout(item){
		let cart =JSON.parse(localStorage.getItem("cart"));
		
	}
	render(){ 
		
		return(
			<div className="container">

			<div className="card-header bg-dark text-light">	
				
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                
                <a href="" className="btn btn-outline-info btn-sm pull-right">Continiu shopping</a>         
            </div>
            <div>
				{
					this.state.cart.map((item,key)=>
					<CartItem 
					item={item} 
					onDeleteClick={this.onDeleteClick(key)}
					plusClicked={this.plusClicked(item)}
					minusClicked={this.minusClicked(item,key)}
					getCheckout={this.getCheckout(item)}
					/>
					)
				}											
			</div>
			<div className="card-footer">         
                <div className="coupon col-md-5 col-sm-5 no-padding-right pull-right">
                Total:  {this.getTotal()}
                <Button outline color="warning" onClick={this.getCheckout}><Link to="/checkout">Checkout </Link></Button>
                    <div className="pull-right" margin="5px">

                    </div>
                </div>
              
            </div>

			</div>
			);

	}
}


export default Cart;