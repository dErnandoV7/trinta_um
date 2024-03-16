import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

import "./Playing.css";

import Photo from "../assets/icon-game.png";
import { DotSquare } from "lucide-react";

const Playing = () => {
  const [state, dispatch] = useContextTrintaeUm();
  const currentPlayer = state.current_player;
  const [name, cards, burst, points] = state.players[currentPlayer];

  const getOtherCard = () => {
    dispatch({ type: "GET_OTHER_CARD" });
  };

  const nextPlayer = () => {
    dispatch({ type: "NEXT_PLAYER", name });
  };

  return (
    <div id="playing">
      <div className="container-playing">
        {state.winner === name && (
          <div className="winner full">
            <img src={Photo} alt="Icone de Carta" />
            <h3>{name}, você ganhou!</h3>
            <span>Suas cartas:</span>
            <div className="cards-min">
              {cards &&
                cards.map((card, index) => (
                  <div className="card-min card" key={index}>
                    {card[0]}
                    <span>&#60;&#x0002F;&#62;</span>
                  </div>
                ))}
            </div>
            <span>Total: {points}</span>
            <button
              className="button-next-player"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Voltar para Inicio
            </button>
          </div>
        )}
        {burst && (
          <div className="game-over full">
            <img src={Photo} alt="Icone de Carta" />
            <h3>{name}, você estourou!</h3>
            <span>Suas cartas:</span>
            <div className="cards-min">
              {cards &&
                cards.map((card, index) => (
                  <div className="card-min card" key={index}>
                    {card[0]}
                    <span>&#60;&#x0002F;&#62;</span>
                  </div>
                ))}
            </div>
            <span>Total: {points}</span>
            <button className="button-next-player" onClick={nextPlayer}>
              Continuar
            </button>
          </div>
        )}
        {!burst && state.winner != name && (
          <div className="section-player">
            <h2>
              Nome do Jogador: <strong>{name}</strong>
            </h2>
            <h3>{!burst && <span onClick={getOtherCard}>Pedir carta</span>}</h3>
            <div className="cards-playing">
              {cards &&
                cards.map((card, index) => (
                  <div className="card" key={index}>
                    {card[0]}
                    <span>&#60;&#x0002F;&#62;</span>
                  </div>
                ))}
            </div>
            <footer className="footer-playing">
              <button className="button-next-player" onClick={nextPlayer}>
                Continuar
              </button>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Playing;
