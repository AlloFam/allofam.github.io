// Components
import Join from "@/components/home/Join";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import SlideInSection from "@/components/elements/SlideInBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <SlideInSection id="join">
        <Join />
      </SlideInSection>
    </div>
  );
};

export default Home;
