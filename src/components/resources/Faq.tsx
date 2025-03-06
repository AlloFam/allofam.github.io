import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section className="bg-salmon-s50 p-10 lg:p-15 flex flex-col items-center">
      <h2 className="text-4xl/14 lg:text-6xl/18 font-bold text-purple-s500 mb-10">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-purple-s500">
          <AccordionTrigger className="hover:cursor-pointer py-10">
            <p className="text-lg">
              Does Allofam help me find a specialist for my child?
            </p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg mb-10">
              Yes! Allofam is built to take your criteria into account when
              searching for a specialist provider for your child. We are
              continuously growing our network of Allofam recognized providers,
              so if you don't see the perfect fit today - you will soon. Also,
              if you want to reach out to us with a specialist request, email
              info@allofam.com and we will get back to you with other options
              that may not yet be listed on the platform.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-purple-s500">
          <AccordionTrigger className="hover:cursor-pointer py-10">
            <p className="text-lg">What age group does Allofam serve?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg mb-10">
              Currently Allofam is hyper-focused on helping parents of kids age
              0-5 years old. We are determined to help new and experienced
              parents find a solid provider fit while their children are young
              and can't yet speak/advocate for their own health.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-purple-s500">
          <AccordionTrigger className="hover:cursor-pointer py-10">
            <p className="text-lg">What does "Allofam" mean?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg mb-10">
              Allofam as a company name is a spin on "alloparenting" which
              means: any form of parental care provided by an individual towards
              young that are not its own direct offspring. Think: monkeys,
              elephants (that's the inspiration for our logo), and other mammals
              that generally care for their community's young. As a company, we
              believe that{" "}
              <strong>
                no parent is meant to do this parenting thing alone
              </strong>{" "}
              and we are dedicated to supporting parents and caregivers by
              removing the stress and unknowns from finding a great provider fit
              for their child.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-purple-s500">
          <AccordionTrigger className="hover:cursor-pointer py-10">
            <p className="text-lg">Where is Allofam currently availble?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-lg mb-10">
              Allofam is currently live with our concierge services in Denver
              and San Francisco, with plans to launch our self-service platform
              in more cities in the next 12 months. Do you live somewhere
              outside of our current service location and need support? Send us
              a note and we will do everything we can to help you:
              <a href="mailto:info@allofam.com">info@allofam.com</a>
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
