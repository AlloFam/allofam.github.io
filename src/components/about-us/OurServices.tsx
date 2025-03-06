// Icons
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

// Images
import conciergeMatching from "../../assets/icons/how/analytics.png";
import selfServicePlatform from "../../assets/icons/how/online-lesson.png";

const OurServices = () => {
  return (
    <div className="px-5 py-10 lg:p-15 flex flex-col items-center bg-teal">
      <h1 className="text-5xl/14 lg:text-6xl/18 font-bold text-white mb-10">
        Our Services
      </h1>
      <div className="flex flex-col lg:flex-row justify-between space-y-10 w-full lg:space-y-0 lg:space-x-10">
        <div className="w-full lg:w-1/2 p-10 bg-white/90 rounded-lg flex flex-col justify-start items-start">
          <section className="flex items-center">
            <img
              src={conciergeMatching}
              alt="Concierge Matching"
              width={50}
              height={50}
            />
            <h2 className="text-4xl font-bold text-teal ml-5">
              Concierge Matching
            </h2>
          </section>
          <br />
          <p className="text-md">
            Currently serving clients in Denver, CO and San Francisco, CA,
            Allofam conducts personal searches on behalf of parents and
            caregivers for their young children. We are successful in matching
            to family preferences and values across a wide and diverse network
            of providers.
          </p>
          <br />
          <a
            className="bg-teal text-white rounded-full font-bold text-base lg:px-5 lg:py-2 lg:hover:bg-teal-s500 px-5 py-2 flex items-center justify-center transition-all"
            href="https://calendly.com/heidi-allofam/30min"
            target="_blank"
            rel="noreferrer"
          >
            Schedule your free intake call
            <ChevronRight className="ml-5 hidden lg:block" />
          </a>
        </div>
        <div className="w-full lg:w-1/2 p-10 bg-white/90 rounded-lg flex flex-col justify-start items-start">
          <section className="flex items-center">
            <img
              src={selfServicePlatform}
              alt="Self-Service Platform"
              width={50}
              height={50}
            />
            <h2 className="text-4xl font-bold text-teal ml-5">
              Self-Service Platform
            </h2>
          </section>
          <br />
          <p className="text-md">
            Currently in development, the self service platform will allow a
            broader reach to parents outside of our current service areas to
            access a library of providers. These providers will be categorized
            and matched to parents based on the same detailed search criteria
            that we currently serve to our Concierge clients.
          </p>
          <br />
          <Link
            to="/#join"
            className="bg-teal text-white rounded-full font-bold text-base lg:px-5 lg:py-2 lg:hover:bg-teal-s500 px-5 py-2 flex items-center justify-center transition-all"
          >
            Join our waitlist
            <ChevronRight className="ml-5 hidden lg:block" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
