import React from "react";
import "./Portfolio.css";
import { LangActiveContext } from "../../context/LangActiveContext";
import Portfolio1 from "../../images/portfolio1.png";
import Portfolio2 from "../../images/portfolio2.png";
import Portfolio3 from "../../images/portfolio3.png";

function Portfolio() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">{isRu ? "Портфолио" : "Portfolio"}</h2>
      <div className="portfolio__link-container">
        <div className="portfolio__image-link">
          <a href="https://the-mechanical-ocean.github.io/how-to-learn/index.html" target='blank'>
            <img className="portfolio__image" src={Portfolio2} alt="portfolio" />
          </a>
        </div>
        <figcaption className="portfolio__figcaption">
          <a className="portfolio__figcaption-link" href="https://the-mechanical-ocean.github.io/how-to-learn/index.html" target='blank'>
            How To Learn
          </a>
        </figcaption>
        <div className="portfolio__image-link">
          <a className="portfolio__figcaption-link" href="https://the-mechanical-ocean.github.io/russian-travel/index.html" target='blank'>
            <img className="portfolio__image" src={Portfolio1} alt="portfolio" />
          </a>
        </div>
        <figcaption className="portfolio__figcaption">
          <a className="portfolio__figcaption-link" href="https://the-mechanical-ocean.github.io/russian-travel/index.html" target='blank'>Russian Travel</a>
        </figcaption>
        <div className="portfolio__image-link">
          <a className="portfolio__figcaption-link" href="https://the-mechanical-ocean.github.io/doctor-lending/" target='blank'>
            <img className="portfolio__image" src={Portfolio3} alt="portfolio" />
          </a>
        </div>
        <figcaption className="portfolio__figcaption">
          <a className="portfolio__figcaption-link" href="https://the-mechanical-ocean.github.io/doctor-lending/" target='blank'>Doctor Labunc</a>
        </figcaption>
      </div>
    </section>
  );
}

export default Portfolio;
