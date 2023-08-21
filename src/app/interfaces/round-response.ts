import { IQuestionResponse } from "./question-response";
import { IRound } from "./round";

export interface IRoundResponse {
  round_title: string;
  questionResponses: Array<IQuestionResponse>;
}