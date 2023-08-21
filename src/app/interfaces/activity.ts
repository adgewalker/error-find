import { IQuestion } from "./question";
import { IRound } from "./round";

export interface IActivity {
  activity_name: string,
  order: number,
  rounds: Array<IRound>
}