import React from "react";

function Header() {
  // add context here
  return <h1>{language === "english" ? "Hello, World!" : "¡Hola, Mundo!"}</h1>;
}

export default Header;
