import { useParams } from "react-router-dom";
import { MaintenanceComponent } from "../../components/maintenanceComponent/maintenance";
import { NavBar } from "../../components/navigationBar/navBar";
import { AboutContainer } from "./styles";

export const AboutPage = () => {
  const { page } = useParams();
  return (
    <>
      {page === "about" ? (
        <AboutContainer>
          <NavBar />
          <MaintenanceComponent />
        </AboutContainer>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};
