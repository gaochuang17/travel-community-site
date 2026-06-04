/**
 * 笔记列表页（一级路由 /notes）：展示全部社区旅行笔记。
 */
import React from "react";
import { FeedColumn } from "../../components/FeedColumn/FeedColumn";
import { useCommunity } from "../../context/CommunityContext";

export function NotesListPage() {
  const { posts } = useCommunity();
  return <FeedColumn posts={posts} />;
}
