import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <div className="flex items-center justify-center p-4">
        <div className="bg-cyan-950/50 shadow-md rounded-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Register
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder='Username'
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Photo URL
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder='Photo URL'
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                User Email
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder='Email'
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder='Password'
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-900 hover:bg-cyan-950 text-white py-2 rounded-md font-medium transition"
            >
              Login
            </button>

            <p className="text-sm text-center mt-2 text-white">
              Already have an account?{" "}
              <Link to={`/login`} className="text-orange-200 font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-sm text-gray-50">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="btn w-full flex items-center justify-center bg-transparent gap-3 shadow-none border border-gray-300 py-6 text-white rounded-full transition">
              <img
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google"
                className="w-8 h-8 border-2 rounded-full bg-white"
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
        </>
    );
};

export default Register;