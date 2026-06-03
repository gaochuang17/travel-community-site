import React, { useState } from "react";
import { Star } from "lucide-react";
import { TopBar } from "../TopBar/TopBar";
import { Hero } from "../Hero/Hero";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { TripsSection } from "../TripsSection/TripsSection";
import { FeedColumn } from "../FeedColumn/FeedColumn";
import { DestinationCard } from "../DestinationCard/DestinationCard";
import { RouteCard } from "../RouteCard/RouteCard";
import { ShareTripModal } from "../ShareTripModal/ShareTripModal";
import { Toast } from "../Toast/Toast";
import { destinations, initialPosts, trips, fallbackTripImage, emptyDraft } from "../../data";
import styles from "./App.module.css";

export function App() {
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

    requestAnimationFrame(() => {
      document.getElementById("notes")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const isDraftReady =
    draft.title.trim().length > 0 &&
    draft.location.trim().length > 0 &&
    draft.text.trim().length > 0;

  return (
    <main className={styles.appShell}>
      <TopBar onShareClick={openShare} />

      <Hero onShareClick={openShare} />

      <section className={styles.contentGrid} id="discover">
        <aside className={styles.leftRail}>
          <ProfileCard />
          <TripsSection trips={trips} />
        </aside>

        <FeedColumn posts={posts} />

        <aside className={styles.rightRail} id="routes">
          <div className={styles.sideSection}>
            <h3>热门目的地</h3>
            <div className={styles.destinationList}>
              {destinations.map((item) => (
                <DestinationCard key={item.city} item={item} />
              ))}
            </div>
          </div>

          <RouteCard />

          <div className={styles.ratingStrip}>
            <Star size={18} />
            <span>4.9 社区路线平均评分</span>
          </div>
        </aside>
      </section>

      {isShareOpen && (
        <ShareTripModal
          draft={draft}
          isReady={isDraftReady}
          onChange={updateDraft}
          onClose={closeShare}
          onSubmit={submitTrip}
        />
      )}

      {notice && <Toast notice={notice} />}
    </main>
  );
}
