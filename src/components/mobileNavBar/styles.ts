import styled from "styled-components";

export const StyledMobileNav = styled.div`
  background-color: white;
  width: 40px;
  height: 100vh;
  padding-top: 20px;
  position: fixed;

  .hidden {
    display: none;
  }

  img {
    margin-bottom: 40px;
  }

  .flexNavContainer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 7px;

    .openNav {
      position: absolute;
      top: 50%;
      left: 30px;
      cursor: pointer;
      color: var(--color-primary);
    }
    .openNav:hover {
      zoom: 1.1;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 7px;
    position: absolute;
    bottom: 10px;
    a {
      color: var(--color-black);
    }
  }
`;
