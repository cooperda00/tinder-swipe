import { Stack } from "components/Stack";
import { StackProvider } from "components/Stack/StackProvider";
import { techniques } from "data/techniques";
import { StyledCardContainer, StyledHome } from "./styles";

export const Home = () => {
  return (
    <StyledHome>
      <StyledCardContainer>
        <StackProvider techniques={techniques}>
          <Stack />
        </StackProvider>
      </StyledCardContainer>
    </StyledHome>
  );
};
