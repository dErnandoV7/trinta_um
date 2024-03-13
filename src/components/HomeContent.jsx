import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

import "./HomeContent.css";

import Photo from "../assets/icon-game.png";

const HomeContent = () => {
  const [state, dispatch] = useContextTrintaeUm();

  document.addEventListener("keyup", (e) => {
    if(e.key == "Enter") dispatch({ type: "CONFIG_GAME" })
  });

  return (
    <div className="home-content">
      <h2 className="type"> - Game - </h2>
      <div className="title-game">
        <img src={Photo} alt="" className="icon-game" />
        <h1 className="name-game">31</h1>
      </div>
      <button
        className="button-next"
        onClick={() => dispatch({ type: "CONFIG_GAME" })}
      >
        <i className="fa-solid fa-play"></i>
      </button>
    </div>
  );
};

export default HomeContent;
