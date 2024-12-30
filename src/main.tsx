//MSW를 개발 환경에서만 시작하도록 설정합니다.
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("@mocks/browser");
  worker.start();
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
