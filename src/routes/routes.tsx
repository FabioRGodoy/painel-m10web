import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/login";
import { HomePage } from "../pages/homePage/home";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};
