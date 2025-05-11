import styles from './container.module.css';

const Container = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Home Page</h1>
      <p className={styles.p}>This is the home page of our application.</p>
    </div>
  );
};

export default Container;