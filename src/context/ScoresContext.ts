import { createContext } from "react";
import Score from "../models/Score";

interface ScoresContextModel {
  scores: Score[];
  addScore: (score: Score) => void;
}

const defaultValue: ScoresContextModel = {
  scores: [],
  addScore: () => {},
};

const ScoresContext = createContext(defaultValue);
export default ScoresContext;
