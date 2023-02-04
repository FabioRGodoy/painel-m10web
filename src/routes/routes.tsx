import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/loginPage/login";
import { HomePage } from "../pages/homePage/home";
import { ContactPage } from "../pages/contactsPage/contacts";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="home/:page" element={<HomePage />} />
      <Route path="tropa/:page" element={<ContactPage />} />
    </Routes>
  );
};
