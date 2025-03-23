import Vector from "../../../assets/Vector.png";
import VectorTech from "../../../assets/Vector_tech.png";
import Image from "../../../assets/image 4.png";
import Clock from "../../../assets/Clock.png";
import Location from "../../../assets/Location-Vector.png";
import Cash from "../../../assets/mdi_cash-100.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookMark from "../../../assets/Bookmark.png";
function ExploreJobsSection() {
  return (
    <div className="container border-t border-border-color pb-20">
      <div className="flex flex-col items-center text-center">
        <h6 className="font-bold text-2xl w-[300px] lg:text-4xl lg:py-20 py-10 lg:w-[600px]  ">
          Explore the Right Jobs and Career Opportunities
        </h6>
      </div>
      <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
  {Array.from({ length: 8 }).map((_, index) => (
    <div key={index} className="bg-secondary-color rounded-lg w-full p-3">
      {/* Job Details */}
      <div className="flex">
        <div>
          {/* Trending */}
      <div className="w-28 h-5 bg-main-color rounded-lg flex items-center justify-center">
        <img className="w-4 h-4 mr-2" src={Vector} alt="Trending Icon" />
        <p className="text-white text-xs">Trending Now</p>
      </div>
          <div className="flex  items-center">
            <h1 className=" text-lg mr-2">Arabic call center</h1>
            <span>
              <img className="w-4 h-4" src={VectorTech} alt="Tech Icon" />
            </span>
          </div>
          <p className="text-sm ">Rog Web</p>
        </div>
        <span className="bg-white h-20 w-20 rounded-xl ml-auto">
          <img className="" src={Image} alt="Company Logo" />
        </span>
      </div>
      {/* Line */}
      <div className="bg-border-color w-2/3 mx-auto my-4 h-[1px]"></div>
      {/* Job Info */}
      <div>
        <span className="flex items-center">
          <img className="w-5 h-5 mr-2 mt-1" src={Location} alt="Location Icon" />
          <h6 className="text-md">Cairo</h6>
        </span>
        <span className="flex">
          <img className="w-5 h-5 mr-2 mt-1" src={Clock} alt="Clock Icon" />
          <h6 className="text-md">Full Time</h6>
        </span>
        <span className="flex">
          <img className="w-5 h-5 mr-2 mt-1" src={Cash} alt="Cash Icon" />
          <h6 className="text-md">6000 EGP/Month</h6>
        </span>
        <span className="flex pb-1">
          <div className="w-10 bg-yellow-100 rounded-md px-1">4
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
          </div>
          <h6 className="text-main-color ml-2">(51,365 <span>Reviews</span>)</h6>
        </span>
      </div>
      {/* Buttons */}
      <div className="flex gap-4 items-center justify-center">
        <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
          <img className="w-5 h-5" src={BookMark} alt="Bookmark Icon" />
          <span className="text-main-color">Save</span>
        </button>
        <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
          View
        </button>
      </div>
    </div>
  ))}
</div>

        <div className="border-b-[1px] border-main-color w-48 lg:w-56  text-main-color ml-auto lg:pt-5">
          <a href="">See other jobs in SHIFT SWIFT</a>
        </div>
      </div>
    </div>
  );
}

export default ExploreJobsSection;
