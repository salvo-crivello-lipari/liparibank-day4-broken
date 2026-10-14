import { useAppContext } from '../../../context/AppContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, setTheme } = useAppContext();

  const toggle = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      className={`${styles.toggle} ${theme === 'dark' ? styles.dark : ''}`}
      onClick={toggle}
      aria-label={`Attiva modalità ${theme === 'light' ? 'scura' : 'chiara'}`}
      title={`Tema attuale: ${theme}`}
    >
      <span className={styles.icon}>{theme === 'light' ? '🌙' : '☀️'}</span>
      <span className={styles.label}>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;
