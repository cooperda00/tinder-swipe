import { useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useCallback } from "react";
import { gradients } from "styles";
import { transitionTimeS, voteNoXPos, voteYesXPos } from "./constants";

export const useCardAnimation = () => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [voteNoXPos, voteYesXPos], [-8, 8]);
  const cardAnimationControls = useAnimation();
  const underCardAnimationControls = useAnimation();

  const underCardBackground = useTransform(
    x,
    [voteNoXPos, 0, voteYesXPos],
    [gradients.red, gradients.white, gradients.green]
  );

  const springCardBackToCenter = useCallback(() => {
    cardAnimationControls.start({ x: 0 });
  }, [cardAnimationControls]);

  const throwCardOffScreen = useCallback(
    (direction: "left" | "right") => {
      cardAnimationControls.start({ x: direction === "left" ? -600 : 600 });
    },
    [cardAnimationControls]
  );

  const fadeOutUnderCard = useCallback(() => {
    underCardAnimationControls.start({
      opacity: 0,
      transition: { duration: transitionTimeS },
    });
  }, [underCardAnimationControls]);

  return {
    x,
    rotate,
    cardAnimationControls,
    underCardAnimationControls,
    underCardBackground,
    springCardBackToCenter,
    throwCardOffScreen,
    fadeOutUnderCard,
  };
};
