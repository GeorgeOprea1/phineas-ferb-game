import logo from "../assets/logo.png";
import "../styles/StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start-container">
      <img
        src={logo}
        alt="logo"
        width="350px"
        height="280px"
        className="screen-logo"
      />
      <h1 className="title-game">Memory game</h1>
      <div className="btns-container">
        <button id="level-btn" onClick={startGame}>
          Easy
        </button>
        <button id="level-btn" onClick={startGame}>
          Medium
        </button>
        <button id="level-btn" onClick={startGame}>
          Hard
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
