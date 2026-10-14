import { useAppContext } from '../../../../context/AppContext';
import styles from './TransactionList.module.css';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'credit' | 'debit';
}

const mockTransactions: Transaction[] = [
  { id: 'tx-001', description: 'Stipendio Dicembre', amount: 2400.00, date: '2024-12-01', type: 'credit' },
  { id: 'tx-002', description: 'Affitto mensile', amount: 850.00, date: '2024-12-02', type: 'debit' },
  { id: 'tx-003', description: 'Supermercato Conad', amount: 67.40, date: '2024-12-03', type: 'debit' },
  { id: 'tx-004', description: 'Rimborso spese aziendali', amount: 320.00, date: '2024-12-05', type: 'credit' },
  { id: 'tx-005', description: 'Bolletta Enel', amount: 112.80, date: '2024-12-07', type: 'debit' },
  { id: 'tx-006', description: 'Dividendi azioni', amount: 540.00, date: '2024-12-10', type: 'credit' },
  { id: 'tx-007', description: 'Abbonamento palestra', amount: 45.00, date: '2024-12-12', type: 'debit' },
];

const TransactionList = () => {
  const { user } = useAppContext();

  console.log('TransactionList rendered');

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(amount);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Movimenti recenti</h3>
        <span className={styles.userId}>Account: {user.id}</span>
      </div>
      <ul className={styles.list}>
        {mockTransactions.map((tx) => (
          <li key={tx.id} className={styles.item}>
            <div className={styles.left}>
              <span className={`${styles.badge} ${styles[tx.type]}`}>
                {tx.type === 'credit' ? 'Accredito' : 'Addebito'}
              </span>
              <span className={styles.description}>{tx.description}</span>
            </div>
            <div className={styles.right}>
              <span className={`${styles.amount} ${tx.type === 'credit' ? styles.amountCredit : styles.amountDebit}`}>
                {tx.type === 'credit' ? '+' : '−'} {formatCurrency(tx.amount)}
              </span>
              <span className={styles.date}>{formatDate(tx.date)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
