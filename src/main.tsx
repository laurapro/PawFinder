import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

const LDProvider = withLDProvider({
  clientSideID: "682e433b169fcb08f0717cbb",
  context: {
    kind: "foster",
    key: "existing",
    type: "beta"
  },
})(App);

const renderApp = async () => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <LDProvider />
    </StrictMode>
  );
};

renderApp();
