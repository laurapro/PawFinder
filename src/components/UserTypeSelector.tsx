import { useState } from "react";
import { useLDClient } from "launchdarkly-react-client-sdk";
import "./UserTypeSelector.css";

const UserTypeSelector = () => {
  const ldClient = useLDClient();
  const [selectedType, setSelectedType] = useState("visitor");

  const handleTypeChange = async (type: string) => {
    // 1) Build the new context object
    const newContext = {
      kind: "user", // single “kind” for everyone
      key: `${type}-${Date.now()}`, // unique key per selection
      userType: type, // visitor | foster | shelter
    };

    // 2) Tell the LD SDK to switch to that new context
    await ldClient?.identify(newContext);

    // 3) Update local state so your buttons reflect the current choice
    setSelectedType(type);
    console.log(`User type changed to: ${type}, context updated:`, newContext);
  };

  return (
    <div className="user-type-selector">
      <h3>View As:</h3>
      <div className="selector-options">
        <button
          className={`selector-button ${
            selectedType === "visitor" ? "active" : ""
          }`}
          onClick={() => handleTypeChange("visitor")}
        >
          Potential Adopter
        </button>
        <button
          className={`selector-button ${
            selectedType === "foster" ? "active" : ""
          }`}
          onClick={() => handleTypeChange("foster")}
        >
          Foster Parent
        </button>
        <button
          className={`selector-button ${
            selectedType === "shelter" ? "active" : ""
          }`}
          onClick={() => handleTypeChange("shelter")}
        >
          Shelter Staff
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelector;
