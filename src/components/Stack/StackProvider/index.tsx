import { createContext, ReactNode, useContext, useReducer } from "react";
import { Technique } from "types";
import { Vote } from "../types";

// Types
type Action =
  | { type: "removeCardFromStack"; payload: { id: string } }
  | { type: "logResult"; payload: { id: string; vote: Vote } }
  | { type: "reset" };

type Dispatch = (action: Action) => void;

type State = {
  techniques: Technique[];
  results: Record<string, Vote>;
  initialNumberOfCards: number;
};

type ResultsProviderProps = { children: ReactNode; techniques: Technique[] };

// Context
const StackStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

// Default State
const defaultState: State = {
  techniques: [],
  results: {},
  initialNumberOfCards: 0,
};

// Reducer
const stackReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "removeCardFromStack": {
      return {
        ...state,
        techniques: state.techniques.filter(
          (technique) => technique.id !== action.payload.id
        ),
      };
    }

    case "logResult": {
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.id]: action.payload.vote,
        },
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// Context Provider
const StackProvider = ({ children, techniques }: ResultsProviderProps) => {
  const [state, dispatch] = useReducer(stackReducer, {
    ...defaultState,
    techniques,
    initialNumberOfCards: techniques.length,
  });

  const value = { state, dispatch };

  return (
    <StackStateContext.Provider value={value}>
      {children}
    </StackStateContext.Provider>
  );
};

// Consumer Hook
const useStack = () => {
  const context = useContext(StackStateContext);

  if (context === undefined) {
    throw new Error("useStack must be used within a StackProvider");
  }

  return context;
};

export { StackProvider, useStack };
