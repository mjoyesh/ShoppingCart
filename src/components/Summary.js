import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style.css';

class Summary extends Component {

    render() {
        return (
        <React.Fragment>
            <div className="cart tableWrapper">

                <h2 className="shopHeading">Summary</h2>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="tableHeadings">COLOR</th>
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

                                    <td className="tableData">{item.productName}</td>
                                    <td className="tableData">{item.size}</td>
                                    <td className="tableData quantity-btn">{item.quantity}</td>
                                    <td className="tableData price-heading">₹{item.price * item.quantity}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <span className="subtotal">Sub Total: &nbsp; &nbsp; {Math.ceil(this.props.total)}</span> <br />
                <span className="subtotal">(GST 5%): &nbsp; &nbsp; {Math.ceil(this.props.total * 0.05)}</span> <br />
                <span className="subtotal">Total: &nbsp; &nbsp; {Math.ceil(this.props.total + (this.props.total * 0.05))}</span>
            </div>
        </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.shoppingCartReducer,
    total: state.totalReducer.total
})

export default connect(mapStateToProps)(Summary);