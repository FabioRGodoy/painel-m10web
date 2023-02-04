import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IInputProps {
  label: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
  name: string;
  type?: string;
  placeholder: string;
  inputPassword: boolean;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonSize: "loginButton" | "navButton";
}

export interface IStaledButtonProps {
  buttonSize: "loginButton" | "navButton";
}

export interface INavBarProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}
