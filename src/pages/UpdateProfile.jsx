import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    console.log({ name, photo });

    updateUserProfile({ displayName: name, photoURL: photo })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center py-28 px-5">
        <div className="bg-cyan-950/50 rounded p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Update Profile
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <input
                name="name"
                type="text"
                placeholder="username"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">
                PhotoURL
              </label>
              <input
                name="photo"
                type="url"
                placeholder="photoURL"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-900 hover:bg-cyan-950 text-white py-2 rounded font-medium transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
