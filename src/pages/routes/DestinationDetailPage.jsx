/**
 * 目的地详情页（二级路由 /routes/:citySlug）。
 * 展示城市封面、标签、温度与关注数；无效 slug 时回到路线列表。
 */
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, Thermometer } from "lucide-react";
import { destinations } from "../../data";
import { findDestinationBySlug } from "../../utils/slug";
import styles from "./DestinationDetailPage.module.less";

export function DestinationDetailPage() {
  const { citySlug } = useParams();
  const destination = findDestinationBySlug(destinations, citySlug);

  if (!destination) {
    return <Navigate replace to="/routes" />;
  }

  return (
    <article className={styles.detailPage}>
      <Link className={styles.backLink} to="/routes">
        <ArrowLeft size={17} />
        返回路线列表
      </Link>
      <img className={styles.cover} src={destination.image} alt={destination.city} />
      <div className={styles.body}>
        <p className={styles.tag}>{destination.tag}</p>
        <h1>{destination.city}</h1>
        <p className={styles.meta}>
          <Thermometer size={16} />
          当地约 {destination.temp} · {destination.members} 人关注
        </p>
        <p className={styles.copy}>
          社区里已有大量关于 {destination.city} 的交通、住宿与玩法讨论。收藏此目的地，在路线规划器里组合成完整行程。
        </p>
        <Link className={styles.cta} to="/notes">
          查看相关旅行笔记
        </Link>
      </div>
    </article>
  );
}
