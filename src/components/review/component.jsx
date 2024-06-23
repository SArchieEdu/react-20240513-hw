import { useState } from "react";
import { useGetUsersQuery } from "../../redux/service/api";
import { selectEntityFromResult } from "../../redux/service/api/selectors";
import { Button } from "../button/component";
import { useCallback } from "react";
import { UpdateReviewFormContainer } from "../update-review-form/container";

export const Review = ({ review }) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: selectEntityFromResult(review.userId),
  });

  const switchEditMode = useCallback(
    () => setIsEditModeOn((isOn) => !isOn),
    []
  );

  return (
    <div>
      {isEditModeOn ? (
        <UpdateReviewFormContainer
          review={review}
          onSave={switchEditMode}
          onCancel={switchEditMode}
        />
      ) : (
        <>
          <div>{review.text}</div>
          <div>{review.rating}</div>
          <div>{user?.name}</div>
          <Button onClick={switchEditMode}>Edit</Button>
        </>
      )}
    </div>
  );
};
