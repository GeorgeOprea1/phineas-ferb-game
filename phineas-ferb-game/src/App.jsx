import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  function startGame() {
    setStartScreen(!startScreen);
    console.log(startScreen);
  }

  return (
    <div className="app-container">
      {startScreen ? (
        <StartScreen startGame={startGame} />
      ) : (
        <Header startGame={startGame} />
      )}
    </div>
  );
}

export default App;
