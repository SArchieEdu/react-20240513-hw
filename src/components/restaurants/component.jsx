import { useState } from "react";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { RestaurantContainer } from "../restaurant/container";

/* eslint-disable react/jsx-key */
export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <div>
      <RestaurantTabsContainer
        activeTabIndex={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </div>
  );
};
