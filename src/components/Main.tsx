import "./Main.css";
import { FormEvent, useContext, useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import TriviaQuestion from "./TriviaQuestion";
import ScoresContext from "../context/ScoresContext";
import { useNavigate } from "react-router-dom";
import UsernameForm from "./UsernameForm";

const Main = () => {
  const { addScore } = useContext(ScoresContext);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [answeredQuestionsCount, setAnsweredQuestionsCount] =
    useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [nameEntered, setNameEntered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmitUsername = (e: FormEvent) => {
    e.preventDefault();
    setNameEntered(true);
  };

  const handleSubmitScore = (e: FormEvent) => {
    e.preventDefault();
    addScore({
      name: username,
      numberCorrect: correctAnswers,
      numberAttempted: questions.length,
    });
    navigate("/end");
  };

  return (
    <main className='Main'>
      {!nameEntered && (
        <UsernameForm
          username={username}
          setUsername={setUsername}
          handleSubmitUsername={handleSubmitUsername}
        />
      )}

      {!questions.length && nameEntered && (
        <SearchForm setQuestions={setQuestions} />
      )}
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
              setAnsweredQuestionsCount={setAnsweredQuestionsCount}
            />
          );
        })}
      {answeredQuestionsCount === questions.length && questions.length > 0 && (
        <button onClick={handleSubmitScore}>go to results page</button>
      )}
    </main>
  );
};

export default Main;
