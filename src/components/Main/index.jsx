import styles from "./styles.module.css";
import AboutMeSection from "../Sections/AboutMe";
import TechsSection from "../Sections/Techs";

function Main() {
  return (
    <main className={styles.main}>
      <AboutMeSection />
      <TechsSection />
    </main>
  );
}

export default Main;
