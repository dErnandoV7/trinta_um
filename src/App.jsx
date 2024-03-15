import { useContextTrintaeUm } from "./hooks/useContextTrintaeUm";

import Home from "./components/Home";
import ConfigGame from "./components/ConfigGame";
import Playing from "./components/Playing";

import "./App.css";

function App() {
  const [state, dispatch] = useContextTrintaeUm();
  const current = state.current;
  return (
    <>
      {state.STAGES[current] == "Home" && <Home />}
      {state.STAGES[current] == "Config_game" && <ConfigGame />}
      {state.STAGES[current] == "Playing" && <Playing />}
    </>
  );
}

export default App;
