import { FormLogin } from "../../components/formLogin/formLogin";
import "./styles";
import { MainContainer } from "./styles";
import logo from "../../assets/img/logo.jpg";
import imgSpace from "../../assets/img/Rectangle 3.png";
import imgComputer from "../../assets/img/image 6.png";

export const LoginPage = () => {
  return (
    <MainContainer>
      <section>
        <div className="formContainer">
          <img src={logo} alt="logo tropa digital" />
          <FormLogin />
        </div>
        <div className="imageContainer">
          <img className="imgSpace" src={imgSpace} alt="" />
          <img className="imgComputer" src={imgComputer} alt="" />
        </div>
      </section>
    </MainContainer>
  );
};
