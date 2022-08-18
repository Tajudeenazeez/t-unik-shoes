import { configureStore } from "@reduxjs/toolkit";
import productCountReducer from "components/product/productCountSlice";
export const store = configureStore({
    reducer: {
        counterProduct: productCountReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

