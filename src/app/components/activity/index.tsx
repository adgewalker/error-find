import { IActivity } from "@/app/interfaces/activity";
import { IQuestion } from "@/app/interfaces/question";
import { useEffect, useState } from "react";
import { Question } from "../question";
import { AnswerButton } from "../answerbutton";
import { IRoundResponse } from "@/app/interfaces/round-response";
import { IRound } from "@/app/interfaces/round";

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

  return (
    <div className="w-[50%]">
      <h1 className="text-blue-500">{title}</h1>
      <Question question={question} />
      <div className="flex flex-row gap-2">
        <AnswerButton
          onClick={() => {
            answerQuestion(true);
          }}
        >
          Correct
        </AnswerButton>
        <AnswerButton
          onClick={() => {
            answerQuestion(false);
          }}
        >
          Incorrect
        </AnswerButton>
      </div>
    </div>
  );
};

/*


const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Array<IQuestionResponse>>([]);
  
  
  
  
  const question = activity.questions[questionIndex];

  const answerQuestion = (answer: boolean) => {
    setResponses((prev: Array<IQuestionResponse>) => {
      return [...prev, { question, answer }];
    });
  };

  // this is triggered whenever a question is answered
  useEffect(() => {
    // ... but also the first time the component is loaded
    // in which case do nothing
    if (responses.length === 0) {
      return;
    }

    if (questionIndex < activity.questions.length - 1) {
      // move to the next question
      setQuestionIndex((prev: number) => prev + 1);
    } else {
      // or finish the activity by passing back the responses
      onComplete(responses);
    }
  }, [responses]);

  return (
    <div className="w-[50%]">
      <h1 className="text-blue-500">{activity.activity_name}</h1>
      <Question question={question} />
      <div className="flex flex-row gap-2">
        <AnswerButton
          onClick={() => {
            answerQuestion(true);
          }}
        >
          Correct
        </AnswerButton>
        <AnswerButton
          onClick={() => {
            answerQuestion(false);
          }}
        >
          Incorrect
        </AnswerButton>
      </div>
    </div>
  );

  */
