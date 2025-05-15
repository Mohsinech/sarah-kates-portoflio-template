"use client";

import Art from "@/components/Art/Art";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { ProjectData } from "@constants/data";
import Link from "next/link";

const DURATION = 1;
const STAGGER = 0.2;

export default function Home() {
  // Split type lines > Her
  const lines = ["sarah", "Kates", "Visual ", "Artist"];

  // Split type sentences > About
  const sentences = [
    "Sarah, Craft digital experiences that blend creativity,",
    "with precision, transforming ideas into captivating",
    "visuals that resonate seamlessly with the audience.",
  ];

  // Split type lines > Reach out
  const reachLines = ["Email", "Behance", "sk.ma"];

  // Variants for text line overflow animation
  const variants = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    visible: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    },
  };

  // Skew animation for text
  const skew = {
    hidden: {
      skewY: 2,
      y: 20,
      opacity: 0,
    },
    visible: {
      skewY: 0,
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className={styles.home}>
        <div className={styles.hero_content}>
          {lines.map((line, i) => (
            <div className={styles.line} key={i}>
              <h1>
                {line}
                <motion.div
                  key={i}
                  className={styles.overflow}
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: DURATION,
                    delay: i * STAGGER,
                    ease: [0.87, 0.3, 0, 1],
                  }}
                  viewport={{ once: false }}
                ></motion.div>
              </h1>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.left_head}>
          <motion.h4
            variants={skew}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: DURATION,
              delay: 0.1,
              ease: [0.87, 0.3, 0, 1],
            }}
            viewport={{ once: false }}
          >
            [ About ]
          </motion.h4>
        </div>
        <div className={styles.about_content}>
          {sentences.map((s, i) => (
            <motion.p
              key={i}
              variants={skew}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              transition={{
                duration: DURATION,
                delay: i * 0.05,
                ease: [0.87, 0.3, 0, 1],
              }}
              viewport={{ once: false }}
            >
              {s}
            </motion.p>
          ))}
        </div>

        {/* Show on mobile version */}
        <motion.div
          className={styles.about_content_mobile}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: DURATION, ease: [0.87, 0.13, 0, 1] }}
        >
          <p>
            Sarah Craft digital experiences that blend creativity with precision
            transforming ideas into captivating visuals.
          </p>
        </motion.div>
      </section>

      {/* Work Section */}
      <section className={styles.work_section}>
        <motion.div
          className={styles.grid_projects}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: [0.87, 0.13, 0, 1] }}
          viewport={{ once: false }}
        >
          {ProjectData.map((project, id) => (
            <Art {...project} key={id} />
          ))}
        </motion.div>
      </section>

      {/* Reach out */}
      <motion.section
        className={styles.reach_section}
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className={styles.left_head}>
          <motion.h4
            variants={skew}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: DURATION,
              delay: 0.1,
              ease: [0.87, 0.3, 0, 1],
            }}
            viewport={{ once: false }}
          >
            [ Reach out ]
          </motion.h4>
        </div>

        <div className={styles.reach_content}>
          {reachLines.map((line, i) => (
            <div className={styles.line} key={i}>
              <Link href="#">
                <h1>
                  {line}
                  <motion.div
                    key={i}
                    className={styles.overflow}
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                      duration: DURATION,
                      delay: i * STAGGER,
                      ease: [0.87, 0.3, 0, 1],
                    }}
                    viewport={{ once: false }}
                  ></motion.div>
                </h1>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
