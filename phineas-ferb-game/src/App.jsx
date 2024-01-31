import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Footer from "./components/Footer";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  const [volumeOn, setVolumeOn] = useState(true);
  const [musicdOn, setMusicOn] = useState(true);
  const [info, setInfo] = useState(false);

  function toggleVolume() {
    setVolumeOn(!volumeOn);
  }

  function toggleMusic() {
    setMusicOn(!musicdOn);
  }

  function toggleInfo() {
    setInfo(!info);
  }
  function startGame() {
    setStartScreen(!startScreen);
    setInfo(false);
  }

  return (
    <div className="app-container">
      {startScreen ? (
        <StartScreen startGame={startGame} />
      ) : (
        <Header startGame={startGame} />
      )}
      <Footer
        toggleInfo={toggleInfo}
        toggleMusic={toggleMusic}
        toggleVolume={toggleVolume}
        info={info}
        musicdOn={musicdOn}
        volumeOn={volumeOn}
      />
    </div>
  );
}

export default App;
