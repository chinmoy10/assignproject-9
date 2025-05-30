import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const YTVideo = () => {
    const navigate = useNavigate()
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("../embeddedVideo.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <>
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-[#042E45] text-3xl underline">Tutorials</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5 my-10">
          {videos.slice(0, 4).map((video) => (
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
        <button className="btn bg-[#042E45]/80 border-none shadow-none text-red-500 text-lg" onClick={()=> navigate('/tutorials')}>View More <FaArrowRight /></button>
      </div>
    </>
  );
};

export default YTVideo;
