import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.basicInfo}>
          <div className={styles.typeAndNameContainer}>
            <div className={styles.name}>{pokemon.name}</div>
            <div className={styles.typeContainer}>
              {pokemon.types.map((types) => (
                <span className={styles.type}>{types.type.name}</span>
              ))}
            </div>
          </div>
          <div className={styles.idContainer}>id</div>
        </div>
        <img src={pokemon.image} className={styles.image} />
      </div>
      <div className={styles.table}></div>
    </div>
  );
}
