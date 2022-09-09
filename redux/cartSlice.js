import { createSlice, current } from "@reduxjs/toolkit"
var _ = require('lodash')

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        types: [],
        quantities: [],
        toggle: false,
        quantity: 0,
        total: 0,
        saladItems: [],
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
            state.quantities[state.products.indexOf(action.payload)] = parseInt(action.payload.quantity);
            state.types[state.products.indexOf(action.payload)] = action.payload.type;
        },
        removeProduct: (state, action) => {
            //state.products.map((item) => console.log({"item" : item.quantity}))
            let counter = 0;
            let multiple = 0;
            state.products = state.products.filter((item) => {
                if (item._id === action.payload._id) {
                    counter++;
                    multiple += item.quantity
                }
                return (
                    item._id !== action.payload._id
                )
            })
            state.quantity -= counter;
            state.total -= multiple * action.payload.price
        },
        addSalad: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price;
            state.saladItems.push(action.payload.basis.concat(action.payload.groente, action.payload.proteine, action.payload.afwerking, action.payload.dressing));

        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
            state.toggle = !state.toggle
        }
    }
})

export const { addProduct, removeProduct, addSalad, reset } = cartSlice.actions;
export default cartSlice.reducer;