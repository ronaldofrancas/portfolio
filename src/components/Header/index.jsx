import styles from "./styles.module.css";
import icon from "../../assets/icon/favicon.ico";

import Button from "../Button";

import { user } from "../../data/user";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img src={icon} alt="Foto de Perfil" />
        <span>{user}</span>
      </div>

      <div className={styles.navigation}>
        <a href="#about">Sobre Mim</a>
        <a href="#techs">Tecnologias</a>
        <a href="#projects">Projetos</a>
      </div>

      <Button>
        <a href="#footer">Contatos</a>
      </Button>
    </header>
  );
}

export default Header;
