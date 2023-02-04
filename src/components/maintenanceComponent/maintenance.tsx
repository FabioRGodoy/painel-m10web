import { MaintenanceContainer } from "./styles";

export const MaintenanceComponent = () => {
  return (
    <MaintenanceContainer>
      <section className="userInfo">
        <h1>
          Olá <span>Usuário</span>
        </h1>
        <div className="line"></div>
      </section>
      <section className="feedback">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>

        <p>
          Nossa aplicação está em fase de desenvolvimento, em breve teremos
          novidades!
        </p>
      </section>
    </MaintenanceContainer>
  );
};
