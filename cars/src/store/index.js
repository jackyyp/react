import { configureStore } from "@reduxjs/toolkit";
import {
  carsListReducer,
  addCar,
  removeCar,
  changeSearch,
} from "./slices/carsListSlice";

import {
  changeName,
  changeCost,
  createCarReducer,
} from "./slices/createCarSlice";

const store = configureStore({
  reducer: {
    createCar: createCarReducer,
    carsList: carsListReducer,
  },
});

export { store, changeName, changeCost, changeSearch, addCar, removeCar };
