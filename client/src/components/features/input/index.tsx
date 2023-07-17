import * as C from "./styles";

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...props }: PropsInput) => {
  return (
    <C.Input
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></C.Input>
  );
};
