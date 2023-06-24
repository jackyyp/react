import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // **treat it like switch

    //calling: 'song'+'/'+'addSong' = 'song/addSong'
    addSong(state, action) {
      // local state
      // this 'state' is the *small state managed by this reducer*
      // NOT the whole state of store

      // mini reducer?
      state.push(action.payload); // mutate state (immer)
    },

    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1); // start from index, remove 1 element
    }
  },

  // remember: action is passed to all slice through Dispatch
  //watch for other action type to implement reset

  extraReducers(builder) {
    // // it refer to "movie/reset"...
    // builder.addCase(movieSlice.actions.reset, (state, action) => {
    //   // state.push("removing") ;  the state here is song
    //   return [];
    // });
    //downside: dependence (easy for bug?)

    //improved version, independent 'app/reset' action
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songSlice.actions;

//named export
export const songsReducer = songSlice.reducer;
