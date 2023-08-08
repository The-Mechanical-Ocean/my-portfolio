import React from 'react';
import './Portfolio.css';
import { LangActiveContext } from '../../context/LangActiveContext';
import Portfolio1 from '../../images/portfolio1.png';
import Portfolio2 from '../../images/portfolio2.png';
import Portfolio3 from '../../images/portfolio3.png';
import Portfolio4 from '../../images/portfolio4.png';
import Portfolio5 from '../../images/portfolio5.png';
import Portfolio6 from '../../images/portfolio6.png';

function Portfolio() {
  const { lang } = React.useContext(LangActiveContext);
  const [isRu] = lang;

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">{isRu ? 'Портфолио' : 'Portfolio'}</h2>
      <div className="portfolio__link-container">
        <div className="portfolio__link-element">
          <a
            className="portfolio__image-link"
            href="https://the-mechanical-ocean.github.io/how-to-learn/index.html"
            target="blank"
          >
            <img
              className="portfolio__image"
              src={Portfolio2}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://the-mechanical-ocean.github.io/how-to-learn/index.html"
              target="blank"
            >
              How To Learn
            </a>
          </figcaption>
        </div>
        <div className="portfolio__link-element">
          <a
            className="portfolio__image-link"
            href="https://the-mechanical-ocean.github.io/russian-travel/index.html"
            target="blank"
          >
            <img
              className="portfolio__image"
              src={Portfolio1}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://the-mechanical-ocean.github.io/russian-travel/index.html"
              target="blank"
            >
              Russian Travel
            </a>
          </figcaption>
        </div>
        <div className="portfolio__link-element">
          <a
            className="portfolio__image-link"
            href="https://mesto.alexkudrin.com/sign-in"
            target="blank"
          >
            <img
              className="portfolio__image"
              src={Portfolio4}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://mesto.alexkudrin.com/sign-in"
              target="blank"
            >
              Places
            </a>
          </figcaption>
        </div>
        <div className="portfolio__link-element">
          <a
            className="portfolio__image-link"
            href="https://movies.alexkudrin.com/"
            target="blank"
          >
            <img
              className="portfolio__image"
              src={Portfolio5}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://movies.alexkudrin.com/"
              target="blank"
            >
              Diploma project
            </a>
          </figcaption>
        </div>
        <div className="portfolio__link-element">
          <a
            className="portfolio__image-link"
            href="https://the-mechanical-ocean.github.io/doctor-lending/"
            target="blank"
          >
            <img
              className="portfolio__image"
              src={Portfolio3}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://the-mechanical-ocean.github.io/doctor-lending/"
              target="blank"
            >
              Doctor Labunc
            </a>
          </figcaption>
        </div>
        <div className="portfolio__link-element">
          <a className="portfolio__image-link" href="https://" target="blank">
            <img
              className="portfolio__image"
              src={Portfolio6}
              alt="portfolio"
            />
          </a>
          <figcaption className="portfolio__figcaption">
            <a
              className="portfolio__figcaption-link"
              href="https://"
              target="blank"
            >
              http://???:)
            </a>
          </figcaption>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
