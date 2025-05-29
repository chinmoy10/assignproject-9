import bannerImg from "../assets/banner-img.jpg"

const AboutBanner = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-white p-10 md:py-8 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-10 lg:gap-0 min-h-full">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Empowering Your <br className="hidden md:block" />
              Language Learning Journey
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our platform offers an intuitive and effective way to build your
              vocabulary. <br className="hidden md:block" />
              We emphasize practical usage, pronunciation, <br className="hidden md:block" />and context to ensure
              you learn confidently and effectively.
            </p>
          </div>
          <div className="">
            <img
              src={bannerImg}
              alt="Language learning illustration"
              className="rounded-[2rem] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
