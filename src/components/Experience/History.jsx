import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utlis";
const History = ({ history, id }) => {
  return (
    <li key={id} className={styles.historyItem}>
      <img
        src={getImageUrl(history.imageSrc)}
        alt={`${history.organisation} Logo`}
      />
      <div className={styles.historyItemDetails}>
        <h3>{`${history.role}, ${history.organisation}`}</h3>
        <p>{`${history.startDate} - ${history.endDate}`}</p>
        <ul style={{ listStylePosition: "inside" }}>
          {history.experiences.map((exp, id) => (
            <li key={id} style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}>
              {exp}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default History;
