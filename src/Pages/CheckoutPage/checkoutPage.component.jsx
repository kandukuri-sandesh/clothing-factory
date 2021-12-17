import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CheckoutItems from "../../components/checkout-item/checkout-items.component";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import "./checkoutPage.styles.scss";

const CheckoutPage = ({cart_Items,Total})=> (
    <div  className="checkout-page" >   
     <div className = "checkout-header" >
      <div className="header-block" >
        <span>Product</span>
      </div>
      <div className="header-block" >
        <span>Description</span>
      </div>
      <div className="header-block" >
        <span> Quantity </span>
      </div>
      <div className="header-block" >
        <span>Price</span>
      </div>
      <div className="header-block" >
        <span>Remove</span>
      </div>
     </div>
     <div className="checkout-items-container" >
    
    {cart_Items.length? cart_Items.map((cart_Item) => <CheckoutItems  key = {cart_Item.id} cart_Item={cart_Item}  /> ):<span>No Items in Cart.....!</span>}
    </div>
    <div className="Total">
    <h1>TOTAL : {Total}$</h1>
    </div>
    </div>
    )
 
const mapStateToProps = (state)=>({
  cart_Items:selectCartItems(state),
  Total:selectCartTotal(state)
})

export default connect(mapStateToProps,null)(CheckoutPage);