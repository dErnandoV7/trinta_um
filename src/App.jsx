import { useContextTrintaeUm } from "./hooks/useContextTrintaeUm";

import Home from "./components/Home";

import "./App.css";

function App() {
  const [state, dispatch] = useContextTrintaeUm();
  const current = state.current;

  return (
    <>
      {state.STAGES[current] == "Home" && <Home />}
      {state.STAGES[current] == "Config_game" && <p>tela de configuração de game</p>}
    </>
  );
}

export default App;
