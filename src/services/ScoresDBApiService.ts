import axios from "axios";
import Score from "../models/Score";

const apiKey = process.env.REACT_APP_SCORES_DATABASE_API_KEY;

const headers = {
  "x-apikey": apiKey,
};

export function getScoresFromDatabase(): Promise<any> {
  return axios
    .get("https://hansslog-85ee.restdb.io/rest/highscores", {
      headers: headers,
    })
    .then((res) => res.data);
}

export function addScoreToDatabase(score: Score): Promise<any> {
  return axios
    .post("https://hansslog-85ee.restdb.io/rest/highscores", score, {
      headers: {
        "x-apikey": apiKey,
      },
    })
    .then((res) => res.data);
}
