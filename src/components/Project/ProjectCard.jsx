import React from "react";
import { getImageUrl } from "../../utlis";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({ project, id }) => {
  return (
    <div className={styles.container} key={id}>
      <img
        src={getImageUrl(project.imageSrc)}
        alt={`Image of ${project.title}`}
        className={styles.image}
      ></img>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      {/* <div className={styles.links}>
        <a href={project.source} className={styles.link}>
          Source
        </a>
      </div> */}
    </div>
  );
};

export default ProjectCard;
