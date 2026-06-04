/**
 * 笔记详情页（二级路由 /notes/:postSlug）。
 * 根据 URL 中的 postSlug 从全局 posts 中查找；找不到则重定向回列表。
 */
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Star } from "lucide-react";
import { useCommunity } from "../../context/CommunityContext";
import { findPostBySlug } from "../../utils/slug";
import styles from "./PostDetailPage.module.css";

export function PostDetailPage() {
  const { postSlug } = useParams();
  const { posts } = useCommunity();
  const post = findPostBySlug(posts, postSlug);

  if (!post) {
    return <Navigate replace to="/notes" />;
  }

  return (
    <article className={styles.detailPage}>
      <Link className={styles.backLink} to="/notes">
        <ArrowLeft size={17} />
        返回笔记列表
      </Link>
      <img className={styles.cover} src={post.image} alt={post.title} />
      <div className={styles.body}>
        <div className={styles.authorRow}>
          <span className={styles.avatar}>{post.avatar}</span>
          <div>
            <strong>{post.author}</strong>
            <p>
              <MapPin size={14} />
              {post.location}
            </p>
          </div>
          {post.isFresh && <span className={styles.freshBadge}>刚刚发布</span>}
        </div>
        <h1>{post.title}</h1>
        {post.rating > 0 && (
          <div className={styles.ratingRow}>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={index < post.rating ? styles.starFilled : styles.starEmpty}
              />
            ))}
            <span>{post.rating} 颗星</span>
          </div>
        )}
        <p className={styles.text}>{post.text}</p>
        <div className={styles.stats}>
          <span>♥ {post.likes}</span>
          <span>💬 {post.comments}</span>
          <span>🔖 {post.saves}</span>
        </div>
      </div>
    </article>
  );
}
