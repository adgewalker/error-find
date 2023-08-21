import { ClickableProps } from "@/app/interfaces/clickable-props";
import { Button } from "../button";

export const AnswerButton = ({ classes, children, onClick }: ClickableProps) => {
  return (
    <Button onClick={onClick} classes={`${classes || ""} uppercase text-sm`}>
      {children}
    </Button>
  );
};