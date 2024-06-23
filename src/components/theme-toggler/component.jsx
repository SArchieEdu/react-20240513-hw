import { useTheme } from "../../contexts/theme/hooks";
import { Button } from "../button/component";

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>SwitchTheme</Button>;
};
