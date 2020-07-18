import React, {Component} from "react";

import ProductItem from './ProductItem';
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './Products.css';


import Detail from './Detail';

import { FaSearchDollar } from "react-icons/fa";

export const CartContext = React.createContext();

class Products extends Component{

	constructor(props) {
	  super(props);	
		   this.products= JSON.parse(localStorage.getItem("products"));
		   if(!this.products){
			  	this.products = [];
			  }		
			  this.searchProduct=this.searchProduct.bind(this);				 
	}

		 
	onItemClick(item){
		return(event)=>{
			let cart =JSON.parse(localStorage.getItem("cart"));
			if(!cart){
	  		cart = [];
		  }
		  let oldItem = cart.find((element)=> element.id === item.id);

		  if(oldItem){
		  	oldItem.quantity +=1;
		  }
		  else{
		  	item.quantity =1;
		  	cart.push(item);
		  }
		  localStorage.setItem("cart",JSON.stringify(cart));
		  alert("Add cart sussessful");

			}
	}
	
	sortByPriceAsc=()=>{

          let sortedProductsAsc;
          sortedProductsAsc= this.products.sort((a,b)=>{
             return parseInt(a.price)  - parseInt(b.price);
          })

          this.setState({
              products:sortedProductsAsc
          })
     }


      sortByPriceDsc=()=>{

          let sortedProductsDsc;
          sortedProductsDsc= this.products.sort((a,b)=>{
             return parseInt(b.price)  - parseInt(a.price);
          })

          this.setState({
              products:sortedProductsDsc
          })
  	}

    findProductById(id){
    	var products=this.products;

    	for(let i=0;i<products.length;i++){
    		if(products[i].id==id){
    			return products[i];
    		}
    	}
    	return null;
    }


	searchProduct(event){
	    event.preventDefault();
	 	var products= this.products;
	    var txt_search = event.target["search"].value;
	    const result = products.filter(product => product.name.includes(txt_search));
	    this.setState({
	      products: result
	    })
	  }

	render(){
		
		return(
			<div >
			<Container>
			 Sorteren:
		         <Button outline color="warning" onClick={this.sortByPriceAsc} >ASC</Button>
		         <Button outline color="warning"onClick={this.sortByPriceDsc} >DESC</Button>
		        <form onSubmit={this.searchProduct}>
  				<input type="text" name="search" className="form-control col-md-2"  placeholder=""/>
  				<Button>Search</Button>
  				</form>
			 <Row className="home">								
				 {this.products.map((item,index)=><ProductItem  
				 	onItemClick={this.onItemClick(item)} 
				
				 
				 	key={index} 
				 	item={item}/>)}	

			 </Row>
			</Container>
			</div>
			);}
		}
	
export default Products;