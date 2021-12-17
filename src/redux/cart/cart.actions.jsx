import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ( {
    type:CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItems = (item)=> ({
    type:CartActionTypes.addItems,
    payload:item
})

export const clearItemFromCart = (item)=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const SubstructItem = (item) =>({
    type:CartActionTypes.SUBSTRUCT_ITEM,
    payload:item
})

