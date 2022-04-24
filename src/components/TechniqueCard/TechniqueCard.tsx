import { useStack } from "components/Stack/StackProvider";
import { Video } from "components/Video";
import { FC } from "react";
import { Technique } from "types";
import { StyledTechniqueCard } from "./styles";

type Props = {
  technique: Technique;
};

export const TechniqueCard: FC<Props> = ({ technique }) => {
  //TODO - pass this in as a prop rather than depending on different part of the app
  const {
    state: { topCardId },
  } = useStack();

  const shouldRenderContent = topCardId === technique.id;

  return (
    <StyledTechniqueCard>
      {shouldRenderContent ? (
        <>
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
        </>
      ) : null}
    </StyledTechniqueCard>
  );
};
