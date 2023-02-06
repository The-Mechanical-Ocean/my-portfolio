import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AbotMe";
import { LangActiveContext } from "../../context/LangActiveContext";

function App() {
  const [isRu, setIsRu] = React.useState(false);

  return (
    <div className="app">
      <LangActiveContext.Provider value={{ lang: [isRu, setIsRu] }}>
        <Header />
        <Hero />
        <AboutMe />
      </LangActiveContext.Provider>
    </div>
  );
}

export default App;
