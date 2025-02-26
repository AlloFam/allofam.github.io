//  Icons
import phoneImg from "@/assets/icons/how/calling.png";
import analyticsImg from "@/assets/icons/how/analytics.png";
import medicalTeamImg from "@/assets/icons/how/medical-team.png";

const HowItWorks = () => (
  <section className="bg-teal-s100 flex flex-col items-center p-10 lg:p-20">
    <h2 className="text-5xl font-bold text-center text-white">How it Works</h2>
    <hr className="w-[30%] bg-white h-[2px] my-5" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
      <div className="col-span-1 flex flex-col items-center">
        <img
          src={phoneImg}
          alt="Schedule and intake call"
          className="w-18 mb-5"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-white">
            Schedule an intake call
          </h3>
          <p className="text-white text-base mt-2">
            Set time with Allofam for your intake call. It takes 5-20 minutes
            for us to learn your preferences and get started with our search.
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <img
          src={analyticsImg}
          alt="Provider recommendations"
          className="w-18 mb-5"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-white">
            Provider recommendations
          </h3>
          <p className="text-white text-base mt-2">
            We dig into our reference repository and find the best provider that
            fits your child and family's criteria.
          </p>
        </div>
      </div>
      <div className="col-span-1 flex flex-col items-center">
        <img
          src={medicalTeamImg}
          alt="Visit the Doctor"
          className="w-18 mb-5"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold text-white">Visit the Doctor</h3>
          <p className="text-white text-base mt-2">
            Make an appointment, visit the doctor, and review your experience to
            “pay it forward” to future Allofam families.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
