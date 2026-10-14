import { useAppContext } from '../../context/AppContext';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const { user } = useAppContext();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Profilo</h1>
      <div className={styles.card}>
        <div className={styles.avatar}>{user.name.charAt(0).toUpperCase()}</div>
        <div className={styles.info}>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.role}>{user.role}</p>
          <p className={styles.id}>ID: {user.id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
