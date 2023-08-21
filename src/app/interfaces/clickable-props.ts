import { MouseEventHandler } from "react";
import { StylableProps } from "./stylable-props";

export interface ClickableProps extends StylableProps {
  onClick: MouseEventHandler;
}