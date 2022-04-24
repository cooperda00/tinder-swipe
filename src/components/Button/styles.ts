import styled from "styled-components";
import { boxShadow, colors, fontSize } from "styles";
import { ButtonType } from "./types";

export const StyledButton = styled.button<{ buttonType: ButtonType }>`
  border: none;
  background-color: ${(props) =>
    props.buttonType === "success" ? colors.success : colors.warning};
  font-size: ${fontSize.l};
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  box-shadow: ${boxShadow};
`;
