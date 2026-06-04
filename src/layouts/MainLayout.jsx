/**
 * 全站主布局：顶栏、可选 Hero、三栏内容区（左栏 / 中间 Outlet / 右栏）。
 * 发布弹窗与 Toast 挂在此层，任意子路由均可触发发布。
 */
import React from "react";
import { Outlet, useMatch } from "react-router-dom";
import { Star } from "lucide-react";
import { TopBar } from "../components/TopBar/TopBar";
import { Hero } from "../components/Hero/Hero";
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { TripsSection } from "../components/TripsSection/TripsSection";
import { DestinationCard } from "../components/DestinationCard/DestinationCard";
import { RouteCard } from "../components/RouteCard/RouteCard";
import { ShareTripModal } from "../components/ShareTripModal/ShareTripModal";
import { Toast } from "../components/Toast/Toast";
import { useCommunity } from "../context/CommunityContext";
import { destinations, trips } from "../data";
import styles from "./MainLayout.module.less";

export function MainLayout() {
  /** 仅在发现页展示首屏 Hero */
  const showHero = useMatch({ path: "/discover", end: true });
  const {
    draft,
    isShareOpen,
    notice,
    isDraftReady,
    openShare,
    closeShare,
    updateDraft,
    submitTrip
  } = useCommunity();

  return (
    <main className={styles.appShell}>
      <TopBar onShareClick={openShare} />

      {showHero && <Hero onShareClick={openShare} />}

      <section className={styles.contentGrid}>
        {/* 左栏：用户卡片 + 同伴招募快捷入口 */}
        <aside className={styles.leftRail}>
          <ProfileCard />
          <TripsSection trips={trips} />
        </aside>

        {/* 中间：当前路由对应的页面（Discover / Notes / Routes / Groups 等） */}
        <div className={styles.mainColumn}>
          <Outlet />
        </div>

        {/* 右栏：热门目的地、路线规划器入口、社区评分 */}
        <aside className={styles.rightRail}>
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
