import { getImageUrl } from "../../utlis";
import styles from "./About.module.css";
import aboutBg from "../../../assets/about/background_portfolio.png";

const About = () => {
  return (
    <section
      className={styles.container}
      id="about"
      style={{
        backgroundImage: `
      linear-gradient(rgba(12, 12, 12, 0.35), rgba(12, 12, 12, 0.35)),
      url(${aboutBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/About1.png")}
          alt="About Image"
          className={styles.aboutImage}
          style={{ width: "200px", padding: "10px" }}
        ></img>

        <ul className={styles.aboutItems}>
          <h2 className={styles.aboutItem}>
            Hello, I’m Shubham—a Full Stack Software Engineer with experience
            building enterprise and real-time systems. I’ve worked at Jio
            Platforms (Reliance Industries) and Annaly Capital Management,
            delivering scalable, high-performance solutions across web, backend,
            and cloud platforms
          </h2>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Curson Icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimised sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/serverIcon.png")}
              alt="Curson Icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience in developing fast and optimised API's</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cloud Icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud & Platform Engineering</h3>
              <p>
                I build and deploy cloud-native applications using AWS and
                Azure, containerized with Docker and orchestrated with
                Kubernetes, focusing on scalability, reliability, and
                automation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
