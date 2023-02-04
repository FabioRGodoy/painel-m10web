import { useParams } from "react-router-dom";
import { MaintenanceComponent } from "../../components/maintenanceComponent/maintenance";
import { NavBar } from "../../components/navigationBar/navBar";
import { ContactsContainer } from "./styles";

export const ContactPage = () => {
  const { page } = useParams();
  return (
    <>
      {page === "contacts" ? (
        <ContactsContainer>
          <NavBar />
          <MaintenanceComponent />
        </ContactsContainer>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};
