import React, {Component} from "react";
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
import { FaCartPlus } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";


class ProductItem extends Component{

    
  render(){
	return(	
			<Card className="add">
	       		<CardImg top width="100%" height="150px" src={'image/'+this.props.item.imageUrl}/>
	        		<CardBody>
				         <CardTitle>{this.props.item.name}</CardTitle>
				         <CardText>{this.props.item.price} VND</CardText>	
				         <Button outline color="info" onClick={this.props.onItemClick}><FaCartPlus></FaCartPlus></Button>
				         <Button outline color="info" ><Link to={'/products/'+this.props.item.id}>Details</Link></Button>
	        		</CardBody>
	        		 
	        </Card>
			);
	}
}
export default ProductItem;

