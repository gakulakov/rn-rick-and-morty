import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "main",
  initialState: {
    count: 0,
    favorites: ["Rick", "Morty"],
    posts: [],
    data: [{name: 'asd'}],
    favorites: []
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addPost(state, action) {
      state.posts.push(action.payload);
    },
    removePost(state, action) {
      state.posts = state.posts.filter((i) => i !== action.payload);
    },
    addData(state, action) {
        state.data = action.payload
    },
    addFavorites(state, action) {
      state.favorites.push(action.payload)
    },
    removeFavorites(state, action) {
      state.favorites = state.favorites.filter(i => i.id !== action.payload)
    }
  },
});

export default slice.reducer;
export const {
  increment,
  decrement,
  addPost,
  removePost,
  addData,
  addFavorites,
  removeFavorites
} = slice.actions;
