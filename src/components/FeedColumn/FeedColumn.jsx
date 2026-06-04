/**
 * 社区动态流：标题区 + 按时间顺序渲染 PostCard 列表。
 * 用于发现页与笔记列表页。
 */
import React from "react";
import { ChevronRight } from "lucide-react";
import { PostCard } from "../PostCard/PostCard";
import styles from "./FeedColumn.module.less";

export function FeedColumn({ posts }) {
  return (
    <section className={styles.feedColumn}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>社区精选</p>
          <h2>旅行者正在分享</h2>
        </div>
        {/* 「最新」为 UI 占位，尚未实现排序切换 */}
        <button className={styles.secondaryButtonSmall} type="button">
          最新
          <ChevronRight size={16} />
        </button>
      </div>

      {posts.map((post) => (
        <PostCard key={`${post.author}-${post.title}`} post={post} />
      ))}
    </section>
  );
}
