import { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

function PreferenceButton() {
  const { animalPreference } = useFlags();
  const [preference, setPreference] = useState(animalPreference);
  useEffect(() => {
    setPreference(animalPreference);
  }, [animalPreference]);

  return (
    <button
      className="header-button"
      onChange={() => setPreference(preference === "dog" ? "cat" : "dog")}
    >
      {preference === "dog" ? "I prefer cats" : "I prefer dogs"}
    </button>
  );
}

export default PreferenceButton;
