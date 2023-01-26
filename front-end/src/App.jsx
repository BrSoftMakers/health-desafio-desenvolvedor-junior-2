import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Loading from "./components/Loading";

const Home = lazy(() => import("./screens/home"));
const Pets = lazy(() => import("./screens/pets"));
const Register = lazy(() => import("./screens/register"));

function App() {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Header />
                <Suspense fallback={<Loading height="90vh" />}>
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
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
