import styles from "./styles.module.css";
import Button from "../../Button";

function AboutMeSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.about}>
        <div className={styles.container_left}>
          <h2>Sobre Mim</h2>

          <Button backgroundColor="white">
            <a
              href="https://drive.google.com/file/d/1x47p9It8t_6AglOZy94LoyazUlV1zXEc/view"
              target="_blank"
            >
              Saiba Mais
            </a>
          </Button>
        </div>

        <div className={styles.container_right}>
          <p>
            Sou estudante de programação e formado em Desenvolvimento Web Full
            Stack pela Kenzie Academy Brasil, participei de diversos projetos
            resolvendo problemas de alto nível e adquiri habilidades técnicas e
            comportamentais.
          </p>

          <p>
            Tenho um perfil caracterizado por uma abordagem equilibrada e
            consistente no ambiente de trabalho, comprometido em buscar soluções
            que contribuam positivamente para com pessoas e empresas. Possuo uma
            forte capacidade de análise e valorizo precisão e qualidade em tudo
            que me proponho a fazer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
