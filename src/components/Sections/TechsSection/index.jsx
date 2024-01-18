import styles from "./styles.module.css";
import TechList from "../../List/TechList";

function TechsSection() {
  return (
    <section id="techs" className={styles.section}>
      <div>
        <h2>Tecnologias</h2>
        <TechList />
      </div>
    </section>
  );
}

export default TechsSection;
