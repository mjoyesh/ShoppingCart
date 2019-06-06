import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NotificationBadge from 'react-notification-badge';
import HoveredProducts from './HoveredProducts';
import {Effect} from 'react-notification-badge';
import '../style.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovering: false,
        };
      }

      handleMouseHover = () => {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState = (state) => {
        return {
          isHovering: !state.isHovering,
        };
      }
    
    render() { 
        let cartNotify = this.props.cartNotify;
        return ( 
           <nav   
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
            className="cart-notify"
            >
               <Link to='/cart' className="ml-auto">
               <div className="badge-div">
                    <span className="badge-span">
                    <NotificationBadge count={cartNotify.length} effect={Effect.SCALE} />
                    </span>
                    <button className="cart-badge">
                        <img src="./assets/cart.svg" alt="cart" />
                    </button>
                </div>
               </Link>
               <span className="hover-span">
                  { this.props.total > 0 ? 
                      this.state.isHovering &&
                      <HoveredProducts />
                      :null
                  }
                </span>
           </nav> 
         );
    }
}

const mapStateToProps = (state) => {
    return{
        cartNotify: state.shoppingCartReducer ,
        total: state.totalReducer.total
    }
}

export default connect(mapStateToProps)(Navbar);
