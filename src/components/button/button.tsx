import { IButtonProps } from "../../interfaces/interfaces";
import { StyledButton } from "./styles";

export const Button = ({ children, buttonSize, ...rest }: IButtonProps) => {
  return (
    <>
      <StyledButton buttonSize="loginButton" {...rest}>
        {children}
      </StyledButton>
    </>
  );
};
