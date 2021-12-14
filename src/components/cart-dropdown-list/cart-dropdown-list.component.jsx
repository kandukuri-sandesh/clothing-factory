import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown-list.styles.scss"

const CartDropdowList = ({obj}) => (
    
        <div className = "cart-item"  >
        <img src = {obj.imageUrl} alt ="item" className="item-image" />
      
        <div className = "item-details" >
        <span>{obj.name}</span> <br/>
        <span>{`${obj.quantity} x ${obj.price}$`}</span>
        </div>
        </div>
    
)

const mapStateToProps = ({cart:{cart_Items}}) => ({
    cart_Items
  })
  
  export default connect(mapStateToProps,null)(CartDropdowList);
  