// Images
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
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
  );
};

export default Hero;
