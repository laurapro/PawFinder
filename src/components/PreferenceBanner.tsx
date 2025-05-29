import { useFlags } from "launchdarkly-react-client-sdk";
import "./PreferenceBanner.css";

function PreferenceBanner() {
  const { animalPreference } = useFlags();
  const label = animalPreference === "dog" ? "Dogs" : "Cats";

  return (
    <div className="preference-banner">
      <p>
        Featured Animal: <strong>{label}</strong>
      </p>
      <p className="explanation">
        Based on current user data and engagement metrics, our system is
        prioritizing {label} today.
      </p>
    </div>
  );
}

export default PreferenceBanner;
