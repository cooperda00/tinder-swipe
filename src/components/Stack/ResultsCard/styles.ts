import styled from "styled-components";
import { flex, fontSize, spacing } from "styles";

export const StyledResultsCard = styled.div`
  ${flex("column", "flex-start", "center")};
  background: white;
  border-radius: 0.4rem;
  padding: ${spacing.xl};

  > h2 {
    font-size: ${fontSize.xxl};
  }

  > p {
    font-size: ${fontSize.xl};
  }

  > ul {
    list-style-type: none;
    padding-top: ${spacing.m};
    padding-left: 0;

    > li {
      font-size: ${fontSize.m};
    }
  }
`;
