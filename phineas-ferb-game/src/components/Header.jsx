import "../styles/Header.css";
import logo from "../assets/logo.avif";
const Header = ({ restart, score, bestScore }) => {
  return (
    <div className="header-container">
      <img
        src={logo}
        alt="logo"
        className="logo"
        width="250px"
        height="180px"
        onClick={restart}
      />
      <div className="scoreboard-container">
        <h1>Score: {score}</h1>
        <h1>Best score: {bestScore}</h1>
      </div>
    </div>
  );
};

export default Header;
