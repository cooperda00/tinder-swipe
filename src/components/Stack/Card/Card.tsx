import { TechniqueCard } from "components/TechniqueCard";
import { PanInfo } from "framer-motion";
import { FC } from "react";
import { Technique } from "types";
import { useResults } from "../ResultsProvider";
import { transitionTimeMS, voteNoXPos, voteYesXPos } from "./constants";
import { StyledCard, StyledUnderCard } from "./styles";
import { useCardAnimation } from "./useCardAnimation";

type Props = {
  technique: Technique;
  isTop: boolean;
  stackRef: React.RefObject<HTMLDivElement>;
  removeAfterVote: (item: string) => void;
};

export const Card: FC<Props> = ({
  technique,
  isTop,
  stackRef,
  removeAfterVote,
}) => {
  const { dispatch } = useResults();

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
      removeAfterVote(technique.id);
    }, transitionTimeMS);
  };

  const handleVote = (vote: "yes" | "no") => {
    dispatch({ type: "logResult", payload: { id: technique.id, vote } });
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
        <TechniqueCard technique={technique} />
      </StyledCard>
    </>
  );
};
