import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";

const SectionList = [
  {
    title: "Inicio",
    link: "/docs/category/inicio",
    icon: "mdi:home-outline",
    description:
      "Conoce la base del proyecto, objetivos y lineamientos generales.",
  },
  {
    title: "Recursos",
    link: "/docs/category/recursos",
    icon: "mdi:toolbox-outline",
    description:
      "Herramientas y recursos para el desarrollo de nuestros proyectos.",
  },
  {
    title: "Procesos",
    link: "/docs/category/procesos",
    icon: "mdi:chart-timeline-variant",
    description: "Flujos de trabajo y metodologías que seguimos en Code&Co.",
  },
  {
    title: "Guías",
    link: "/docs/category/guias",
    icon: "mdi:map-marker-path",
    description:
      "Accede a instrucciones paso a paso para utilizar la plataforma.",
  },
  {
    title: "Políticas",
    link: "/docs/category/politicas",
    icon: "mdi:scale-balance",
    description: "Normativas y regulaciones internas del equipo.",
  },
  {
    title: "Estándares",
    link: "/docs/category/estandares",
    icon: "mdi:clipboard-check-outline",
    description: "Buenas prácticas y estándares técnicos de desarrollo.",
  },
  {
    title: "Proyectos",
    link: "/docs/category/proyectos",
    icon: "mdi:folder-outline",
    description: "Documentación técnica para colaboradores y desarrolladores.",
  },
  {
    title: "Plantillas",
    link: "/docs/category/plantillas",
    icon: "mdi:file-document-outline",
    description: "Documentos base para estandarizar la comunicación.",
  },
];

const SectionCard = ({ title, link, description, icon }) => {
  return (
    <div className={clsx("col col--3", styles.sectionCard)}>
      <Link to={link} className={styles.cardLink}>
        <div className={styles.card}>
          <div className={styles.cardIconContainer}>
            <Icon icon={icon} className={styles.cardIcon} />
          </div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardDescriptionWrapper}>
              <p className={styles.cardDescription}>{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default function HomepageSections() {
  return (
    <section className={styles.sectionsContainer}>
      <div className="container">
        <div className="row">
          {SectionList.map((props, idx) => (
            <SectionCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
