import { Outlet } from "react-router-dom";
import AboutBanner from "../components/AboutBanner";
import Banner from "../components/Banner";
import SuccessRate from "../components/SuccessRate";
import VocabCategories from "../components/VocabCategories";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <Banner></Banner>
        </section>
        <section>
          <AboutBanner></AboutBanner>
        </section>
        {/* <section className="w-full py-10 bg-gray-50">
          <h1 className="text-center text-[#042E45] text-3xl underline mb-5">All Lessons</h1>
          <div className="flex flex-col items-center gap-5">
            <VocabCategories></VocabCategories>
            <div className="w-10/12 mx-auto">
              <Outlet></Outlet>
            </div>
          </div>
        </section> */}
        <section>
          <SuccessRate></SuccessRate>
        </section>
      </div>
    </>
  );
};

export default Home;
