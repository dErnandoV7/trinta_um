import { createContext, useReducer } from "react";

export const TrintaeUmContext = createContext();

const initialState = {
  STAGES: ["Home", "Config_game", "Playing", "End_game"],
};

const trintaeUmReducer = (state, action) => {
  switch (action.type) {
    case "TESTE":
      console.log("teste");
      console.log(state);

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
