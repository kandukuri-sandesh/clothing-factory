import { createSelector } from "reselect";
import React from "react";

const selectDirectory = state => state.directory

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.section
)
