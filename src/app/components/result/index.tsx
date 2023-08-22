import { IQuestionResponse } from "@/app/interfaces/question-response"

interface ResultProps {
  response: IQuestionResponse
}

export const Result = ({response}: ResultProps) => {
  const result: string = response.question.is_correct === response.response ? 'Correct' : 'Incorrect'
  const background = result === 'Correct' ? 'bg-green-100' : 'bg-red-100'
  return (
    <div className={`${background} flex flex-row uppercase p-2 border-t-[1px] border-b-[1px] border-solid border-grey-200`}>
      <label className='mr-4'>{`Q${response.question.order}`}</label>
      <label className='text-right flex-grow-[1]'>{result}</label>
    </div>
  )
}