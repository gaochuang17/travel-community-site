import React from "react";
import { FeedColumn } from "../../components/FeedColumn/FeedColumn";
import { useCommunity } from "../../context/CommunityContext";

export function NotesListPage() {
  const { posts } = useCommunity();
  return <FeedColumn posts={posts} />;
}
