// Images
import ourFounderImg from "../../assets/founder.png";

const OurFounder = () => {
  return (
    <div className="px-5 py-10 lg:p-15 lg:px-80 bg-teal-s50">
      <h6 className="mb-5 text-md uppercase font-bold text-teal-s500 text-center lg:text-left">
        Our Founder
      </h6>
      <p className="px-5 lg:px-0 text-xl">
        Heidi is a grounded mother of two young kids, aged 2 and 4 and has
        personally faced the challenge of locating the right healthcare
        providers for her children. From desperately searching for a
        pediatrician just hours after giving birth four weeks early to her first
        child then relocating from San Francisco to Denver in 2022 after her
        second child was born, she lives the struggle that parents go through in
        finding the best healthcare for their children - and is determined to
        make it easier.
      </p>
      <br />
      <p className="px-5 lg:px-0 text-xl">
        Outside of being a mom, you'll find Heidi creating community across
        fellow parents, in her neighborhood, at her child's school, and at her
        boxing gym.
      </p>
      <div className="mt-10">
        <img
          src={ourFounderImg}
          alt="Heidi Schaler"
          width={781}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default OurFounder;
