import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { dishSlice } from "./entities/dish";
import { userSlice } from "./entities/user";
import { requestSlice } from "./ui/request";
import { apiService } from "./service/api";

export const store = configureStore({
  reducer: combineSlices(
    restaurantSlice,
    reviewSlice,
    dishSlice,
    userSlice,
    requestSlice,
    apiService
  ),
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
