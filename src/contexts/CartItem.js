import React, {Component} from "react";
import './Cart.css';
import { BsFillTrashFill } from "react-icons/bs";

class CartItem extends Component{
	render(){
		var {item, onDeleteClick,minusClicked,plusClicked} = this.props;
		return(
		
	     <div className="card shopping-cart">		             
            <div className="card-body">                                     
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src={'image/'+ item.imageUrl} alt="prewiew" width="120" height="80"/>
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-3">
                            <h4 className="product-name"><strong>{item.name}</strong></h4>                           
                        </div>
                        <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-3">
                            <h6 className="product-name"><strong>{item.price} VND</strong></h6>                           
                        </div>
                        <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                            <div className="col-3 col-sm-3 col-md-6 text-md-right">
                                <h6><strong>{item.price*item.quantity} <span className="text-muted"> VND</span></strong></h6>
                            </div>
                            <div className="col-4 col-sm-4 col-md-4">
                                <div className="quantity">
                                   <button value="+" className="plus" onClick={plusClicked} >+</ button>
                                    <input type="text" step="1" max="99" min="1" value={item.quantity} title="Qty" className="qty"
                                           size="4"/>
                                    <button className="minus" onClick={minusClicked}>-</button>
                                </div>
                            </div>
                            <div className="col-2 col-sm-2 col-md-2 text-right">
                                <button type="button" className="btn btn-outline-danger btn-xs" onClick={onDeleteClick}>
                                   <BsFillTrashFill></BsFillTrashFill>
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
			);

	}
}
export default CartItem;