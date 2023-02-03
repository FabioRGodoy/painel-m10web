import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 15px;
  }
  .flexContainer {
    position: relative;

    .invisibleEye {
      position: absolute;
      right: 1%;
      top: 35%;
    }
  }
`;
export const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  height: 44px;
  width: 100%;
  padding-left: 10px;
`;
