// Icons
import { CalendarDays } from "lucide-react";

/**
 * About Us Hero
 * @returns
 */
const Hero = () => {
  return (
    <div className="bg-white p-10 lg:p-15  w-full text-teal relative">
      <div className="absolute top-0 left-0 w-20 h-20 lg:w-40 lg:h-40 bg-teal clip-triangle-tl"></div>
      <h1 className="text-5xl/14 lg:text-6xl/18 font-bold text-center">
        Find the right healthcare <br /> providers for your child - <br />
        without the stress
      </h1>
      <a
        className="mt-10 bg-white text-teal border-3 border-teal rounded-full font-bold text-base lg:text-lg lg:px-5 lg:py-2 lg:hover:bg-teal-s500 lg:hover:text-white px-5 py-2 flex items-center justify-center transition-all max-w-[400px] mx-auto"
        href="https://calendly.com/heidi-allofam/30min"
        target="_blank"
        rel="noreferrer"
      >
        Schedule your intake call here
        <CalendarDays className="ml-5 hidden lg:block" />
      </a>
      <div className="absolute bottom-0 right-0 w-10 h-10 lg:w-100 lg:h-40 bg-teal clip-triangle-br"></div>
    </div>
  );
};

export default Hero;
