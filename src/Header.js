import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

function Header() {
  const { language } = useContext(LanguageContext);
  return <h1>{language === "english" ? "Hello, World!" : "¡Hola, Mundo!"}</h1>;
}

export default Header;
