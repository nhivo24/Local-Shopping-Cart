import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { FaSearchDollar } from "react-icons/fa";

import '../pages/Products.css';

import '../contexts/Cart';

 
const Example = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/"></NavLink>
            </NavItem>
            <NavItem>
              <NavLink > 
              <Link to="/products">Products</Link>
              </NavLink>
            </NavItem>
             <NavItem>
              <NavLink > 
              <Link to="/AddProduct">Add Product</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink > 
              <Link to="/cart">Cart (0)</Link>
              </NavLink>
            </NavItem>  
            <NavItem>
              <NavLink > 
              <Link to="/bill">Bill </Link>
              </NavLink>
            </NavItem>          
          
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;