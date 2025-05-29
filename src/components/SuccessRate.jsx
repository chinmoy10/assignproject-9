import { FaUser, FaStar, FaChartBar, FaBook } from "react-icons/fa";
import CountUp from 'react-countup';

const SuccessRate = () => {
  return (
    <div>
      <section className="bg-[#042E45] py-12 px-6 md:px-20 text-white">
        <div className="max-w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Success Rates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
            <div className="flex justify-center items-center gap-4">
              <div>
                <FaUser size={50} className="text-4xl text-teal-200" />
              </div>
              <div>
                <p className="text-2xl font-semibold"> <CountUp end={12345} duration={2} /> </p>
                <p className="text-lg mt-1">Learners</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div>
                <FaStar size={50} className="text-4xl text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-semibold"> <CountUp end={10} duration={2} /> </p>
                <p className="text-lg mt-1">Score</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div>
                <FaChartBar size={50} className="text-4xl text-orange-300" />
              </div>
              <div>
                <p className="text-2xl font-semibold"> <CountUp end={5000} duration={2} /> </p>
                <p className="text-lg mt-1">Words Learned</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div>
                <FaBook size={50} className="text-4xl text-cyan-400" />
              </div>
              <div>
                <p className="text-2xl font-semibold"> <CountUp end={100} duration={2} /> </p>
                <p className="text-lg mt-1">Lessons</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessRate;
