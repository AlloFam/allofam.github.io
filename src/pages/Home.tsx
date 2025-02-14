import heroImg from "../assets/hero.png";

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
          <h2 className="mt-5 text-lg font-bold">
            Consider us your “friend with the best recommendations” across
            healthcare providers for your child.
          </h2>
        </section>
        <div className="py-10 w-[560px] z-1">
          <img src={heroImg} alt="hero" className="w-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-200 h-100 bg-white clip-triangle-br"></div>
      </div>
      <section className="bg-light-blue flex flex-col items-center p-10">
        <h2 className="text-5xl font-bold text-center text-teal">
          Your child needs healthcare providers.
        </h2>
        <h2 className="text-5xl font-bold text-center text-teal">
          We have a recommendation for you.
        </h2>
      </section>
    </div>
  );
};

export default Home;
