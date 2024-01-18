import styles from "./styles.module.css";
import github from "../../../assets/imgs/github.png";

export const ProjectCard = ({ title, repo, description, deploy }) => {
  return (
    <li className={styles.card}>
      <div>
        <h3>{title}</h3>
        <a href={repo} target="_blank">
          <img src={github} alt="Github" />
        </a>
      </div>

      <p>{description}</p>
      <a href={deploy} target="_blank">
        Aplicação
      </a>
    </li>
  );
};
