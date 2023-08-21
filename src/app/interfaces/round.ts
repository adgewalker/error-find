import { IQuestion } from "./question";

export interface IRound {
  order:number,
  questions: Array<IQuestion>,
  round_title: string
}