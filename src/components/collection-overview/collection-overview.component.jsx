import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectShopCollectionsPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) =>{ 
    console.log(collections)
    return (
    <div>
    {collections.map(({id, ...otherProps}) => <CollectionPreview id = {id} { ...otherProps} />   )}
   </div>
)}

const mapStateToProps = () =>createStructuredSelector ({
    collections:selectShopCollectionsPreview
}
)


export default connect(mapStateToProps,null)(CollectionOverview);