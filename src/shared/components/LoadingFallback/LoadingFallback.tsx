import styles from './LoadingFallback.module.css';

const LoadingFallback = () => (
  <div className={styles.container}>
    <div className={styles.spinner} aria-label="Caricamento in corso" />
    <p className={styles.text}>Caricamento...</p>
  </div>
);

export default LoadingFallback;
