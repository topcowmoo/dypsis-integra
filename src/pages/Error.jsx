import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <main
      id="error-page"
      role="alert"
      className="flex flex-col justify-center items-center h-screen bg-bgc-dark"
      aria-labelledby="error-title"
    >
      <h1 id="error-title" className="text-[28px] md:text-[45px] text-alltext-dark mb-3">
        Oops!
      </h1>
      <section className="text-center">
        <h2 className="text-[20px] md:text-[28px] text-alltext-dark mb-4">
          Sorry, an unexpected <span className="text-highlight-dark flicker-5">error</span> has occurred.
        </h2>

        {error && (
          <p className="text-alltext-dark text-[20px] md:text-[26px]">{error.statusText || error.message}</p>
        )}
      </section>
    </main>
  );
};

export default ErrorPage;
