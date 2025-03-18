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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-x-3 gap-y-6">
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
          {/*Box*/}
          <div className="bg-secondary-color rounded-xl lg:h-60 p-2">
            {/*header*/}
            <div className="">
              {/*Trending Button*/}
              <div className="w-28 h-4 bg-main-color rounded-2xl flex pl-2">
                <img className="w-3 h-3 mr-2 " src={Vector} />
                <p className="text-white text-[8px]">Trending Now</p>
              </div>
              {/*Name Of Job*/}
              <div className="flex">
                <div>
                  <div className="flex pb-1 pt-2">
                    <h1 className="pr-1 text-xl">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 mt-1" src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm pb-0">Rog Web</p>
                </div>
                <span className="bg-white  ml-auto">
                  <img className="" src={Image} />
                </span>
              </div>
              {/*line*/}
              <div className="bg-border-color w-48 ml-4 h-[1px]"></div>
              {/*information*/}
              <div>
                <span className="flex ">
                  <img className="w-5 h-5 mr-2 mt-1" src={Location} />
                  <h6>Cairo</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Clock} />
                  <h6>Full Time</h6>
                </span>
                <span className="flex ">
                  <img className="w-5 h-5  mr-2 mt-1" src={Cash} />
                  <h6>6000 EGP/Month</h6>
                </span>
                <span className="flex pb-1 ">
                  <div className="w-10 bg-yellow-100 rounded-md px-1">
                    4
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400 ml-1"
                    />
                  </div>
                  <h6 className="text-main-color ml-2">
                    (51,365 <span>Reviews)</span>
                  </h6>
                </span>
              </div>
              {/*Buttons*/}
              <div className="flex gap-4">
                <button className="border border-main-color w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  <img className="w-5 h-5" src={BookMark} />
                  <span className="text-main-color">Save</span>
                </button>
                <button className="border border-main-color bg-main-color text-white w-28 h-6 text-center rounded-2xl flex items-center justify-center">
                  View
                </button>
              </div>
            </div>
          </div>
          {/*End Box*/}
        </div>
        <div className="border-b-[1px] border-main-color w-48 lg:w-56  text-main-color ml-auto lg:pt-5">
          <a href="">See other jobs in SHIFT SWIFT</a>
        </div>
      </div>
    </div>
  );
}

export default ExploreJobsSection;
