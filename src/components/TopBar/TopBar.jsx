/**
 * 顶栏：品牌、一级导航（NavLink 高亮当前模块）、搜索框、通知、发布按钮。
 */
import React from "react";
import { NavLink } from "react-router-dom";
import { Bell, Compass, Plus, Search } from "lucide-react";
import styles from "./TopBar.module.less";

/** 顶栏一级路由；discover 使用 end 避免子路径误高亮 */
const navItems = [
  { to: "/discover", label: "发现", end: true },
  { to: "/routes", label: "路线" },
  { to: "/groups", label: "同伴" },
  { to: "/notes", label: "笔记" }
];

export function TopBar({ onShareClick }) {
  return (
    <header className={styles.topbar}>
      <NavLink className={styles.brand} to="/discover" aria-label="行野首页">
        <span className={styles.brandMark}>
          <Compass size={22} />
        </span>
        <span>行野</span>
      </NavLink>
      <nav className={styles.navLinks} aria-label="主导航">
        {navItems.map(({ to, label, end }) => (
          <NavLink
            key={to}
            className={({ isActive }) => (isActive ? styles.navActive : undefined)}
            end={end}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className={styles.topActions}>
        {/* 搜索：UI 占位，尚未实现检索逻辑 */}
        <label className={styles.searchBox}>
          <Search size={18} />
          <input placeholder="搜索目的地、攻略、同伴" />
        </label>
        <button className={styles.iconButton} aria-label="通知" type="button">
          <Bell size={19} />
        </button>
        <button className={styles.primaryButton} onClick={onShareClick} type="button">
          <Plus size={18} />
          发布
        </button>
      </div>
    </header>
  );
}
