import styled, { css } from "styled-components";

interface IStaledButtonProps {
  buttonSize: "loginButton" | "navButton";
}

export const StyledButton = styled.button<IStaledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
        `;
      case "navButton":
        return css`
          padding: 2rem;
          width: 211px;
          height: 50px;
        `;
    }
  }}

  &:hover {
    filter: brightness(1.2);
  }
`;
