// Store
import howItWorks from "@/store/howItWorks";
// Components
import { Link } from "react-router";
// Icons
import { ArrowRight } from "lucide-react";

/**
 * How It Works Props
 */
interface howItWorksProps {
  title: string;
  description: string;
  img: string;
}

/**
 * How It Works
 * @returns
 */
const HowItWorks = () => (
  <section className="bg-teal-s100 flex flex-col items-center p-10 lg:p-20">
    <h2 className="text-5xl font-bold text-center text-white">How it Works</h2>
    <hr className="w-[30%] bg-white h-[2px] my-5" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
      {howItWorks.map(
        ({ title, description, img }: howItWorksProps, idx: number) => (
          <div
            key={`how-ti-works-${idx}`}
            className="col-span-1 flex flex-col items-center lg:items-start"
          >
            <img src={img} alt={title} className="w-18 mb-5" />
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-white text-base mt-2 text-center lg:text-left">
                {description}
              </p>
            </div>
          </div>
        )
      )}
    </div>

    <Link
      to="/about-us"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="bg-white text-teal-s500 rounded-full font-bold text-base lg:text-lg lg:px-5 lg:py-2 lg:hover:opacity-80 px-5 py-2 flex items-center justify-center transition-all mt-20 text-center"
    >
      See More About How Allofam Works{" "}
      <ArrowRight className="ml-5 hidden lg:block" />
    </Link>
  </section>
);

export default HowItWorks;
