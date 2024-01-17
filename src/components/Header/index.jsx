import styles from "./styles.module.css";
import profile from "../../assets/imgs/profile.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img src={profile} alt="Foto de Perfil" />
        <span>Ronaldo França</span>
      </div>

      <div className={styles.navigation}>
        <a href="#aboutMeSection">Sobre Mim</a>
        <a href="#techsSection">Tecnologias</a>
        <a href="#projectsSection">Meus Projetos</a>
      </div>

      <button className={styles.contact}>
        <a href="#footer">Contatos</a>
      </button>
    </header>
  );
}

export default Header;
