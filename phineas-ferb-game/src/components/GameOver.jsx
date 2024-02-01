import "../styles/GameOver.css";
import { motion } from "framer-motion";

const GameOver = ({ restart, result }) => {
  return (
    <motion.div
      className={
        result === "win"
          ? "game-over-container-win"
          : "game-over-container-lose"
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-container">
        <h1 className="game-over-header">GameOver!</h1>
        <p className="game-over-para">
          {result === "win"
            ? "You Won"
            : "You lose! Same character clicked twice!"}
        </p>
      </div>
      <button id="restart" onClick={restart}>
        Restart
      </button>
    </motion.div>
  );
};

export default GameOver;
