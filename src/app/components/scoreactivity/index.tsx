import { IActivity } from "@/app/interfaces/activity";
import { Result } from "../result";
import { IRoundResponse } from "@/app/interfaces/round-response";
import { IQuestionResponse } from "@/app/interfaces/question-response";
import { RoundResults } from "../round-results";
import { Card } from "../card";

interface ScoreActivityProps {
  activity: IActivity;
  roundResponses: Array<IRoundResponse>;
}

export const ScoreActivity = ({
  activity,
  roundResponses,
}: ScoreActivityProps) => {
  const singleRound = activity.rounds.length === 1;
  return (
    <div className="flex flex-col gap-4 px-6 items-center sm:items-start">
      <h1 className='text-2xl'>{activity.activity_name}</h1>
      <Card title='Results'>
        {singleRound && (
          <RoundResults responses={roundResponses[0].questionResponses} />
        )}
        {!singleRound &&
          roundResponses.map((roundResponse: IRoundResponse, index: number) => (
            <RoundResults
              key={index}
              responses={roundResponse.questionResponses}
              title={roundResponse.round_title}
            />
          ))}
      </Card>
      
      
      
    </div>
  );
};
