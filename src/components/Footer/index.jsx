import styles from "./styles.module.css";
import github from "../../assets/imgs/github.png";
import whatsapp from "../../assets/imgs/whatsapp.png";
import linkedin from "../../assets/imgs/linkedin.png";

import { user } from "../../data/user";

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div>
        <h2>CONTATOS</h2>

        <div className={styles.images}>
          <a href="https://github.com/ronaldofrancas" target="_blank">
            <img src={github} alt="Github" />
          </a>

          <a href="https://wa.me/557183883922" target="_blank">
            <img src={whatsapp} alt="Whatsapp" />
          </a>

          <a href="https://www.linkedin.com/in/ronaldofrancas" target="_blank">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>

      <p>Todos os direitos reservados - {user} </p>
    </footer>
  );
}

export default Footer;
