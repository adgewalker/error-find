import { IQuestionResponse } from "@/app/interfaces/question-response";
import { IRoundResponse } from "@/app/interfaces/round-response";
import { Result } from "../result";
import { Fragment } from "react";

interface RoundResultsProps {
  title?: string;
  responses: Array<IQuestionResponse>;
}

export const RoundResults = ({ responses, title }: RoundResultsProps) => {
  return (
    <div className='flex flex-col'>
      {title && <div>{title}</div>}
      {responses.map((response: IQuestionResponse, index: number) => <Result key={index} response={response} />)}
    </div>
  )
};
