import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Users } from "lucide-react";
import { trips } from "../../data";
import { findTripBySlug } from "../../utils/slug";
import styles from "./GroupDetailPage.module.css";

export function GroupDetailPage() {
  const { tripSlug } = useParams();
  const tripTitle = findTripBySlug(trips, tripSlug);

  if (!tripTitle) {
    return <Navigate replace to="/groups" />;
  }

  return (
    <article className={styles.detailPage}>
      <Link className={styles.backLink} to="/groups">
        <ArrowLeft size={17} />
        返回同伴列表
      </Link>
      <div className={styles.body}>
        <p className={styles.eyebrow}>招募进行中</p>
        <h1>{tripTitle}</h1>
        <div className={styles.stats}>
          <span>
            <Users size={16} />
            8 人已报名
          </span>
          <span>
            <MessageCircle size={16} />
            24 条讨论
          </span>
        </div>
        <p className={styles.copy}>
          这是一条社区同伴招募。你可以在这里了解出发时间、预算分摊和装备要求，并在讨论区与发起人沟通细节。
        </p>
        <button className={styles.joinButton} type="button">
          我想加入
        </button>
      </div>
    </article>
  );
}
