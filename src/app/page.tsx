"use client";

import { Header } from "./components/header";
import data from "./data/quizdata.json";
import { IActivity } from "./interfaces/activity";
import { useState } from "react";
import { Button } from "./components/button";
import { Activity } from "./components/activity";
import { ScoreActivity } from "./components/scoreactivity";
import { processData } from "./utils/data";
import { IRoundResponse } from "./interfaces/round-response";

export default function Home() {
  const [activity, setActivity] = useState<IActivity | undefined>();
  const [responses, setResponses] = useState<Array<IRoundResponse> | undefined>()

  // normalise the data so that every activity has at least one round
  const { name, heading, activities } = processData(data);

  const selectActivity = (activity: IActivity) => {
    setResponses(undefined);
    setActivity(activity);
  };

  const scoreActivity = (responses: Array<IRoundResponse>) => {
    setResponses(responses);
  }

  const goHome = () => {
    setResponses(undefined);
    setActivity(undefined);
  }

  return (
    <main className="flex min-h-screen flex-col items-center sm:items-start p-4">
      <Header />
      <h1 className='text-3xl p-4'>{name}</h1>
      {!activity && !responses && activities?.map((activity: IActivity, index) => (
        <Button
          onClick={() => {
            selectActivity(activity);
          }}
          key={index}
          classes="border-t-[1px] border-b-[1px] border-solid border-gray-300 py-4 w-full"
        >
          {activity.activity_name}
        </Button>
      ))}
      
      {activity && !responses && <Activity activity={activity} onComplete={scoreActivity}/>}

      {activity && responses && <ScoreActivity activity={activity} roundResponses={responses} />}

      {activity && responses && <div className="flex flex-col gap-4 px-6 w-full py-2"><Button onClick={goHome} classes="w-full uppercase">Home</Button></div>}
      
    </main>
  );
}
