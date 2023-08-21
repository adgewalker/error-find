import { PropsWithChildren } from "react";

export interface StylableProps extends PropsWithChildren {
  classes?: string;
}