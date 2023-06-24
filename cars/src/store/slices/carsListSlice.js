import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsListSlice = createSlice({
  name: "carsList",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearch(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        //**assume action.payload contains an object {name:,cost:}
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(), // generate random id
      });
    },
    removeCar(state, action) {
      //action.payload is the id of that car
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload; // return all car with 'true'
      });

      state.cars = updated;
    },
  },
});

export const { changeSearch, addCar, removeCar } = carsListSlice.actions;
export const carsListReducer = carsListSlice.reducer;
