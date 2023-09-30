import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AuthRoutes from "./routes/AuthRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import Register from "./pages/Signup/Register";

const App: React.FC = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/*" element={<AuthRoutes/>}/> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
