import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";
import {useContext} from 'react';

export const Navbar = () => {
  // get theme and lanauge contexts here
  const {theme,setTheme} = useContext(themeContext);
  const {language} = useContext(languageContext);

  const handleTheme = () => {
    setTheme(currentTheme => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={() => handleTheme()}>{theme === "light" ? "Dark Theme" : "Light Theme"}</button>
        <span>{language}</span>
      </div>
    </div>
  );
};
