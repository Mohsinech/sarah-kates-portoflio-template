import React from "react";
import styles from "./art.module.css";
import Link from "next/link";

const Art = ({ name, project, href }) => {
  return (
    <Link href={href} className={styles.art}>
      <div className={styles.image_reveal}>
        <img src={project} alt={name} className={styles.image} />
      </div>

      <div className={styles.title}>
        <h4>[{name}]</h4>
      </div>
    </Link>
  );
};

export default Art;
