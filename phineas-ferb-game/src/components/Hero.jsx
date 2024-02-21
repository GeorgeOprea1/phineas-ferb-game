import "../styles/Hero.css";
import Tilt from "react-parallax-tilt";
import React from "react";
import logo from "../assets/logo.avif";

const Hero = ({
  charactersToShow,
  handleItemClick,
  score,
  initialCharacters,
  showBack,
}) => {
  return (
    <div className="hero-container">
      <div className="characters-container">
        {charactersToShow.map((character) => (
          <>
            <Tilt
              key={character.id}
              glareEnable={true}
              glareMaxOpacity={0.6}
              glareColor="#ffffff"
              glarePosition="bottom"
              glareBorderRadius="20px"
              className={showBack ? "tilt-hide" : "tilt"}
            >
              <img
                key={character.id}
                src={character.src}
                alt={character.name}
                width={250}
                height={350}
                className="character-img"
                onClick={() => handleItemClick(character)}
              />
              <h1 className="character-name">{character.name}</h1>
            </Tilt>

            <div className={showBack ? "back" : "back-hide"}>
              <img
                src={logo}
                width={50}
                height={50}
                alt="back card image"
                className="back-img"
              />
            </div>
          </>
        ))}
      </div>
      <div className="win-condition">
        <p>
          {score} / {initialCharacters.length - 2}
        </p>
      </div>
    </div>
  );
};

export default Hero;
