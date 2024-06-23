import { Reviews } from "./component";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const ReviewsContainer = () => {
  const { restaurantId } = useParams();
  const { data: reviews, isFetching } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (!reviews?.length) {
    return null;
  }

  return <Reviews reviews={reviews} />;
};
