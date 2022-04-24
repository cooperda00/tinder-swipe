import { Button } from "components/Button";
import { FC, useMemo } from "react";
import { useStack } from "../StackProvider";
import { StyledResultsCard } from "./styles";

export const ResultsCard: FC = () => {
  const {
    state: { techniqueStack, results },
    dispatch,
  } = useStack();

  const resetSession = () => {
    dispatch({ type: "reset" });
  };

  const isComplete = useMemo(() => {
    if (techniqueStack.length === 0) return true;
    return false;
  }, [techniqueStack]);

  if (!isComplete) return null;

  return (
    <StyledResultsCard>
      <h2>Congratulations!</h2>

      <p>You completed the deck</p>

      {/* TODO : Give a list of failed techniques for the user to try instead of emojis */}

      <ul>
        {Object.entries(results).map(([id, { name, vote }]) => {
          return (
            <li key={id}>
              <strong>{name}</strong> : {vote === "yes" ? "✅" : "❌"}
            </li>
          );
        })}
      </ul>

      <div className="button-container">
        <Button
          clickHandler={resetSession}
          text="Review Again"
          type="warning"
        />
        <Button
          clickHandler={() => {}}
          text="Complete Session"
          type="success"
        />
      </div>
    </StyledResultsCard>
  );
};
