import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Pets } from "../Pages/Pets";
import { Register } from "../Pages/Register";

const RouteMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Pets" element={<Pets />} />
  </Routes>
);

export default RouteMain;
