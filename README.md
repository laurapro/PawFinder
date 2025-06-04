# PawFinder Plus – Sample Application

Welcome to **PawFinder Plus**, a sample React application designed to showcase data-driven animal adoption solutions for animal shelters. This project demonstrates how feature flags and user preferences can be integrated to create a dynamic, personalized experience for end users.

---

## Features

- **Dynamic Animal Listings:**  
  Displays a curated list of adoptable dogs or cats, tailored to user preferences.

- **Feature Flag Integration:**  
  Utilizes [LaunchDarkly](https://launchdarkly.com/) to control feature rollout and personalize content in real time.

- **Modern UI:**  
  Clean, responsive interface built with React, TypeScript, and Vite.

- **Banner Components:**
  - **Header Banner:** Highlights the app’s mission.
  - **Preference Banner:** Shows which animal type is currently featured, based on feature flags.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-org/pawfinder-plus.git
   cd pawfinder-plus
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add your LaunchDarkly SDK key:

   ```env
   VITE_LAUNCHDARKLY_SDK_KEY=your-sdk-key
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**  
   Navigate to `http://localhost:5173` to see the app in action.

---
## Project Structure

- [`src/App.tsx`](src/App.tsx): Main application component.
- [`src/components/`](src/components/): UI components (Home, HeaderBanner, PreferenceBanner).
- [`src/main.tsx`](src/main.tsx): Entry point, LaunchDarkly provider setup.
- [`public/`](public/): Static assets.

## Customization

- ### Feature Flags
  Control which banners and animal lists are shown by toggling flags in LaunchDarkly.

  - <span style="color:orange;">**showPreferenceButton:**</span> A boolean flag to control whether the banner is visible. You can demonstrate releasing or rolling back the feature by toggling this flag in LaunchDarkly.  
    **Instant Updates:** The app uses a listener to detect flag changes in real time. When the flag is toggled, the UI updates instantly—no page reload required.  
    **Remediation:** If a feature causes issues, you can immediately disable it by turning off the flag (manually via the LaunchDarkly dashboard, API, or CLI), and the app will revert to the previous state without user intervention.

  - <span style="color:orange;">**animalPreference:**</span> Flag around animal list component.
    **Context Attributes:** The context will be used to target your feature release.
      ``` 
      {
        "kind": "user",

        // The 'key' property is initialized as anonymous then set when clicking view as button:
        // uses the type
        "key": anonymous | ${type}-${Date.now()}

        // The 'userType' is a custom property.
        // value types are set in UserTypeSelector file
        "userype": "visitor" | "foster" | "shelter"
      } 
      ```
    **Target:** Individual targeting and Rule-based targeting can be set up from the LaunchDarkly dashboard using segments and specifying context attributes.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite Guide](https://vitejs.dev/guide/)
- [LaunchDarkly Documentation](https://docs.launchdarkly.com/docs)

---

## Contributing

We welcome contributions to **PawFinder Plus**! If you have suggestions for improvements or new features, please submit an issue or pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
