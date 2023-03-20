import { useState, useEffect } from "react";
import shuffleArray from "../fixtures/shuffleArray";
import "./TriviaQuestion.css";

interface Props {
  question: any;
  setCorrectAnswers: any;
  answeredQuestionsCount: number;
  setAnsweredQuestionsCount: any;
  index: number;
}

const TriviaQuestion = ({
  question,
  setCorrectAnswers,
  answeredQuestionsCount,
  setAnsweredQuestionsCount,
  index,
}: Props) => {
  const [attempted, setAttempted] = useState<boolean>(false);
  const [guessed, setGuessed] = useState<string>("");
  const [options] = useState<string[]>(
    shuffleArray([...question.incorrectAnswers, question.correctAnswer])
  );
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  useEffect(() => {
    if (answeredQuestionsCount === index) {
      setShowQuestion(true);
    }
  }, [answeredQuestionsCount, index]);

  const handleGuess = (e: any, option: string) => {
    e.preventDefault();
    if (option === question.correctAnswer) {
      setCorrectAnswers((prev: number) => prev + 1);
    }
    setAttempted(true);
    setGuessed(option);
    setAnsweredQuestionsCount((prev: number) => prev + 1);
  };

  return (
    <li className={`TriviaQuestion ${showQuestion ? "show" : "hide"}`}>
      <p className={`question  ${attempted ? "attempted" : ""}`}>
        {question.question}
      </p>
      <ul className='answers'>
        {options.map((option) => {
          return (
            <li
              key={option}
              onClick={(e) => handleGuess(e, option)}
              className={`answer ${attempted ? "attempted" : ""} ${
                option === question.correctAnswer ? "correct" : "incorrect"
              } ${
                option !== question.correctAnswer && option === guessed
                  ? "guessed"
                  : ""
              }`}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default TriviaQuestion;
