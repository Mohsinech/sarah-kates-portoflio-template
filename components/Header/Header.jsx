import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.six_col}>
        <Link href="/">
          <h1>Sarah Kates</h1>
        </Link>
      </div>
      <div className={styles.four_col}>
        <div className={styles.reach_data}>
          <h4>Reach Out</h4>
          <Link href="mailto:#">
            <h4>sarah@kate.com</h4>
          </Link>
        </div>
        <div className={styles.address_data}>
          <h4>NYC</h4>
          <h4>[ 13:09 PM ]</h4>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
