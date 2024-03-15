import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

const Playing = () => {
  const [state, dispatch] = useContextTrintaeUm();
  
  return (
    <div id="playing">
      <h2>Jogando 31</h2>
    </div>
  );
};

export default Playing;
