import "../styles/GameOver.css";

const GameOver = ({ restart }) => {
  return (
    <div className="game-over-container">
      <div className="text-container">
        <h1 className="game-over-header">GameOver!</h1>
        <p className="game-over-para">
          You lose! Same character clicked twice!
        </p>
      </div>
      <button id="restart" onClick={restart}>
        Restart
      </button>
    </div>
  );
};

export default GameOver;
