import { useRouter } from "next/router";
import Head from "next/head";
import matter from "gray-matter";

import { SiReact, SiExpress, SiNodedotjs, SiMysql, SiNextdotjs, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import ProjectCard from "../components/projectCard";
import Tech from "../components/tech";
import lang from "../lang/home.json";
import BlackBar from "../components/blackBar";

let techIconSize = 128;
const tech = [
  {
    title: "React",
    icon: <SiReact size={techIconSize} />,
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs size={techIconSize} />,
  },
  { title: "JavaScript", icon: <SiJavascript size={techIconSize} /> },
  { title: "HTML", icon: <SiHtml5 size={techIconSize} /> },
  { title: "CSS", icon: <SiCss3 size={techIconSize} /> },
  {
    title: "NodeJS",
    icon: <SiNodedotjs size={techIconSize} />,
  },
  {
    title: "Express.js",
    icon: <SiExpress size={techIconSize} />,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={techIconSize} />,
  },
];

export default function Home() {
  const { locale } = useRouter();
  const content = { ...lang[locale] };
  return (
    <>
      <BlackBar options />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <div className={utilStyles.headingMd} dangerouslySetInnerHTML={{ __html: content.intro }} />
        </section>
        <h2 className={utilStyles.headingXl}>{content.subtitles.myWork}</h2>
        <section>
          <ProjectCard
            title={content.myWork.visorClima.title}
            image="/images/weather-visor.png"
            href="https://weather-visor.vercel.app"
            description={content.myWork.visorClima.description}
            techs={["React", "Bootstrap", "Axios", "API"]}
          />
          <ProjectCard
            title={content.myWork.anymo.title}
            image="/images/anymo-momentos.png"
            href="https://github.com/Facuiguacel/anymo"
            description={content.myWork.anymo.description}
            techs={["React", "Express", "Axios", "MySQL", "Bootstrap"]}
            favicon={"/images/anymo.ico"}
          />
          <ProjectCard
            title={content.myWork.capsto.title}
            image="/images/capitan-sarmiento.png"
            href="https://capitansarmiento.gob.ar"
            description={content.myWork.capsto.description}
            techs={["HTML", "CSS", "WordPress", "MySQL"]}
          />
        </section>

        <h2 className={utilStyles.headingXl}>
          {content.subtitles.techs} <i className={styles.mobileVisible}>({content.subtitles.techsTip})</i>
        </h2>
        <section className={styles.grid}>
          {tech.map(({ icon, title }, index) => (
            <Tech key={index} title={title} description={content.techDescription[title]} techIcon={icon} />
          ))}
        </section>

        <h2 className={utilStyles.headingXl}>{content.subtitles.aboutMe}</h2>
        <section>
          <div className={styles.aboutMeText} dangerouslySetInnerHTML={{ __html: content.aboutMe }} />
        </section>
      </Layout>
      <BlackBar text={content.lastUpdated} />
    </>
  );
}
