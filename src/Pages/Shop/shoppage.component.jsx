import React,{Component,Routes,Route} from "react";
import SHOP_DATA from "./Shop_Data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";



class Shop extends Component{
    constructor(props){
        super(props)

       this.state = {collections: SHOP_DATA} 
    }
    render(){
    const {collections} = this.state;
    return(
         <div>
          {collections.map(({id, ...otherProps}) => <CollectionPreview id = {id} { ...otherProps} />   )}
         </div>
    )
    }

}


export default Shop;