import { Menu } from "./component";
import { useGetDishesByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const MenuContainer = () => {
  const { restaurantId } = useParams();
  const { data: dishes, isFetching } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!dishes?.length) {
    return null;
  }

  return <Menu dishes={dishes} />;
};
