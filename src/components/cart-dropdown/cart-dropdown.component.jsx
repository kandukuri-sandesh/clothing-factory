import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartDropdowList from "../cart-dropdown-list/cart-dropdown-list.component";

import CartReducer from "../../redux/cart/cart.reducer";
import toggleCartHidden from "../../redux/cart/cart.actions"

const CartDropdown =({cart_Items})=>(
    <div className="cart-dropdown"  >
    <div className="cart-items">
    <div> 
    {cart_Items.map(obj => <CartDropdowList obj = {obj}/> )}
    </div>
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cart_Items}}) => ({
  cart_Items
})

export default connect(mapStateToProps,null)(CartDropdown);
