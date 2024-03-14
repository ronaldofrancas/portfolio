import styles from "./styles.module.css";

import { Projects } from "../../../data/projects";
import { ProjectCard } from "../../Cards/ProjectCard";

function ProjectList() {
  const [project1, project2, project3, project4] = Projects;

  return (
    <ul className={styles.list}>
      <div className={styles.container}>
        <ProjectCard
          title={project1.title}
          repo={project1.repo}
          description={project1.description}
          deploy={project1.deploy}
        />

        <ProjectCard
          title={project2.title}
          repo={project2.repo}
          description={project2.description}
          deploy={project2.deploy}
        />

        <ProjectCard
          title={project3.title}
          repo={project3.repo}
          description={project3.description}
          deploy={project3.deploy}
        />

        <ProjectCard
          title={project4.title}
          repo={project4.repo}
          description={project4.description}
          deploy={project4.deploy}
        />
      </div>
    </ul>
  );
}

export default ProjectList;
