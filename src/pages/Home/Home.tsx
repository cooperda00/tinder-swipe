import { Stack } from "components/Stack";
import { ResultsProvider } from "components/Stack/ResultsProvider";
import { techniques } from "data/techniques";
import { StyledCardContainer, StyledHome } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <StyledCardContainer>
        <ResultsProvider>
          <Stack techniques={techniques} />
        </ResultsProvider>
      </StyledCardContainer>
    </StyledHome>
  );
};
