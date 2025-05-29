import Home from "./components/Home";
import HeaderBanner from "./components/HeaderBanner";
import PreferenceBanner from "./components/PreferenceBanner";
import { useFlags } from "launchdarkly-react-client-sdk";
import "./App.css";

function App() {
  const { showPreferenceButton } = useFlags();

  return (
    <div className="app">
      <header className="header">
        {<HeaderBanner/>}
        </header>
      <main>
        <Home />
      </main>
      <footer className="header">
        {showPreferenceButton && <PreferenceBanner />}
      </footer>
    </div>
  );
}

export default App;
