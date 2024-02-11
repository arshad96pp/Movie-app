import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedMovies: [],
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    addMovieList: (state, action) => {
      const duplecateRemove = state.savedMovies.indexOf(
        (item) => item.id === action.payload.id
      );

      if (duplecateRemove !== -1) {
        console.log("data alredy exist");
      } else {
        state.savedMovies.push(action.payload);
      }
    },
  },
});

export const { addMovieList } = navSlice.actions;

export default navSlice.reducer;
