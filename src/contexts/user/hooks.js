import { useContext } from "react";
import { UserContext, UserSetterContext } from "./context";

export const useUser = () => {
  return useContext(UserContext);
};

export const useUserSetters = () => {
  return useContext(UserSetterContext);
};
