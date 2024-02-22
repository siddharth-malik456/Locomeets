import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <button
        onClick={() => navigate(-1)}
        className="text-bold border-black border-2 bg-red-400 px-4 py-1"
      >
        Go Back
      </button>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
