import { FC, useRef } from "react";
import { Card } from "./Card";
import { ResultsCard } from "./ResultsCard";
import { useStack } from "./StackProvider";
import { StyledStack } from "./styles";

export const Stack: FC = () => {
  const {
    state: { techniques },
  } = useStack();

  const stackRef = useRef<HTMLDivElement>(null);

  return (
    <StyledStack ref={stackRef}>
      {techniques.map((technique, i) => {
        const isTop = i === techniques.length - 1;

        return (
          <Card
            key={technique.id}
            isTop={isTop}
            technique={technique}
            stackRef={stackRef}
          />
        );
      })}

      <ResultsCard totalCards={techniques.length} />
    </StyledStack>
  );
};
