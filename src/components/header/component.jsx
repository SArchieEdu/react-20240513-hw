import { Link } from "react-router-dom";
import { AuthorizationButton } from "../authorization-button/component";
import { ThemeToggler } from "../theme-toggler/component";

import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      Header
      <Link to="/">Home</Link>
      <Link to="/restaurants">Restaurants</Link>
      <ThemeToggler />
      <AuthorizationButton />
    </header>
  );
};
