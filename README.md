# 行野 Travel Circle

一个使用 React + Webpack + React Router（HashRouter）搭建的旅行社区网站原型，包含旅行动态流、热门目的地、同伴招募和路线规划入口。

## 路由结构

一级路由（顶栏导航）：

- `/#/discover` — 发现首页（含 Hero 与快捷入口）
- `/#/notes` — 旅行笔记列表
- `/#/routes` — 路线与目的地
- `/#/groups` — 同伴招募

二级路由（详情页）：

- `/#/notes/:postSlug` — 单条笔记详情
- `/#/routes/:citySlug` — 目的地详情
- `/#/groups/:tripSlug` — 招募详情

## 运行

```bash
npm install
npm run start
```

开发服务器默认运行在 `http://localhost:3000/`。

## 构建

```bash
npm run build
```
