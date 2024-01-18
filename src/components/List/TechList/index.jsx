import styles from "./styles.module.css";
import html from "../../../assets/imgs/html.png";
import css from "../../../assets/imgs/css.png";
import tailwind from "../../../assets/imgs/tailwind.png";
import js from "../../../assets/imgs/js.png";
import ts from "../../../assets/imgs/ts.png";
import node from "../../../assets/imgs/node.png";
import express from "../../../assets/imgs/express.png";
import react from "../../../assets/imgs/react.png";
import vite from "../../../assets/imgs/vite.png";
import next from "../../../assets/imgs/next.png";
import nest from "../../../assets/imgs/nest.png";
import python from "../../../assets/imgs/python.png";
import django from "../../../assets/imgs/django.png";
import sqlite from "../../../assets/imgs/sqlite.png";
import postgresql from "../../../assets/imgs/postgresql.png";
import dbeaver from "../../../assets/imgs/dbeaver.png";
import insomnia from "../../../assets/imgs/insomnia.png";
import figma from "../../../assets/imgs/figma.png";

import { Techs } from "../../../data/techs";
import { TechCard } from "../../Cards/TechCard";

function TechList() {
  const techCards = Techs.map((tech) => (
    <TechCard img={
      tech.alt === "HTML5" ? html :
      tech.alt === "CSS3" ? css :
      tech.alt === "Tailwind CSS" ? tailwind :
      tech.alt === "Javascript" ? js :
      tech.alt === "Typescript" ? ts :
      tech.alt === "Node" ? node :
      tech.alt === "Express" ? express :
      tech.alt === "React" ? react :
      tech.alt === "Vite" ? vite :
      tech.alt === "Next" ? next :
      tech.alt === "Nest" ? nest :
      tech.alt === "Python" ? python :
      tech.alt === "Django" ? django :
      tech.alt === "SQLite" ? sqlite :
      tech.alt === "PostgreSQL" ? postgresql :
      tech.alt === "DBeaver" ? dbeaver :
      tech.alt === "Insomnia" ? insomnia :
      tech.alt === "Figma" ? figma :
      null
    } alt={tech.alt} />
  ));

  return <ul className={styles.list}>{techCards}</ul>;
}

export default TechList;
