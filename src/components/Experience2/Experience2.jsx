import React from "react";
import styles from "./Experience2.module.css";
import experience from "../../data/internship.json";
import { getImageUrl } from "../../utlis";

const Experience2 = () => {
  if (!experience || experience.length === 0) return null;

  return (
    <>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.list}>
          {experience.map((item, index) => (
            <div
              className={styles.card}
              key={`${item.organisation}-${item.role}-${index}`}
            >
              <div className={styles.header}>
                <div className={styles.logoWrap}>
                  <img
                    src={getImageUrl(item.logo)}
                    alt={`${item.organisation} logo`}
                    className={styles.logo}
                  />
                </div>

                <div className={styles.meta}>
                  <h3 className={styles.role}>{item.role}</h3>
                  <p className={styles.org}>
                    {item.organisation} • {item.location}
                  </p>
                  <p className={styles.dates}>
                    {item.startDate} – {item.endDate}
                  </p>
                </div>
              </div>

              <ul className={styles.highlights}>
                {item.highlights.map((point, idx) => (
                  <li key={idx} className={styles.highlight}>
                    {point}
                  </li>
                ))}
              </ul>

              <div className={styles.stack}>
                {item.stack.map((tech, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <br></br>
    </>
  );
};

export default Experience2;
