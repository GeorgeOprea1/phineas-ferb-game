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
  const [initialCharacters, setInitialCharacters] = useState([]);
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (musicdOn) {
      play();
    } else {
      stop();
    }
  }, [musicdOn, play, stop]);

  useEffect(() => {
    setInitialCharacters(getRandomCharacters(14));
  }, []);

  function easyLevel() {
    setDifficulty("easy");
    setInitialCharacters(getRandomCharacters(5));
    setCharactersToShow(initialCharacters.slice(0, 3));
    setClickedCharacters([]);
    console.log(difficulty);
    console.log(initialCharacters);
    startGame();
  }
  function mediumLevel() {
    setDifficulty("medium");
    setInitialCharacters(getRandomCharacters(9));
    setCharactersToShow(initialCharacters.slice(0, 5));
    setClickedCharacters([]);
    console.log(initialCharacters);
    console.log(difficulty);
    startGame();
  }
  function hardLevel() {
    setDifficulty("hard");
    setInitialCharacters(getRandomCharacters(13));
    setCharactersToShow(initialCharacters.slice(0, 7));
    setClickedCharacters([]);
    console.log(difficulty);
    console.log(initialCharacters);
    startGame();
  }

  function getRandomCharacters(count) {
    const shuffledCharacters = characters.sort(() => Math.random() - 0.5);
    return shuffledCharacters.slice(0, count);
  }

  const reshuffle = () => {
    const shuffledCharacters = initialCharacters.sort(
      () => Math.random() - 0.5
    );
    setInitialCharacters(shuffledCharacters);

    setCharactersToShow(shuffledCharacters.slice(0, charactersToShow.length));
  };

  const handleItemClick = (clickedCharacter) => {
    console.log("Clicked character:", clickedCharacter);

    if (clickedCharacters.includes(clickedCharacter)) {
      console.log("You lose! Same character clicked twice!");

      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem("bestScore", score.toString());
      }
    } else {
      setScore(score + 1);

      setClickedCharacters([...clickedCharacters, clickedCharacter]);
      reshuffle();
      handleButtonClickSound();
    }
  };

  useEffect(() => {
    const storedBestScore = localStorage.getItem("bestScore");
    if (storedBestScore) {
      setBestScore(parseInt(storedBestScore, 10));
    }
  }, []);

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
    setScore(0);
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
          <Header startGame={startGame} score={score} bestScore={bestScore} />
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
