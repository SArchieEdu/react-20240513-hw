import { Outlet } from "react-router-dom";
import { RestaurantTabsContainer } from "../components/restaurant-tabs/container";

export const Restaurants = () => {
  return (
    <div>
      <RestaurantTabsContainer />
      <Outlet />
    </div>
  );
};
