import { useContextTrintaeUm } from "./hooks/useContextTrintaeUm";

import Home from "./components/Home";
import Loading from "./components/Loading";
import ConfigGame from "./components/ConfigGame";
import Playing from "./components/Playing";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [state, dispatch] = useContextTrintaeUm();
  const current = state.current;
  return (
    <>
      {state.STAGES[current] == "Home" && <Home />}
      {state.STAGES[current] == "Config_game" && <ConfigGame />}
      {state.STAGES[current] == "Loading" && <Loading />}
      {state.STAGES[current] == "Playing" && <Playing />}
    </>
  );
}

export default App;
