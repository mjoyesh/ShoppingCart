import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearProducts, deleteProduct, decrement, increment, updatesize, updatecolor } from '../Action';
import BreadCrumbTwo from './BreadCrumbTwo';
import '../style.css';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            update: false
        }
    }

    checkOut = () => {
        this.props.history.push('/form');
    }

    handleAddQuantity = (id, price) => {
        this.props.increment({
            id,
            price
        });
    };

    handleSubtractQuantity = (id, price) => {
        this.props.decrement({
            id,
            price
        });
    };

    clearAll = (e) => {
        let { clearProducts } = this.props;
        e.preventDefault();
        clearProducts();
    }

    upDateCart = () => {
        this.setState({
            update: true
        })
    }

    handleChangeSize = (e) => {
        let { updatesize } = this.props;
        this.props.cart.map((item, id) => {
            if (item.id == e.target.id) {
                console.log("id------>", id);
                item.size = e.target.value;
                id = item.id;
                let size = item.size;
                console.log("Updated Size---->", item.size);
                console.log("updated item id ------>", item.id);
                updatesize({
                    id,
                    size
                });
            }
        }
        )
    }

    handleChangeColor = (e) => {
        let { updatecolor } = this.props;
        this.props.cart.map((item, id) => {
            if (item.id == e.target.id) {
                console.log("id------>", id);
                item.color = e.target.value;
                id = item.id;
                let color = item.color;
                console.log("Updated Size---->", item.color);
                console.log("updated item id ------>", item.id);
                updatecolor({
                    id,
                    color
                });
            }
        }
        )
    }

    deleteCartProduct = (id, price) => {
        let { deleteProduct } = this.props;
        deleteProduct({ id, price });
    }

    continue = () => {
        this.props.history.push("/");
    }
    render() {
        return (
            <React.Fragment>
                <header className="cart-header">
                    <BreadCrumbTwo />
                </header>
                <div className="cart tableWrapper">

                    <h2 className="shopHeading">Your Shopping Cart</h2>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col" className="tableHeadings">COLOR</th>
                                {this.state.update ?
                                    <th scope="col" className="tableHeadings">CHANGE COLOR</th> : null
                                }
                                <th scope="col" className="tableHeadings">ITEM</th>
                                <th scope="col" className="tableHeadings">SIZE</th>
                                <th scope="col" className="tableHeadings">QTY</th>
                                <th scope="col" colSpan="2" className="tableHeadings">PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.cart.map((item, i) =>
                                    <tr key={i}>
                                        <td className="imageTd">
                                            {item.color === "Yellow" ?
                                                <img className="imageYrb" src={"assets/img3.jpg"} alt="yellow" className="cart-img" />
                                                : null
                                            }
                                            {item.color === "Blue" ?
                                                <img src={"assets/img1.jpg"} alt="blue" className="cart-img" />
                                                : null
                                            }
                                            {item.color === "Red" ?
                                                <img src={"assets/img2.jpg"} alt="red" className="cart-img" />
                                                : null
                                            }
                                        </td>
                                        {
                                            this.state.update ?
                                                <td className="tableData">
                                                    <select id={item.id} name="Size" onClick={this.handleChangeColor} className="colorBorder">
                                                        <option value="Blue">Blue</option>
                                                        <option value="Red">Red</option>
                                                        <option value="Yellow">Yellow</option>
                                                    </select>
                                                </td>
                                                : null
                                        }

                                        <td className="tableData">{item.productName}</td>
                                        <td className="tableData">{!this.state.update ? item.size : null}
                                            {
                                                this.state.update ?
                                                    <select id={item.id} name="Size" onClick={this.handleChangeSize} className="selectTableSize">
                                                        <option value="Small">Small</option>
                                                        <option value="Medium">Medium</option>
                                                        <option value="Large">Large</option>
                                                    </select> : null
                                            }
                                        </td>
                                        <td className="tableData quantity-btn">
                                            {this.state.update ?
                                                item.quantity <= 1 ?
                                                    <button disabled className="addSubBtn btn-danger btn-dis" type="button">-</button>
                                                    :
                                                    <button className="addSubBtn btn-danger" type="button"
                                                        onClick={() => this.handleSubtractQuantity(item.id, item.price)}>-</button>

                                                : null
                                            }
                                            <span className="qty">
                                                {item.quantity}
                                            </span>
                                            {this.state.update ?
                                                item.quantity < 10 ?
                                                    <button className="addSubBtn btn-danger" type="button"
                                                        onClick={() => this.handleAddQuantity(item.id, item.price)}>+</button>
                                                    :
                                                    <button className="addSubBtn btn-danger btn-dis" type="button" disabled>+</button>
                                                : null
                                            }
                                        </td>
                                        <td className="tableData price-heading">₹{item.price * item.quantity}</td>
                                        {this.state.update ?
                                            <td className="tableData"><i className="fas fa-times"
                                                onClick={() => this.deleteCartProduct(item.id, item.price)}></i></td>
                                            : null}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    {this.props.total > 0 ?
                        <React.Fragment>
                            <span className="subtotal">Sub Total: &nbsp; &nbsp; {Math.ceil(this.props.total)}</span> <br />
                            <span className="subtotal">(GST 5%): &nbsp; &nbsp; {Math.ceil(this.props.total * 0.05)}</span> <br />
                            <span className="subtotal">Total: &nbsp; &nbsp; {Math.ceil(this.props.total + (this.props.total * 0.05))}</span>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="cart-img-container">
                                <img src={"https://cdn4.iconfinder.com/data/icons/ikooni-outline-seo-web/128/seo-56-512.png"} alt="shopping-cart" className="shopping-cart-img" />
                            </div>
                            <h4 className="empty-cart">Your Shopping cart is empty</h4>
                        </React.Fragment>
                    }
                    <div className="checkoutBtn">
                        <button type="button" className="btn btn-danger" onClick={this.upDateCart}>Update Cart</button>
                        {this.props.total > 0?
                        <button type="button" className="btn btn-danger" onClick={this.clearAll}>Empty Cart</button>
                        :
                        <button type="button" className="btn btn-danger cart-buttons" disabled>Empty Cart</button>
                        }
                        <button type="button" className="btn btn-danger" onClick={this.continue}>Continue Shopping</button>
                        {this.props.total > 0? 
                        <button type="button" className="btn btn-danger" onClick={this.checkOut}>Go to Checkout</button>
                        :
                        <button type="button" className="btn btn-danger cart-buttons" disabled>Go to Checkout</button>
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.shoppingCartReducer,
    total: state.totalReducer.total
})

const mapDispatchToProps = (dispatch) => ({
    clearProducts: (data) => dispatch(clearProducts(data)),
    deleteProduct: (data) => dispatch(deleteProduct(data)),
    increment: (data) => dispatch(increment(data)),
    decrement: (data) => dispatch(decrement(data)),
    updatesize: (data) => dispatch(updatesize(data)),
    updatecolor: (data) => dispatch(updatecolor(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);