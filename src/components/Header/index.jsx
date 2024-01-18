import styles from "./styles.module.css";
import profile from "../../assets/imgs/profile.png";
import Button from "../Button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img src={profile} alt="Foto de Perfil" />
        <span>Ronaldo França</span>
      </div>

      <div className={styles.navigation}>
        <a href="#about">Sobre Mim</a>
        <a href="#techs">Tecnologias</a>
        <a href="#projects">Meus Projetos</a>
      </div>

      <Button>
        <a href="#footer">Contatos</a>
      </Button>
    </header>
  );
}

export default Header;
