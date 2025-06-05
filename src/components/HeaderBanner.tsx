import { useLDClient } from "launchdarkly-react-client-sdk";

function HeaderBanner() {
  const ldClient = useLDClient();
  const context = ldClient?.getContext();
  const state = context?.custom?.state ?? "unknown";

  return (
    <header className="header-banner">
      <div className="header-content">
        <h1>PawFinder Plus</h1>
        <h2>Empowering Animal Shelters with Data-Driven Adoption Solutions.</h2>
        <p>You are currently viewing loving animals at Garland Shelter</p>
        {state && <p>Thanks for visiting us all the way from {state}!</p>}
      </div>
    </header>
  );
}

export default HeaderBanner;
