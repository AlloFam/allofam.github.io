import { badgesArray } from "@/store/badges";
import { Badge } from "@/components/ui/badge";
// Store
import { serviceCards } from "@/store/serviceCards";
// Components
import CardService from "@/components/elements/Card";
//  Icons
import { CalendarDays } from "lucide-react";

const Services = () => (
  <section className="bg-teal-s50 flex flex-col items-center py-20 px-5 lg:px-20">
    <h2 className="text-5xl font-bold text-center text-teal">
      Your child needs healthcare providers.
    </h2>
    <h2 className="text-5xl font-bold text-center text-teal">
      Parents deserve an easier way to find pediatric care.
    </h2>
    <hr className="w-[50%] bg-teal h-[2px] my-10" />
    <p className="lg:mx-20 text-lg mb-5 text-center">
      Currently serving families through our 1:1 Concierge Services in Denver
      and San Francisco, we navigate our network of resources to find exactly
      what your family needs to support your child's health.
    </p>

    <div className="flex justify-center lg:m-10 flex-wrap">
      {serviceCards.map(({ title, src }, idx) => (
        <CardService key={`card-${idx}`} title={title} src={src} />
      ))}
    </div>
    <p className="text-lg my-5 text-center">
      We are detailed in our approach to ensure that your values are reflected
      in the providers sourced:
    </p>
    <div className="flex flex-col lg:flex-row flex-wrap gap-2 items-center justify-center my-5 lg:mx-20">
      {badgesArray.map((badge, index) => (
        <Badge
          key={index}
          variant="outline"
          className="border-teal text-p100 px-5 py-2 rounded-full text-sm m-2 bg-white font-bold"
        >
          {badge}
        </Badge>
      ))}
    </div>
    <p className="text-teal">And More...</p>
    <p className="lg:mx-20 text-lg my-10 text-center">
      We understand how overwhelming it can be to search for the right
      healthcare provider.
      <br /> Schedule a free intake call below:
    </p>
    <a
      className="bg-teal text-white rounded-full font-bold text-base lg:text-lg lg:px-5 lg:py-2 lg:hover:bg-teal-s500 px-5 py-2 flex items-center justify-center transition-all"
      href="https://calendly.com/heidi-allofam/30min"
      target="_blank"
      rel="noreferrer"
    >
      Schedule your free intake call now
      <CalendarDays className="ml-5 hidden lg:block" />
    </a>
  </section>
);

export default Services;
