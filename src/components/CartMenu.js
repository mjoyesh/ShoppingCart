import React, { Component } from 'react';
import { connect } from 'react-redux';
import RadioButton from './RadioButton';
import SelectSize from './SelectSize';

class CartMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayColorButton: false,
        }
    }

    colorButton = (e) => {
        e.stopPropagation();
        console.log("Color Button Function Called");
        this.setState({
            displayColorButton: !this.state.displayColorButton
        });
        console.log("You Clicked this button color --> ", e.target);
    }
    handleChangeRadio = (e) => {
        e.stopPropagation();
        this.props.handleChange(e);
    }

    render() {
        const { name, imageKeys, handleChange, handleClick, selectedColor,
            handleSizeChange, inCart } = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return (
            <div className="Cart">
                <div className={`${btn} cartmenu`}>
                    <RadioButton
                        name={name}
                        imageKeys={imageKeys}
                        colorButtonToggle={this.colorButton}
                        selectedColor={selectedColor}
                        handleChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <SelectSize
                        name={name}
                        handleChange={handleSizeChange}
                    />
                </div>
                <div>
                    {!this.props.inCart ?
                        <button type="submit" value="Add To Cart" className="btn btn-info"
                            onClick={handleClick}>ADD TO CART</button>
                        :
                        <button type="submit" value="Add To Cart" className="btn btn-info">
                            ADDED &nbsp;<i className="fas fa-check"></i>
                        </button>
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storedProducts: state.productReducer.storeProducts,
        total: state.totalReducer.total
    }
}
export default connect(mapStateToProps)(CartMenu);