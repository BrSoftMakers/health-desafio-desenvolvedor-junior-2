import React from "react";
import Router from "./routes/Routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
     <ToastContainer />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
