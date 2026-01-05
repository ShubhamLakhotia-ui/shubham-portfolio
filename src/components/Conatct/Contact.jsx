import { getImageUrl } from "../../utlis";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.title}>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
          ></img>
          <a href="mailto:lakhotia.sh@northeastern.edu">
            lakhotia.sh@northeastern.edu
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Email Icon"
          ></img>
          <a
            href="https://www.linkedin.com/in/shubham-lakhotia-a54733184/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/githubIcon.png")}
            alt="Email Icon"
          ></img>
          <a href="https://github.com/ShubhamLakhotia-ui" target="_blank">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
