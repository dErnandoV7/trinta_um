import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

import "./Playing.css";

const Playing = () => {
  const [state, dispatch] = useContextTrintaeUm();
  const currentPlayer = state.current_player;
  const [name, cards] = state.players[currentPlayer];

  return (
    <div id="playing">
      <div className="container-playing">
        <div className="section-player">
          <h2>
            Nome do Jogador: <strong>{name}</strong>
          </h2>
          <h3>
            <span>Pedir carta</span>
          </h3>
          <div className="cards-playing">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                {card[0]}
                <span>&#60;&#x0002F;&#62;</span>
              </div>
            ))}
          </div>
          <footer className="footer-playing">
            <button className="button-next-player">Prox. Jogador</button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Playing;
