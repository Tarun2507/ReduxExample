import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice(
    {
        name : 'cart',
        initialState : {
            items : []
        },
        reducers : {
            addToCart(state,action) {
                state.items.push(action.payload)
            }
        }
    }
);
export const cartActions = cartSlice.actions
export default cartSlice