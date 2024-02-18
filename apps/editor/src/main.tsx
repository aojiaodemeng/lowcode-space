import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("EditorApp")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#B0CB56",
          colorBorderSecondary: "#eaeaeb",
          colorFillAlter: "#f6f8fa",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
