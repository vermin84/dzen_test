import { createSlice } from "@reduxjs/toolkit"
import { orders } from "../../data/orders";


const ordersSlice = createSlice({
    name: 'orders',
  initialState: {
    list: orders,
  },
  reducers: {
    addOrder: (state, action) => {
      state.list.push(action.payload);
    },
    removeOrder: (state, action) => {
      state.list = state.list.filter(order => order.id !== action.payload);
    },
  },
})


export const { addOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;