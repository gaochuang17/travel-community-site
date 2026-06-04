/**
 * 单条旅行笔记卡片：封面、作者、标题、评分、摘要与互动数据。
 * 封面/标题/「查看详情」链到 /notes/:postSlug；点赞等按钮为展示占位。
 */
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import { getPostSlug } from "../../utils/slug";
import styles from "./PostCard.module.css";

export function PostCard({ post }) {
  const postSlug = getPostSlug(post);

  return (
    <article className={`${styles.postCard} ${post.isFresh ? styles.freshPost : ""}`}>
      <Link to={`/notes/${postSlug}`}>
        <img src={post.image} alt={post.title} />
      </Link>
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
        <h3>
          <Link className={styles.titleLink} to={`/notes/${postSlug}`}>
            {post.title}
          </Link>
        </h3>
        {post.rating > 0 && (
          <div className={styles.ratingDisplay}>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < post.rating ? styles.starFilled : styles.starEmpty}
              />
            ))}
            <span>{post.rating}颗星</span>
          </div>
        )}
        <p className={styles.postText}>{post.text}</p>
        <div className={styles.postActions}>
          <button type="button">♥ {post.likes}</button>
          <button type="button">💬 {post.comments}</button>
          <button type="button">🔖 {post.saves}</button>
          <Link className={styles.shareAction} to={`/notes/${postSlug}`}>
            查看详情
          </Link>
        </div>
      </div>
    </article>
  );
}
