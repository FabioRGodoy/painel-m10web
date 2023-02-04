import styled from "styled-components";

export const MaintenanceContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  margin-left: 40px;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
    color: var(--color-text-grey);
    font-weight: 400;

    span {
      font-weight: 700;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    border: 1px solid #00000010;
  }

  .feedback {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 100px;
  }
  @media (min-width: 900px) {
    margin-left: 220px;
    padding: 40px;
  }
`;
