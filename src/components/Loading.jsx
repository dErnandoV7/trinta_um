import { useContextTrintaeUm } from "../hooks/useContextTrintaeUm";

const Loading = () => {
  const [state, dispatch] = useContextTrintaeUm();

  setTimeout(() => {
    dispatch({type: "PLAY"})
  }, 1000);
  return (
    <div>
      <p>
        Distribuindo cartas<span>.</span>
        <span>.</span>
        <span>.</span>
      </p>
    </div>
  );
};

export default Loading;
