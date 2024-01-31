import "../styles/Hero.css";
import Tilt from "react-parallax-tilt";

const Hero = ({ charactersToShow, handleItemClick }) => {
  return (
    <div className="hero-container">
      {charactersToShow.map((character) => (
        <Tilt
          key={character.id}
          glareEnable={true}
          glareMaxOpacity={0.6}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="20px"
          className="tilt"
        >
          <img
            key={character.id}
            src={character.src}
            alt={character.name}
            width={250}
            height={350}
            className="character-img"
            onClick={() => handleItemClick(character.name)}
          />
          <h1 className="character-name">{character.name}</h1>
        </Tilt>
      ))}
    </div>
  );
};

export default Hero;
