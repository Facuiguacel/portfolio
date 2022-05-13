import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/card.module.css";
import utilStyles from "../styles/utils.module.css";
import TechTag from "./techTag";

function ProjectCard({ title, description, image, href = "/", techs = [], favicon }) {
  return (
    <>
      <Link href={href} passHref>
        <a>
          <div className={styles.card}>
            <div className={styles.leftSection}>
              <div className={styles.title}>
                <Image
                  src={favicon ? favicon : `https://icons.duckduckgo.com/ip3/${href.replace(/^https?:\/\//, "")}.ico`}
                  alt="ico"
                  height={26}
                  width={26}
                  objectFit="contain"
                />
                <h2 className={utilStyles.headingMd}>{title}</h2>
              </div>
              <div className={styles.description}>{description}</div>
              <div className={styles.tagsContainer}>
                {techs.map((name) => (
                  <TechTag key={name} title={name} />
                ))}
              </div>
            </div>
            <div className={styles.screenshot}>
              <Image src={image} alt="screenshot" height={180} width={300} objectFit="contain" />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default ProjectCard;
