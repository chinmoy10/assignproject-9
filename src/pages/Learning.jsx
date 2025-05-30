import { Outlet } from "react-router-dom";
import VocabCategories from "../components/VocabCategories";
import YTVideo from "../components/YTVideo";

const Learning = () => {
  return (
    <>
      <div>
        <section className="banner">
          <div className="hero min-h-full bg-[#042E45]/75">
            <div className="hero-content text-center">
              <div className="py-16">
                <h1 className="text-5xl font-bold text-white">
                  Let's start Learning Other Language
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-10">
          <h1 className="text-center text-[#042E45] text-3xl underline mb-5">
            All Lessons
          </h1>
          <div className="flex flex-col items-center gap-5">
            <VocabCategories></VocabCategories>
            <div className="w-10/12 mx-auto">
              <Outlet></Outlet>
            </div>
          </div>
        </section>
        <section className="mb-10">
            <YTVideo></YTVideo>
        </section>
      </div>
    </>
  );
};

export default Learning;
