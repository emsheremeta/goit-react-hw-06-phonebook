import { createSlice } from "@reduxjs/toolkit";

const filterInitialState ={
    filter : ''
}
export const filterSlice = createSlice ({
    name: 'filter',
initialState: filterInitialState,
reducers: {

    filterChange(state, action) {
        console.log('sf' + JSON.stringify(action.payload));
        state.filter = action.payload
    },
}
})

export const {filterChange} =filterSlice.actions