import { useContextTrintaeUm } from "./hooks/useContextTrintaeUm";

import Home from "./components/Home";

import "./App.css";

function App() {
  const [state, dispatch] = useContextTrintaeUm();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
