import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

//redux auto import immer for you

// we create a action object with spec. type

// @configureStore(reducer: obj)

const store = configureStore({
  reducer: {
    songs: songsReducer, // big mega reducer ( w/ all mini-reducer)
    movies: moviesReducer, // name : imported reducer
  },
});

const startingState = JSON.stringify(store.getState());
console.log(startingState);

// @ dispatch(action obj @@ type:name , payload: specified value)
store.dispatch({
  type: "song/addSong", // special type
  payload: "new song!",
});

export { store };
export { addSong, removeSong, addMovie, removeMovie, reset };

//connect to react:
// pass to Provider to the useContext system
