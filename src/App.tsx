import Home from "./components/Home";
import PreferenceButton from "./components/PreferenceButton";
import { useFlags } from "launchdarkly-react-client-sdk";
import "./App.css";

function App() {
  const { showPreferenceButton } = useFlags();

  return (
    <div className="app">
      <header className="header">
        {showPreferenceButton && <PreferenceButton />}
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
