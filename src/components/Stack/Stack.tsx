import { FC, useCallback, useRef, useState } from "react";
import { Technique } from "types";
import { Card } from "./Card";
import { ResultsCard } from "./ResultsCard";
import { StyledStack } from "./styles";

type Props = {
  techniques: Technique[];
};

export const Stack: FC<Props> = ({ techniques }) => {
  const [stack, setStack] = useState(techniques);
  const stackRef = useRef<HTMLDivElement>(null);

  const removeAfterVote = useCallback((item: string) => {
    setStack((currentItems) => {
      return currentItems.filter((i) => i.id !== item);
    });
  }, []);

  return (
    <StyledStack ref={stackRef}>
      {stack.map((technique, i) => {
        const isTop = i === stack.length - 1;

        return (
          <Card
            key={technique.id}
            isTop={isTop}
            technique={technique}
            stackRef={stackRef}
            removeAfterVote={removeAfterVote}
          />
        );
      })}

      <ResultsCard totalCards={techniques.length} />
    </StyledStack>
  );
};
