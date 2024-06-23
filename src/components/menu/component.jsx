/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component";

import styles from "./styles.module.scss";

export const Menu = ({ dishes }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <div>
        {dishes.map((dish) => (
          <Dish dish={dish} className={styles.dish} />
        ))}
      </div>
    </div>
  );
};
