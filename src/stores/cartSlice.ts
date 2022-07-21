import { createSlice } from "@reduxjs/toolkit";
import { Variant } from "features/SingleProduct/types";

let cartArray = localStorage.getItem("cart");

let cartObj: Array<Variant> = [];

if(cartArray){
  cartObj = JSON.parse(cartArray);
}

console.log(cartArray);

type initialSliceState = { cart: Array<Variant> };
const initialState: initialSliceState = {
  //cart: [{"variantID":2285,"variantImage":"https://cdn.shopify.com/s/files/1/0934/5378/products/Sc10_12Pack_Gum_Peppermint_GR_122721_resized.png?v=1648246451","variantName":"Peppermint - Twelve Pack (108 pcs)","variantPrice":"48","quantity":1},{"variantID":2284,"variantImage":"https://cdn.shopify.com/s/files/1/0934/5378/products/Sc06_SixPack_GUM_Peppermint_GR_122821_resized.png?v=1651353142","variantName":"Peppermint - Six Pack (54 pcs)","variantPrice":"24","quantity":2}],
  cart: cartObj,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, productVariant) => {
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

      console.log(state.cart)
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
