import icon from "../../assets/icon/favicon.ico";
import styles from "./styles.module.css";
import Button from "../Button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <img src={icon} alt="Foto de Perfil" />
      </div>

      <div className={styles.navigation}>
        <a href="#about">SOBRE MIM</a>
        <a href="#techs">TECNOLOGIAS</a>
        <a href="#projects">PROJETOS</a>
      </div>

      <Button>
        <a href="#footer">Contatos</a>
      </Button>
    </header>
  );
}

export default Header;
