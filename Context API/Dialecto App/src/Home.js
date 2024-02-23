import { useContext, useState } from 'react';
import { languageContext } from "./languageContext";

const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};

export const Home = () => {
  // Get language context and state
  const { language, setLanguage } = useContext(languageContext);
  // State to hold the active language content
  const [activeContent, setActiveContent] = useState(content[language]);

  // Function to handle language change
  const handleLanguageChange = (selectedLanguage) => {
    // Update the language state
    setLanguage(selectedLanguage);
    // Update the active content based on the selected language
    setActiveContent(content[selectedLanguage]);
  };

  return (
    <div>
      <div className="language-container">
        {/* Add event listeners to change the language preferences */}
        <span onClick={() => handleLanguageChange('English')}>English</span>
        <span onClick={() => handleLanguageChange('Hindi')}>Hindi</span>
        <span onClick={() => handleLanguageChange('Marathi')}>Marathi</span>
      </div>
      {/* Display active language content here */}
      <p>{activeContent}</p>
    </div>
  );
};
