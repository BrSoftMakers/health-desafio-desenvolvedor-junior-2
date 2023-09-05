import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import PetsList from "../pages/petsList/petsList";
import EditPet from "../pages/editPet/editPet";
import NotFound from "../components/notFound/notFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/register" Component={Register} />
        <Route path="/pets" Component={PetsList} />
        <Route path="/pet/update/:id" Component={EditPet} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
