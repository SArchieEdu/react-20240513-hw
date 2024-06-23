/* eslint-disable react/jsx-key */

import { RestaurantTabs } from "./component";
import { useGetRestaurantsQuery } from "../../redux/service/api";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabsContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: rawRestaurants, isLoading } = useGetRestaurantsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!rawRestaurants?.length) {
    return <div>No restaurants</div>;
  }

  const searchValue = searchParams.get("search") || "";
  const restaurants = rawRestaurants.filter(
    ({ name }) => name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );

  return (
    <RestaurantTabs
      restaurants={restaurants}
      searchValue={searchValue}
      onSearchValueChange={(searchValue) =>
        setSearchParams({ search: searchValue })
      }
    />
  );
};
