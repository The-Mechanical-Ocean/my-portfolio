import React from "react";
import "./Portfolio.css";
import { LangActiveContext } from "../../context/LangActiveContext";
import imgProb from "../../images/HTML.png";

function Portfolio() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">{isRu ? "Портфолио" : "Portfolio"}</h2>
      <div className="portfolio__link-container">
        <div className="portfolio__image-link">
          <a href="https://the-mechanical-ocean.github.io/how-to-learn/index.html">
            <img className="portfolio__image" src={imgProb} alt="portfolio" />
          </a>
        </div>
        <figcaption>
          <a href="https://the-mechanical-ocean.github.io/how-to-learn/index.html">
            link to
          </a>
        </figcaption>
        <div className="portfolio__image-link">
          <a href="https://the-mechanical-ocean.github.io/how-to-learn/index.html">
            <img className="portfolio__image" src={imgProb} alt="portfolio" />
          </a>
        </div>
        <figcaption>
          <a href="#">link to</a>
        </figcaption>
        <div className="portfolio__image-link">
          <a href="https://the-mechanical-ocean.github.io/how-to-learn/index.html">
            <img className="portfolio__image" src={imgProb} alt="portfolio" />
          </a>
        </div>
        <figcaption>
          <a href="#">link to</a>
        </figcaption>
      </div>
    </section>
  );
}

export default Portfolio;
