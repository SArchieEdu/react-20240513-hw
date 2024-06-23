import { useSelector } from "react-redux";
import { Tab } from "../tab/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return <Tab title={restaurant.name} onClick={onClick} isActive={isActive} />;
};
