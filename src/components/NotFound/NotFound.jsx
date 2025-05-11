import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <Link to="/" className={styles.backButton}>Go back home</Link>
    </div>
  );
};

export default NotFound;