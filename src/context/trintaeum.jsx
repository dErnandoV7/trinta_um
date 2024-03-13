import { createContext, useReducer } from "react";

export const TrintaeUmContext = createContext();

const initialState = {
  STAGES: ["Home", "Config_game", "Playing", "End_game"],
  current: 0,
  quant_players: 2,
  players: [
    { name: "Ernando", cards: ["A", "2", "3"] },
    { name: "Eric", cards: ["A", "2", "3"] },
  ],
  names: ["Ernando", "Eric", "Geremias", "João Pedro", "Lucas Lima"],
  play_with_bot: false,
};

const trintaeUmReducer = (state, action) => {
  switch (action.type) {
    case "CONFIG_GAME":
      return {
        ...state,
        current: 1,
      };

    case "SET_QUANT_PLAYERS":
      const numberOfPlayers = action.quant_players;
      const newPlayers = [];

      Array.from({ length: numberOfPlayers }, (x, index) => {
        newPlayers.push({ name: state.names[index], cards: ["A", "2", "3"] });
      });

      return {
        ...state,
        quant_players: numberOfPlayers,
        players: newPlayers,
      };

    case "PLAY_BOT":
      const newValuePwb = state.play_with_bot == true ? false : true;
      const newPlayersPb = [];

      Array.from({ length: 2 }, (x, index) => {
        newPlayersPb.push({ name: state.names[index], cards: ["A", "2", "3"] });
      });
      return {
        ...state,
        quant_players: newValuePwb ? 0 : 2,
        players: newValuePwb ? [] : newPlayersPb,
        play_with_bot: newValuePwb,
      };
    case "PLAY":
      return {
        ...state,
        current: 2,
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
