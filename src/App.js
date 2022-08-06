import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./component/Form/RegisterForm";

import "./style.css";

import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home/Home";
import ExactBookDetail from "./component/Home/ExactBookDetail/ExactBookDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" exact element={<RegisterForm />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/:id" exact element={<ExactBookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
