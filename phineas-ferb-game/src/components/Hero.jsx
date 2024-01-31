import "../styles/Hero.css";
import Tilt from "react-parallax-tilt";
import characters from "../characters";

const Hero = () => {
  return (
    <div className="hero-container">
      {characters.map((character) => (
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
          />
          <h1 className="character-name">{character.name}</h1>
        </Tilt>
      ))}
    </div>
  );
};

export default Hero;
