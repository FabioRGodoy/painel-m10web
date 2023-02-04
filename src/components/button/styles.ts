import styled, { css } from "styled-components";
import { IStaledButtonProps } from "../../interfaces/interfaces";

export const StyledButton = styled.button<IStaledButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 15px;

  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  color: var(--color-white);

  cursor: pointer;
  transition: 0.4s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "loginButton":
        return css`
          padding: 1rem;
          width: 151px;
          height: 40px;
          justify-content: center;
        `;
      case "navButton":
        return css`
          padding: 2rem;
          width: 221px;
          height: 50px;
        `;
    }
  }}
`;
