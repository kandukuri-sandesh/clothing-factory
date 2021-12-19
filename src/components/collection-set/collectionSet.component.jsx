import React from "react";
import "./collectionSet.styles.scss"
import { useParams } from "react-router";
import { connect } from "react-redux";
import { selectShopCollectionsItem } from "../../redux/shop/shop.selector";
import CollectionItem from "../collection-items/collection-items.component";

const CollectionSet = ({item,collection})=>{

return(
    <div>
    <h1>{item.toUpperCase()}</h1>
    <div className = "collection-set">
    
     {collection.items.map(item => <CollectionItem item = {item} /> )}
   
    </div>
    </div>
)}

const mapStateToProps = (state,ownProps) =>{
    
     return ({
    
      collection:selectShopCollectionsItem(ownProps.item)(state)
     
 })}

export default connect(mapStateToProps,null)(CollectionSet);