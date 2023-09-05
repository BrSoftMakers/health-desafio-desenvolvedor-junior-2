import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./styles";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <StyledBackButton className="button" onClick={() => navigate(-1)}>
      <MdKeyboardArrowLeft className="icon"/>
      Voltar
    </StyledBackButton>
  );
}
