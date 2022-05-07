import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { SiGithub, SiLinkedin } from "react-icons/si";

const name = "Facundo";
export const siteTitle = "Facundo Iguacel";

export default function Layout({ children, home }) {
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
            {/* <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            /> */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>

            <h2 className={utilStyles.headingMd}>Desarrollador front-end</h2>

            <div className={styles.personalLinks}>
              <Link href="https://github.com/Facuiguacel">
                <a>
                  <SiGithub size={32} />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/facuiguacel">
                <a>
                  <SiLinkedin size={32} />
                </a>
              </Link>
              <Link href="https://drive.google.com/file/d/17YJKX67B0BFcgPnygnH92HrgLn8ll00T/view?usp=sharing">
                <a>
                  <text style={{ fontWeight: "bold" }}>CV</text>
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
            <a>← Volver al inicio</a>
          </Link>
        </div>
      )}
    </div>
  );
}
