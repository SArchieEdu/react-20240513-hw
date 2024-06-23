import { NavLink } from "react-router-dom";
import { Tab } from "../tab/component";

export const Tabs = ({ tabs, renderTab }) => {
  return <div>{tabs.map((tab, index) => renderTab(tab, index))}</div>;
};
