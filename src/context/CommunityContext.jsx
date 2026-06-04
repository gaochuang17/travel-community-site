/**
 * 社区全局状态：旅行笔记列表、发布弹窗、表单草稿与 Toast 提示。
 * 需放在 HashRouter 内部，以便 submitTrip 中使用 navigate 跳转。
 */
import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyDraft, fallbackTripImage, initialPosts } from "../data";
import { getPostSlug } from "../utils/slug";

const CommunityContext = createContext(null);

export function CommunityProvider({ children }) {
  const navigate = useNavigate();

  /** 社区动态列表，新发布的内容插入数组头部 */
  const [posts, setPosts] = useState(initialPosts);
  /** 是否显示「分享旅途」发布弹窗 */
  const [isShareOpen, setIsShareOpen] = useState(false);
  /** 发布表单当前填写内容 */
  const [draft, setDraft] = useState(emptyDraft);
  /** Toast 文案，空字符串表示不显示 */
  const [notice, setNotice] = useState("");

  const openShare = () => setIsShareOpen(true);
  const closeShare = () => setIsShareOpen(false);

  /** 同步表单字段到 draft（input/textarea 的 onChange） */
  const updateDraft = (event) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
  };

  /**
   * 提交发布表单：组装新帖子、更新列表、关弹窗、提示并跳转到笔记详情页。
   */
  const submitTrip = (event) => {
    event.preventDefault();

    const nextPost = {
      author: "你",
      avatar: "你",
      location: draft.location.trim(),
      title: draft.title.trim(),
      text: draft.text.trim(),
      image: draft.image.trim() || fallbackTripImage,
      rating: draft.rating,
      likes: 0,
      comments: 0,
      saves: 0,
      isFresh: true // 用于 PostCard 显示「刚刚发布」样式
    };

    setPosts((current) => [nextPost, ...current]);
    setDraft(emptyDraft);
    setIsShareOpen(false);
    setNotice("旅途已发布到社区动态");
    window.setTimeout(() => setNotice(""), 2800);

    navigate(`/notes/${getPostSlug(nextPost)}`);
  };

  /** 标题、目的地、正文、评分均填写后才允许提交 */
  const isDraftReady =
    draft.title.trim().length > 0 &&
    draft.location.trim().length > 0 &&
    draft.text.trim().length > 0 &&
    draft.rating > 0;

  const value = useMemo(
    () => ({
      posts,
      draft,
      isShareOpen,
      notice,
      isDraftReady,
      openShare,
      closeShare,
      updateDraft,
      submitTrip
    }),
    [posts, draft, isShareOpen, notice, isDraftReady]
  );

  return <CommunityContext.Provider value={value}>{children}</CommunityContext.Provider>;
}

/** 在任意子组件中读取社区全局状态 */
export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error("useCommunity must be used within CommunityProvider");
  }
  return context;
}
