import { RootState } from "store/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IBasketState {
  value: number;
}

const initialState: IBasketState = {
  value: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketCount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setBasketCount } = basketSlice.actions;

export const selectBasketCount = (state: RootState) => state.basket.value;

export default basketSlice.reducer;
