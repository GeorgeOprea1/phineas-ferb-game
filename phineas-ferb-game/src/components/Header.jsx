import "../styles/Header.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="header-container">
      <img
        src={logo}
        alt="logo"
        className="logo"
        width="250px"
        height="180px"
      />
      <div className="scoreboard-container">
        <h1>Score:</h1>
        <h1>Best score:</h1>
      </div>
    </div>
  );
};

export default Header;
