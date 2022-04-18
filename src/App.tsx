import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard";
import HomePage from "./pages/homepage";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/signup" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
