import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import Skill from "./Skill";
import History from "./History";
const Experience = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <Skill skill={skill} id={id} key={id} />
          ))}
        </div>
        {/* <ul className={styles.history}>
          {history.map((history, id) => (
            <History history={history} id={id} key={id} />
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default Experience;
