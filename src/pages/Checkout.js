import React, {Component} from "react";
import { BsCreditCard } from "react-icons/bs";
import OrderItem from './OrderItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Ckeckout extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	 cart: JSON.parse(localStorage.getItem("cart"))
	  };
	  this.onAddBill=this.onAddBill.bind(this);
	}

 onAddBill(event){	
		event.preventDefault();
		let name = event.target["name"].value;
		let phone = event.target["phone"].value;
		let email = event.target["email"].value;
		let bill ={			
			name:name,
			phone:phone,
			email:email,
			products:localStorage.getItem("cart")
		}
		let bills = JSON.parse(localStorage.getItem("bills"));

		if(!bills){
			bills = [];
		}       
		 bills.push(bill);
		 localStorage.setItem("bills",JSON.stringify(bills));
		 console.log(bills);
		 alert("add bill success");
		this.setState({
			 bill:bills
		});
		
		
       

		}
render(){
	var {item}=this.props;
return(
	<div>
	{this.state.cart.map((item,key)=><OrderItem 
				item={item} />
				

					)
				}			
	<div className="container py-5">
	 <div className="row">
	    <div className="col-lg-7 mx-auto">
	      <div className="bg-white rounded-lg shadow-sm p-5">
	        <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
	          <li className="nav-item">
	            <a data-toggle="pill" href="#nav-tab-card" className="nav-link active rounded-pill">
	              Credit Card
	            </a>
	          </li>
	          <li className="nav-item">
	            <a data-toggle="pill" href="#nav-tab-paypal" className="nav-link rounded-pill">
					 Paypal
				</a>
	          </li>
	          <li className="nav-item">
	            <a data-toggle="pill" href="#nav-tab-bank" className="nav-link rounded-pill">
					Bank Transfer
				</a>
	          </li>
	        </ul>       
	        <div className="tab-content">
	          <div id="nav-tab-card" className="tab-pane fade show active">
	            <p className="alert alert-success">Some text success or error</p>
	            <form   onSubmit={this.onAddBill} >	            
	              <div className="form-group">
	                <label for="username">Full name (on the card)</label>
	                <input type="text" name="name" placeholder="Your Name" required className="form-control"/>
	              </div>
	              <div className="form-group">
	                <label for="cardNumber">Card number</label>
	                <div className="input-group">
	                  <input type="text" name="cardNumber" placeholder="Your card number" className="form-control" required/>
	                  <div className="input-group-append">
	                    <span className="input-group-text text-muted">
	                        <i className="fa fa-cc-visa mx-1"></i>
	                        <i className="fa fa-cc-amex mx-1"></i>
	                        <i className="fa fa-cc-mastercard mx-1"></i>
	                    </span>
	                  </div>
	                </div>
	              </div>
	              <div className="row">
	                <div className="col-sm-8">
	                  <div className="form-group">
	                    <label><span className="hidden-xs">Expiration</span></label>
	                    <div className="input-group">
	                      <input type="text" name="email" placeholder="Your email" className="form-control" required/>
	                      <input type="text"  name="phone" placeholder="Your phone" className="form-control" required/>
	                    </div>
	                  </div>
	                </div>
	                <div className="col-sm-4">
	                  <div className="form-group mb-4">
	                    <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV </label>
	                    <input type="text" required className="form-control"/>
	                  </div>
	                </div>

	              </div>
	              <button className="subscribe btn btn-primary btn-block rounded-pill shadow-sm">Submit</button>
	            </form>
	          </div>
	         
	       
	          
	        </div>
	       
	      </div>
	    </div>
	  </div>
	</div>
	</div>

		);
}
}
export default Ckeckout;