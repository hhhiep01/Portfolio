// src/components/TechnologyItem/TechnologyItem.tsx
import React from "react";
import styles from "./TechnologyItem.module.css";

interface TechnologyItemProps {
  src: string;
  alt: string;
  name: string;
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ src, alt, name }) => {
  return (
    <div className={styles.item}>
      <img className={styles.aboutContentRightImg} src={src} alt={alt} />
      <div>{name}</div>
    </div>
  );
};

export default TechnologyItem;
