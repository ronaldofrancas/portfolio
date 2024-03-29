import styles from "./styles.module.css";
import Button from "../../Button";

function AboutMeSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.about_top}>
          <h2>SOBRE MIM</h2>

          <Button>
            <a
              href="https://drive.google.com/file/d/1x47p9It8t_6AglOZy94LoyazUlV1zXEc/view"
              target="_blank"
            >
              Saiba Mais
            </a>
          </Button>
        </div>

        <div className={styles.about_bottom}>
          <p>
            Desenvolvedor Web Full Stack formado pela Kenzie Academy Brasil,
            onde participei de diversos projetos resolvendo problemas de alto
            nível e adquiri habilidades técnicas e interpessoais. 
          </p>

          <p>
            Possuo um perfil caracterizado por uma abordagem equilibrada que
            valoriza qualidade e consistência em suas atividades e almeja
            contribuir no desenvolvimento de pessoas e empresas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
