import { IQuestionResponse } from "@/app/interfaces/question-response"

interface ResultProps {
  response: IQuestionResponse
}

export const Result = ({response}: ResultProps) => {
  const result: string = response.question.is_correct === response.response ? 'Correct' : 'Incorrect'

  return (
    <div className='flex flex-row uppercase bg-blue-100 p-2 border-t-[1px] border-b-[1px] border-solid border-blue-200'>
      <label className='w-[50%] sm:w-[10%]'>{`Q${response.question.order}`}</label>
      <label className='w-[50%] text-right sm:text-left'>{result}</label>
    </div>
  )
}