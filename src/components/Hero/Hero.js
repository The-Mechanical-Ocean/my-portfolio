import React from "react";
import './Hero.css';

function Hero() {
    return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__info-container">
          <h1 className="hero__name">
            Kudrin Alexandr
          </h1>
          <p className="hero__profi">
            FRONTEND DEVELOPER 34 years old, Moscow
          </p>
          <p className="hero__lang">
            RU | ENG
          </p>
        </div>
        <div className="hero__foto"></div>
      </div>
    </section>
    )
} 

export default Hero; 