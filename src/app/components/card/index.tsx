import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title: string;
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow w-[300px]">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h5>
      {children}
    </div>
  );
};
