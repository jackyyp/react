import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
  reducer: {
    users: usersReducer,
    // [(NAME).reducerPath]
    albums: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

//connect api to store
setupListeners(store.dispatch);

export { store };

//OG AsyncThunk method (for user list only )
export * from "./thunks/fetchUsers";
export * from "./thunks/addUsers";
export * from "./thunks/deleteUsers";

//Chad RTK Query (for albums,photos )
export {
  useRemoveAlbumsMutation,
  useFetchAlbumsQuery,
  useAddAlbumsMutation,
} from "./apis/albumsApi";
