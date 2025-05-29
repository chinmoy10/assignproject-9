import AboutBanner from "../components/AboutBanner";
import Banner from "../components/Banner";
import SuccessRate from "../components/SuccessRate";

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
      <section className="bg-base-300">
        <SuccessRate></SuccessRate>
      </section>
    </div>
    </>
  );
};

export default Home;
