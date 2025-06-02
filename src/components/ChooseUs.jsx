import {
  FaChalkboardTeacher,
  FaCogs,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";

const ChooseUs = () => {
  return (
    <>
      <div>
        <div className="w-11/12 mx-auto mb-5">
          <section className="py-10 px-4 md:px-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl p-6 sm:p-8 text-center shadow-md bg-orange-100">
                <div className="mb-4 flex justify-center text-primary">
                  <FaChalkboardTeacher className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Interactive Lessons
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Engage with dynamic and immersive lesson content.
                </p>
              </div>

              <div className="rounded-xl p-6 sm:p-8 text-center shadow-md bg-blue-100">
                <div className="mb-4 flex justify-center text-primary">
                  <FaCogs className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Adaptive Learning
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Lessons adjust to your progress and learning style.
                </p>
              </div>

              <div className="rounded-xl p-6 sm:p-8 text-center shadow-md bg-red-100">
                <div className="mb-4 flex justify-center text-primary">
                  <FaChartLine className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Comprehensive Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Monitor your advance with detailed insights.
                </p>
              </div>

              <div className="rounded-xl p-6 sm:p-8 text-center shadow-md bg-cyan-100">
                <div className="mb-4 flex justify-center text-primary">
                  <FaLightbulb className="text-3xl sm:text-4xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  Expert Resources
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Access materials crafted by language specialists.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
