import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroPage from "./pages/cadastro";
import { LoginPage } from "./pages/login";
import { MainPage } from "./pages/main";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
