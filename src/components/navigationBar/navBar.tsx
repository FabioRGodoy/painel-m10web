import { NavContainer } from "./styles";
import logo from "../../assets/img/logo.jpg";
import { Button } from "../button/button";

import { AiFillSignal, AiFillWechat, AiFillInfoCircle } from "react-icons/ai";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";

export const NavBar = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  return (
    <NavContainer>
      <img className="logo" src={logo} alt="Tropa Digital logo" />

      <nav>
        <Button
          onClick={() => navigate("/home/dashboard")}
          className={page === "dashboard" ? "activeButton" : "navButton"}
          buttonSize="navButton"
        >
          <AiFillSignal
            className={page === "dashboard" ? "activeIcon" : "icon"}
            size={15}
          />
          Início
        </Button>

        <Button
          onClick={() => navigate("/tropa/contacts")}
          className={page === "contact" ? "activeButton" : "navButton"}
          buttonSize="navButton"
        >
          <AiFillWechat
            className={page === "contact" ? "activeIcon" : "icon"}
            size={20}
          />
          Contatos
        </Button>

        <Button
          className={page === "reports" ? "activeButton" : "navButton"}
          buttonSize="navButton"
        >
          <HiOutlineTrendingUp
            className={page === "reports" ? "activeIcon" : "icon"}
            size={20}
          />
          Relatórios
        </Button>

        <Button
          className={page === "about" ? "activeButton" : "navButton"}
          buttonSize="navButton"
        >
          <AiFillInfoCircle
            className={page === "about" ? "activeIcon" : "icon"}
            size={20}
          />
          Sobre nós
        </Button>

        <footer>
          <a href="https://github.com/FabioRGodoy">
            <SlSocialGithub size={25} />
          </a>

          <a href="https://www.linkedin.com/in/fabiogodoyy/">
            <SlSocialLinkedin size={25} />
          </a>

          <a href="https://www.linkedin.com/in/fabiogodoyy/">
            <SlSocialTwitter size={25} />
          </a>
        </footer>
      </nav>
    </NavContainer>
  );
};
