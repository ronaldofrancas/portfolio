import styles from "./styles.module.css";

function Button({ children, backgroundColor }) {
  const buttonStyle = {
    backgroundColor: backgroundColor || "var(--color-primary)",
  };

  return (
    <button style={buttonStyle} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
