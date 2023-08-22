import { IQuestion } from "@/app/interfaces/question";
import { AnswerButton } from "../answerbutton";
import { Card } from "../card";

interface QuestionProps {
  question: IQuestion;
  answer: (response: boolean) => void
}

export const Question = ({ answer, question }: QuestionProps) => {
  const questionName = `Q${question.order}.`;
  return (
    <Card title={questionName}>
      <p className="font-normal text-gray-700">
        {question.stimulus}
      </p>
      <div className="flex flex-row gap-2 mt-4">
        <AnswerButton
          onClick={() => {
            answer(true);
          }}
          classes='flex-grow-[1]'
        >
          Correct
        </AnswerButton>
        <AnswerButton
          onClick={() => {
            answer(false);
          }}
          classes='flex-grow-[1]'
        >
          Incorrect
        </AnswerButton>
      </div>
    </Card>
  );
};
