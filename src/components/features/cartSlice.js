import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
      : null,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.strapiId === action.payload.strapiId
      )
      if (itemIndex >= 0) {
        console.log("alrady in cart")
      } else {
        state.cartItems.push(action.payload)
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.strapiId !== action.payload.strapiId
      )
      state.cartItems = nextCartItems
      localStorage.setItem("cartItems", JSON.stringify(nextCartItems))
    },
    clearCart(state){
       state.cartItems = []
    }
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer