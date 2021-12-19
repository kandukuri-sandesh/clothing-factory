import React from "react";
import "./checkoutPage.styles.scss";
import CheckoutItems from "../../components/checkout-item/checkout-items.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CheckoutPage =({cart_Items})=>{

    console.log(cart_Items)
return(
    <div className="checkout-page">
    <div className="checkout-box" >
     <div className="checkout-head" >
      <div className="checkout-header"  >
      Product
      </div>
      <div className="checkout-header" >
      Description
      </div>
      <div className="checkout-header">
      Quantity
      </div>
      <div className="checkout-header" >
      Price
      </div>
      <div className="checkout-header" >
      Remove
      </div>
      
     </div>
    {cart_Items.map(cart_Item => <CheckoutItems cart_Item = {cart_Item} />) }
    
     </div>
    </div>
)
}
const mapsStateToProps = (state) =>({
    cart_Items:selectCartItems(state)
}) 


export default connect(mapsStateToProps,null)(CheckoutPage);