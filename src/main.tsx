import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import "./index.css";
import App from "./App.tsx";

// 1) List of states (could be an enum)
const US_STATES = ["TX", "CA", "NY", "FL", "WA", "IL"] as const;
type StateCode = (typeof US_STATES)[number];

// 2) Helper to pick one at random
function getRandomState(): StateCode {
  const idx = Math.floor(Math.random() * US_STATES.length);
  return US_STATES[idx];
}

const init = async () => {
  const randomState = getRandomState();
  const context = {
    kind: "user",
    key: "anonymous",
    custom: {
      userType: "visitor",
      state: randomState,
    },
  };
  console.log("▶️ LaunchDarkly Context:", context);

  const LDProvider = await asyncWithLDProvider({
    clientSideID: "682e433b169fcb08f0717cbb",
    context,
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
