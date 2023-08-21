import { IActivity } from "../interfaces/activity";
import { QuizData, QuizDataActivity } from "../interfaces/data";
import { IQuestion } from "../interfaces/question";
import { IRound } from "../interfaces/round";

const hasRounds = (activity: QuizDataActivity) => {
  return "round_title" in activity.questions[0];
};

const processActivities = (
  activities: Array<QuizDataActivity>
): Array<IActivity> => {
  return activities.map((activity: QuizDataActivity) => {
    const rounds: Array<IRound> = hasRounds(activity)
      ? (activity.questions as Array<IRound>)
      : [
          {
            round_title: "Round 1",
            order: 1,
            questions: activity.questions as Array<IQuestion>,
          },
        ];
    return {
      activity_name: activity.activity_name,
      order: activity.order,
      rounds: rounds,
    };
  });
};

export const processData = (data: QuizData) => {
  return {
    ...data,
    activities: processActivities(data.activities),
  };
};
