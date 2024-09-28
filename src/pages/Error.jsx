import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main
      id="error-page"
      role="alert"
      className="flex flex-col justify-center items-center h-screen"
      aria-labelledby="error-title"
    >
      <h1 id="error-title" className="text-[33px]">
        Oops!
      </h1>
      <section className="text-center">
        <h2 className="text-[22px]">
          Sorry, an unexpected error has occurred.
        </h2>

        {error && (
          <p className="text-[32px]">{error.statusText || error.message}</p>
        )}
      </section>
    </main>
  );
};

export default ErrorPage;
