/**
 * 应用入口：挂载根组件并加载全局样式。
 */
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App/App";
import "./styles.less";

createRoot(document.getElementById("root")).render(<App />);
