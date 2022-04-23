import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FC, useRef } from "react";
import styled from "styled-components";
import { flex } from "styles";
import { VotingState } from "../types";

type Props = {
  text: string;
  isTop: boolean;
  stackRef: React.RefObject<HTMLDivElement>;
  removeAfterVote: (item: string) => void;
  stackChangeCount: number;
};

export const Card: FC<Props> = ({
  text,
  isTop,
  stackRef,
  removeAfterVote,
  stackChangeCount,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-8, 8]);
  const animControls = useAnimation();
  const underAnimControls = useAnimation();

  //Use to animate opacity in
  //   useEffect(() => {
  //     animControls.start({
  //       opacity: 1,
  //       transition: { duration: 0.3 },
  //     });
  //   }, [animControls]);

  //Whenever the stack changes, re-trigger the opacity animation
  useEffect(() => {
    if (!stackChangeCount) return;

    animControls.set({ opacity: 0 });
    animControls.start({
      opacity: 1,
      transition: { duration: 1 },
    });
  }, [stackChangeCount, animControls]);

  //Handles the color state of the under card
  //   const [votingState, setVotingState] = useState<VotingState>("neutral");
  //   const updateVotingState = useCallback((x: number) => {
  //     if (x === 0) setVotingState("neutral");
  //     if (x > 0) setVotingState("yes");
  //     if (x < 0) setVotingState("no");
  //   }, []);
  //   useEffect(() => {
  //     const unsubscribeX = x.onChange((x) => {
  //       updateVotingState(x);
  //     });
  //     return () => unsubscribeX();
  //   }, [x, updateVotingState]);

  const underCardBackground = useTransform(
    x,
    [-100, 0, 100],
    [
      "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
      "linear-gradient(180deg, #fff 0%, #fff 100%)",
      "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
    ]
  );

  return (
    <>
      <StyledUnderCard style={{ background: underCardBackground }} />

      <StyledCard
        drag={isTop ? "x" : false}
        dragConstraints={stackRef}
        style={{ x, rotate }}
        ref={cardRef}
        animate={animControls}
        // initial={{ opacity: 0 }}
        onDragEnd={(_, info) => {
          const { x } = info.offset;

          if (x > -200 && x < 200) {
            animControls.start({ x: 0 });
          }

          if (x <= -200) {
            console.log("vote no");
            animControls.start({ x: -600 });
            underAnimControls.start({
              opacity: 0,
              transition: { duration: 0.5 },
            });
            setTimeout(() => {
              removeAfterVote(text);
            }, 500);
          }

          if (x >= 200) {
            console.log("vote yes");
            animControls.start({ x: 600 });
            underAnimControls.start({
              opacity: 0,
              transition: { duration: 0.5 },
            });
            setTimeout(() => {
              removeAfterVote(text);
            }, 500);
          }
        }}
      >
        <h1>{text}</h1>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(motion.div)`
  ${flex("column", "center", "center")};
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: lightseagreen;
  cursor: pointer;
`;

const StyledUnderCard = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
`;
