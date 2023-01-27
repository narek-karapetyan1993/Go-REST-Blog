import basketSlice from "features/basket/basketSlice";
import postsSlice from "features/posts/postsSlice";
import likedSlice from "features/liked/likedSlice";

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    posts: postsSlice,
    liked: likedSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
