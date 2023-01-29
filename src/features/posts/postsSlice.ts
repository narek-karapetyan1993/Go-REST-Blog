import { RootState } from "store/store";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IPost {
  body: string;
  id: number;
  title: string;
  user_id: number;
  liked: boolean;
}

export interface IPostsState {
  posts: IPost[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

const initialState: IPostsState = {
  posts: [],
  status: "idle",
};

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://gorest.co.in/public/v2/posts", {
      headers: {
        Authorization:
          "Bearer a0918f1ed1b508726a89f3b1b9a900b927daaf1263a0324fa25d26c969990679",
      },
    });
    dispatch(setPosts(res.data));
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
      state.posts.forEach((post: IPost) => {
        post.liked = false;
      });
    },

    like: (state, action: PayloadAction<number>) => {
      const post = state.posts.find((element) => element.id === action.payload);
      if (!post) return;
      post.liked = !post.liked;
    },

    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(
        (element) => element.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPosts.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(getPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setPosts, like, deletePost } = postsSlice.actions;

export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
