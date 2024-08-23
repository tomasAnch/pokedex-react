import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "../../../../assets/arrows";
import { PokeballIconBig } from "../../../../assets/pokeball";

import styles from "./styles.module.scss";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};