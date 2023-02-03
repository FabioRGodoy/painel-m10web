import { IInputProps } from "../../interfaces/interfaces";
import { SpanError } from "../../styles/spanError";
import { StyledInput, InputContainer } from "./styles";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const Input = ({
  label,
  error,
  register,
  name,
  placeholder,
  inputPassword,
}: IInputProps) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const [password] = useState(inputPassword);

  return (
    <>
      <InputContainer>
        <label>{label}:</label>
        <div className="flexContainer">
          <StyledInput
            {...register(name)}
            placeholder={placeholder}
            type={password ? (!visiblePass ? "password" : "text") : "text"}
          />
          {password ? (
            visiblePass ? (
              <AiOutlineEyeInvisible
                onClick={() => setVisiblePass(!visiblePass)}
                className="invisibleEye"
                color="grey"
              />
            ) : (
              <AiOutlineEye
                onClick={() => setVisiblePass(!visiblePass)}
                className="invisibleEye"
                color="grey"
              />
            )
          ) : (
            <></>
          )}
        </div>
      </InputContainer>
      {error && <SpanError>{error.message}</SpanError>}
    </>
  );
};
