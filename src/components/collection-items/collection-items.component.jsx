import React from  "react";
import "./collection-item.styles.scss"
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux"
import {addItems} from "../../redux/cart/cart.actions"
const CollectionItem = ({item,addItems}) => {
const {price,name,imageUrl} = item    
return(
 <div className = "collection-item" > 
 <div className ="image" style = {{backgroundImage:`url(${imageUrl})`}} />
  
 
 <div className="collection-footer" >
 <span className = "name" >{name}</span>
 <span className = "price" >{price}</span>
 </div>
 <CustomButton onClick = {()=> addItems(item) } inverted > ADD TO CART </CustomButton>
 

 </div>
)}

const mapDispatchToProps = (Dispatch) => ({
  addItems: item => Dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);