import { createSlice } from "@reduxjs/toolkit";
import { Variant } from "features/SingleProduct/types";

type initialSliceState = { cart: Array<Variant> };
const initialState: initialSliceState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, productVariant) => {
      let quantity = 0;
      const { variantID } = productVariant.payload;

      //checks if the variant is already in the cart. If so, increase quantity by 1.
      const existsInCart = state.cart.some((v) => v.variantID === variantID);

      if (existsInCart) {
        const thisidex = state.cart.findIndex(
          (emp) => emp.variantID === variantID
        );

        console.log(thisidex);
        const val = state.cart[thisidex].quantity;
        if (typeof val !== "undefined") {
          state.cart[thisidex].quantity = val + 1;
        }
      } else {
        state.cart.push(productVariant.payload);
      }
    },
    updateQuantity: (state, data) => {
      const { variantID, action } = data.payload;
      const existsInCart = state.cart.some((v) => v.variantID === variantID);
      if (existsInCart) {
        const thisidex = state.cart.findIndex(
          (index) => index.variantID === variantID
        );

        const val = state.cart[thisidex].quantity;
        if (typeof val !== "undefined")  {
          if(action === 'increment'){
            state.cart[thisidex].quantity = val + 1;
          } else if(action === 'decrement'){
            if(val - 1 === 0){
              state.cart.splice(thisidex, 1);
            } else{
                state.cart[thisidex].quantity = val - 1;
            }
            
          }
          
        }
      }
    },
  },
});

export const { addProductToCart, updateQuantity } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCart = (state: any) => state.cart.cart;

export default cartSlice.reducer;
