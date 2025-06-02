import AboutBanner from "../components/AboutBanner";
import Banner from "../components/Banner";
import SuccessRate from "../components/SuccessRate";
import 'animate.css';

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
        <section>
          <SuccessRate></SuccessRate>
        </section>
      </div>
    </>
  );
};

export default Home;
