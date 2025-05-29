import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

const LDProvider = withLDProvider({
  clientSideID: "682e433b169fcb08f0717cbb",
  context: {
    kind: "user",
    key: "anonymous",
    userType: "visitor"
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
