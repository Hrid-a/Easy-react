import { createSlice, currentState } from "@reduxjs/toolkit";

const cartSlice = createSlice(
    {
        name:"cart",
        initialState: {
            items: [],
        },
        reducers: {
            addItem: (state, action) => {
                state.items.push(action.payload);
            },
            removeItem : (state, action) => {
                state.items.splice(state.items.findIndex(item => item.id === action.payload), 1);
            },
            clearAll: (state)=> {
                // state.items = [];
                state.items.length = 0;
            }
        }
    })


export const {addItem, removeItem, clearAll} = cartSlice.actions;
export default cartSlice.reducer;