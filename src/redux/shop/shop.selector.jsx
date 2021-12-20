import React from "react";
import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollectionsPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
    
)

export const selectShopCollectionsItem = memoize((item)=> 
    createSelector(
    [selectShopCollections],
    collections => collections[item]
    
    ))
