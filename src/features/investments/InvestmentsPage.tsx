import styles from './InvestmentsPage.module.css';

const InvestmentsPage = () => {
  const portfolio = [
    { id: 'inv-001', name: 'Fondo Azionario Europa', value: 4200.00, change: +3.2 },
    { id: 'inv-002', name: 'ETF S&P 500', value: 8750.50, change: +1.8 },
    { id: 'inv-003', name: 'Obbligazioni BTP 2030', value: 5000.00, change: -0.4 },
    { id: 'inv-004', name: 'Fondo Liquidità', value: 2100.00, change: +0.1 },
  ];

  const totalValue = portfolio.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Investimenti</h1>
        <p className={styles.subtitle}>Portafoglio aggiornato al {new Date().toLocaleDateString('it-IT')}</p>
      </div>

      <div className={styles.totalCard}>
        <span className={styles.totalLabel}>Valore totale portafoglio</span>
        <span className={styles.totalValue}>
          {new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(totalValue)}
        </span>
      </div>

      <div className={styles.grid}>
        {portfolio.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3 className={styles.cardName}>{item.name}</h3>
            <span className={styles.cardValue}>
              {new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(item.value)}
            </span>
            <span className={`${styles.cardChange} ${item.change >= 0 ? styles.positive : styles.negative}`}>
              {item.change >= 0 ? '▲' : '▼'} {Math.abs(item.change).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
