import { Video } from "components/Video";
import { FC } from "react";
import styled from "styled-components";
import { flex, fontSize, spacing } from "styles";
import { Technique } from "types";

type Props = {
  technique: Technique;
};

export const TechniqueCard: FC<Props> = ({ technique }) => {
  return (
    <StyledTechniqueCard>
      <Video url={technique.url} />
      <h1>{technique.name}</h1>
      <ul>
        {technique.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <p>{technique.description}</p>
    </StyledTechniqueCard>
  );
};

const StyledTechniqueCard = styled.div`
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
      background-color: #daeaf6;
      border-radius: 0.4rem;
    }
  }

  > p {
    padding-top: ${spacing.xxl};
    font-size: ${fontSize.l};
  }
`;
