import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/login";
import { HomePage } from "../pages/homePage/home";
import { ContactPage } from "../pages/contactsPage/contacts";
import { ReportsPage } from "../pages/reportsPage/reports";
import { AboutPage } from "../pages/aboutPage/about";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="home/:page" element={<HomePage />} />
      <Route path="tropa/:page" element={<ContactPage />} />
      <Route path="reports/:page" element={<ReportsPage />} />
      <Route path="about/:page" element={<AboutPage />} />
    </Routes>
  );
};
