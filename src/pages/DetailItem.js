import React, {Component} from "react";
import {
  Container, Row, Col,Card, CardImg,CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


import Css from './Detail.css';
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

import {withRouter} from "react-router-dom";


class DetailItem extends Component{
  constructor(props) {
    super(props);
  
   
  }

 render(){
    var {item} = this.props;
  return(
    <Container>
  
    <div className="card" margin-left="30px;">
      <div className="name" >
     <h3 className="product-title">{item.name}</h3>
      </div>
      <div className="container-fliud">
        <div className="wrapper row">

          <div className="preview col-md-6">
            
            <div className="preview-pic tab-content">   
              <input type="" hidden name="id" />
              <img className="img-container" src={'image/'+ item.imageUrl}/>
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title"> {item.name}</h3>
            <div className="rating">
              <div className="stars">
                <span ><AiFillStar></AiFillStar></span>
                <span ><AiFillStar></AiFillStar></span>
                <span ><AiFillStar></AiFillStar></span>
                <span ><AiFillStar></AiFillStar></span>
                <span ><BsStarHalf></BsStarHalf></span>
              </div>
              <span className="review-no">41 reviews</span>
            </div>
            <p className="product-description"></p>
            <h5 className="price">Current Price: <span>{item.price} VND</span></h5>
            <h5 className="sizes">Sizes:
              <span className="size" data-toggle="tooltip" title="small">s</span>
              <span className="size" data-toggle="tooltip" title="medium">m</span>
              <span className="size" data-toggle="tooltip" title="large">l</span>
              <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
            </h5>
             <h6 className="colors">Colors:
              <span className="color orange"></span>
              <span className="color green"></span>
              <span className="color blue"></span>
            </h6>          
            
              <form className="action">                  
                    <Button outline color="danger" onClick={this.props.onItemClick}><FaCartPlus></FaCartPlus></Button>
                   <Button outline color="danger"><span><FaHeartbeat></FaHeartbeat></span></Button>
               </form> 
            
       
           
          </div>

        </div>
      </div>
      Tổng quan: {item.description}
  </div>

  </Container>

      );
  }
}
export default withRouter(DetailItem);

