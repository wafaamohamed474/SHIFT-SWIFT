import { faCircle, faStar,faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BookMark from "../../assets/Bookmark.png";
import Clock from "../../assets/Clock.png";
import Image from "../../assets/image 4.png";
import Location from "../../assets/Location-Vector.png";
import MainLocation from "../../assets/Location.png";
import Cash from "../../assets/mdi_cash-100.png";
import MainCash from "../../assets/cash-100.png";
import Our from "../../assets/our.png";
import User from "../../assets/mainuser.png";
import VectorTech from "../../assets/Vector_tech.png";
import Logo from '../../assets/logo.png';
import SearchIcon from '../../assets/Search_Magnifying_Glass.png';
import ReviewCards  from './helpers/Cards';
import Team from '../../assets/team.png';
import Share from '../../assets/share.png';
import Flag from '../../assets/Flag.png';
import Vector from "../../assets/Vector.png";
function Home() {
  const jobData = [
    { title: "Arabic call center", company: "Rog Web", location: "Cairo", type: "Full Time", salary: "6000 EGP/Month", rating: 4, reviews: 51365 },
    { title: "Arabic call center", company: "Rog Web", location: "Cairo", type: "Full Time", salary: "6000 EGP/Month", rating: 4, reviews: 51365 },
    { title: "Arabic call center", company: "Rog Web", location: "Cairo", type: "Full Time", salary: "6000 EGP/Month", rating: 4, reviews: 51365 },
    { title: "Arabic call center", company: "Rog Web", location: "Cairo", type: "Full Time", salary: "6000 EGP/Month", rating: 4, reviews: 51365 },
  ];
  return (
    <div className='py-10 container'>
      {/*heading*/}
      <div className='flex flex-col items-center justify-center gap-10'>
        <img className="w-96" src={Logo}/>
        <div className='flex border  bg-secondary-color border-border-color h-12 rounded-2xl '>
          <img className='w-10 p-2' src={SearchIcon}/>
          <input className='focus:outline-none text-dark-text p-1 bg-secondary-color  w-full' type='text' placeholder='Job Title'/>
          <input className='focus:outline-none text-dark-text border-l border-border-color p-1  bg-secondary-color  w-full' type='text' placeholder='City'/>
          <button className='bg-main-color w-64 rounded-2xl text-white m-1'>Search</button>
        </div>
      </div>
      {/*Jobs*/}
      <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-x-3'>
     <div className='flex flex-col gap-3'>
    {jobData.map((job, index) => (
      <div key={index} className="bg-secondary-color rounded-xl p-2">
        {/* Header */}
        <div>
          {/* Name Of Job */}
          <div className="flex">
            <div>
              <div className="flex  pb-1 pt-2">
                <h1 className="pr-1 text-3xl">{job.title}</h1>
                <span>
                  <img className="w-6 h-6 mt-2" src={VectorTech} alt="Tech Icon" />
                </span>
              </div>
              <p className="text-sm pb-0">{job.company}</p>
            </div>
            <span className="bg-white ml-auto rounded-2xl">
              <img className="" src={Image} alt="Image" />
            </span>
          </div>
          {/* Information */}
          <div className="flex gap-4 pb-5">
            <span className="flex">
              <img className="w-5 h-5 mr-2 mt-1" src={Location} alt="Location Icon" />
              <h6>{job.location}</h6>
            </span>
            <span className="flex">
              <img className="w-5 h-5 mr-2 mt-1" src={Clock} alt="Clock Icon" />
              <h6>{job.type}</h6>
            </span>
            <span className="flex">
              <img className="w-5 h-5 mr-2 mt-1" src={Cash} alt="Cash Icon" />
              <h6>{job.salary}</h6>
            </span>
            <span className="flex pb-1">
              <div className="w-10 bg-amber-100 rounded-md px-1">{job.rating}
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
              </div>
              <h6 className="text-main-color ml-2">
                ({job.reviews} <span>Reviews</span>)
              </h6>
            </span>
          </div>
          {/* Buttons */}
          <div className="flex gap-4">
            <button className="border border-main-color w-40 h-8 text-center rounded-lg flex items-center justify-center">
              <img className="w-5 h-5" src={BookMark} alt="Bookmark Icon" />
              <span className="text-main-color">Save</span>
            </button>
            <button className="border border-main-color bg-main-color text-white w-40 h-8 text-center rounded-lg flex items-center justify-center">
              View
            </button>
          </div>
        </div>
      </div>
    ))}
     </div>
     {/*end jobs*/}
     {/*Details*/}
     <div className="border border-border-color rounded-xl  hidden md:flex flex-col gap-y-5 p-5">
            <div className="hover:bg-transparent hover:cursor-pointer ml-auto">
          <FontAwesomeIcon icon={faXmark} className='text-border-color' />
          </div>
          {/*title*/}
              <div className="flex justify-center items-center">
                <div className='flex flex-col gap-y-3'>
                  <div className="flex justify-center items-center gap-x-3 ">
                    <h1 className="text-3xl text-main-text">Arabic call center</h1>
                    <span>
                      <img className="w-6 h-6 " src={VectorTech} />
                    </span>
                  </div>
                  <p className="text-sm w-16 border-b border-border-color">Rog Web</p>
                </div>
                <span className="bg-white rounded-xl  ml-auto">
                  <img className="" src={Image} />          
                </span>
              </div>
              {/*buttons*/}
              <div className='flex gap-3'>
              <button className='border border-border-color text-border-color rounded-lg p-1'>3 Hours Ago</button>
              <button className='border border-green-500 text-green-500  rounded-lg p-1'>33 Applicants</button>
              <button className='border border-border-color text-main-text flex gap-x-1 items-center rounded-lg p-1'><img className="w-3 h-3" src={VectorTech} />Verified Employer</button>
              </div>
              {/*Job Description*/}
              <div className='flex flex-col  bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
                <h4>Job Description</h4>
                <div className='p-1'>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Responding to customer questions and providing the required information</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Assisting customers in solving any problems they encounter with products or services</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Logging customer complaints and working to find solutions</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Informing customers about offers</p></div>
                </div>
                <div className='h-[1px] bg-border-color my-5'></div>
                <div className='flex flex-wrap gap-5'>
  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <img src={MainLocation} className='w-4 h-5 text-main-color' />
    <div>
      <p className="text-md">Location</p>
      <h6 className="text-xs font-semibold">Cairo</h6>
    </div>
  </div>

  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <img src={User} className='w-4 h-5 text-main-color' />
    <div>
      <p className="text-md">Gender</p>
      <h6 className="text-xs font-semibold">Male/Female</h6>
    </div>
  </div>

  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <img src={Our} className='w-5 h-5 text-main-color' />
    <div>
      <p className="text-md">Job Type</p>
      <h6 className="text-xs font-semibold">Full Time</h6>
    </div>
  </div>

  <div className='flex items-center gap-x-3 w-full sm:w-auto'>
    <img src={MainCash} className='w-5 h-5 text-main-color' />
    <div>
      <p className="text-md">Salary</p>
      <h6 className="text-xs font-semibold">6000-9000 EGP/Month</h6>
    </div>
  </div>
</div>

              </div>
              {/*Recuirements*/}
              <div className='flex flex-col  bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
                <h4>Recuirements</h4>
                <div className='p-1'>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Responding to customer questions and providing the required information</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Assisting customers in solving any problems they encounter with products or services</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Logging customer complaints and working to find solutions</p></div>
                <div className='flex items-center gap-x-2 text-md'><FontAwesomeIcon icon={faCircle} className='text-border-color w-2' /><p>Informing customers about offers</p></div>
                </div>
              </div>
              {/*Reviews*/}
              <div className=''>
                <ReviewCards />
              </div>
              {/*Hiring Team*/}
              <div className='bg-fill-bg-color rounded-lg p-3 border-[0.5px] border-gray-300'>
              <h3 className='font-semibold'>View Hiring Team</h3>
              <div className='flex gap-5 p-2 '>
                  <img src={Team} className='w-24 '/>
                  <div>
                    <h4 className='font-semibold'>Karim Hassan</h4>
                    <p>CEO Responding to customer questions and providing the required information Responding to customer</p>
                  </div>
              </div>
              </div>
              <p className='text-sm'>at the side we strive to make the job search process efficient transparent and secure start your journey today and let us help you find your dream job
                <br/>
                <span className='text-main-color text-md'>Learn More</span> Or <span className='text-main-color text-md'>Report This Job</span>
              </p>
              <div className='flex gap-5'>
                <button className='border border-main-color px-4 py-3 rounded-2xl'><img className='w-5' src={Share} /></button>
                <button className='border border-main-color px-4 py-3 rounded-2xl'><img className='w-6' src={BookMark} /></button>
                <button className='border border-main-color px-4 py-3 rounded-2xl'><img  className='w-5' src={Flag} /></button>
                <button className='w-64 bg-main-color text-white rounded-2xl'>Applay Now</button>
              </div>
              </div>

      </div>
      <h3 className='font-semibold mb-3'>Similar Jobs</h3>
<>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {jobData.map((job, index) => (
    <div key={job.id || index} className="bg-secondary-color rounded-lg p-3">
      {/* Job Details */}
      <div className="flex">
        <div>
          {/* Trending */}
          <div className="w-28 h-5 bg-main-color rounded-lg flex items-center justify-center">
            <img className="w-4 h-4 mr-2" src={Vector} alt="Trending Icon" />
            <p className="text-white text-xs">Trending Now</p>
          </div>
          <div className="flex pb-1 pt-2 items-center">
            <h1 className="text-xl">{job.title}</h1>
            <span>
              <img className="w-4 h-4" src={VectorTech} alt="Tech Icon" />
            </span>
          </div>
          <p className="text-sm pb-0">{job.company}</p>
        </div>
        <span className="bg-white w-20 h-20 rounded-lg ml-auto">
          <img className="w-full h-full object-cover" src={Image} alt="Company Logo" />
        </span>
      </div>

      {/* Line */}
      <div className="bg-border-color w-2/3 mx-auto my-4 h-[1px]"></div>

      {/* Job Info */}
      <div>
        <span className="flex items-center">
          <img className="w-5 h-5 mr-2 mt-1" src={Location} alt="Location Icon" />
          <h6 className="text-md">{job.location}</h6>
        </span>
        <span className="flex">
          <img className="w-5 h-5 mr-2 mt-1" src={Clock} alt="Clock Icon" />
          <h6 className="text-md">{job.type}</h6>
        </span>
        <span className="flex">
          <img className="w-5 h-5 mr-2 mt-1" src={Cash} alt="Cash Icon" />
          <h6 className="text-md">{job.salary}</h6>
        </span>
        <span className="flex pb-1">
          <div className="w-10 bg-yellow-100 rounded-md px-1">
            {job.rating}
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 ml-1" />
          </div>
          <h6 className="text-main-color ml-2 text-md">
            ({job.reviews} <span>Reviews</span>)
          </h6>
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

      </>
    </div>
  
  )
}

export default Home