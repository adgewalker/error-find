import { IActivity } from "@/app/interfaces/activity";
import { IQuestion } from "@/app/interfaces/question";
import { useEffect, useState } from "react";
import { Question } from "../question";
import { AnswerButton } from "../answerbutton";
import { IRoundResponse } from "@/app/interfaces/round-response";
import { IRound } from "@/app/interfaces/round";
import { Card } from "../card";
import { Button } from "../button";

interface ActivityProps {
  activity: IActivity;
  onComplete: (responses: Array<IRoundResponse>) => void;
}

export const Activity = ({ activity, onComplete }: ActivityProps) => {
  const [responses, setResponses] = useState<Array<IRoundResponse>>(
    activity.rounds.map((round: IRound) => {
      return { round_title: round.round_title, questionResponses: [] };
    })
  );

  const [roundIndex, setRoundIndex] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showRoundSplash, setShowRoundSplash] = useState<boolean>(false);

  const singleRound = activity.rounds.length === 1;
  const round = activity.rounds[roundIndex];
  const title = `${activity.activity_name}${
    !singleRound ? `/${round.round_title}` : ""
  }`;
  const question = round.questions[questionIndex];

  const answerQuestion = (response: boolean) => {
    setResponses((prev: Array<IRoundResponse>) => {
      const updated = [...prev];
      updated[roundIndex].questionResponses.push({
        question,
        response,
      });
      return updated;
    });
  };

  // this is triggered whenever a question is answered
  useEffect(() => {
    // ... but also the first time the component is loaded
    // in which case, do nothing
    if (responses[0].questionResponses.length === 0) {
      return;
    }

    if (questionIndex < round.questions.length - 1) {
      // move to the next question
      setQuestionIndex((prev: number) => prev + 1);
    } else {
      // attempt to move to the next round
      if (roundIndex < activity.rounds.length - 1) {
        setRoundIndex((prev: number) => prev + 1);
        setQuestionIndex(0);
      } else {
        // or finish the activity by passing back the responses
        onComplete(responses);
      }
    }
  }, [responses]);

  // whenever the round index changes, show the round splash screen
  useEffect(() => {
    if (activity.rounds.length > 1) {
      setShowRoundSplash(true);
    }
  }, [roundIndex]);

  const startRound = () => {
    setShowRoundSplash(false);
  }

  // determine the progress through the round
  const progress = `${Math.round(100 * questionIndex / round.questions.length)}%`;

  return (
    <div className="flex flex-col gap-4 px-4 items-center sm:items-start">
      <h1 className="text-2xl">{title}</h1>
      {showRoundSplash && 
        <Card title={round.round_title}>
          <div className='w-full text-right'>
            <Button classes='mt-4' onClick={startRound}>Start</Button>
          </div>
        </Card>}
      {!showRoundSplash && <Question question={question} answer={answerQuestion} />}
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: progress}}></div>
      </div>
    </div>
  );
};
