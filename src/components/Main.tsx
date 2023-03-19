import "./Main.css";
import { useState } from "react";
import SearchForm from "./SearchForm";
import TriviaQuestion from "./TriviaQuestion";

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  return (
    <main className='Main'>
      {!questions.length && <SearchForm setQuestions={setQuestions} />}
      {!!questions.length && (
        <p>
          correct answers: {correctAnswers} / {questions.length}
        </p>
      )}
      {questions &&
        questions.map((question, index) => {
          return (
            <TriviaQuestion
              question={question}
              key={index}
              setCorrectAnswers={setCorrectAnswers}
            />
          );
        })}
    </main>
  );
};

export default Main;
