import React, { Component } from 'react';
import {connect} from 'react-redux';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
  
    render() { 
        let {inCart, name, image, price} = this.props.detailProduct;
        return (    
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center my-5">
                        <h1>{name}</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <img src={image} className="img-fluid" alt="product" />
                    </div>
                </div>
                <h4>{price}</h4>
                <button disabled={inCart ? true:false} >
                    ADD TO CART
                </button>
            </div>
          );
    }
}
 
const mapStateToProps = (state) => {
    console.log('Details',state.productReducer.detailProduct);
    return{
        detailProduct: state.productReducer.detailProduct,
        storedProducts: state.productReducer.storeProducts
    }
}

export default connect(mapStateToProps)(Details);