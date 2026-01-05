import React from "react";
import { getImageUrl } from "../../utlis";
import styles from "./Hero.module.css";
import resume from "../../../assets/hero/shubham_resume3.pdf";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Shubham</h1>
        <p className={styles.description}>
          I’m a quality-driven Full Stack Software Engineer and cloud-computing
          enthusiast, experienced in building scalable, high-performance
          solutions across enterprise platforms and real-time systems.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>C#/.NET</span>
          <span className={styles.badge}>TypeScript</span>
          <span className={styles.badge}>React / Next.js</span>
          <span className={styles.badge}>Angular</span>
          <span className={styles.badge}>AWS & Azure</span>
          <span className={styles.badge}>Docker & Kubernetes</span>
          <span className={styles.badge}>CI / CD</span>
          <span className={styles.badge}>Node.js</span>
        </div>
        {/* <div className={styles.buttons}>
          <a
            href="mailto:lakhotia.sh@northeastern.edu"
            className={styles.contactMe}
          >
            {" "}
            Contact Me
          </a>
          <a href={resume} download="Resume" className={styles.contactMe}>
            {" "}
            Resume
          </a>
        </div> */}
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
