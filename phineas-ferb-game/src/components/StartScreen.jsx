import logo from "../assets/logo.avif";
import "../styles/StartScreen.css";

const StartScreen = ({
  easyLevel,
  mediumLevel,
  hardLevel,
  handleButtonClickSound,
}) => {
  return (
    <div className="start-container">
      <img
        src={logo}
        alt="logo"
        width="350px"
        height="280px"
        className="screen-logo"
        onClick={handleButtonClickSound}
      />
      <h1 className="title-game">Memory game</h1>
      <div className="btns-container">
        <button
          id="easy-level-btn"
          onClick={easyLevel}
          aria-label="hard level button"
        >
          Easy
        </button>
        <button
          id="medium-level-btn"
          onClick={mediumLevel}
          aria-label="hard level button"
        >
          Medium
        </button>
        <button
          id="hard-level-btn"
          onClick={hardLevel}
          aria-label="hard level button"
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
