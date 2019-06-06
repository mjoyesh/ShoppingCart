import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class BreadCrumbThree extends Component {
  state = {  }
  render() { 
    return ( 
      <>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item breadcrumb-list2">
            <NavLink to="/" className="breadcrumb-list2">
            Home
            </NavLink>
        </li>
        <li class="breadcrumb-item breadcrumb-list2" aria-current="page">
          <NavLink to="/cart" className="breadcrumb-list2">
          Cart
          </NavLink>
        </li>
        <li className="breadcrumb-item breadcrumb-list2 active">
            Checkout
        </li>
    </ol>
    </nav>
  </>
  );
  }
}
 
export default BreadCrumbThree;