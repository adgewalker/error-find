export interface IQuestion {
  feedback: string,
  is_correct: boolean,
  order: number,
  stimulus: string,
  user_answers: Array<any>
}