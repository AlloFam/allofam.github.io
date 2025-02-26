import CardService from "@/components/elements/Card";
import { Badge } from "@/components/ui/badge";
import { badgesArray } from "@/store/badges";
// Images
import heroImg from "../assets/hero.png";
// Store
import { serviceCards } from "@/store/serviceCards";
// Components
import Join from "@/components/home/Join";
//  Icons
import { CalendarDays } from "lucide-react";
import phoneImg from "../assets/icons/how/calling.png";
import analyticsImg from "../assets/icons/how/analytics.png";
import medicalTeamImg from "../assets/icons/how/medical-team.png";
import SlideInSection from "@/components/elements/SlideInBox";

const Home = () => {
  return (
    <div>
      <div className="bg-teal p-10 lg:p-15 flex justify-between w-full text-white relative">
        <div className="absolute top-0 left-0 w-40 h-20 bg-white clip-triangle-tl hidden lg:block"></div>
        <section className="flex flex-col justify-start lg:pr-20 w-full lg:w-2/3">
          <h1 className="text-5xl/14 lg:text-6xl/18 font-bold">
            Stress-free pediatric healthcare provider search services.
          </h1>
          <p className="mt-5 text-2xl">
            If you're struggling to find the right healthcare provider for your
            child, let Allofam work for you.
          </p>
        </section>
        <div className="py-10 w-[560px] z-1 hidden lg:block">
          <img src={heroImg} alt="hero" className="w-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-200 h-100 bg-white clip-triangle-br hidden lg:block"></div>
      </div>
      <section className="bg-teal-s50 flex flex-col items-center py-20 px-5 lg:px-20">
        <h2 className="text-5xl font-bold text-center text-teal">
          Your child needs healthcare providers.
        </h2>
        <h2 className="text-5xl font-bold text-center text-teal">
          Parents deserve an easier way to find pediatric care.
        </h2>
        <hr className="w-[50%] bg-teal h-[2px] my-10" />
        <p className="lg:mx-20 text-lg mb-5 text-center">
          Currently serving families through our 1:1 Concierge Services in
          Denver and San Francisco, we navigate our network of resources to find
          exactly what your family needs to support your child's health.
        </p>

        <div className="flex justify-center lg:m-10 flex-wrap">
          {serviceCards.map(({ title, src }, idx) => (
            <CardService key={`card-${idx}`} title={title} src={src} />
          ))}
        </div>
        <p className="text-lg my-5 text-center">
          We are detailed in our approach to ensure that your values are
          reflected in the providers sourced:
        </p>
        <div className="flex flex-col lg:flex-row flex-wrap gap-2 items-center justify-center my-5 lg:mx-20">
          {badgesArray.map((badge, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-teal text-p100 px-5 py-2 rounded-full text-sm m-2 bg-white font-bold"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <p className="text-teal">And More...</p>
        <p className="lg:mx-20 text-lg my-10 text-center">
          We understand how overwhelming it can be to search for the right
          healthcare provider.
          <br /> Schedule a free intake call below:
        </p>
        <a
          className="bg-teal text-white rounded-full font-bold text-base lg:text-lg lg:px-5 lg:py-2 lg:hover:bg-teal-s500 px-5 py-2 flex items-center justify-center transition-all"
          href="https://calendly.com/heidi-allofam/30min"
          target="_blank"
          rel="noreferrer"
        >
          Schedule your free intake call now
          <CalendarDays className="ml-5 hidden lg:block" />
        </a>
      </section>
      <section className="bg-teal-s100 flex flex-col items-center p-10 lg:p-20">
        <h2 className="text-5xl font-bold text-center text-white">
          How it Works
        </h2>
        <hr className="w-[30%] bg-white h-[2px] my-5" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={phoneImg}
              alt="Schedule and intake call"
              className="w-18 mb-5"
            />
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold text-white">
                Schedule an intake call
              </h3>
              <p className="text-white text-base mt-2">
                Set time with Allofam for your intake call. It takes 5-20
                minutes for us to learn your preferences and get started with
                our search.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={analyticsImg}
              alt="Provider recommendations"
              className="w-18 mb-5"
            />
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold text-white">
                Provider recommendations
              </h3>
              <p className="text-white text-base mt-2">
                We dig into our reference repository and find the best provider
                that fits your child and family's criteria.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <img
              src={medicalTeamImg}
              alt="Visit the Doctor"
              className="w-18 mb-5"
            />
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold text-white">Visit the Doctor</h3>
              <p className="text-white text-base mt-2">
                Make an appointment, visit the doctor, and review your
                experience to “pay it forward” to future Allofam families.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SlideInSection id="join">
        <section className="flex flex-col items-center p-10 lg:p-20">
          <h2 className="text-5xl font-bold text-center">
            Join Our Self-Service Platform Waitlist
          </h2>
          <p className="lg:mx-20 text-lg mb-5 text-center mt-10">
            Do you have young children - or planning to?
          </p>
          <p className="lg:mx-20 text-lg mb-10 text-center">
            Join the waitlist to be the first to know when we launch our
            self-service platform in your city to serve you vetted healthcare
            providers for your children.
          </p>
          <Join />
        </section>
      </SlideInSection>
    </div>
  );
};

export default Home;
