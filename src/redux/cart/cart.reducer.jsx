import CartActionTypes from "./cart.types";
import ItemAddition, { ItemSubstruction } from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cart_Items:[]
}

const CartReducer = (state = INITIAL_STATE,action) =>{
    
   switch (action.type) {
     case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
        ...state,
        hidden:!state.hidden
        }
    case CartActionTypes.addItems:
        return{
            ...state,
            cart_Items:ItemAddition(state.cart_Items,action.payload)
        }
    case CartActionTypes.CLEAR_ITEM_FROM_CART :
        return{
            ...state,
            cart_Items:state.cart_Items.filter(cart_item => cart_item.id !== action.payload.id)
        }    
    case CartActionTypes.SUBSTRUCT_ITEM:
        return{
            ...state,
            cart_Items:ItemSubstruction(state.cart_Items,action.payload),
            
        }
      
 
     default:
         return state;
    }
}

export default CartReducer;    