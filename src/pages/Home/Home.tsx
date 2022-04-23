import { Stack } from "components/Stack";
import { ResultsProvider } from "components/Stack/ResultsProvider";
import { cards } from "data/cards";
import { StyledCardContainer, StyledHome } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <StyledCardContainer>
        <ResultsProvider>
          <Stack items={cards} />
        </ResultsProvider>
      </StyledCardContainer>
    </StyledHome>
  );
};
