import Head from "next/head";
import Link from "next/link";

import {
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiMysql,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";

import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>SITIO AÚN EN CONSTRUCCIÓN</div>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hola! Soy Facu, desarrolador front-end con conocimientos de back-end.</p>
        </section>
        <h2 className={utilStyles.headingXl}>Trabajos</h2>
        <section>
          <ProjectCard
            title="Visor del clima"
            image="/images/weather-visor.png"
            href="https://weather-visor.vercel.app"
            description="Consulta el clima de una ciudad especifica."
            techs={["React", "Bootstrap", "Axios"]}
          />
          <ProjectCard
            title="Capitán Sarmiento"
            image="/images/capitan-sarmiento.png"
            href="https://capitansarmiento.gob.ar"
            description="Sitio web de la Municipalidad de Capitán Sarmiento."
            techs={["HTML", "CSS", "MySQL"]}
          />
        </section>
        <h2 className={utilStyles.headingXl}>Herramientas</h2>
        <section className={styles.grid}>
          <SiReact size={100} />
          <SiNextdotjs size={100} />
          <SiJavascript size={100} />
          <SiHtml5 size={100} />
          <SiCss3 size={100} />
          <SiExpress size={100} />
          <SiNodedotjs size={100} />
          <SiMysql size={100} />
        </section>
      </Layout>
      <div style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>SITIO AÚN EN CONSTRUCCIÓN</div>
    </>
  );
}
