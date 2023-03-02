import React from "react";
import "./Skills.css";
import { LangActiveContext } from "../../context/LangActiveContext";
import CardSkills from "../CardSkills/CardSkills";
import cards from "../../utils/cards";

function Skills() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <section className="skills">
      <h2 className="skills__title">{isRu ? "Навыки" : "Skills"}</h2>

      <p className="skills__text">
        {isRu
          ? "Я использую такие продукты и программные средства как"
          : "I use products and software such as"}
      </p>
      <div className="skills__cards-container">
        {cards.map((card, cardId) => {
          return <CardSkills card={card} key={cardId} />;
        })}
      </div>
    </section>
  );
}

export default Skills;