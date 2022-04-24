import styled from "styled-components";
import { flex, spacing, fontSize, colors } from "styles";

export const StyledTechniqueCard = styled.div`
  ${flex("column", "flex-start", "flex-start")};
  height: 100%;
  width: 100%;
  background-color: white;
  padding: ${spacing.xl};

  > h1 {
    font-size: ${fontSize.xxl};
  }

  > ul {
    ${flex("row", "flex-start", "center")};
    gap: ${spacing.m};
    padding-top: ${spacing.s};
    list-style: none;

    li {
      font-size: ${fontSize.s};
      padding: 0.3rem 1rem;
      background-color: ${colors.primary};
      border-radius: 0.4rem;
    }
  }

  > p {
    padding-top: ${spacing.xxl};
    font-size: ${fontSize.l};
  }
`;
