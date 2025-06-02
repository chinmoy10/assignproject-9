import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  document.title = "Error Page";
  console.log(error);
  return (
    <>
      <div className="flex justify-center items-center min-h-full">
        <div className="text-center">
          <h1 className="text-[180px] font-black text-cyan-950">404</h1>
          <p className="text-md text-gray-400">
            <span>&#128542;</span>Oops, This Page Not Found!
            <span>&#128542;</span>
          </p>
          <NavLink
            to="/"
            className="btn bg-cyan-950 text-white mt-5">
            Back To Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
