import { useState } from "react";
import { Counter } from "../counter/component";
import { Link } from "react-router-dom";
import { withAuthorizationCheck } from "../../hocs/with-authorization-check";
import { memo } from "react";
const initialValue = 0;

export const DishCounter = ({ price }) => {
  const [count, setCount] = useState(initialValue);
  return (
    <>
      <Counter value={count} onChange={setCount} />
      {count * price}
    </>
  );
};

const DishCounterWithAuthorizationCheck = withAuthorizationCheck(DishCounter);
const DishCounterWithMemo = memo(DishCounter);

export const Dish = ({ dish, className }) => {
  return (
    <div className={className}>
      <Link to={`/dish/${dish.id}`}>{dish.name}</Link>
      <DishCounterWithAuthorizationCheck price={dish.price} />
    </div>
  );
};
