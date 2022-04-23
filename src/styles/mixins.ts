//Styles
import { css } from "styled-components";

export const flex = (
  direction = "row",
  justify = "flex-start",
  align = "flex-start"
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
};