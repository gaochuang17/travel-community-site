import React from "react";
import { Bell, Compass, Plus, Search } from "lucide-react";
import styles from "./TopBar.module.css";

export function TopBar({ onShareClick }) {
  return (
    <header className={styles.topbar}>
      <a className={styles.brand} href="#home" aria-label="行野首页">
        <span className={styles.brandMark}>
          <Compass size={22} />
        </span>
        <span>行野</span>
      </a>
      <nav className={styles.navLinks} aria-label="主导航">
        <a href="#discover">发现</a>
        <a href="#routes">路线</a>
        <a href="#groups">同伴</a>
        <a href="#notes">笔记</a>
      </nav>
      <div className={styles.topActions}>
        <label className={styles.searchBox}>
          <Search size={18} />
          <input placeholder="搜索目的地、攻略、同伴" />
        </label>
        <button className={styles.iconButton} aria-label="通知">
          <Bell size={19} />
        </button>
        <button className={styles.primaryButton} onClick={onShareClick}>
          <Plus size={18} />
          发布
        </button>
      </div>
    </header>
  );
}
