import React from "react";
import "./checkoutPage.styles.scss";
import CheckoutItems from "../../components/checkout-item/checkout-items.component";
import { connect } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage =({cart_Items,total})=>{

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
     <div className="checkout-items-box" >
    {cart_Items.map(cart_Item => <CheckoutItems cart_Item = {cart_Item} />) }
     </div>
     <div className="total">
     <h1>Cart Total : $ {total}</h1>
     </div>
     <h2>Please pay with Credit Card Number :- 4242 4242 4242 4242 </h2> <br/> 
     <span>Expiry MM/YY :- 01/23 </span> <br/>
     <span>CVV :- 111</span>
     </div>
     <StripeCheckoutButton price = {total}/>
    </div>
)
}
const mapsStateToProps = (state) =>({
    cart_Items:selectCartItems(state),
    total:selectCartTotal(state)
}) 


export default connect(mapsStateToProps,null)(CheckoutPage);