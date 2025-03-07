// Store
import testimonials from "@/store/testimonials";
// Components
import Testimonial from "@/components/shared/Testimonial";

const Testimonials = () => {
  return (
    <section className="p-10 lg:p-15 flex flex-col items-center bg-purple-s75">
      <h2 className="text-4xl/14 lg:text-6xl/18 font-bold mb-10 text-white">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="col-span-1">
            <Testimonial
              name={testimonial.name}
              image={testimonial.image}
              quote={testimonial.quote}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
