import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="w-11/12 mx-auto">
          <div className="py-10 px-4 md:px-16 flex flex-col md:flex-row  gap-10 md:gap-0">
            <div className="space-y-6 flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>

              <div className="flex items-center space-x-4">
                <div className="text-cyan-600 text-2xl">
                  <FaEnvelope size={30} />
                </div>
                <div>
                  <p className="text-lg font-semibold">Email:</p>
                  <p>admin@vocablyst.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-cyan-600 text-2xl">
                  <FaPhoneAlt size={30} />
                </div>
                <div>
                  <p className="text-lg font-semibold">Call:</p>
                  <p>+88 01XXXXXXXXX</p>
                </div>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold uppercase text-cyan-600">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold uppercase text-cyan-600">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold uppercase text-cyan-600">
                    Write Your Comments
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Write Your Comments"
                ></textarea>
              </div>

              <button className="btn bg-cyan-900 hover:bg-cyan-950 text-white mt-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
