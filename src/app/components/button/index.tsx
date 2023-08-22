import { ClickableProps } from "@/app/interfaces/clickable-props";

export const Button = ({ classes, children, onClick }: ClickableProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ${
        classes || ""
      } `}
    >
      {children}
    </button>
  );
};
