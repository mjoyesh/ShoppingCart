import React, { Component } from 'react';
import Navbar from './Navbar';
import Product from './Product';
import Header from './Header';
import { connect } from 'react-redux';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 
        let {storedProducts}= this.props;
        let id = Object.keys(this.props.storedProducts);
        console.log('ID from storedProducts-->',id)
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <div>
                    <header className="product-header">
                    </header>
                    <div className="body-bg">
                        <div className="container product-wrapper">
                            <div className="row">
                                {storedProducts.map( (product,i) => {
                                    return <Product key={i} id={product.id} product={product} />;
                                })
                                }
                            </div>
                        </div>                    
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
const mapStateToProps = (state) => {
    return {
        storedProducts : state.productReducer.storeProducts,
    }
}

export default connect(mapStateToProps)(ProductList);