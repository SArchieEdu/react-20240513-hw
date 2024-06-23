import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishesByRestaurantIds = createAsyncThunk(
  "dish/getDishesByRestaurantIds",
  async ({ restaurantId }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    return response.json();
  },
  {
    condition: ({ forceRefetch = false, restaurantId } = {}, { getState }) => {
      if (forceRefetch) {
        return true;
      }

      const state = getState();
      const loadedDishIds = selectDishIds(state);
      const restaurantDishIds = selectRestaurantDishIds(state, restaurantId);

      return restaurantDishIds.some(
        (dishId) => !loadedDishIds.includes(dishId)
      );
    },
  }
);
