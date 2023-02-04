import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 10px;
  width: 80%;

  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 1.57rem;
    color: var(--color-text-grey);

    span {
      color: var(--color-primary);
    }
  }
`;
