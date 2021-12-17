import React from "react";

const ItemAddition = (addedItem,itemToBeAdded) => {
    if(addedItem.find(item => item.id === itemToBeAdded.id)){
         return (
             addedItem.map(item => item.id ===itemToBeAdded.id? {...item,quantity:item.quantity + 1} : item
                ))
         
        
    }

    return [...addedItem,{...itemToBeAdded,quantity:1}]
}

export const ItemSubstruction = (addedItem,itemToBeSubstructed) => {
    if(addedItem.find(item => item.id === itemToBeSubstructed.id)){
         return (
             addedItem.map(item => item.id ===itemToBeSubstructed.id? {...item,quantity:item.quantity - 1} : item
                ))
         
        
    }

    return [addedItem]
}

export default ItemAddition;