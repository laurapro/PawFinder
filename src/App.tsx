import Home from "./components/Home";
import HeaderBanner from "./components/HeaderBanner";
import UserTypeSelector from "./components/UserTypeSelector";
import PreferenceBanner from "./components/PreferenceBanner";
import { useFlags } from "launchdarkly-react-client-sdk";
import "./App.css";

function App() {
  const { showPreferenceButton } = useFlags();

  return (
    <div className="app">
      <header className="header">{<HeaderBanner />}</header>
      <main>
        <UserTypeSelector />
        <Home />
      </main>
      <footer className="header">
        {showPreferenceButton && <PreferenceBanner />}
      </footer>
    </div>
  );
}

export default App;
