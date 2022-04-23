import { createContext, ReactNode, useContext, useReducer } from "react";
import { Vote } from "../types";

// Types
type Action =
  | { type: "logResult"; payload: { id: string; vote: Vote } }
  | { type: "reset" };
type Dispatch = (action: Action) => void;
type State = { results: Record<string, Vote> };
type ResultsProviderProps = { children: ReactNode };

// Context
const ResultsStateContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

// Default State
const defaultState: State = {
  results: {},
};

// Reducer
function resultsReducer(state: State, action: Action) {
  switch (action.type) {
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
}

// Context Provider
function ResultsProvider({ children }: ResultsProviderProps) {
  const [state, dispatch] = useReducer(resultsReducer, defaultState);

  const value = { state, dispatch };

  return (
    <ResultsStateContext.Provider value={value}>
      {children}
    </ResultsStateContext.Provider>
  );
}

// Consumer Hook
function useResults() {
  const context = useContext(ResultsStateContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
}

export { ResultsProvider, useResults };
