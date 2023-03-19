import { useState, useEffect } from "react";
import "./TriviaQuestion.css";

interface Props {
  question: any;
  setCorrectAnswers: any;
}

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const TriviaQuestion = ({ question, setCorrectAnswers }: Props) => {
  const [attempted, setAttempted] = useState<boolean>(false);
  const [guessed, setGuessed] = useState<string>("");
  const [options] = useState<string[]>(
    shuffleArray([...question.incorrectAnswers, question.correctAnswer])
  );

  // const options = [...question.incorrectAnswers, question.correctAnswer];
  // useEffect(() => {
  //   shuffleArray(options);
  // }, []);

  const handleGuess = (e: any, option: string) => {
    e.preventDefault();
    if (option === question.correctAnswer) {
      setCorrectAnswers((prev: number) => prev + 1);
    }
    setAttempted(true);
    setGuessed(option);
  };

  return (
    <li className='TriviaQuestion'>
      <p className={`question  ${attempted ? "attempted" : ""}`}>
        {question.question}
      </p>
      <div className='answers'>
        {options.map((option) => {
          return (
            <p
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
            </p>
          );
        })}
      </div>
    </li>
  );
};

export default TriviaQuestion;
