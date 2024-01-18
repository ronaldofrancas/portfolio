import styles from "./styles.module.css";

export const TechCard = ({ img, alt }) => {
  return (
    <li className={styles.card}>
      <img src={img} alt={alt} />
    </li>
  );
}
