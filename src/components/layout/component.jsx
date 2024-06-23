import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { MainMenu } from "../main-menu/component";
import { Tabs } from "../tabs/component";
import { Tab } from "../tab/component";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <div id="modal" style={{ zIndex: 2, position: "relative" }} />
      <div style={{ zIndex: 1 }}>
        <Header />
        <MainMenu>
          <MainMenu.Group name="Films">
            <MainMenu.Item title="top250" />
            <MainMenu.Item title="top100" />
            <MainMenu.Item title="top50" />
          </MainMenu.Group>
          <MainMenu.Group name="Series">
            <MainMenu.Item title="top250" />
            <MainMenu.Item title="top100" />
            <MainMenu.Item title="top50" />
          </MainMenu.Group>
          <MainMenu.Group name="Settings">
            <MainMenu.Item title="1" />
            <MainMenu.Item title="2" />
            <MainMenu.Item title="3" />
          </MainMenu.Group>
        </MainMenu>
        <Tabs renderTab={(tab, index) => <Tab />} />
        <Tabs renderTab={(tab, index) => <Link />} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
