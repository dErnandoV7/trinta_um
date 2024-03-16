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

const stages = ["Home", "Config_game", "Loading", "Playing", "End_game"];

const initialState = {
  STAGES: stages[0],
  current_player: 0,
  quant_players: 2,
  players: [],
  winner: null,
  names: ["Ernando", "Eric", "Geremias", "João Pedro", "Lucas Lima"],
  play_with_bot: false,
};

const resetInitialState = initialState;

const trintaeUmReducer = (state, action) => {
  switch (action.type) {
    case "CONFIG_GAME":
      return {
        ...state,
        STAGES: stages[1],
      };

    case "LOADING":
      return {
        ...state,
        STAGES: stages[2],
      };

    case "PLAY":
      const playerDefaultInitial = [
        ["Ernando", returnNumberCardRandom(), false],
        ["Eric", returnNumberCardRandom(), false],
      ];

      return {
        ...state,
        STAGES: stages[3],
        players: !state.players.length ? playerDefaultInitial : state.players,
      };

    case "RESET":
      return initialState;

    case "SET_QUANT_PLAYERS":
      const numberOfPlayers = action.quant_players;
      const newPlayers = [];

      Array.from({ length: numberOfPlayers }, (x, index) => {
        newPlayers.push([state.names[index], returnNumberCardRandom(), false]);
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
        newPlayersPb.push([
          state.names[index],
          returnNumberCardRandom(),
          false,
        ]);
      });

      return {
        ...state,
        quant_players: newValuePwb ? 0 : 2,
        players: newValuePwb ? [] : newPlayersPb,
        play_with_bot: newValuePwb,
      };

    case "NEXT_PLAYER":
      const filterPlayers = state.players.filter((player) => !player[2]);
      const isLastIndex = state.current_player === state.players.length - 1;
      let indexPlayer = isLastIndex ? 0 : state.current_player + 1;

      const sameArray =
        JSON.stringify(state.players) == JSON.stringify(filterPlayers);

      if (!sameArray && indexPlayer) indexPlayer = indexPlayer - 1;

      let winnerName = null;
      if (filterPlayers.length === 1) winnerName = filterPlayers[0][0];

      return {
        ...state,
        current_player: indexPlayer,
        players: filterPlayers,
        winner: winnerName,
      };

    case "GET_OTHER_CARD":
      const cards = state.players[state.current_player][1];
      cards.push(returnNumberCardRandom(true));

      const configPlayer = state.players[state.current_player];
      const totalPoints = cards.reduce((acc, value) => {
        return (acc += value[1]);
      }, 0);

      configPlayer[3] = totalPoints;
      configPlayer[1] = cards;

      if (totalPoints > 31) configPlayer[2] = true;
      const newPlayerConfig = state.players;
      newPlayerConfig[state.current_player] = configPlayer;

      return {
        ...state,
        players: newPlayerConfig,
        winner: totalPoints === 31 ? configPlayer[0] : state.win,
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
