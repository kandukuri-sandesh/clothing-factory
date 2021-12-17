import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartDropdowList from "../cart-dropdown-list/cart-dropdown-list.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CartReducer from "../../redux/cart/cart.reducer";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import { useLocation,useNavigate } from "react-router";


const CartDropdown =({cart_Items,dispatch})=>{
  const location = useLocation();
  const navigate = useNavigate();
  
  


  return (
    <div className="cart-dropdown"  >
    <div className="cart-items">
    <div> 
    {console.log(cart_Items)}
    {cart_Items.length? cart_Items.map(obj => <CartDropdowList key = {obj.id} obj = {obj}/>) : <h1>No Items in the Cart.</h1> }
    </div>
    </div>
    <CustomButton onClick = {()=> {
      navigate("/checkoutpage");
      dispatch(toggleCartHidden())
    }} >GO TO CHECKOUT</CustomButton>
    
    </div>
)}



const mapStateToProps = (state) => ({
  cart_Items:selectCartItems(state),
})

export default connect(mapStateToProps)(CartDropdown);
