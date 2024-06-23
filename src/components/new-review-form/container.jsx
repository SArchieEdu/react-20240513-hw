import { useCallback } from "react";
import { useCreateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";

export const NewReviewFormContainer = ({ restaurantId }) => {
  const [createReview] = useCreateReviewMutation();

  const handleSave = useCallback(
    (form) => {
      createReview({
        restaurantId,
        newReview: { ...form, userId: "a304959a-76c0-4b34-954a-b38dbf310360" },
      });
    },
    [createReview, restaurantId]
  );

  return <ReviewForm onSaveClick={handleSave} />;
};
