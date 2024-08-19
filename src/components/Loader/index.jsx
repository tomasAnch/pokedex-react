import styles from './styles.module.scss';

export const Loader = ({ size, color }) => {
  return (
    <span 
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
      className={styles.loader}
    />
  );
};
