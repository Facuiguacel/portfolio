import Head from "next/head";

import { SiReact, SiExpress, SiNodedotjs, SiMysql, SiNextdotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import ProjectCard from "../components/projectCard";
import Tech from "../components/tech";

const BlackBar = ({ text, textColor = "white" }) => (
  <div style={{ backgroundColor: "black", color: textColor, textAlign: "center", height: "1.5rem" }}>{text}</div>
);

let techIconSize = 128;
const tech = [
  {
    description: "+1 año de experiencia.\n+5 proyectos individuales y en equipo.",
    title: "React",
    icon: <SiReact size={techIconSize} />,
  },
  {
    description: "Aprendido para crear este sitio web.",
    title: "Next.js",
    icon: <SiNextdotjs size={techIconSize} />,
  },
  { description: "+1 año exp.\n- ES6", title: "Javascript", icon: <SiJavascript size={techIconSize} /> },
  { description: "+1 año exp.", title: "HTML", icon: <SiHtml5 size={techIconSize} /> },
  { description: "+1 año exp.\n- Bootstrap", title: "CSS", icon: <SiCss3 size={techIconSize} /> },
  {
    description: "Utilizado para crear el back-end de 2 proyectos de la universidad.",
    title: "NodeJS",
    icon: <SiNodedotjs size={techIconSize} />,
  },
  {
    description: "Utilizado en los 2 proyectos de NodeJS.",
    title: "Express.js",
    icon: <SiExpress size={techIconSize} />,
  },
  {
    description: "Utilizado en mi actual puesto y en multiples proyectos personales y de la universidad.",
    title: "MySQL",
    icon: <SiMysql size={techIconSize} />,
  },
];

export default function Home() {
  return (
    <>
      <BlackBar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <div className={utilStyles.headingMd}>
            Hola! Soy <strong>Facu</strong>, un apasionado por el desarrollo de software, en especial el front-end y la
            creación de UIs bonitas, simples e intuitivas.
          </div>
        </section>
        <h2 className={utilStyles.headingXl}>Trabajos</h2>
        <section>
          <ProjectCard
            title="Visor del clima"
            image="/images/weather-visor.png"
            href="https://weather-visor.vercel.app"
            description="Consultá el clima de una ciudad especifica. (100% por mí)"
            techs={["React", "Bootstrap", "Axios", "API"]}
          />
          <ProjectCard
            title="ANYMO"
            image="/images/anymo-momentos.png"
            href="https://github.com/TobiasVodo/Proyecto-Sobrestock"
            description="MVP del trabajo final de la universidad. 'E-Commerce' de cajas temáticas que aprovechan productos de sobre-stock. (En equipo)"
            techs={["React", "Express", "Axios", "MySQL", "Bootstrap"]}
            favicon={"/images/anymo.ico"}
          />
          <ProjectCard
            title="Capitán Sarmiento"
            image="/images/capitan-sarmiento.png"
            href="https://capitansarmiento.gob.ar"
            description="Sitio web de la Municipalidad de Capitán Sarmiento. (Mantenimiento y nuevas funcionalidades)"
            techs={["HTML", "CSS", "WordPress", "MySQL"]}
          />
        </section>

        <h2 className={utilStyles.headingXl}>
          Herramientas <i className={styles.mobileVisible}>(tocá los iconos para más info)</i>
        </h2>
        <section className={styles.grid}>
          {tech.map(({ icon, title, description }, index) => (
            <Tech key={index} title={title} description={description} techIcon={icon} />
          ))}
        </section>

        <h2 className={utilStyles.headingXl}>Un poco sobre mí</h2>
        <section>
          <div className={styles.aboutMeText}>
            Pronto a recibirme de la <strong>Tecnicatura en Desarrollo de Software</strong> en la UADE. Actualmente
            trabajando part-time en la Municipalidad de Capitán Sarmiento desde hace más de 1 año.
            <br />
            <br />
            En cuanto a mis cualidades, me considero bastante <strong>atento al detalle</strong>, soy gran partidario
            del uso de <strong>buenas practicas</strong> y de la <strong> buena organización</strong> en los proyectos.
            <br />A pesar de que me formé en una universidad, la mayoría de tecnologías que utilizo hoy en día las
            aprendí por mi cuenta, por lo que soy principalmente <strong>autodidacta</strong>.
            <br />
            Siempre buscando nuevos desafíos y con ganas de aprender más.
            <br />
            <br />
            Mí otra pasión es la <strong>aviación</strong> y mi sueño es algún día poder combinarla con el desarrollo de
            software.
          </div>
        </section>
      </Layout>
      <BlackBar />
    </>
  );
}
