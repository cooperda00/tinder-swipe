import { FC, useMemo } from "react";
import { useStack } from "../StackProvider";
import { StyledResultsCard } from "./styles";

type Props = {
  totalCards: number;
};

export const ResultsCard: FC<Props> = ({ totalCards }) => {
  const {
    state: { results },
  } = useStack();

  const isComplete = useMemo(() => {
    if (Object.keys(results).length === totalCards) return true;
    return false;
  }, [results, totalCards]);

  if (!isComplete) return null;

  return (
    <StyledResultsCard>
      <h2>Congratulations!</h2>

      <p>You completed the deck</p>

      <ul>
        {Object.entries(results).map(([id, vote]) => {
          return (
            <li key={id}>
              <strong>{id}</strong> : {vote}
            </li>
          );
        })}
      </ul>
    </StyledResultsCard>
  );
};
