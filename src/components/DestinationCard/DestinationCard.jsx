/**
 * 目的地卡片：compact 用于右侧栏，large 用于路线首页网格。
 * 点击跳转到 /routes/:citySlug。
 */
import React from "react";
import { Link } from "react-router-dom";
import { getCitySlug } from "../../utils/slug";
import styles from "./DestinationCard.module.css";

export function DestinationCard({ item, variant = "compact" }) {
  const citySlug = getCitySlug(item.city);

  return (
    <Link
      className={`${styles.destinationCard} ${variant === "large" ? styles.large : ""}`}
      to={`/routes/${citySlug}`}
    >
      <img src={item.image} alt={item.city} />
      <div>
        <strong>{item.city}</strong>
        <p>{item.tag}</p>
        <span>{item.members} 人关注 · {item.temp}</span>
      </div>
    </Link>
  );
}
