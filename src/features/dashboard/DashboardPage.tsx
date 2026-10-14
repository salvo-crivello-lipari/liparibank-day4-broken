import { useAppContext } from '../../context/AppContext';
import TransactionList from './components/TransactionList/TransactionList';
import styles from './DashboardPage.module.css';

const DashboardPage = () => {
  const { user } = useAppContext();

  return (
    <div className={styles.page}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>Benvenuto, {user.name}</h1>
        <p className={styles.subtitle}>Questo è il tuo riepilogo finanziario aggiornato.</p>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Saldo corrente</span>
          <span className={styles.statValue}>€ 4.250,00</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Entrate mese</span>
          <span className={`${styles.statValue} ${styles.positive}`}>+ € 3.260,00</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Uscite mese</span>
          <span className={`${styles.statValue} ${styles.negative}`}>− € 1.075,20</span>
        </div>
      </div>

      <TransactionList />
    </div>
  );
};

export default DashboardPage;
