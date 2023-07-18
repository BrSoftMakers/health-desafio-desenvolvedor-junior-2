import { Outlet } from "react-router-dom";
import * as C from "./styles";

export const Dashboard = () => {
  return (
    <C.Container>
      <Outlet />
    </C.Container>
  );
};
