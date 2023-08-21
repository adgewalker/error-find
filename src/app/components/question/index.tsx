import { IQuestion } from "@/app/interfaces/question";

interface QuestionProps {
  question: IQuestion;
}

export const Question = ({ question }: QuestionProps) => {
  const questionName = `Q${question.order}`;
  return (
    <div className='flex flex-col gap-4'>
      <label className='text-4xl'>{questionName}.</label>
      <label className='bg-blue-100 w-full py-4 px-4 border-t-[1px] border-b-[1px] border-solid border-blue-200  min-h-[100px]'>{question.stimulus}</label>
    </div>
  );
};
