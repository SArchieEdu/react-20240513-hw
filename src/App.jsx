/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component";
import { Provider } from "react-redux";
import { store } from "./redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./contexts/user/provider";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { Home } from "./pages/home";
import { Restaurants } from "./pages/restaurants";
import { RestaurantContainer } from "./components/restaurant/container";
import { MenuContainer } from "./components/menu/container";
import { ReviewsContainer } from "./components/reviews/container";
import { Navigate } from "react-router-dom";
import { Dish } from "./pages/dish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/dish/:dishId", element: <Dish /> },
      {
        path: "/restaurants",
        element: <Restaurants />,
        children: [
          { index: true, element: <div>Select Restaurants</div> },
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              { index: true, element: <Navigate to="menu" replace /> },
              { path: "menu", element: <MenuContainer /> },
              { path: "reviews", element: <ReviewsContainer /> },
            ],
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router} />
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
