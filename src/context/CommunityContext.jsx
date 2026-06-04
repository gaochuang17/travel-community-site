import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyDraft, fallbackTripImage, initialPosts } from "../data";
import { getPostSlug } from "../utils/slug";

const CommunityContext = createContext(null);

export function CommunityProvider({ children }) {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(initialPosts);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [draft, setDraft] = useState(emptyDraft);
  const [notice, setNotice] = useState("");

  const openShare = () => setIsShareOpen(true);
  const closeShare = () => setIsShareOpen(false);

  const updateDraft = (event) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
  };

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
      isFresh: true
    };

    setPosts((current) => [nextPost, ...current]);
    setDraft(emptyDraft);
    setIsShareOpen(false);
    setNotice("旅途已发布到社区动态");
    window.setTimeout(() => setNotice(""), 2800);

    navigate(`/notes/${getPostSlug(nextPost)}`);
  };

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

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (!context) {
    throw new Error("useCommunity must be used within CommunityProvider");
  }
  return context;
}
