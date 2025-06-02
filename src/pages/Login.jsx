import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  document.title = "Login | Vocablyst";
  const { signInUser, setUser, resetPassword, googleSignIn} =
    useContext(AuthContext);

  const [error, setError] = useState({});

  const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;



    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };

  const handleForgetPassword = () => {
    
    const email = emailRef.current.value;
    if (!email) {
      console.log("give me a valid email add");
    } else {
      resetPassword(email)
        .then(() => {
          alert("Password reset email sent, please check");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };

  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="bg-cyan-950/50 shadow-md rounded-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                User Email
              </label>
              <input
                name="email"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="User Email"
                ref={emailRef}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Password"
                required
              />
            </div>
            {error.login && (
              <label className="block text-sm font-medium text-red-700">
                {error.login}
              </label>
            )}
            <div onClick={handleForgetPassword} className="text-sm">
              <Link to={""} className="flex items-center gap-2 text-white">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-900 hover:bg-cyan-950 text-white py-2 rounded-md font-medium transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-2 text-white">
              Don’t have an account?{" "}
              <Link
                to={`/login/register`}
                className="text-orange-200 font-semibold hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute translate-x-[295px] md:translate-x-[350px] -translate-y-[155px] text-cyan-900"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-sm text-gray-50">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center bg-transparent gap-3 shadow-none border border-gray-300 py-6 text-white rounded-full transition"
          >
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-8 h-8 border-2 rounded-full bg-white"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
