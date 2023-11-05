// App.js
import React from "react";
import LanguageProvider from "./LanguageProvider";
import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Navbar />
        <Header />
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
