import styles from "./styles.module.css";
import ProjectList from "../../List/ProjectList";

function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <div>
        <h2>PROJETOS</h2>
        <ProjectList />
      </div>
    </section>
  );
}

export default ProjectsSection;
