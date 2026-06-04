import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Users } from "lucide-react";
import { trips } from "../../data";
import { getTripSlug } from "../../utils/slug";
import styles from "./GroupsListPage.module.css";

export function GroupsListPage() {
  return (
    <section className={styles.groupsPage}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>同伴招募</p>
        <h2>找到一起出发的人</h2>
        <p>浏览正在招募的行程，点击进入查看详情与讨论。</p>
      </header>
      <div className={styles.list}>
        {trips.map((trip) => (
          <Link key={trip} className={styles.tripCard} to={`/groups/${getTripSlug(trip)}`}>
            <span className={styles.icon}>
              <Users size={18} />
            </span>
            <div>
              <strong>{trip}</strong>
              <p>12 人正在讨论 · 本周活跃</p>
            </div>
            <ChevronRight size={18} />
          </Link>
        ))}
      </div>
    </section>
  );
}
