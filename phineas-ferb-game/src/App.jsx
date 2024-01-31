import "./styles/App.css";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Footer from "./components/Footer";
import click from "./assets/sounds/click.mp3";
import Instrumental from "./assets/sounds/Instrumental.mp3";
import Hero from "./components/Hero";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  const [volumeOn, setVolumeOn] = useState(true);
  const [musicdOn, setMusicOn] = useState(false);
  const [info, setInfo] = useState(false);
  const [play, { stop }] = useSound(Instrumental);

  useEffect(() => {
    if (musicdOn) {
      play();
    } else {
      -stop();
    }
  }, [musicdOn, play, stop]);

  function handleButtonClickSound() {
    if (volumeOn) {
      const clickSound = new Audio(click);
      clickSound.play();
    }
  }

  function toggleVolume() {
    setVolumeOn((prevVolumeOn) => !prevVolumeOn);
    handleButtonClickSound();
  }

  function toggleMusic() {
    setMusicOn((prevMusicOn) => !prevMusicOn);
    handleButtonClickSound();
  }

  function toggleInfo() {
    setInfo(!info);
    handleButtonClickSound();
  }
  function startGame() {
    setStartScreen(!startScreen);
    setInfo(false);
    handleButtonClickSound();
  }

  return (
    <div className="app-container">
      {startScreen ? (
        <StartScreen
          startGame={startGame}
          handleButtonClickSound={handleButtonClickSound}
        />
      ) : (
        <>
          <Header startGame={startGame} />
          <Hero />
        </>
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
