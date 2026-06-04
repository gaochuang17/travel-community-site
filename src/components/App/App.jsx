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
          <Route element={<MainLayout />} path="/">
            <Route index element={<Navigate replace to="/discover" />} />
            <Route path="discover" element={<DiscoverPage />} />

            <Route path="notes">
              <Route index element={<NotesListPage />} />
              <Route path=":postSlug" element={<PostDetailPage />} />
            </Route>

            <Route path="routes">
              <Route index element={<RoutesHubPage />} />
              <Route path=":citySlug" element={<DestinationDetailPage />} />
            </Route>

            <Route path="groups">
              <Route index element={<GroupsListPage />} />
              <Route path=":tripSlug" element={<GroupDetailPage />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/discover" />} />
          </Route>
        </Routes>
      </CommunityProvider>
    </HashRouter>
  );
}
