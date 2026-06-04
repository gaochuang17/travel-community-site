/**
 * 发现页（一级路由 /discover）：快捷入口 + 社区动态预览。
 * 与笔记列表共用 FeedColumn，便于在首页直接浏览最新内容。
 */
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Users, BookOpen } from "lucide-react";
import { FeedColumn } from "../components/FeedColumn/FeedColumn";
import { useCommunity } from "../context/CommunityContext";
import styles from "./DiscoverPage.module.less";

/** 跳转到各一级模块的快捷卡片配置 */
const highlights = [
  { to: "/notes", label: "旅行笔记", copy: "浏览社区精选与最新发布", icon: BookOpen },
  { to: "/routes", label: "热门路线", copy: "探索目的地与路线规划", icon: MapPin },
  { to: "/groups", label: "同伴招募", copy: "找到一起出发的旅伴", icon: Users }
];

export function DiscoverPage() {
  const { posts } = useCommunity();

  return (
    <div className={styles.discoverPage}>
      <div className={styles.quickLinks}>
        {highlights.map(({ to, label, copy, icon: Icon }) => (
          <Link key={to} className={styles.quickCard} to={to}>
            <Icon size={20} />
            <div>
              <strong>{label}</strong>
              <p>{copy}</p>
            </div>
            <ChevronRight size={18} />
          </Link>
        ))}
      </div>
      <FeedColumn posts={posts} />
    </div>
  );
}
