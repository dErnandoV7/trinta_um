import { useEffect } from "react";
import { createContext, useReducer } from "react";

const returnNumberCardRandom = (one = false) => {
  const indexRandom = () => {
    return Math.round(Math.random() * 12);
  };

  const cards = [
    ["A", 1],
    ["2", 2],
    ["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8],
    ["9", 9],
    ["10", 10],
    ["J", 10],
    ["K", 10],
    ["Q", 10],
  ];

  if (one) return cards[indexRandom()];

  return [cards[indexRandom()], cards[indexRandom()], cards[indexRandom()]];
};

export const TrintaeUmContext = createContext();

const initialState = {
  STAGES: ["Home", "Config_game", "Loading", "Playing", "End_game"],
  current: 0,
  current_player: 0,
  quant_players: 2,
  players: [
    ["Ernando", returnNumberCardRandom()],
    ["Eric", returnNumberCardRandom()],
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

    case "LOADING":
      return {
        ...state,
        current: 2,
      };

    case "PLAY":
      return {
        ...state,
        current: 3,
      };

    case "SET_QUANT_PLAYERS":
      const numberOfPlayers = action.quant_players;
      const newPlayers = [];

      Array.from({ length: numberOfPlayers }, (x, index) => {
        newPlayers.push([state.names[index], returnNumberCardRandom()]);
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
        newPlayersPb.push([state.names[index], returnNumberCardRandom()]);
      });
      return {
        ...state,
        quant_players: newValuePwb ? 0 : 2,
        players: newValuePwb ? [] : newPlayersPb,
        play_with_bot: newValuePwb,
      };

    case "NEXT_PLAYER":
      const isLastIndex = state.current_player === state.players.length - 1;

      return {
        ...state,
        current_player: isLastIndex ? 0 : state.current_player + 1,
      };

    case "GET_OTHER_CARD":
      const cards = state.players[state.current_player][1];
      const newCards = returnNumberCardRandom(true);
      cards.push(newCards);
      
      const newCardsPlayer = state.players;
      newCardsPlayer[state.current_player][1] = cards;

      return {
        ...state,
        players: newCardsPlayer,
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
