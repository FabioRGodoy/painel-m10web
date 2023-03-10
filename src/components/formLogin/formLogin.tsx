import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/button/button";
import { Input } from "../../components/input/input";
import { ILoginForm } from "../../interfaces/interfaces";
import { formSchema } from "../../schemas/schemas";

import { StyledForm } from "./styles";

export const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(formSchema),
  });

  const onSubmitLogin = (data: ILoginForm) => {
    // API REQUEST HERE
    console.log(data);
    const page = "dashboard";
    navigate(`/home/${page}`);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmitLogin)}>
      <h2>
        Bem Vindo ao <span>painel</span>
      </h2>

      <Input
        register={register}
        error={errors.email}
        name="email"
        label="Email"
        inputPassword={false}
        placeholder="Digite seu e-mail"
      />

      <Input
        register={register}
        error={errors.password}
        name="password"
        label="Password"
        inputPassword={true}
        placeholder="Digite sua senha"
      />

      <Button buttonSize="loginButton">Acessar</Button>
    </StyledForm>
  );
};
