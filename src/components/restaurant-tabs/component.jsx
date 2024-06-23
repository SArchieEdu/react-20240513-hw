/* eslint-disable react/jsx-key */

import { Tab } from "../tab/component";

export const RestaurantTabs = ({
  restaurants,
  searchValue,
  onSearchValueChange,
}) => {
  return (
    <div>
      <input
        value={searchValue}
        onChange={(event) => onSearchValueChange(event.target.value)}
      />
      <div>
        {restaurants.map(({ id, name }) => (
          <Tab title={name} to={id} />
        ))}
      </div>
    </div>
  );
};
