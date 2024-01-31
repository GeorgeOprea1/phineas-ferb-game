import logo from "../assets/logo.png";
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
        <button id="level-btn" onClick={easyLevel}>
          Easy
        </button>
        <button id="level-btn" onClick={mediumLevel}>
          Medium
        </button>
        <button id="level-btn" onClick={hardLevel}>
          Hard
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
