import styled from "styled-components";
import { colors, flex } from "styles";

export const StyledStack = styled.div`
  ${flex("column", "center", "center")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${colors.secondary};
`;
