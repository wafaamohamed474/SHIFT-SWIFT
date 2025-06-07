import SkipPage from "../../../assets/Group 8938.png";
import EmployerPage from "../../../assets/Group 8937.png";

function PersonalJobsSection() {
  return (
    <div className="border-t border-border-color container pb-20">
      <div className="text-center py-[40px]">
        <p className="font-semibold text-3xl text-main-text mb-3">
          Why you`ll love
        </p>
        <span className="text-main-color font-semibold tracking-extra-wide text-2xl lg:text-3xl">
          SHIFT SWIFT
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-5 justify-center">
        {/* Personalized Jobbing Section 1 */}
        <div className="bg-secondary-color lg:w-[500px] lg:h-[550px] text-center rounded-3xl py-2 flex flex-col items-center gap-2">
          <h6 className="font-bold text-2xl">Personalized Jobbing</h6>
          <p className="lg:w-[350px] w-[300px] capitalize">
            We make it easy for{" "}
            <span className="tracking-extra-wide">SHIFT SWIFT</span> you to get
            the job!
          </p>
          <img
            className="w-[200px] lg:w-[250px] h-auto lg:h-[450px] pb-4 object-contain"
            src={SkipPage}
            alt="Skip Page"
          />
        </div>

        {/* Personalized Jobbing Section 2 */}
        <div className="bg-secondary-color lg:w-[500px] lg:h-[550px] text-center lg:ml-auto rounded-3xl py-2 flex flex-col items-center gap-2">
          <h6 className="font-bold text-2xl">Personalized Jobbing</h6>
          <p className="lg:w-[350px] w-[300px] capitalize">
            We make it easy for{" "}
            <span className="tracking-extra-wide">SHIFT SWIFT</span> you to get
            the job!
          </p>
          <img
            className="w-[200px] lg:w-[250px] h-auto lg:h-[450px] pb-4 object-contain"
            src={EmployerPage}
            alt="Employer Page"
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalJobsSection;
