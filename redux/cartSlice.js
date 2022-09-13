import { createSlice, current } from "@reduxjs/toolkit";
import { STATES } from "mongoose";
var _ = require("lodash");

// addProduct: (state, action) => {
//     let temp = null;
//     let extraKostBroodje;
//     state.products?.map((item) => {
//         if (item._id === action.payload._id){
//             temp = item
//         }
//     });
//     if (temp != null){
//         if(state.products[state.products.indexOf(temp)].broodjesType === action.payload.broodjesType){
//             state.quantities[state.products.indexOf(temp)] += parseInt(action.payload.quantity);
//             state.products[state.products.indexOf(temp)].quantity = state.quantities[state.products.indexOf(temp)]
//         }else{
//             let bType;
//             state.products?.map((item) => {
//                 if (item._id === action.payload._id +1){
//                     temp = item;
//                     bType = "bruin";
//                 }else if (item._id === action.payload._id +2){
//                     temp = item;
//                     bType = "ciabatta";
//                 }
//             });
//             if (bType === "bruin"){
//                 action.payload._id += 1;
//                 state.quantities[state.products.indexOf(temp)] += parseInt(action.payload.quantity);
//                 state.products[state.products.indexOf(temp)].quantity = state.quantities[state.products.indexOf(temp)]
//             }else if (bType === "ciabatta"){
//                 action.payload._id += 2;
//                 state.quantities[state.products.indexOf(temp)] += parseInt(action.payload.quantity);
//                 state.products[state.products.indexOf(temp)].quantity = state.quantities[state.products.indexOf(temp)]
//             }else {
//                 state.products.push(action.payload);
//                 state.quantity += 1;
//                 state.quantities[state.products.indexOf(action.payload)] = parseInt(action.payload.quantity);
//             }

//         }
//     }
//     else {
//         state.products.push(action.payload);
//         state.quantity += 1;
//         state.quantities[state.products.indexOf(action.payload)] = parseInt(action.payload.quantity);
//     }
//     if (action.payload.type === "broodje"){
//         if (action.payload.broodjesType === "bruin (+€0.50)"){
//             extraKostBroodje = 0.50;
//         }else if (action.payload.broodjesType === "ciabatta (+€0.60)"){
//             extraKostBroodje = 0.60
//         }else {
//             extraKostBroodje = 0;
//         }
//     }
//     state.total += (action.payload.price * action.payload.quantity) + (extraKostBroodje * action.payload.quantity);
//     state.types[state.products.indexOf(action.payload)] = action.payload.type;
// }

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
      let temp = null;
      let extraKostBroodje;
      state.products?.map((item) => {
        if (item._id === action.payload._id) {
          temp = item;
        }
      });
      if (temp != null) {
        state.quantities[state.products.indexOf(temp)] += parseInt(
          action.payload.quantity
        );
        state.products[state.products.indexOf(temp)].quantity =
          state.quantities[state.products.indexOf(temp)];
      } else {
        state.products.push(action.payload);
        state.quantity += 1;
        state.quantities[state.products.indexOf(action.payload)] = parseInt(
          action.payload.quantity
        );
      }
      if (action.payload.type === "broodje") {
        if (action.payload.broodjesType === "bruin (+€0.50)") {
          extraKostBroodje = 0.5;
        } else if (action.payload.broodjesType === "ciabatta (+€0.60)") {
          extraKostBroodje = 0.6;
        } else {
          extraKostBroodje = 0;
        }
      }
      if (action.payload.type === "broodje") {
        state.total +=
          action.payload.price * action.payload.quantity +
          extraKostBroodje * action.payload.quantity;
      } else {
        state.total += action.payload.price * action.payload.quantity;
      }
      state.types[state.products.indexOf(action.payload)] = action.payload.type;
    },
    removeProduct: (state, action) => {
      //state.products.map((item) => console.log({"item" : item.quantity}))
      let counter = 0;
      let multiple = 0;
      let extraKostBroodje;
      let extraKost = 0;
      state.products = state.products.filter((item) => {
        if (item._id === action.payload._id) {
          counter++;
          multiple += item.quantity;
        }
        return item._id !== action.payload._id;
      });
      if (action.payload.type === "broodje") {
        if (action.payload.broodjesType === "bruin (+€0.50)") {
          extraKostBroodje = 0.5;
        } else if (action.payload.broodjesType === "ciabatta (+€0.60)") {
          extraKostBroodje = 0.6;
        } else {
          extraKostBroodje = 0;
        }
        extraKost = multiple * extraKostBroodje;
      }
      state.quantity -= counter;
      state.total -=
        multiple * action.payload.price + extraKost
    },
    addSalad: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
      state.saladItems.push(
        action.payload.basis.concat(
          action.payload.groente,
          action.payload.proteine,
          action.payload.afwerking,
          action.payload.dressing
        )
      );
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.toggle = !state.toggle;
    },
  },
});

export const { addProduct, removeProduct, addSalad, reset } = cartSlice.actions;
export default cartSlice.reducer;
