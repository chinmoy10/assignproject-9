import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const NavLinks = (
    <>
      <li>
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 border-[#042E45] text-[#042E45] hover:bg-inherit shadow-none"
                : "text-[#042e4581] hover:bg-inherit"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/learning`}
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 border-[#042E45] text-[#042E45] hover:bg-inherit shadow-none"
                : "text-[#042e4581] hover:bg-inherit"
            }`
          }
        >
          Start-Learning
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/tutorials`}
          className={({ isActive }) =>
            `font-bold ${
              isActive
                ? "border-b-2 border-[#042E45] text-[#042E45] hover:bg-inherit shadow-none"
                : "text-[#042e4581] hover:bg-inherit"
            }`
          }
        >
          Tutorials
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to={`/profile`}
              className={({ isActive }) =>
                `font-bold ${
                  isActive
                    ? "border-b-2 border-[#042E45] text-[#042E45] hover:bg-inherit shadow-none"
                    : "text-[#042e4581] hover:bg-inherit"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div>
        <div className="navbar flex-col md:flex-row gap-5 md:gap-0">
          <div className="navbar-start w-full md:w-[50%]">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {NavLinks}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[100px]">
                <img className="w-full" src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">{NavLinks}</ul>
          </div>
          <div className="navbar-end w-full md:w-[50%]">
            <div className="flex flex-row items-center gap-5 ">
              {user && (
                <div className="flex items-center gap-4">
                  <h1 className="text-[#042E45] font-2xl">
                    {user?.displayName}
                  </h1>

                  <img
                    className="w-10 h-10 object-cover border-2 border-cyan-950 rounded-full"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
              )}
              {user && user?.email ? (
                <button
                  onClick={logOut}
                  className="btn text-white text-lg font-normal bg-[#042E45]"
                >
                  Log-out
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className="btn text-white text-lg font-normal bg-[#042E45]"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
