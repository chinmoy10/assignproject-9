import { FaArrowRight } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";

const Tutorials = () => {
  const videos = useLoaderData();
  const navigate = useNavigate();
  return (
    <>
      <div className="space-y-10">
        <section className="banner">
          <div className="hero min-h-full bg-[#042E45]/75">
            <div className="hero-content text-center">
              <div className="py-16">
                <h1 className="text-5xl font-bold text-white">
                  Advanced Tutorials For Better Learning
                </h1>
              </div>
            </div>
          </div>
        </section>
        <div className="w-10/12 mx-auto">
          <h1 className="text-center text-[#042E45] text-3xl underline">
            All Tutorials
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 my-10">
            {videos.slice(4, 12).map((video) => (
              <div key={video.id} className="bg-gray-100 rounded p-5">
                <iframe
                  className="rounded w-full min-h-44"
                  src={video.embedUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            ))}
          </div>
          <button className="btn bg-[#042E45]/80 border-none shadow-none text-red-500 text-lg" onClick={()=> navigate('/learning')}>Learn Vocabularies <FaArrowRight /> </button>
        </div>
      </div>
    </>
  );
};

export default Tutorials;
