import { useParams } from "react-router-dom";
import { useGetDishByIdQuery } from "../redux/service/api";
import { Dish as DishView } from "../components/dish/component";

export const Dish = () => {
  const { dishId } = useParams();
  const { data: dish, isFetching } = useGetDishByIdQuery(dishId);

  if (isFetching) {
    return <div>Loading</div>;
  }

  return <DishView dish={dish} />;
};
