import { NavBar } from "../../components/navigationBar/navBar";
import { ContentContainer, HomeContainer } from "./styles";
import { database } from "../../utils/db";
import { CardComponent } from "../../components/card/card";
import { useParams } from "react-router-dom";

export const HomePage = () => {
  const { page } = useParams();
  return (
    <>
      {page === "dashboard" ? (
        <HomeContainer>
          <NavBar />
          <ContentContainer>
            <section>
              <h1>
                Olá <span>Usuário</span>
              </h1>
              <div className="line"></div>
              <section>
                <ul>
                  {database.map((item) => {
                    return (
                      <CardComponent
                        key={item.id}
                        title={item.title}
                        description={item.description}
                      />
                    );
                  })}
                </ul>
              </section>
            </section>
          </ContentContainer>
        </HomeContainer>
      ) : (
        <h1>404 NOT FOUND</h1>
      )}
    </>
  );
};
