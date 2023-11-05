import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function Footer() {
  const { toggleLanguage } = useContext(LanguageContext);
  return <button onClick={toggleLanguage}>Switch Language</button>;
}

export default Footer;
