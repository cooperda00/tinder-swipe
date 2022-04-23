import { FC, useMemo } from "react";
import { useResults } from "../ResultsProvider";
import { StyledResultsCard } from "./styles";

type Props = {
  totalCards: number;
};

export const ResultsCard: FC<Props> = ({ totalCards }) => {
  const {
    state: { results },
  } = useResults();

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
            <li>
              <strong>{id}</strong> : {vote}
            </li>
          );
        })}
      </ul>
    </StyledResultsCard>
  );
};
