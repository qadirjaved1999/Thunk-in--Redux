import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    SUCCESS: "Success",
    ERROR: "Error",
    LOADING: "Loading"
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [], 
        cart: [],
        status: STATUSES.SUCCESS
    },
    reducers: {
        // You can not call any asynchronous behavior in Reducer functions because reducer is synchronous call. 
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        add(state, action){
            state.cart = [...state.cart, action.payload];
        },
        remove(state, action){
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        //  return state.cart.filter((item) => item.id !== action.payload)
        }
    }
})

export const { setProducts, setStatus, add, remove } = productSlice.actions;
export default productSlice.reducer


//Thunk middleware(Normal method)
// 1) Thunk itself a normal function but return a new function.
export function productsFetched() {
    // Received a two parameters(dispatch, getState) in return function.
    return async function fetchedThunkProducts(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log("=========>>>>>>>>>>>Data", data);
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (err) {
          console.log("Data can not fetched", err);
          dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

