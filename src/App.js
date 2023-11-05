import React from "react";
import LanguageProvider from "./LanguageProvider";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
function App() {
  return (
    <LanguageProvider>
      <Header />
      <Body />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
