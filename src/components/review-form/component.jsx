import { useReducer } from "react";
import { RatingInput } from "../rating-input/component";
import { Button } from "../button/component";

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 5,
};

// action - {type: 'setName', payload: ''}
function reducer(state, { type, payload } = {}) {
  switch (type) {
    case "setText":
      return { ...state, text: payload };
    case "setRating":
      return { ...state, rating: payload };
    default:
      return state;
  }
}

export const ReviewForm = ({
  initialValue = DEFAULT_FORM_VALUE,
  onSaveClick,
  onCancelClick,
}) => {
  const [form, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          type="text"
          value={form.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <RatingInput
        value={form.rating}
        onChange={(rating) => dispatch({ type: "setRating", payload: rating })}
        maxRating={10}
      />
      <Button onClick={() => onSaveClick({ ...initialValue, ...form })}>
        Save
      </Button>
      {onCancelClick && <Button onClick={onCancelClick}>Cancel</Button>}
    </div>
  );
};
