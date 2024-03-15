import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

import ButtonNumberPlayer from "./ButtonNumberPlayer";

import "./ConfigGame.css";

const ConfigGame = () => {
  const [state, dispatch] = useContextTrintaeUm();
  const playWithBot = state.play_with_bot;

  document.addEventListener("keyup", (e) => {
    if (e.key == "Enter") dispatch({ type: "LOADING" });
  });

  return (
    <div id="config-game">
      <div className="config-game-content">
        <div className="number-of-players">
          <h2>Quantidade de jogadores</h2>
          <div className="options">
            <ButtonNumberPlayer number={2} />
            <ButtonNumberPlayer number={3} />
            <ButtonNumberPlayer number={4} />
            <ButtonNumberPlayer number={5} />
          </div>
        </div>
        <div className="play-with-bot">
          <button
            onClick={() => dispatch({ type: "PLAY_BOT" })}
            className={playWithBot ? "active" : ""}
          >
            Jogar Contra Bot <span>&#x00028;1v1&#x00029;</span>
          </button>
        </div>
        <button
          className="button-next"
          onClick={() => dispatch({ type: "LOADING" })}
        >
          Iniciar
        </button>
      </div>
      <div className="img-config-game"></div>
    </div>
  );
};

export default ConfigGame;
