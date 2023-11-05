import React from "react";
import LanguageProvider from "./LanguageProvider";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
