export default interface Score {
  name: string;
  numberCorrect: number;
  numberAttempted: number;
  categories: string;
  difficulty: string;
  limit: string;
  _id?: string;
}
