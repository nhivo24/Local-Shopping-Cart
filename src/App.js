import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Detail from "./pages/Detail";
import Cart from "./contexts/Cart";
import Checkout from "./pages/Checkout";
import Bill from "./pages/Bill";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Home = () => <h2>Home</h2>;
function App() {
  return (
  <Router>
    <div className="App">
    <TopMenu/>
      <switch>
         <Route path="/" exact component={Home} /> 
         <Route path="/products" exact component={Products} />
         <Route path="/cart" exact component={Cart} />
         <Route path="/AddProduct" exact component={AddProduct} />
         
          <Route path={"/products/:id"} exact component={Detail} />

         <Route path="/Checkout" exact component={Checkout} />
         <Route path="/Bill" exact component={Bill} />
      </switch>
    </div>
  </Router> 
  );
}

export default App;
