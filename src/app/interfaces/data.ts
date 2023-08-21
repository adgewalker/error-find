import { IQuestion } from "./question";
import { IRound } from "./round";

export interface QuizDataActivity {
  activity_name: string;
  order:number;
  questions: Array<IQuestion | IRound>
}

export interface QuizData {
  name: string,
  heading: string,
  activities: Array<QuizDataActivity>
}