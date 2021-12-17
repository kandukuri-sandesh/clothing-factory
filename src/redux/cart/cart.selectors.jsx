import React from "react";
import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cart_Items
)

const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cart_Items => cart_Items.reduce((accumulator,item) => accumulator + item.quantity,0))

export const selectCartTotal = createSelector(
    [selectCartItems],
    cart_Items => cart_Items.reduce((accumulateTotal,item) => accumulateTotal + (item.price*item.quantity),0)
)    

export default selectCartHidden;