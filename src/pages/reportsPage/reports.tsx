import { useParams } from "react-router-dom";
import { MaintenanceComponent } from "../../components/maintenanceComponent/maintenance";
import { NavBar } from "../../components/navigationBar/navBar";
import { ReportsContainer } from "./styles";

export const ReportsPage = () => {
  const { page } = useParams();
  return (
    <>
      {page === "reports" ? (
        <ReportsContainer>
          <NavBar />
          <MaintenanceComponent />
        </ReportsContainer>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};
