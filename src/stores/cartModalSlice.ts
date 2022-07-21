import { createSlice } from "@reduxjs/toolkit";
import { Variant } from "features/SingleProduct/types";


type initialSliceState = { open: true | false };
const initialState: initialSliceState = {
  open: false,
};

export const cartModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openCartModal: (state, data) => {
      if(data.payload === 'open'){
        console.log('open');
        state.open = true;
      } else{
        console.log('false');
        state.open = false;
      }
      
    },
  },
});

export const { openCartModal } = cartModalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectModal = (state: any) => state.cartModal.open;

export default cartModalSlice.reducer;
