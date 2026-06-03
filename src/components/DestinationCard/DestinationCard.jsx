import React from "react";
import styles from "./DestinationCard.module.css";

export function DestinationCard({ item }) {
  return (
    <article className={styles.destinationCard}>
      <img src={item.image} alt={item.city} />
      <div>
        <strong>{item.city}</strong>
        <p>{item.tag}</p>
        <span>{item.members} 人关注 · {item.temp}</span>
      </div>
    </article>
  );
}
