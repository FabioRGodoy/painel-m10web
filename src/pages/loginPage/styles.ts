import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: var(--color-primary);

  height: 100vh;
  padding-top: 5%;

  section {
    display: flex;
    width: 70%;
    height: 90%;
    margin: 0 auto;

    .formContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: var(--color-white);
      width: 100%;
      height: 100%;

      img {
        margin-bottom: 1rem;
        width: 60%;
      }
    }

    .imageContainer {
      display: none;
      width: 40%;
      height: 100%;
      position: relative;

      .imgSpace {
        height: 100%;
      }
      .imgComputer {
        height: 75%;
        width: 115%;

        position: absolute;
        top: 25%;
        right: 10%;
        z-index: 1;
      }
    }
  }
  @media (min-width: 900px) {
    section {
      .imageContainer {
        display: unset;
      }
    }
  }
  @media (max-width: 900px) {
    section {
      .formContainer {
        img {
          width: 50%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    section {
      .formContainer {
        img {
          width: 70%;
        }
      }
    }
  }
`;
