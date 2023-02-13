import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";

import AboutMe from "../AboutMe/AbotMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import { LangActiveContext } from "../../context/LangActiveContext";

function App() {
  const [isRu, setIsRu] = React.useState(false);

  return (
    <div className="app" id="app">
      <LangActiveContext.Provider value={{ lang: [isRu, setIsRu] }}>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Footer />
      </LangActiveContext.Provider>
    </div>
  );
}

export default App;
