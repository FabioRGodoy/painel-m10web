import styled from "styled-components";

export const StyledCard = styled.li`
  padding: 10px;
  min-width: 220px;

  overflow: hidden;

  width: 30%;
  height: 30%;
  background-color: var(--color-white);
  border-radius: var(--border-radius);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);

  img {
    width: 100%;
    height: 100px;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
  }
`;
