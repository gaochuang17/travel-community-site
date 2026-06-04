import React from "react";
import { ChevronRight } from "lucide-react";
import { PostCard } from "../PostCard/PostCard";
import styles from "./FeedColumn.module.css";

export function FeedColumn({ posts }) {
  return (
    <section className={styles.feedColumn}>
      <div className={styles.sectionHeading}>
        <div>
          <p className={styles.eyebrow}>社区精选</p>
          <h2>旅行者正在分享</h2>
        </div>
        <button className={styles.secondaryButtonSmall}>
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
