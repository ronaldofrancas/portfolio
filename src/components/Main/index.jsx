import styles from "./styles.module.css";

import AboutMeSection from "../Sections/AboutMeSection";
import TechsSection from "../Sections/TechsSection";
import ProjectsSection from "../Sections/ProjectsSection";

function Main() {
  return (
    <main className={styles.main}>
      <AboutMeSection />
      <TechsSection />
      <ProjectsSection />
    </main>
  );
}

export default Main;
