import styles from "./styles.module.css";
import html from "../../../assets/icons/html.png"

function TechCard() {
  return (
    <li className={styles.card}>
      <img src={html} alt="HTML5" />
    </li>
  );
}

export default TechCard;
