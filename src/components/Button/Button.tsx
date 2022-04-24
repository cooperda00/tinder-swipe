import { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonType } from "./types";

type Props = {
  text: string;
  clickHandler: () => void;
  type: ButtonType;
};

export const Button: FC<Props> = ({ clickHandler, text, type }) => {
  return (
    <StyledButton onClick={clickHandler} buttonType={type}>
      {text}
    </StyledButton>
  );
};
