import styled from "styled-components";
import { colors } from "styles";
import { flex } from "styles/mixins";

export const StyledHome = styled.section`
  ${flex("column", "center", "center")};
  height: 100vh;
  width: 100vw;
  background-color: ${colors.secondary};
`;

export const StyledCardContainer = styled.div`
  height: 100vh;
  width: 100vw;
  max-height: 90rem;
  max-width: 45rem;
  background-color: white;
  border-radius: 0.4rem;
`;
