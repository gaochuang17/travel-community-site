import React from "react";
import { Mountain, CalendarDays } from "lucide-react";
import styles from "./RouteCard.module.css";

export function RouteCard() {
  return (
    <div className={styles.routeCard}>
      <div className={styles.routeIcon}>
        <Mountain size={21} />
      </div>
      <h3>路线规划器</h3>
      <p>把收藏的笔记拖进清单，自动生成每日路线和预算。</p>
      <button className={styles.primaryButtonFull}>
        <CalendarDays size={17} />
        新建行程
      </button>
    </div>
  );
}
