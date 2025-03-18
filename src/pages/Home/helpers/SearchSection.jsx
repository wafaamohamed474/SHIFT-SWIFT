import Button from "../../../components/button/Button";
import SmallPhone from "../../../assets/Group 8936.png";
import BigPhone from "../../../assets/Group 462.png";

function SearchSection() {
  return (
    <div className="container mx-auto flex flex-col items-center lg:flex-row my-14 pb-10 px-4">
      {/* Search */}
      <div className="flex flex-col gap-4 lg:w-1/2 h-auto lg:h-[300px]">
        <h1 className="capitalize font-semibold lg:text-5xl text-4xl lg:max-w-sm leading-snug">
          We make it easy for you to get the job!
        </h1>
        <p className="max-w-sm lg:max-w-md">
          Explore the Right Jobs Explore the Right Jobs and Career
          Opportunitiesand Career Opportunities
        </p>
        <div className="flex border border-dark-text rounded-3xl w-full lg:w-[600px] h-12">
          <input
            type="email"
            placeholder="Your Email"
            className="focus:outline-none text-dark-text bg-bg-color w-full m-4 me-auto"
          />
          <Button
            className="rounded-[20px] lg:w-[300px] w-[150px]"
            type="submit"
            label="Find Jobs"
            variant="primary"
          />
        </div>
      </div>
      {/* Mobile */}
      <div className="relative bg-secondary-color lg:w-1/2 w-full h-[280px] lg:h-[450px] md:h-[320px] md:w-[500px] px-10 rounded-3xl mt-10 lg:mt-0">
        <div className="h-[180px] w-[180px] lg:h-[350px] lg:w-[280px] md:h-[220px] md:w-[220px] absolute bottom-0">
          <img className="w-full h-full" src={SmallPhone} />
        </div>
        <div className="h-[280px] w-[180px] lg:h-[450px] lg:w-[280px] md:h-[320px] md:w-[220px] right-[20px] md:right-[70px] lg:right-[90px] absolute bottom-0">
          <img className="w-full h-full" src={BigPhone} />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;