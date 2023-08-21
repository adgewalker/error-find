import { IQuestionResponse } from "@/app/interfaces/question-response"

interface ResultProps {
  response: IQuestionResponse
}

export const Result = ({response}: ResultProps) => {
  const result: string = response.question.is_correct === response.response ? 'Correct' : 'Incorrect'

  return (
    <div className='flex flex-row uppercase'>
      <label>{`Q${response.question.order}`}</label>
      <label>{result}</label>
    </div>
  )
}