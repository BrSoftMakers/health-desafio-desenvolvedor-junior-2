import { StyledButton } from "./styles";

export default function Button({
  text,
  onClick,
  color,
  size,
}: {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
}) {
  return (
    <StyledButton className="button" color={color} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
