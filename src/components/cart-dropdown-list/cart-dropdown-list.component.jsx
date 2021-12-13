import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown-list.styles.scss"

const CartDropdowList = ({obj}) => (
    
        <div>
        <div className ="image" style = {{backgroundImage:`url(${obj.imageUrl})`}} />
        <h1>{obj.name}</h1>
        <span>{obj.price}</span>
        </div>
    
)

const mapStateToProps = ({cart:{cart_Items}}) => ({
    cart_Items
  })
  
  export default connect(mapStateToProps,null)(CartDropdowList);
  