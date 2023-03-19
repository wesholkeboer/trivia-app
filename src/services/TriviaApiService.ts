import axios from "axios";

export function getTriviaQuestions(params?: any): Promise<any> {
  return axios
    .get("https://the-trivia-api.com/api/questions", {
      params,
    })
    .then((res) => res.data);
}
