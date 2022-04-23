import { motion } from "framer-motion";
import { FC, useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { colors, flex } from "styles";
import { Card } from "./Card";

type Props = {
  items: string[];
};

export const Stack: FC<Props> = ({ items }) => {
  const [stack, setStack] = useState(items);
  const [stackChangeCount, setStackChangeCount] = useState(0);
  const stackRef = useRef<HTMLDivElement>(null);

  const removeAfterVote = useCallback((item: string) => {
    setStack((currentItems) => {
      return currentItems.filter((i) => i !== item);
    });
    incrementStackChangeCount();
  }, []);

  const incrementStackChangeCount = () => {
    setStackChangeCount((prev) => prev + 1);
  };

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
            stackChangeCount={stackChangeCount}
          />
        );
      })}
    </StyledStack>
  );
};

const StyledStack = styled(motion.div)`
  ${flex("row", "center", "center")};
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${colors.secondary};
`;
