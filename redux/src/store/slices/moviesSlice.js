import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

//mini reducer
const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload); //immer
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1); //immer
    },
    reset(state, action) {
      // dont do state = []; , its just reassignment, not mutate
      return []; // returned = what you want the state to be
    }
  },

  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addMovie, removeMovie } = movieSlice.actions;

// export default movieSlice.reducer; // dont hv to do it (optional)
//named export is more clear
export const moviesReducer = movieSlice.reducer;
