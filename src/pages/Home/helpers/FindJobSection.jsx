import SmallPhone from "../../../assets/Group 8936.png";
import BigPhone from "../../../assets/Group 462.png";
import { useState } from "react";
import { useNavigate } from "react-router";
function FindJobSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFindJobs = () => {
    if (email.trim() !== "") {
      localStorage.setItem("userEmail", email);
      setError("");
      navigate("/register-user");
    } else {
      setError("Please enter your email.");
    }
  };
  return (
    <div className="container justify-center py-10 flex flex-col-2 gap-x-10  ">
      {/* Search Section */}
      <div className="flex flex-col gap-4 justify-center ">
        <h1 className="capitalize font-semibold lg:text-5xl text-3xl lg:max-w-sm leading-snug">
          We make it easy for you to get the job!
        </h1>
        <p className="max-w-sm lg:max-w-md">
          Explore the Right Jobs and Career Opportunities
        </p>
        <div className="flex border border-dark-text rounded-3xl w-full h-12">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="focus:outline-none text-dark-text bg-bg-color w-full m-4 me-auto"
          />
          <button
           onClick={handleFindJobs}
           className="rounded-3xl bg-main-color text-white lg:w-[300px] w-[200px]"
          >
            Find Jobs
          </button>
        </div>
        {error && <span className="text-red-500 text-sm">{error}</span>}
      </div>

      {/* Mobile Phones Section */}
      <div className="relative hidden lg:flex bg-secondary-color w-[400px] lg:w-[600px] h-[450px] rounded-3xl px-5 ">
        {/* Small Phone */}
        <div className="absolute bottom-0  h-[300px]">
          <img
            className="w-full h-full object-contain"
            src={SmallPhone}
            alt="Small Phone"
          />
        </div>

        {/* Big Phone */}
        <div className="absolute bottom-0  lg:left-52  h-[450px] ">
          <img
            className="w-full h-full object-contain"
            src={BigPhone}
            alt="Big Phone"
          />
        </div>
      </div>
    </div>
  );
}

export default FindJobSection;
