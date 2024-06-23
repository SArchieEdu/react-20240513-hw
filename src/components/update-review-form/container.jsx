import { useCallback } from "react";
import { useUpdateReviewMutation } from "../../redux/service/api";
import { ReviewForm } from "../review-form/component";
import { useMemo } from "react";

export const UpdateReviewFormContainer = ({ review, onCancel, onSave }) => {
  const { text, rating } = review;
  const [updateReview] = useUpdateReviewMutation();

  const handleSave = useCallback(
    (form) => {
      updateReview({
        ...review,
        ...form,
      });
      onSave();
    },
    [onSave, review, updateReview]
  );

  const formValue = useMemo(
    () => ({
      text: text,
      rating: rating,
    }),
    [rating, text]
  );

  return (
    <ReviewForm
      initialValue={formValue}
      onSaveClick={handleSave}
      onCancelClick={onCancel}
    />
  );
};
