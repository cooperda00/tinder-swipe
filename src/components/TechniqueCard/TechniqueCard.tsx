import { Video } from "components/Video";
import { FC } from "react";
import { Technique } from "types";
import { StyledTechniqueCard } from "./styles";

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

      <p>
        <strong>
          Did you hit this technique in your last sparring session?
        </strong>
      </p>
    </StyledTechniqueCard>
  );
};
