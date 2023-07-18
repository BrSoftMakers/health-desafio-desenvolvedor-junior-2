import { ButtonHTMLAttributes } from "react";
import * as C from "./styles";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ ...props }: buttonProps) => {
  return <C.Button onClick={props.onClick}>{props.name}</C.Button>;
};
