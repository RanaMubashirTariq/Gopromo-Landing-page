import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomeFinal } from "./screens/HomeFinal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HomeFinal />
  </StrictMode>,
);
