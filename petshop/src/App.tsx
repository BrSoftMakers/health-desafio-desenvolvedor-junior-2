import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CreatePet from "./pages/createpet";
import CreateOwner from "./pages/createowner";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePet />} />
        <Route path="/create-owner" element={<CreateOwner />} />
      </Routes>
    </Router>
  );
}

export default App;
