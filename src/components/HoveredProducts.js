import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteProduct} from '../Action';
import '../style.css';

class hoveredProducts extends Component {

    deleteCartProduct = (id,price) => {
        let { deleteProduct } = this.props;
        deleteProduct({ id,price });
    }

    render() {
        return (
                <div className="hoveredProducts">
                    <table className="hover-table-body">
                        <thead>
                            <tr>
                                <th scope="col" className="table-display head-hover1">Color</th>
                                <th scope="col">Item</th>
                                <th scope="col" className="table-display">Qty</th>
                                <th scope="col" className="head-hover3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map((item, i) =>
                                    <tr key={i}>
                                        <td className="hover-td">
                                            {item.color === "Yellow" ?
                                                <img className="hover-image" src={"assets/img3.jpg"} alt="yellow"/>
                                                : null
                                            }
                                            {item.color === "Blue" ?
                                                <img src={"assets/img1.jpg"} alt="blue" className="hover-image" />
                                                : null
                                            }
                                            {item.color === "Red" ?
                                                <img src={"assets/img2.jpg"} alt="red" className="hover-image" />
                                                : null
                                            }
                                        </td>

                                        <td className="hover-td hover-productName">{item.productName}</td>

                                        <td className="hover-td hover-quantity">{item.quantity}</td>

                                        <td className="hover-td"><i className="fas fa-trash-alt"
                                            onClick={() => this.deleteCartProduct(item.id, item.price)}></i>
                                        </td>
                                    </tr>
                                )   
                            }
                        </tbody>
                    </table>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    cart: state.shoppingCartReducer,
    total: state.totalReducer.total
})

const mapDispatchToProps = (dispatch) => ({
    deleteProduct: (data) => dispatch(deleteProduct(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(hoveredProducts);