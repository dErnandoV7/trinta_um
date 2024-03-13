import { createContext, useReducer } from "react";

export const TrintaeUmContext = createContext();

const initialState = {
  STAGES: ["Home", "Config_game", "Playing", "End_game"],
  current: 0,
};

const trintaeUmReducer = (state, action) => {
  switch (action.type) {
    case "CONFIG_GAME":
      console.log("teste");
      console.log(state);

      return {
        ...state,
        current: state.current + 1,
      };
    default:
      return state;
  }
};

export const TrintaeUmContextProvider = ({ children }) => {
  const data = useReducer(trintaeUmReducer, initialState);

  return (
    <TrintaeUmContext.Provider value={data}>
      {children}
    </TrintaeUmContext.Provider>
  );
};
