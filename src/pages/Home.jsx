import { useContext, useEffect } from "react";
import AboutBanner from "../components/AboutBanner";
import Banner from "../components/Banner";
import SuccessRate from "../components/SuccessRate";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ChooseUs from "../components/ChooseUs";
import ContactUs from "../components/ContactUs";
import WelcomeMSG from "../components/WelcomeMSG";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
  document.title = "Home | Vocablyst";
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ offset: 200, duration: 1000 });
  }, []);

  return (
    <>
      <div>
        {user && (
          <section>
            <WelcomeMSG></WelcomeMSG>
          </section>
        )}
        <section>
          <Banner></Banner>
        </section>
        <section data-aos="fade-in">
          <AboutBanner></AboutBanner>
        </section>
        <section data-aos="fade-in">
          <SuccessRate></SuccessRate>
        </section>
        <section data-aos="fade-in">
          <ChooseUs></ChooseUs>
        </section>
        <section data-aos="fade-in">
          <ContactUs></ContactUs>
        </section>
      </div>
    </>
  );
};

export default Home;
