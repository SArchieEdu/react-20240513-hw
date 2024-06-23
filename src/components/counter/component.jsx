import { Button } from "../button/component";

export const Counter = ({ value, max = 5, min = 0, onChange }) => {
  return (
    <div>
      <Button
        onClick={() => onChange(value - 1)}
        disabled={value === min}
        type="secondary"
      >
        -
      </Button>
      {value}
      <Button
        onClick={() => onChange(value + 1)}
        disabled={value === max}
        type="secondary"
      >
        +
      </Button>
    </div>
  );
};
