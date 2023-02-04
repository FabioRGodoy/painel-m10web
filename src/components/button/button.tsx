import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonSize: "loginButton" | "navButton";
}

export const Button = ({ children, buttonSize, ...rest }: IButtonProps) => {
  return (
    <>
      <StyledButton buttonSize="loginButton" {...rest}>
        {children}
      </StyledButton>
    </>
  );
};
