import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: var(--color-white);
  width: 220px;
  height: 100vh;
  padding-top: 30px;
  position: fixed;

  .logo {
    width: 75%;
    margin-left: 25px;
    margin-bottom: 20px;
  }

  nav {
    padding-left: 10px;

    .navButton {
      width: 195px;
      font-weight: 600;
    }
    .activeButton {
      background-color: var(--color-bg-home);
      color: var(--color-black);
      font-weight: 700;
      width: 220px;
    }

    .navButton:hover {
      background-color: var(--color-bg-home);
      color: var(--color-black);
      font-weight: 700;
      width: 220px;
    }

    .activeIcon {
      color: var(--color-primary);
    }

    .icon {
      color: var(--color-black);
    }
  }

  footer {
    display: flex;
    gap: 30px;
    padding-left: 25px;
    position: absolute;
    bottom: 10px;
    a {
      color: var(--color-black);
    }
  }
`;
