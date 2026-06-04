/**
 * 左侧用户卡片：展示静态个人概览（收藏/关注/草稿数为占位数据）。
 */
import React from "react";
import styles from "./ProfileCard.module.less";

export function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileCover} />
      <div className={styles.profileAvatar}>旅</div>
      <h2>你的旅行圈</h2>
      <p>收藏路线、追踪目的地，找到下一段同行的人。</p>
      <div className={styles.profileStats}>
        <span><strong>36</strong>收藏</span>
        <span><strong>12</strong>关注</span>
        <span><strong>5</strong>草稿</span>
      </div>
    </div>
  );
}
