import "./styles/App.css";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import Footer from "./components/Footer";
import click from "./assets/sounds/click.mp3";
import Instrumental from "./assets/sounds/Instrumental.mp3";
import Hero from "./components/Hero";
import characters from "./characters";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  const [volumeOn, setVolumeOn] = useState(true);
  const [musicdOn, setMusicOn] = useState(false);
  const [info, setInfo] = useState(false);
  const [play, { stop }] = useSound(Instrumental);
  const [difficulty, setDifficulty] = useState("");
  const [charactersToShow, setCharactersToShow] = useState([]);

  useEffect(() => {
    if (musicdOn) {
      play();
    } else {
      stop();
    }
  }, [musicdOn, play, stop]);

  function easyLevel() {
    setDifficulty("easy");
    setCharactersToShow(getRandomCharacters(3));
    console.log(difficulty);
    startGame();
  }
  function mediumLevel() {
    setDifficulty("medium");
    setCharactersToShow(getRandomCharacters(5));
    console.log(difficulty);
    startGame();
  }
  function hardLevel() {
    setDifficulty("hard");
    setCharactersToShow(getRandomCharacters(7));
    console.log(difficulty);
    startGame();
  }

  function getRandomCharacters(count) {
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
    return shuffledCharacters.slice(0, count);
  }

  const reshuffle = () => {
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
    setCharactersToShow(shuffledCharacters.slice(0, charactersToShow.length));
  };
  const handleItemClick = (clickedCharacter) => {
    console.log("Clicked character:", clickedCharacter);
    reshuffle();
    handleButtonClickSound();
  };

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
          easyLevel={easyLevel}
          mediumLevel={mediumLevel}
          hardLevel={hardLevel}
          handleButtonClickSound={handleButtonClickSound}
        />
      ) : (
        <>
          <Header startGame={startGame} />
          <Hero
            charactersToShow={charactersToShow}
            handleItemClick={handleItemClick}
          />
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
