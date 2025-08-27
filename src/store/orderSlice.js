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
    removeProductFromOrders: (state, action) => {
      const productId = action.payload;
      state.list = state.list.map(order => ({
        ...order,
        products: order.products.filter(product => product.id !== productId),
      }));
    },
  },
})


export const { addOrder, removeOrder, removeProductFromOrders } = ordersSlice.actions;
export default ordersSlice.reducer;