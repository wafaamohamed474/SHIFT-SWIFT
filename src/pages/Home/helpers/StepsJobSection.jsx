
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faChevronLeft, faChevronRight, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
function StepsJobSection() {
  const navigate = useNavigate();

  const handleFindJobs = () => {
      navigate("/register-user");
  };
  return (
    <div className="flex flex-col lg:flex-row bg-secondary-color items-center border-t border-border-color py-40 relative">
      {/* Find jobs */}
      <div className="text-center lg:ml-28">
        <h6 className="font-bold text-3xl pb-2">Simple steps to get your job</h6>
        <p className="text-lg lg:w-[500px]">Track your job application status whether it is viewed shortlisted</p>
        <button onClick={handleFindJobs} className="bg-main-color rounded-lg w-40 h-8 text-white my-5">Find Jobs</button>
      </div>

      {/* Steps */}
      <div className="flex flex-col gap-4 lg:ml-auto lg:mr-32 text-center">
        <div className="flex gap-3 items-center">
          <span className="rounded-full bg-main-color w-10 h-10 flex justify-center items-center text-white">
            <FontAwesomeIcon icon={faUser} />
          </span>
         <a href="register-user" ><h6 className="lg:text-2xl">Create An account</h6></a>
        </div>
        <div className="flex gap-3 items-center">
          <span className="rounded-full bg-main-color w-10 h-10 flex justify-center items-center text-white">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <h6 className="lg:text-2xl">Search Your Dream Job</h6>
        </div>
        <div className="flex gap-3 items-center">
          <span className="rounded-full bg-main-color w-10 h-10 flex justify-center items-center text-white">
            <FontAwesomeIcon icon={faCheckDouble} />
          </span>
          <h6 className="lg:text-2xl">Make A deal</h6>
        </div>
      </div>

      {/* Arrows */}
      <div className="bg-fill-bg-color h-12 flex items-center justify-center w-8 absolute left-0">
        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
      </div>
      <div className="bg-fill-bg-color h-12 flex items-center justify-center w-8 absolute right-0">
        <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
      </div>
    </div>
  );
}

export default StepsJobSection;
