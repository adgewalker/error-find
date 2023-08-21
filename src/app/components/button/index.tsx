import { ClickableProps } from "@/app/interfaces/clickable-props";

export const Button = ({ classes, children, onClick }: ClickableProps) => {
  return (
    <button onClick={onClick} className={`${classes || ""} hover:bg-blue-100 py-4`}>
      {children}
    </button>
  );
};