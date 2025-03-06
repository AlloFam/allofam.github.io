// Icons
import { CalendarDays } from "lucide-react";

/**
 * Resources Hero
 * @returns
 */
const Hero = () => {
  return (
    <div className="bg-purple-s500 p-10 lg:p-15  w-full text-white">
      <h1 className="text-5xl/14 lg:text-6xl/18 font-bold text-center">
        We support parents
      </h1>
      <a
        className="mt-10 bg-purple-s500 text-white border-3 border-white rounded-full font-bold text-base lg:text-lg lg:px-5 lg:py-2 lg:hover:bg-white/20 lg:hover:text-purple-s50 px-5 py-2 flex items-center justify-center transition-all max-w-[400px] mx-auto"
        href="https://calendly.com/heidi-allofam/30min"
        target="_blank"
        rel="noreferrer"
      >
        Schedule your intake call here
        <CalendarDays className="ml-5 hidden lg:block" />
      </a>
    </div>
  );
};

export default Hero;
