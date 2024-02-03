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
import GameOver from "./components/GameOver";

function App() {
  const [startScreen, setStartScreen] = useState(true);
  const [game, setGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");
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
    setInitialCharacters(getRandomCharacters(6));
    setCharactersToShow(initialCharacters.slice(0, 3));
    setClickedCharacters([]);
    startGame();
  }
  function mediumLevel() {
    setDifficulty("medium");
    setInitialCharacters(getRandomCharacters(10));
    setCharactersToShow(initialCharacters.slice(0, 5));
    setClickedCharacters([]);
    startGame();
  }
  function hardLevel() {
    setDifficulty("hard");
    setInitialCharacters(getRandomCharacters(14));
    setCharactersToShow(initialCharacters.slice(0, 7));
    setClickedCharacters([]);
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
    if (clickedCharacters.includes(clickedCharacter)) {
      console.log("You lose! Same character clicked twice!");
      setGame(false);
      setGameOver(true);
      setResult("lose");

      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem("bestScore", score.toString());
      }
    } else {
      setScore(score + 1);
      setClickedCharacters([...clickedCharacters, clickedCharacter]);
      reshuffle();
      handleButtonClickSound();

      if (score + 1 === initialCharacters.length - 2) {
        setGame(false);
        setGameOver(true);
        setResult("win");
      }
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
    setStartScreen(false);
    setInfo(false);
    setGame(true);
    handleButtonClickSound();
    setScore(0);
  }

  function restart() {
    setStartScreen(true);
    setGameOver(false);
    setGame(false);
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
          <Header restart={restart} score={score} bestScore={bestScore} />
          {game ? (
            <Hero
              initialCharacters={initialCharacters}
              score={score}
              charactersToShow={charactersToShow}
              handleItemClick={handleItemClick}
            />
          ) : (
            <GameOver restart={restart} result={result} />
          )}
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
