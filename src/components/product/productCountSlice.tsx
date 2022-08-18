import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface ProductStateProp {
    value: number
}

const initialState: ProductStateProp = {
    value: 0
}

const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementProduct : (state) => {state.value += 1},
        decrementProduct : (state) => {state.value -= 1},
        incrementByAmount: (state, action:PayloadAction<number>) => {state.value += action.payload}
    }

})

export const { incrementProduct, decrementProduct } = productSlice.actions

export default productSlice.reducer