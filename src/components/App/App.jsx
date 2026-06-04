/**
 * 根组件：配置 HashRouter 与全站路由表。
 *
 * 一级路由：discover / notes / routes / groups
 * 二级路由：notes/:postSlug、routes/:citySlug、groups/:tripSlug
 *
 * 所有页面共用 MainLayout（顶栏 + 左右侧栏），子页面渲染在中间的 Outlet。
 */
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { CommunityProvider } from "../../context/CommunityContext";
import { MainLayout } from "../../layouts/MainLayout";
import { DiscoverPage } from "../../pages/DiscoverPage";
import { GroupDetailPage } from "../../pages/groups/GroupDetailPage";
import { GroupsListPage } from "../../pages/groups/GroupsListPage";
import { NotesListPage } from "../../pages/notes/NotesListPage";
import { PostDetailPage } from "../../pages/notes/PostDetailPage";
import { DestinationDetailPage } from "../../pages/routes/DestinationDetailPage";
import { RoutesHubPage } from "../../pages/routes/RoutesHubPage";

export function App() {
  return (
    <HashRouter>
      <CommunityProvider>
        <Routes>
          {/* 父路由：固定布局壳，path="/" 匹配所有子路径 */}
          <Route element={<MainLayout />} path="/">
            {/* 访问 /#/ 时重定向到发现页 */}
            <Route index element={<Navigate replace to="/discover" />} />
            <Route path="discover" element={<DiscoverPage />} />

            {/* 笔记：列表 + 详情 */}
            <Route path="notes">
              <Route index element={<NotesListPage />} />
              <Route path=":postSlug" element={<PostDetailPage />} />
            </Route>

            {/* 路线：目的地列表 + 城市详情 */}
            <Route path="routes">
              <Route index element={<RoutesHubPage />} />
              <Route path=":citySlug" element={<DestinationDetailPage />} />
            </Route>

            {/* 同伴：招募列表 + 单条招募详情 */}
            <Route path="groups">
              <Route index element={<GroupsListPage />} />
              <Route path=":tripSlug" element={<GroupDetailPage />} />
            </Route>

            {/* 未匹配路径回退到发现页 */}
            <Route path="*" element={<Navigate replace to="/discover" />} />
          </Route>
        </Routes>
      </CommunityProvider>
    </HashRouter>
  );
}
