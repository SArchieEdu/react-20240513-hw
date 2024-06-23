import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <div>
        <NavLink to="menu">Menu</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
