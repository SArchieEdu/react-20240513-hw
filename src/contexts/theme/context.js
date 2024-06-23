import { createContext } from "react";
import { THEMES } from "./constants";

export const ThemeContext = createContext(THEMES.default);
