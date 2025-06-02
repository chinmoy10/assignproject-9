import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <section className="banner">
          <div className="hero min-h-full bg-[#042E45]/75">
            <div className="hero-content text-center">
              <div className="py-16">
                <h1 className="text-5xl font-bold text-white">
                  Welcome to User Profile: {user && user.displayName}
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div className="w-10/12 mx-auto mt-10">
          <section className="flex justify-center">
            {user && (
              <div className="card shadow-sm bg-cyan-950/50 w-96">
                <figure className="pt-10">
                  <img
                    src={user?.photoURL}
                    alt="Shoes"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name: {user?.displayName}</h2>
                  <p>Email: {user?.email}</p>
                  <div className="card-actions">
                    <Link to={`/updateProfile`} className="btn bg-cyan-900 hover:bg-cyan-950 text-white border-none shadow-none">Update</Link>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Profile;
