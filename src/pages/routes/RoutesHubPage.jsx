import React from "react";
import { destinations } from "../../data";
import { DestinationCard } from "../../components/DestinationCard/DestinationCard";
import styles from "./RoutesHubPage.module.css";

export function RoutesHubPage() {
  return (
    <section className={styles.routesHub}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>路线与目的地</p>
        <h2>规划下一段旅程</h2>
        <p>从热门目的地出发，查看关注人数与当地温度，点击进入详情。</p>
      </header>
      <div className={styles.grid}>
        {destinations.map((item) => (
          <DestinationCard key={item.city} item={item} variant="large" />
        ))}
      </div>
    </section>
  );
}
