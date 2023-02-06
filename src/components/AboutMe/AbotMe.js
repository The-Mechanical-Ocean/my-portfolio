import React from "react";
import "./AboutMe.css";
import { LangActiveContext } from "../../context/LangActiveContext";

function AboutMe() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <section className="about">
      <h2 className="about__title">{isRu ? "Обо мне" : "About me"}</h2>
      <div className="about__info-me-container">
        <p className="about-text">
          {isRu
            ? "Привет, я Саша — ФРОНТЕНД - РАЗРАБОТЧИК из Москвы. Интересуюсь Web - получается и всем, что с ней связано."
            : "Hi, I'm Sasha — FRONTEND DEVELOPER from Moscow. I'm interested in the Web - it turns out everything connected with it."}
        </p>
        <p className="about-text">
          {isRu
            ? "Я окончил онлайн-курс ВЕБ-РАЗРАБОТЧИКА в Яндекс-Практикум."
            : "I completed the online course WEB DEVELOPER at Yandex Practicum."}
        </p>
        <p className="about-text">
          {isRu
            ? "Готов реализовать отличные проекты с интересными людьми."
            : "Ready to implement excellent projects with interesting people."}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
