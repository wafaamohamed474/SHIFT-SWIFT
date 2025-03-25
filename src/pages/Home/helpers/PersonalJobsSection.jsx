
import SkipPage from "../../../assets/Group 8938.png";
import EmployerPage from "../../../assets/Group 8937.png";
function personalJobsSection() {
  return (
    <div className="border-t border-border-color  container pb-20">
      <div className="text-center py-[40px]">
        <p className="font-semibold text-3xl text-main-text mb-3">
          Why you`ll love
        </p>
        <span className="text-main-color font-semibold tracking-extra-wide text-2xl lg:text-3xl">
          SHIFT SWIFT
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-5 ">
        <div className="bg-secondary-color lg:w-[500px] lg:h-[550px] text-center rounded-3xl py-2 flex  flex-col items-center gap-2 ">
          <h6 className="font-bold text-2xl">Personalized Jobbing</h6>
          <p className="lg:w-[350px] w-[300px]  capitalize">
            We make it easy for{" "}
            <span className="tracking-extra-wide">SHIFT SWIFT</span> you to get
            the job!
          </p>
          <img
            className="w-[200px] lg:w-[250px] h-[350px] lg:h-[450px] pb-4 "
            src={SkipPage}
          />
        </div>
        <div className="bg-secondary-color lg:w-[500px] lg:h-[550px] text-center lg:ml-auto rounded-3xl py-2 flex flex-col items-center gap-2">
          <h6 className="font-bold text-2xl">Personalized Jobbing</h6>
          <p className="lg:w-[350px] w-[300px] capitalize">
            We make it easy for{" "}
            <span className="tracking-extra-wide">SHIFT SWIFT</span> you to get
            the job!
          </p>
          <img
            className="w-[200px] lg:w-[250px] h-[350px] lg:h-[450px] pb-4"
            src={EmployerPage}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default personalJobsSection;
