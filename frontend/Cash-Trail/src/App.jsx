import React from "react";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Income from "./pages/Dashboard/Income";
import Expense from "./pages/Dashboard/Expense";
import Home from "./pages/Dashboard/Home";
import {Routes,Route} from "react-router-dom";

const App = () => {
  return (
  <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/income" element={<Income />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </main>  );
};

export default App;
