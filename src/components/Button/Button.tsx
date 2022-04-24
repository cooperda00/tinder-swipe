import { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonType } from "./types";

type Props = {
  text: string;
  clickHandler?: () => void;
  type: ButtonType;
  isSubmit?: boolean;
};

export const Button: FC<Props> = ({ clickHandler, text, type, isSubmit }) => {
  return (
    <StyledButton
      onClick={clickHandler}
      buttonType={type}
      type={isSubmit ? "submit" : "button"}
    >
      {text}
    </StyledButton>
  );
};
