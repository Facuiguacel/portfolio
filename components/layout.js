import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { SiGithub, SiLinkedin } from "react-icons/si";
import LangSwitch from "./langSwitch";
import lang from "../lang/layout.json";

const name = "Facundo Iguacel";
export const siteTitle = "Facundo Iguacel";

export default function Layout({ children, home }) {
  const { locale } = useRouter();
  const content = { ...lang[locale] };
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio personal de Facundo Iguacel, creado con Next.js" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>

            <h2 className={utilStyles.headingMd}>{content.puesto}</h2>

            <div className={styles.personalLinks}>
              <Link href="https://github.com/Facuiguacel">
                <a rel="noopener noreferrer" target="_blank">
                  <SiGithub size={32} />
                </a>
              </Link>
              <Link href="./Iguacel_Facundo_CV.pdf">
                <a rel="noopener noreferrer" target="_blank">
                  <strong style={{ fontSize: "25px", lineHeight: 1.3 }}>CV</strong>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/facuiguacel">
                <a rel="noopener noreferrer" target="_blank">
                  <SiLinkedin size={32} />
                </a>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← {content.backToHome}</a>
          </Link>
        </div>
      )}
    </div>
  );
}
