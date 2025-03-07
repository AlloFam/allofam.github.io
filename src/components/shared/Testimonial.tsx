// Assets
import quoteImg from "@/assets/testimonials/quote.png";

interface TestimonialProps {
  name: string;
  image: string;
  quote: string;
}

const Testimonial = ({ name, image, quote }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg p-5 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <img src={quoteImg} alt="Quote" width={30} height={30} />
          <p className="text-sm my-5 float-right">{quote}</p>
        </div>
        <img
          src={image}
          alt={name}
          className="ml-[2px] w-[100px] h-[100px] lg:w-[158px] lg:h-[158px]"
        />
      </div>
      <h3 className="text-lg font-bold text-teal-s500">{name}</h3>
    </div>
  );
};

export default Testimonial;
