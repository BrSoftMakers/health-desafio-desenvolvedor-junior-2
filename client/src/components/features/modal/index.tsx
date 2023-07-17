import * as C from "./styles";

interface modalProps {
  message: string;
}

export const Modal = ({ ...props }: modalProps) => {
  return (
    <C.Modal>
      <h2>{props.message}</h2>
    </C.Modal>
  );
};
