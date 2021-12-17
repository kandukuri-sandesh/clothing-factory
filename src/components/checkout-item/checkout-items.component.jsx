import React from "react";
import "./checkout-items.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart, SubstructItem } from "../../redux/cart/cart.actions";
import { addItems } from "../../redux/cart/cart.actions";


const CheckoutItems = ({cart_Item,clearItem,addItems,SubstructItem})=> {
 
  const {imageUrl,name,quantity,price} = cart_Item 

 return (
  
   <div className="checkout-items" > 
     <div className="checkout-item" >
     <img src = {imageUrl} alt = "item"/>
     </div>
     <div className="checkout-item" >
     <span>{name}</span>
     </div>
     <div className="checkout-item" >
     <span><span className="Arrow" onClick={()=> SubstructItem(cart_Item)}   >&#10094;</span> {quantity} <span className="Arrow" onClick={()=> addItems(cart_Item)} >&#10095;</span> </span>    
     </div>
     <div className="checkout-item" >
     <span>{price}</span>
     </div>
     <div className="checkout-item" >
     <span onClick={()=>clearItem(cart_Item)} > &#10005;</span>
     </div>
   </div>
   
)
  }
const mapDispatchToProps = (dispatch)=>({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItems : item => dispatch(addItems(item)),
  SubstructItem: item => dispatch(SubstructItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItems);