import React, { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <>
      <StyledButton {...rest}>{children}</StyledButton>
    </>
  );
};
