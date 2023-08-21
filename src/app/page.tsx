"use client";

import Link from "next/link";
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
  const { name, activities } = processData(data);

  const selectActivity = (activity: IActivity) => {
    setResponses(undefined);
    setActivity(activity);
  };

  const scoreActivity = (responses: Array<IRoundResponse>) => {
    setResponses(responses);
    console.log(responses);
  }

  const goHome = () => {
    setResponses(undefined);
    setActivity(undefined);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <Header />
      <h1>{name}</h1>
      {!activity && !responses && activities?.map((activity: IActivity, index) => (
        <Button
          onClick={() => {
            selectActivity(activity);
          }}
          key={index}
        >
          {activity.activity_name}
        </Button>
      ))}
      
      {activity && !responses && <Activity activity={activity} onComplete={scoreActivity}/>}

      {activity && responses && <ScoreActivity activity={activity} roundResponses={responses} />}

      {activity && responses && <Button onClick={goHome} classes="uppercase">Home</Button>}

    </main>
  );
}
