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
