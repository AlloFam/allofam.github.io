import CardService from "@/components/elements/Card";
// Images
import heroImg from "../assets/hero.png";
// Store
import { serviceCards } from "@/store/serviceCards";
// Components
import Join from "@/components/elements/Join";
//  Icons
import { CalendarDays } from "lucide-react";
// import phoneImg from "../assets/icons/phone.png";
// import analyticsImg from "../assets/icons/analytics.png";
// import medicalTeamImg from "../assets/icons/medical-team.png";

const Home = () => {
  return (
    <div>
      <div className="bg-teal p-15 flex justify-between w-full text-white relative">
        <div className="absolute top-0 left-0 w-40 h-20 bg-white clip-triangle-tl"></div>
        <section className="flex flex-col justify-start pr-20 w-2/3">
          <h1 className="text-6xl/18 font-bold">
            Allofam makes it simple <br />
            to source the best <br />
            healthcare provider for <br />
            your young child
          </h1>
          <p className="mt-5 text-2xl">
            Consider us your “friend with the best recommendations” across
            healthcare providers for your child.
          </p>
        </section>
        <div className="py-10 w-[560px] z-1">
          <img src={heroImg} alt="hero" className="w-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-200 h-100 bg-white clip-triangle-br"></div>
      </div>
      <section className="bg-teal-s50 flex flex-col items-center p-20">
        <h2 className="text-5xl font-bold text-center text-teal">
          Your child needs healthcare providers.
        </h2>
        <h2 className="text-5xl font-bold text-center text-teal">
          We have a recommendation for you.
        </h2>
        <hr className="w-[50%] bg-teal h-[2px] my-10" />
        <p className="mx-20 text-lg mb-5 text-center">
          Currently serving families through our Concierge Services in Denver
          and San Francisco, we search our network of resources to find exactly
          what your family needs to support your child in their medical journey.
        </p>
        <p className="mx-20 text-lg text-center">
          Stay tuned for when we expand our Concierge Services to your city and
          for when our self-service platform launches
        </p>
        <div className="flex justify-center m-10 flex-wrap">
          {serviceCards.map(({ title, src }, idx) => (
            <CardService key={`card-${idx}`} title={title} src={src} />
          ))}
        </div>
        <p className="mx-20 text-lg my-5 text-center">
          We are detailed in our approach to ensure that your values are
          reflected in the providers sourced: house calls, office proximity,
          ease of scheduling, sensory-sensitive office space and more.
        </p>
        <p className="mx-20 text-lg mb-10 text-center">
          Have you had it on your to-do list to find a provider for your child
          and want support? Schedule a free intake call below:
        </p>
        <a
          className="bg-teal text-white rounded-full font-bold text-lg px-10 py-5 flex items-center justify-center"
          href="https://calendly.com/heidi-allofam/30min"
          target="_blank"
          rel="noreferrer"
        >
          Schedule a free intake call here
          <CalendarDays className="ml-5" />
        </a>
      </section>
      <section className="bg-purple flex flex-col items-center p-20">
        <h2 className="text-5xl font-bold text-center text-white">
          How it Works
        </h2>
        <hr className="w-[20%] bg-white h-[2px] my-10" />
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1 flex flex-col items-center">
            {/* <img
              src={phoneImg}
              alt="Schedule and intake call"
              className="w-18 mb-10"
            /> */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-white">
                Schedule an intake call
              </h3>
              <p className="text-white text-base">
                Set time with Allofam for your intake call. It takes 5-20
                minutes for us to learn your preferences and get started with
                our search.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            {/* <img
              src={analyticsImg}
              alt="Provider recommendations"
              className="w-18 mb-10"
            /> */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-white">
                Provider recommendations delivered
              </h3>
              <p className="text-white text-base">
                We dig into our reference repository and find the best provider
                that fits your child and family's criteria.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            {/* <img
              src={medicalTeamImg}
              alt="Visit the Doctor"
              className="w-18 mb-10"
            /> */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold text-white">Visit the Doctor</h3>
              <p className="text-white text-base">
                Make an appointment, visit the doctor, and review your
                experience to “pay it forward” to future Allofam families.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center p-20">
        <h2 className="text-5xl font-bold text-center">
          Join Our Self-Service Platform Waitlist
        </h2>
        <p className="mx-20 text-lg mb-5 text-center mt-10">
          Do you have young children - or planning to?
        </p>
        <p className="mx-20 text-lg mb-10 text-center">
          Join the waitlist to be the first to know when we launch our
          self-service platform in your city to serve you vetted healthcare
          providers for your children.
        </p>
        <Join />
      </section>
      <section className="grid grid-cols-2 gap-10 p-20 bg-teal">
        <div className="col-span-1 bg-white rounded-md p-10 opacity-80">
          <h2 className="text-4xl mb-5">Our Mission:</h2>
          <p className="text-base">
            We believe that finding the right healthcare provider for your child
            should be simple and stress-free. We are committed to supporting
            families by connecting them with compassionate, qualified providers
            who align with their unique needs and lifestyle. Our dedication
            ensures that every child receives the care they deserve, empowering
            families to focus on what matters most—health, happiness, and
            well-being.
          </p>
        </div>
        <div className="col-span-1 bg-white rounded-md p-10 opacity-80">
          <h2 className="text-4xl mb-5">Who we serve:</h2>
          <p className="text-base">
            We support families who feel overwhelmed by the challenge of finding
            the right healthcare provider for their child. Whether navigating a
            new diagnosis, seeking specialized care, or simply looking for a
            provider who understands their family’s unique needs, we are here to
            help. Our goal is to make the search easier, ensuring that every
            child receives the compassionate, high-quality care they deserve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
