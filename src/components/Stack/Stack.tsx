import { FC, useCallback, useRef, useState } from "react";
import { Card } from "./Card";
import { StyledStack } from "./styles";

type Props = {
  items: string[];
};

export const Stack: FC<Props> = ({ items }) => {
  const [stack, setStack] = useState(items);
  const stackRef = useRef<HTMLDivElement>(null);

  const removeAfterVote = useCallback((item: string) => {
    setStack((currentItems) => {
      return currentItems.filter((i) => i !== item);
    });
  }, []);

  return (
    <StyledStack ref={stackRef}>
      {stack.map((card, i) => {
        const isTop = i === stack.length - 1;

        return (
          <Card
            key={card}
            isTop={isTop}
            text={card}
            stackRef={stackRef}
            removeAfterVote={removeAfterVote}
          />
        );
      })}
    </StyledStack>
  );
};
