import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsListSlice";

const createCarSlice = createSlice({
  name: "createCar",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    // assume action.payload tell us name & cost
    changeName(state, action) {
      // actions
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    }); // listen for addCar
  },
});

export const { changeName, changeCost } = createCarSlice.actions;
export const createCarReducer = createCarSlice.reducer;
