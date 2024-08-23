import { background } from "../../../../utils/BackgroundsByType";

import styles from "./styles.module.scss";

export const PokeTypes = ({ pokemon }) => {
  return (
    <div className={styles.types}>
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
};