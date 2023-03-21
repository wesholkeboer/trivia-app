import "./HighScoresContainer.css";
import { useEffect, useState } from "react";
import { getScoresFromDatabase } from "../services/ScoresDBApiService";
import Score from "../models/Score";
import HighScore from "./HighScore";

const HighScoresContainer = () => {
  const [highscores, setHighscores] = useState<Score[]>([]);

  useEffect(() => {
    getScoresFromDatabase().then((res) => {
      setHighscores(res);
    });
  }, []);

  return (
    <div className='HighScoresContainer'>
      <h2>high scores</h2>
      <ol>
        {highscores.map((highScore) => {
          return <HighScore highScore={highScore} key={highScore._id} />;
        })}
      </ol>
    </div>
  );
};

export default HighScoresContainer;
