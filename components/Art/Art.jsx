import React from "react";
import styles from "./art.module.css";
import { motion } from "framer-motion";

const Art = ({ name, project }) => {
  return (
    <div className={styles.art}>
      <div className={styles.image_reveal}>
        <img src={project} alt={name} className={styles.image} />
      </div>

      <div className={styles.title}>
        <h4>[{name}]</h4>
      </div>
    </div>
  );
};

export default Art;
