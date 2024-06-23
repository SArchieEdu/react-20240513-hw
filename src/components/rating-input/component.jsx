import { Button } from "../button/component";

/* eslint-disable react/jsx-key */
export const RatingInput = ({ value, onChange, maxRating = 5 }) => {
  return (
    <div>
      {new Array(maxRating).fill(null).map((_, index) => (
        <Button
          disabled={value === index + 1}
          onClick={() => onChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
};
