// Images
import whoWeServeImg from "../../assets/who-we-serve.png";

const WhoWeServe = () => {
  return (
    <div className="bg-salmon-s50 px-5 py-10 lg:p-15 flex flex-col lg:flex-row justify-between w-full relative">
      <div className="mr-10 lg:py-5 w-full lg:w-1/2 items-center lg:items-start">
        <img
          src={whoWeServeImg}
          alt="hero"
          width={600}
          className="rounded-lg"
        />
      </div>
      <section className="flex flex-col justify-center lg:justify-start lg:p-10 w-full lg:w-1/2 mt-10 items-center lg:items-start">
        <h6 className="mb-5 text-md uppercase font-bold text-salmon">
          Who We Serve
        </h6>
        <p className="px-5 lg:px-0 text-xl">
          We support families who feel overwhelmed by the challenge of finding
          the right healthcare provider for their child. Whether navigating a
          new diagnosis, seeking specialized care, or simply looking for a
          provider who understands their family's unique needs, we are here to
          help. Our goal is to make the search easier, ensuring that every child
          receives the compassionate, high-quality care they deserve.
        </p>
      </section>
    </div>
  );
};

export default WhoWeServe;
