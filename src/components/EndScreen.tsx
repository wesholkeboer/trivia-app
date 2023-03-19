import "./EndScreen.css";
import { useContext, useEffect, useState } from "react";
import ScoresContext from "../context/ScoresContext";
import { Link } from "react-router-dom";

// const scores = [
//   {
//     name: "fasdfa",
//     numberCorrect: 1,
//     numberAttempted: 10,
//   },
// ];

const EndScreen = () => {
  const { scores } = useContext(ScoresContext);
  const [xAndOArray, setXAndOArray] = useState<string[]>([]);
  const [percentage] = useState<number>(
    scores[scores.length - 1].numberCorrect /
      scores[scores.length - 1].numberAttempted
  );

  const xAndOMaker = (percentage: number) => {
    for (let i = 0; i < 1000; i++) {
      Math.random() < percentage
        ? setXAndOArray((prev) => [...prev, "O"])
        : setXAndOArray((prev) => [...prev, "X"]);
    }
  };

  useEffect(() => {
    if (scores.length > 0) {
      xAndOMaker(percentage);
    }
  }, []);

  return (
    <div className='EndScreen'>
      <div className='modal'>
        <p>hey, {scores[scores.length - 1].name}</p>
        <p>
          you correctly answered {scores[scores.length - 1].numberCorrect} of{" "}
          {scores[scores.length - 1].numberAttempted} total questions
        </p>
        <p>
          {percentage < 0.5
            ? "I feel like you could hvae done better"
            : "nice job as always"}
        </p>
        <Link to='/'>start over</Link>
      </div>
      <h4 className='xAndOArray'>
        {xAndOArray.map((item, index) => {
          return (
            <span className={item} key={index}>
              {item}
            </span>
          );
        })}
      </h4>
    </div>
  );
};

export default EndScreen;
