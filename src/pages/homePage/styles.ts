import styled from "styled-components";

export const HomeContainer = styled.main`
  background-color: var(--color-bg-home);
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  width: 90%;
  padding: 40px;
  margin-left: 220px;

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

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
`;
