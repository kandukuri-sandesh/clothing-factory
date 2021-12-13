import toggleCartHidden from "./cart.types";
import ItemAddition from "./cart.utils";

const INITIAL_STATE = {
    hidden:true,
    cart_Items:[]
}

const CartReducer = (state = INITIAL_STATE,action) =>{
   switch (action.type) {
     case toggleCartHidden.TOGGLE_CART_HIDDEN:
        return{
        ...state,
        hidden:!state.hidden
        }
    case toggleCartHidden.addItems:
        return{
            ...state,
            cart_Items:ItemAddition(state.cart_Items,action.payload)
        }  
      

 
     default:
         return state;
 }
}

export default CartReducer;    