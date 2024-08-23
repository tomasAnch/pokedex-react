import { HeightIcon, WeightIcon } from "../../../../assets/stats";

import styles from "./styles.module.scss";

export const Stats = ({ pokemon }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <WeightIcon />
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <HeightIcon />
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};