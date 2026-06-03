import React from "react";
import { MapPin } from "lucide-react";
import styles from "./PostCard.module.css";

export function PostCard({ post }) {
  return (
    <article className={`${styles.postCard} ${post.isFresh ? styles.freshPost : ""}`}>
      <img src={post.image} alt={post.title} />
      <div className={styles.postBody}>
        <div className={styles.postAuthor}>
          <span className={styles.avatar}>{post.avatar}</span>
          <div>
            <strong>{post.author}</strong>
            <p>
              <MapPin size={14} />
              {post.location}
            </p>
          </div>
        </div>
        {post.isFresh && <span className={styles.freshBadge}>刚刚发布</span>}
        <h3>{post.title}</h3>
        <p className={styles.postText}>{post.text}</p>
        <div className={styles.postActions}>
          <button>♥ {post.likes}</button>
          <button>💬 {post.comments}</button>
          <button>🔖 {post.saves}</button>
          <button>↗ 转发</button>
        </div>
      </div>
    </article>
  );
}
