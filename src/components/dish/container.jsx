import { Dish } from "./component";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

export const DishContainer = ({ id, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <Dish {...props} dish={dish} />;
};
