import styles from "./Experience.module.css";
import { getImageUrl } from "../../utlis";
const Skill = ({ skill, id }) => {
  return (
    <div key={id} className={styles.skill}>
      <div className={styles.skillImageContainer}>
        <img src={getImageUrl(skill.imageSrc)} alt="Skill Image" />
      </div>
      <p>{skill.title}</p>
    </div>
  );
};
export default Skill;
