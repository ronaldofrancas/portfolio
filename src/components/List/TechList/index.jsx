import styles from "./styles.module.css";
import TechCard from "../../Cards/TechCard";

function TechList() {
  return (
    <ul className={styles.list}>
      <TechCard />
      <TechCard />
      <TechCard />
      <TechCard />
    </ul>
  );
}

export default TechList;
