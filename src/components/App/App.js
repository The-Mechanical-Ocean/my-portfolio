import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import { LangActiveContext } from "../../context/LangActiveContext";

function App() {
  const [isRu, setIsRu] = React.useState(false);

  return (
    <div className="app">
      <LangActiveContext.Provider value={{ lang: [isRu, setIsRu] }}>
        <Header />
        <Hero />
      </LangActiveContext.Provider>
    </div>
  );
}

export default App;
