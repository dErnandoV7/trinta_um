import { useContextTrintaeUm } from "./hooks/useContextTrintaeUm";

import Home from "./components/Home";
import Loading from "./components/Loading";
import ConfigGame from "./components/ConfigGame";
import Playing from "./components/Playing";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [state, dispatch] = useContextTrintaeUm();
  return (
    <>
      {state.STAGES == "Home" && <Home />}
      {state.STAGES == "Config_game" && <ConfigGame />}
      {state.STAGES == "Loading" && <Loading />}
      {state.STAGES == "Playing" && <Playing />}
    </>
  );
}

export default App;
