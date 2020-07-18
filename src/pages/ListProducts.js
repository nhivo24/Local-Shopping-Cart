import React, {Component} from "react";
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Products from './Products.css';

class ProductItem extends Component{

  render(){
	return(
		<td>{this.props.item.name}</td>						
			);
	}
}
export default ProductItem;

