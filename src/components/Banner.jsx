import { FaArrowDown } from "react-icons/fa";
import { IoIosRadioButtonOn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="carousel w-full relative">
        <div id="item1" className="carousel-item w-full">
          <div
            className="w-full"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/tPzdWvW1/japanese.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-0 min-h-full bg-[#042E45]/80 p-10 md:py-24">
              <div className="space-y-5">
                <h1 className="text-[#E7F2AB] font-black text-5xl">
                  Japanese Language
                </h1>
                <p className="text-white font-extralight text-lg">
                  Creative concept of foreign language education
                  <br className="hidden md:block" />
                  Japanese language learning.
                </p>
                <button onClick={()=> navigate('/learning/JP')} className="btn text-red-500 bg-[#042E45] text-base text-light shadow-none border-none">
                  Read More
                </button>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold text-white">
                  みなさんこんにちは、ようこそ <br/> <span className="text-base font-light">Minasan kon'nichiwa, yōkoso</span>
                </h1>
                <div className="w-full flex justify-center text-red-400">
                  <FaArrowDown size={25} />
                </div>
                <h1 className="text-5xl font-bold text-white">
                  Hello, Welcome Everyone
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div
            className="w-full"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/h1xtxNZz/chinese.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-0 min-h-full bg-red-500/80 p-10 md:py-24">
              <div className="space-y-5">
                <h1 className="text-[#E7F2AB] font-black text-5xl">
                  Chinese Language
                </h1>
                <p className="text-white font-extralight text-lg">
                  Creative concept of foreign language education
                  <br className="hidden md:block" />
                  Chinese language learning.
                </p>
                <button onClick={()=> navigate('/learning/CN')} className="btn text-red-500 bg-[#042E45] text-base text-light shadow-none border-none">
                  Read More
                </button>
              </div>
              <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold text-white">
                  大家好歡迎 <br/> <span className="text-base font-light">Dàjiā hǎo huānyíng</span>
                </h1>
                <div className="w-full flex justify-center text-[#042E45]">
                  <FaArrowDown size={25} />
                </div>
                <h1 className="text-5xl font-bold text-white">
                  Hello, Welcome Everyone
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2 absolute -translate-y-9">
        <a href="#item1" className="text-gray-50">
            <IoIosRadioButtonOn size={20} />
        </a>
        <a href="#item2" className="text-gray-50">
            <IoIosRadioButtonOn size={20} />
        </a>
      </div>
    </>
  );
};

export default Banner;
