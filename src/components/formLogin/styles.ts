import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 20px;
  width: 500px;

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
