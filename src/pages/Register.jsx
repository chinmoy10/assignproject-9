import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setError({ ...error, name: "name must be more then 5 character long" });
      return;
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      setError({
        ...error,
        password:
          "1 letter must have Uppercase, 1 letter must have Uppercase and length must be more then 6 character long ",
      });
      return;
    }

    // console.log({ name, photo, email, password });

    setError("");

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setError({ ...error, register: err.message });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => {
        setError({ ...error, register: err.message });
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <div className="bg-cyan-950/50 shadow-md rounded-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <input
                name="name"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Username"
                required
              />
            </div>
            {error.name && (
              <label className="block text-sm font-medium text-red-700">
                {error.name}
              </label>
            )}
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Photo URL
              </label>
              <input
                name="photo"
                type="url"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Photo URL"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                User Email
              </label>
              <input
                name="email"
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Email"
                required
              />
            </div>

            <div className="relative">
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
            {error.password && (
              <label className="block text-sm font-medium text-red-700">
                {error.password}
              </label>
            )}
            {error.register && (
              <label className="block text-sm font-medium text-red-700">
                {error.register}
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-cyan-900 hover:bg-cyan-950 text-white py-2 rounded-md font-medium transition"
            >
              Register
            </button>

            <p className="text-sm text-center mt-2 text-white">
              Already have an account?{" "}
              <Link
                to={`/login`}
                className="text-orange-200 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute translate-x-[295px] md:translate-x-[350px] -translate-y-[120px] text-cyan-900"
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

export default Register;
