import classNames from "classnames";
import { useTheme } from "../../contexts/theme/hooks";

import styles from "./styles.module.scss";

export const Button = ({ children, onClick, disabled, type = "primary" }) => {
  const { theme } = useTheme();
  return (
    <button
      className={classNames(styles.root, styles[theme], styles[type], {
        [styles.disabled]: disabled,
        // [styles.default]: theme === THEMES.default,
        // [styles.alternative]: theme === THEMES.alternative,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
