import "./Main.css";
import { FormEvent, useContext, useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import TriviaQuestion from "./TriviaQuestion";
import ScoresContext from "../context/ScoresContext";
import { useNavigate } from "react-router-dom";
import UsernameForm from "./UsernameForm";
import SearchRequest from "../models/SearchRequest";
import { addScoreToDatabase } from "../services/ScoresDBApiService";

const Main = () => {
  const { addScore } = useContext(ScoresContext);
  const [answeredQuestionsCount, setAnsweredQuestionsCount] =
    useState<number>(0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [nameEntered, setNameEntered] = useState<boolean>(false);
  const [questions, setQuestions] = useState([]);
  const [selections, setSelections] = useState<SearchRequest>({});
  const [username, setUsername] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmitUsername = (e: FormEvent) => {
    e.preventDefault();
    setNameEntered(true);
  };

  const handleSubmitScore = (e: FormEvent) => {
    e.preventDefault();
    let newScore = {
      name: username,
      numberCorrect: correctAnswers || 0,
      numberAttempted: questions.length,
      categories: selections.categories || "mix",
      difficulty: selections.difficulty || "mix",
      limit: selections.limit || "10",
    };
    addScore(newScore);
    addScoreToDatabase(newScore);
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
        <SearchForm setQuestions={setQuestions} setSelections={setSelections} />
      )}
      <ul className='questionsList'>
        {questions &&
          questions.map((question, index) => {
            return (
              <TriviaQuestion
                question={question}
                key={index}
                index={index}
                setCorrectAnswers={setCorrectAnswers}
                answeredQuestionsCount={answeredQuestionsCount}
                setAnsweredQuestionsCount={setAnsweredQuestionsCount}
              />
            );
          })}
      </ul>

      {answeredQuestionsCount === questions.length && questions.length > 0 && (
        <button className='resultsPageButton' onClick={handleSubmitScore}>
          click here to go and see your results
        </button>
      )}
    </main>
  );
};

export default Main;
