import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./screens/home";
import Pets from "./screens/pets/inde";
import Register from "./screens/register";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/pets"
                    element={<Pets />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
