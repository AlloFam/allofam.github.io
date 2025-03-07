// Components
import Join from "@/components/home/Join";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
// Elements
import SlideInSection from "@/components/elements/SlideInBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <SlideInSection id="join">
        <Join />
      </SlideInSection>
    </div>
  );
};

export default Home;
