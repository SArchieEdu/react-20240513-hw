import { Restaurant } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
  const { restaurantId } = useParams();
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: selectEntityFromResult(restaurantId),
  });

  if (!restaurant) {
    return <div>No restaurant</div>;
  }
  return <Restaurant restaurant={restaurant} />;
};
