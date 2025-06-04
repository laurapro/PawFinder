import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

const init = async () => {
const LDProvider = await asyncWithLDProvider({
  clientSideID: "682e433b169fcb08f0717cbb",
  context: {
    kind: "user",
    key: "anonymous",
    userType: "visitor",
  },
});

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>
  );
};

init();
