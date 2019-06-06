import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class BreadCrumbPD extends Component {
  state = {  }
  render() { 
    return ( 
      <>
    <nav aria-label="breadcrumb">
    <ol className="breadcrumb breadcrumb-prod">
        <li className="breadcrumb-item breadcrumb-list2"><NavLink to="/" className="breadcrumb-list2">Home</NavLink></li>
        <li className="breadcrumb-item breadcrumb-list2 active" aria-current="page">
        Details
        </li>
    </ol>
    </nav>
  </>
  );
  }
}
 
export default BreadCrumbPD;