import CardService from "@/components/elements/Card";
import heroImg from "../assets/hero.png";
//  Icons
import doctorImg from "../assets/icons/doctor.png";
import chatImg from "../assets/icons/chat.png";
import oralHealthImg from "../assets/icons/oral-health.png";
import physiotherapistImg from "../assets/icons/physiotherapist.png";
import speechTherapistImg from "../assets/icons/speech-therapist.png";

const cards = [
  {
    title: "Physical Therapists",
    src: physiotherapistImg,
  },
  {
    title: "Pediatric Dentists ",
    src: oralHealthImg,
  },
  {
    title: "Occupational Therapists",
    src: speechTherapistImg,
  },
  {
    title: "Speech Therapist",
    src: chatImg,
  },
  {
    title: "Pediatricians",
    src: doctorImg,
  },
];

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
        <p className="mx-40 text-2xl mb-5 text-center">
          Currently serving families through our Concierge Services in Denver
          and San Francisco, we search our network of resources to find exactly
          what your family needs to support your child in their medical journey.
        </p>
        <p className="mx-40 text-2xl text-center">
          Stay tuned for when we expand our Concierge Services to your city and
          for when our self-service platform launches
        </p>
        <div className="flex justify-center m-10 flex-wrap">
          {cards.map(({ title, src }, idx) => (
            <CardService key={`card-${idx}`} title={title} src={src} />
          ))}
        </div>
        <p className="mx-40 text-2xl my-5 text-center">
          We are detailed in our approach to ensure that your values are
          reflected in the providers sourced: house calls, office proximity,
          ease of scheduling, sensory-sensitive office space and more.
        </p>
        <p className="mx-40 text-2xl mb-10 text-center">
          Have you had it on your to-do list to find a provider for your child
          and want support? Schedule a free intake call below:
        </p>
      </section>
    </div>
  );
};

export default Home;
