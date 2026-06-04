/**
 * 发现页首屏 Banner： slogan、探索社区（链到笔记）、分享旅途（打开发布弹窗）、热门路线面板（链到同伴）。
 * 仅在 MainLayout 判定为 /discover 时渲染。
 */
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, ChevronRight, Camera } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero({ onShareClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroMedia} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>
          <Sparkles size={16} />
          本周 48,000+ 条真实旅行灵感
        </p>
        <h1>和懂路线的人一起出发</h1>
        <p className={styles.heroCopy}>
          在行野发现旅行笔记、拼车搭子、城市路线和当地体验，把收藏夹里的远方变成下一次出发。
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButtonLarge} to="/notes">
            探索社区
            <ChevronRight size={19} />
          </Link>
          <button className={styles.secondaryButton} onClick={onShareClick} type="button">
            <Camera size={18} />
            分享旅途
          </button>
        </div>
      </div>
      <Link className={styles.heroPanel} to="/groups">
        <span className={styles.panelLabel}>今日热门路线</span>
        <strong>云南雨崩 10 日轻徒步</strong>
        <p>23 人正在讨论住宿、路况和装备。</p>
        <div className={styles.miniAvatars} aria-label="参与用户">
          <span>J</span>
          <span>Q</span>
          <span>Y</span>
        </div>
      </Link>
    </section>
  );
}
