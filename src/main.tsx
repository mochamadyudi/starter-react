import {StrictMode} from "react";
import App from "./App.tsx";
import bootstrap from "@/bootstrap.ts";

bootstrap(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
