import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";

import AboutMe from "../AboutMe/AbotMe";
import Portfolio from "../Portfolio/Portfolio";

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
      </LangActiveContext.Provider>
    </div>
  );
}

export default App;
