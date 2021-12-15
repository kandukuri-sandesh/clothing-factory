import React from "react";
import {createSelector} from "reselect";

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser 
)