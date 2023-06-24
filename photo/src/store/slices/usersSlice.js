import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUsers } from "../thunks/addUsers";
import { deleteUsers } from "../thunks/deleteUsers";
// create slice {name,initialState,reducers}

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error; // error != payload
    });

    builder.addCase(addUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(deleteUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });
    builder.addCase(deleteUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error; // error != payload
    });
  },
});

export const usersReducer = usersSlice.reducer;
