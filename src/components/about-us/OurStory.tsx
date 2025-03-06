// Images
import ourStoryImg from "../../assets/our-story.png";

const OurStory = () => {
  return (
    <div className="px-5 py-10 lg:p-15 flex flex-col items-center">
      <h6 className="mb-5 text-md uppercase font-bold text-purple-s200 text-center lg:text-left">
        Our Story
      </h6>
      <h1 className="text-5xl/14 lg:text-6xl/18 font-bold text-purple-s500 mb-10 text-center lg:text-left">
        Serving our Parenting Community
      </h1>
      <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-30">
        <section className="flex flex-col justify-start w-full lg:w-[500px] lg:mr-10">
          <p>
            <span className="font-bold text-purple-s500">Let's be real.</span>{" "}
            As parents, we all have internal rolodexes of our childrens doctors,
            therapists, babysitters, best kid friendly restaurants, best
            playgrounds (sorted by season and sun/shade position), and more.
          </p>
          <br />
          <p>
            The Allofam story started at a tiny Dogpatch neighborhood playground
            in San Francisco where I would take my son. I became friends with
            the other parents that also frequented that tiny playground. We
            traded stories about the kids milestones, sleep regressions, eating
            habits, and which healthcare provider was best at advising during
            the challenging times.
          </p>
          <br />
          <p>
            I decided that it was too{" "}
            <span className="font-bold text-purple-s500">much</span> to hold in
            our brains - and also too{" "}
            <span className="font-bold text-purple-s500">important</span> to not
            be documented and shared for other parents to access these
            recommendations.
          </p>
          <br />
          <p>
            Allofam is that shared internal rolodex across parents that are
            similarly minded and focused on their children's health and
            well-being. We are building on the idea that “it takes a village”
            and making that village accessible to the larger parenting
            community.
          </p>
          <br />
          <h6 className="text-md font-bold text-right">
            -Heidi Schaler, Founder & CEO
          </h6>
        </section>
        <div className="w-full lg:w-[356px]">
          <img
            src={ourStoryImg}
            alt="hero"
            width={356}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
