import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct, updatesize } from '../Action';
import BreadCrumbPD from './BreadCrumbPD';

class ProductDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sizeName: "Small",
            quantity: 1,
        }
    }
    handleClick = (e) => {
        let { addProduct } = this.props;
        let { name, price, defaultcolor, image } = this.props.product;
        let id = this.props.id;
        e.preventDefault();
        addProduct({
            color: defaultcolor,
            productName: name,
            price: price,
            size: this.state.sizeName,
            quantity: this.state.quantity,
            id: id,
            image: image
        });
    }

    handleSizeChange = (e) =>{
        this.setState({
            sizeName : e.target.value,
          })
    }

    render() {
        const { name, defaultcolor, price } = this.props.product;
        console.log('clrorr', defaultcolor);
        return (
            <>
                <BreadCrumbPD />
                <div className="cart-page">
                    <div className="description">
                        <div className="image-desc">
                            {defaultcolor === "Yellow" ?
                                <img className="imageYrb" src="https://s3.amazonaws.com/it-academy-photos-bucket/img3.jpg" alt="yellow" className="image-border" />
                                : null
                            }
                            {defaultcolor === "Blue" ?
                                <img src={"https://s3.amazonaws.com/it-academy-photos-bucket/img1.jpg"} alt="blue" className="image-border" />
                                : null
                            }
                            {defaultcolor === "Red" ?
                                <img src={"https://s3.amazonaws.com/it-academy-photos-bucket/img2.jpg"} alt="red" className="image-border" />
                                : null
                            }
                            <div className="btn-prod-container">
                                <button className="btn btn-danger btn-prod" onClick={this.handleClick}>ADD TO CART &nbsp; <i class="fas fa-cart-plus"></i></button>
                            </div>
                        </div>

                        <div className="prod-desc">
                            <h2>{name} </h2>
                            <p className="price-desc">₹{price}</p>
                            <p>Product description:</p>
                            <p className="description-prod">
                                Detailed to look like a real NBA jersey, sized for a youth, and priced to make you cheer!
                                This quality NBA Adidas Replica Jersey features screen printed team graphic, screen printed
                                player name and number on the front and back, tagless collar, and embroidered Adidas and NBA
                                logo's on the front. Perfect for your child or for gift giving. Made of breathable, easy-care
                                100% polyester with Clima Cool fabrication. Officially licensed by the NBA.
                        </p>
                            <p className="prod-size">Select Size</p>
                            <select name="Size" onClick={(e)=>this.handleSizeChange(e)} className="selectTableSize">
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    console.log('match from own props', ownProps.match);
    const intId = parseInt(id);
    console.log('id from own props', intId);
    const product = state.productReducer.detailProduct.find(item => item.id === intId);
    console.log('product detail of find product', product);
    return {
        product,
        cart: state.shoppingCartReducer,
        total: state.totalReducer.total,
        products: state.productReducer.storeProducts,
        images: state.productReducer.images,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct: (data) => dispatch(addProduct(data)),
    updatesize: (data) => dispatch(updatesize(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);