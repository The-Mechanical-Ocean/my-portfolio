import React from "react";

import { LangActiveContext } from "../../context/LangActiveContext";
import "./Hero.css";

function Hero() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu, setIsRu] = lang;

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__info-container">
          <h1 className="hero__name">
            {isRu ? "Кудрин Александр" : "Kudrin Alexandr"}
          </h1>
          <p className={isRu ? "hero__profi hero__profi-ru" : "hero__profi"}>
            {isRu
              ? "ФРОНТЕНД-РАЗРАБОТЧИК 34 года, Москва"
              : "FRONTEND DEVELOPER 34 years old, Moscow"}
          </p>
          <div className="hero__container-lang">
            <button
              className={
                isRu
                  ? "hero__button-lang hero__button-lang_active"
                  : "hero__button-lang"
              }
              onClick={() => setIsRu(true)}
            >
              RU <span className="hero__button-lang_active">| </span>
            </button>
            <button
              className={
                !isRu
                  ? "hero__button-lang hero__button-lang_active"
                  : "hero__button-lang"
              }
              onClick={() => setIsRu(false)}
            >
              ENG
            </button>
          </div>
        </div>
        <div className="hero__foto"></div>
      </div>
    </section>
  );
}

export default Hero;
