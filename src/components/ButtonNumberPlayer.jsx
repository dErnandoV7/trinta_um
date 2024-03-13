import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

const ButtonNumberPlayer = ({ number }) => {
  const [state, dispatch] = useContextTrintaeUm();
  const playWithBot = state.play_with_bot;
  const quant_players = state.quant_players;
  const disabledButton = playWithBot ? "disabled" : "";
  const active = quant_players == number ? "active" : "";

  const setNumberOfPlayers = (e) => {
    const number = Number(e.target.textContent);

    dispatch({ type: "SET_QUANT_PLAYERS", quant_players: number });
  };

  const setName = (e) => {
    return e.target.textContent;
  };

  return (
    <button
      onClick={(e) => setNumberOfPlayers(e)}
      disabled={playWithBot ? true : false}
      className={disabledButton + active}
    >
      {number}
    </button>
  );
};

export default ButtonNumberPlayer;
