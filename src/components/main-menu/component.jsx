import { useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Button } from "../button/component";

const MainMenuContext = createContext();

export const MainMenu = ({ children }) => {
  const [openedPart, setOpenedPart] = useState();
  const contextValue = useMemo(
    () => ({ openedPart, setOpenedPart }),
    [openedPart]
  );

  return (
    <MainMenuContext.Provider value={contextValue}>
      {children}
    </MainMenuContext.Provider>
  );
};

const Group = ({ name, children }) => {
  const { openedPart, setOpenedPart } = useContext(MainMenuContext);
  const isOpened = openedPart === name;
  return (
    <div>
      <Button onClick={() => setOpenedPart(isOpened ? null : name)}>
        {name}
      </Button>
      {openedPart === name && <div>{children}</div>}
    </div>
  );
};

const Item = ({ title }) => {
  return <div>{title}</div>;
};

MainMenu.Group = Group;
MainMenu.Item = Item;
