import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        types: [],
        quantities: [],
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
        addSalad: (state, action) => {
            state.products.push(action.payload);
            state.quantity += 1;  
            state.total += action.payload.price;
            state.saladItems.push(action.payload.basis.concat(action.payload.groente, action.payload.proteine, action.payload.afwerking, action.payload.dressing));
        },
        reset: (state) => {
            state.products = [];
            state.quantity= 0;
            state.total = 0;
        }
    }
})

export const {addProduct, addSalad, reset} = cartSlice.actions;
export default cartSlice.reducer;
