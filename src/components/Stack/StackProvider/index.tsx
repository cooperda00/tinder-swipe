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
};

// Reducer
const stackReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "removeCardFromStack": {
      return {
        ...state,
        techniqueStack: state.techniqueStack.filter(
          (technique) => technique.id !== action.payload.id
        ),
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
