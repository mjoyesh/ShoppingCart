import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import CartMenu from './CartMenu';
import {addProduct} from '../Action';
import '../style.css';
class Product extends Component {
    constructor(props) {
        console.log('props from product', props.product.defaultcolor)
        super(props);
        this.state = { 
            selectedColor: props.product.defaultcolor,
            quantity : 0,
            sizeName : "Small",
            inCart : false,
         }
    }
    handleChange=(e)=>{
        let {name} = this.props.product;
        let selectedRadio = name + " radio";  
        console.log("radio button ",e.target.value);
        if(e.target.name === selectedRadio){
            this.setState({
                selectedColor: e.target.value,
            })
        }
       this.setState({
           [e.target.name] : e.target.value,
       })
    }

    handleClick = (e) =>{
        let {addProduct} = this.props;
        let {name, price} = this.props.product;
        let inCart = this.state.inCart;
        let id = this.props.id;
        e.preventDefault(); 
        this.setState({
            inCart : true,
        })
        addProduct({
            color : this.state.selectedColor,
            productName : name,
            price : price ,
            size : this.state.sizeName,
            quantity : this.state.quantity,
            id : id,
        });
    }

    handleSizeChange = (e) =>{
        this.setState({
            sizeName : e.target.value,
          })
    }

    render() { 
        let {product, id} = this.props;
        let  showImage = this.props.images;
        let  imageId = Object.keys(this.props.images[0]);
        return ( 
            <div className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    
                    <div className="img-container p-5" >
                    <Link to={`/details/${id}`}>
                        {
                            imageId.map((item,id) => {
                                return(
                                    this.state.selectedColor === item?
                                    <div key={id} className="image">
                                        <img src={showImage[0][item]} alt="shirt" className="card-img-top" />
                                    </div> :null
                                )
                            })
                        }
                    </Link>
                        <div className={`${product.name} buttonNav`}>
                            <CartMenu
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}
                                handleSizeChange={this.handleSizeChange}
                                imageKeys={imageId}
                                name={product.name}
                                selectedColor={this.state.selectedColor}
                                inCart = {this.state.inCart}
                            /> 
                        </div>
                    </div>
                   
                    <div className="card-footer d-flex justify-content-between">
                        <p>{product.name}</p>
                        <p>₹{product.price}</p>
                    </div>  
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    console.log("images",state.productReducer.images);
    return{
        images: state.productReducer.images,
        storedProducts : state.productReducer.storeProducts,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProduct : (data) => dispatch(addProduct(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);