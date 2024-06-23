import { createSelector } from "@reduxjs/toolkit";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, id) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantDishIds = (state, id) =>
  selectRestaurantById(state, id)?.menu;

export const selectRestaurantReviewIds = (state, id) =>
  selectRestaurantById(state, id)?.reviews;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = createSelector(
  [selectRestaurantModule],
  (restaurantModule) => Object.values(restaurantModule.entities)
);
