import { PanInfo } from "framer-motion";
import { FC } from "react";
import { transitionTimeMS, voteNoXPos, voteYesXPos } from "./constants";
import { StyledCard, StyledUnderCard } from "./styles";
import { useCardAnimation } from "./useCardAnimation";

type Props = {
  text: string;
  isTop: boolean;
  stackRef: React.RefObject<HTMLDivElement>;
  removeAfterVote: (item: string) => void;
};

export const Card: FC<Props> = ({ text, isTop, stackRef, removeAfterVote }) => {
  const {
    x,
    throwCardOffScreen,
    fadeOutUnderCard,
    springCardBackToCenter,
    cardAnimationControls,
    underCardAnimationControls,
    rotate,
    underCardBackground,
  } = useCardAnimation();

  const removeCardFromStack = () => {
    setTimeout(() => {
      removeAfterVote(text);
    }, transitionTimeMS);
  };

  const handleVote = (vote: "yes" | "no") => {
    console.log(`voting ${vote} : collect results`);
    throwCardOffScreen(vote === "yes" ? "right" : "left");
    fadeOutUnderCard();
    removeCardFromStack();
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const { x } = info.offset;
    if (x > voteNoXPos && x < voteYesXPos) springCardBackToCenter();
    if (x <= voteNoXPos) handleVote("no");
    if (x >= voteYesXPos) handleVote("yes");
  };

  return (
    <>
      <StyledUnderCard
        style={{ background: underCardBackground }}
        animate={underCardAnimationControls}
      />

      <StyledCard
        drag={isTop ? "x" : false}
        dragConstraints={stackRef}
        style={{ x, rotate }}
        animate={cardAnimationControls}
        onDragEnd={handleDragEnd}
        whileTap={{ scale: 0.99 }}
      >
        <h1>{text}</h1>
        {/* TODO: pass a card object as props and render a component within here */}
      </StyledCard>
    </>
  );
};
