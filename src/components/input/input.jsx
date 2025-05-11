import styles from './input.module.css';

const Input = ({ value, onChange, onAdd }) => {
  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Task to be done..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

export default Input;