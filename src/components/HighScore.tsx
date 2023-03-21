import { useEffect } from "react";
import Score from "../models/Score";
import "./HighScore.css";

interface Props {
  highScore: Score;
}

const HighScore = ({ highScore }: Props) => {
  useEffect(() => {
    console.log(highScore);
  }, []);
  return <div className='HighScore'>HighScore works</div>;
};

export default HighScore;
