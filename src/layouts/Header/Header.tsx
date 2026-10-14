import { useAppContext } from '../../context/AppContext';
import { useAuth } from '../../core/auth/authContext';
import ThemeToggle from '../../shared/components/ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const Header = () => {
  const { user, notifications } = useAppContext();
  const { logout } = useAuth();

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>🏦</span>
        <span className={styles.logoText}>LipariBank</span>
      </div>

      <div className={styles.actions}>
        <ThemeToggle />

        <div className={styles.notifWrapper}>
          <span className={styles.notifIcon}>🔔</span>
          {unreadCount > 0 && (
            <span className={styles.badge}>{unreadCount}</span>
          )}
        </div>

        <div className={styles.userChip}>
          <div className={styles.avatar}>
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userRole}>{user.role}</span>
          </div>
        </div>

        <button className={styles.logoutBtn} onClick={logout}>
          Esci
        </button>
      </div>
    </header>
  );
};

export default Header;
