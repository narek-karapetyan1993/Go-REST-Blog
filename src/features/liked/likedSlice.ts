import { RootState } from "store/store";

import { createSlice } from "@reduxjs/toolkit";

export interface ILikedState {
  liked: boolean;
}

const initialState: ILikedState = {
  liked: false,
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    setLikedTrue: (state) => {
      state.liked = true;
    },
    setLikedFalse: (state) => {
      state.liked = false;
    },
  },
});

export const { setLikedTrue, setLikedFalse } = likedSlice.actions;

export const selectLiked = (state: RootState) => state.liked;

export default likedSlice.reducer;
