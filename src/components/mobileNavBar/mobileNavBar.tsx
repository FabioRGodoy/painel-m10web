import { AiFillSignal, AiFillWechat, AiFillInfoCircle } from "react-icons/ai";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
import "animate.css";

import { StyledMobileNav } from "./styles";
import logoMobile from "../../assets/img/logoIcon.png";
import { INavBarProps } from "../../interfaces/interfaces";

export const MobileNavBar = ({ setOpenMenu }: INavBarProps) => {
  return (
    <StyledMobileNav className="animate__animated animate__fadeInLeftBig">
      <img src={logoMobile} alt="" />
      <div className="flexNavContainer">
        <AiFillSignal size={25} color="grey" />
        <AiFillWechat size={25} color="grey" />
        <HiOutlineTrendingUp size={25} color="grey" />
        <AiFillInfoCircle size={25} color="grey" />
        <RxDoubleArrowRight
          size={30}
          onClick={() => setOpenMenu(true)}
          className="openNav"
        />
      </div>
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
    </StyledMobileNav>
  );
};
