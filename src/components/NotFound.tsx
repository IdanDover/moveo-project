import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError() as { data: string; message: string };

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="/lobby">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
