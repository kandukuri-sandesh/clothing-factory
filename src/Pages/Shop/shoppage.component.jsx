import React,{Component,Routes,Route} from "react";
import {useLocation,useMatch} from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";




const Shop = ()=> {
  const location = useLocation();
    return(
   <div>
  <CollectionOverview/>
  
  
   
   </div>
    )}


export default Shop;