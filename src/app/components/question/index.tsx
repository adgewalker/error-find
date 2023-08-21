import { IQuestion } from "@/app/interfaces/question"

interface QuestionProps {
  question: IQuestion
}

export const Question = ({question}: QuestionProps) => {
  const questionName = `Q${question.order}`;
  return (<div>
    <h2>{questionName}</h2>
    <div>{question.stimulus}</div>
  </div>)
}