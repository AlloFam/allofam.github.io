// Images
import aboutImg from "../../assets/aboutus.png";

const OurMission = () => {
  return (
    <div className="bg-purple-s50 px-5 py-10 lg:p-15 flex flex-col lg:flex-row justify-between">
      <section className="flex flex-col justify-center lg:justify-start lg:p-10 w-full lg:w-1/2 items-center lg:items-start">
        <h6 className="mb-5 text-md uppercase font-bold text-purple-s100">
          Our Mission
        </h6>
        <h1 className="px-5 lg:px-0 text-3xl/10 lg:text-5xl/18 font-bold text-center lg:text-left">
          Simplify and *de-stress* the process of finding pediatric healthcare
          providers.
        </h1>
      </section>
      <div className="mt-15 lg:py-5 w-full lg:w-1/2">
        <img src={aboutImg} alt="hero" width={600} className="rounded-lg" />
      </div>
    </div>
  );
};

export default OurMission;
