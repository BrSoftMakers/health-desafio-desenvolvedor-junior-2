import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { RegisterPage } from "./pages/registerPage";
import { PetsPage } from "./pages/petsPage";
import { CategoriesPage } from "./pages/categories page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/registernewpet" element={<RegisterPage />} />
          <Route path="/pets" element={<PetsPage />} />

          <Route path="/categories" element={<CategoriesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
