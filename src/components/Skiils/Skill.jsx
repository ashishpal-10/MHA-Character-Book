import React from "react";
import styles from "./Skill.module.css";
import Image from "../../../public/mhalogo.png"

const CharacterCard = ({
  name = "DEKU",
  japaneseName = "緑谷出久",
  image,
  background = "#009b78",
}) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: background }}
    >
      {/* Background design */}
      <div className={styles.pattern}></div>

      {/* Character Name */}
      <h2 className={styles.name}>{name}</h2>

      {/* Character Image */}
      <div className={styles.characterWrapper}>
        <img
          src={image}
          alt={name}
          className={styles.character}
        />
      </div>

      {/* Japanese Name */}
      {/* <p className={styles.japaneseName}>
        {japaneseName}
      </p> */}

      {/* My Hero Academia Logo/Text */}
      <div className={styles.logo}>
        {/* <small>MY HERO ACADEMIA</small> */}
        <img src={Image} alt="error" />
        {/* <strong>僕のヒーローアカデミア</strong> */}
      </div>
    </div>
  );
};

export default CharacterCard;