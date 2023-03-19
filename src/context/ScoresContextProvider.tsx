import { ReactNode, useState } from "react";
import Score from "../models/Score";
import ScoresContext from "./ScoresContext";

interface Props {
  children: ReactNode;
}

export default function ScoresContextProvider({ children }: Props) {
  const [scores, setScores] = useState<Score[]>([]);

  function addScore(score: Score): void {
    setScores((prev) => [...prev, score]);
  }

  return (
    <ScoresContext.Provider value={{ scores, addScore }}>
      {children}
    </ScoresContext.Provider>
  );
}
