import { createContext, ReactNode, useContext, useReducer } from "react";
import { Technique } from "types";
import { Vote } from "../types";

// Types
type Action =
  | { type: "removeCardFromStack"; payload: { id: string } }
  | { type: "logResult"; payload: { id: string; vote: Vote; name: string } }
  | { type: "reset" };

type Dispatch = (action: Action) => void;

type State = {
  techniques: Technique[];
  techniqueStack: Technique[];
  results: Record<string, { name: string; vote: Vote }>;
  topCardId: string | undefined;
};

type ResultsProviderProps = { children: ReactNode; techniques: Technique[] };

// Context
const StackStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

// Default State
const defaultState: State = {
  techniques: [],
  techniqueStack: [],
  results: {},
  topCardId: undefined,
};

// Reducer
const stackReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "removeCardFromStack": {
      const filteredCards = state.techniqueStack.filter(
        (technique) => technique.id !== action.payload.id
      );

      return {
        ...state,
        techniqueStack: filteredCards,
        topCardId: filteredCards[filteredCards.length - 1]?.id ?? undefined,
      };
    }

    case "logResult": {
      return {
        ...state,
        results: {
          ...state.results,
          [action.payload.id]: {
            name: action.payload.name,
            vote: action.payload.vote,
          },
        },
      };
    }

    case "reset": {
      return {
        ...state,
        techniqueStack: state.techniques,
        results: {},
        topCardId:
          state.techniques[state.techniques.length - 1]?.id ?? undefined,
      };
    }

    default: {
      return state;
    }
  }
};

// Context Provider
const StackProvider = ({ children, techniques }: ResultsProviderProps) => {
  const [state, dispatch] = useReducer(stackReducer, {
    ...defaultState,
    techniques,
    techniqueStack: techniques,
    topCardId: techniques[techniques.length - 1].id,
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
