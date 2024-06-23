import { NavLink } from "react-router-dom";

export const Tab = ({ title, to }) => {
  return <NavLink to={to}>{title}</NavLink>;
};
