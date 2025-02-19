import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compnayLogo from "../../../assets/Frame 1618873105.png";
import { faClock, faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
 
 
 

const AppliedJobs = () => {
  return (
    <div className="w-full mt-7">
      <div className="border-b border-border-color mb-5">
        <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-2 border border-border-color">
          {/* ====================== */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h2 className="font-semibold text-3xl">Web Designer</h2>
              <span className="text-dark-text text-sm font-semibold">
                Rog Web
              </span>
            </div>
            <div className="w-16 h-16">
              <img src={compnayLogo} />
            </div>
          </div>
          {/* ===================== */}
          <div className="flex justify-between items-start">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">Cairo</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faClock}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">Full Time</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">6000 EGP/Month</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="px-1 rounded bg-orange-50 mr-2">
                <span className="text-sm font-semibold">4</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-yellow-400 pl-2"
                />
              </div>
              <span className="text-sm font-semibold text-main-color">
                (51,032 reviews)
              </span>
            </div>
          </div>
          {/* ========= */}
          <div className="mt-5 flex bg-green-400 bg-opacity-20 items-center w-fit px-3 py-1 rounded">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-700 mr-2"
            />
            <span className="text-sm">Application Sent 1day ago</span>
          </div>
        </div>
        <div className="rounded-md bg-fill-bg-color w-full p-4 mb-5 border border-border-color">
          {/* ====================== */}
          <div className="flex justify-between items-start mb-5">
            <h2 className="font-semibold text-3xl">Application Status</h2>
       
          </div>
        </div>
      </div>

      <div className="border-b border-border-color mb-5">
        <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-2 border border-border-color">
          {/* ====================== */}
          <div className="flex justify-between items-start mb-5">
            <div>
              <h2 className="font-semibold text-3xl">Web Designer</h2>
              <span className="text-dark-text text-sm font-semibold">
                Rog Web
              </span>
            </div>
            <div className="w-16 h-16">
              <img src={compnayLogo} />
            </div>
          </div>
          {/* ===================== */}
          <div className="flex justify-between items-start">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">Cairo</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faClock}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">Full Time</span>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMoneyBill1}
                className="text-sm text-dark-text pr-3"
              />
              <span className="text-sm font-semibold">6000 EGP/Month</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="px-1 rounded bg-orange-50 mr-2">
                <span className="text-sm font-semibold">4</span>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-sm text-yellow-400 pl-2"
                />
              </div>
              <span className="text-sm font-semibold text-main-color">
                (51,032 reviews)
              </span>
            </div>
          </div>
          {/* ========= */}
          <div className="mt-5 flex bg-green-400 bg-opacity-20 items-center w-fit px-3 py-1 rounded">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-700 mr-2"
            />
            <span className="text-sm">Application Sent 1day ago</span>
          </div>
        </div>
        <div className="rounded-md bg-fill-bg-color w-full p-4 mb-5 border border-border-color">
          {/* ====================== */}
          <div className="flex justify-between items-start mb-5">
            <h2 className="font-semibold text-3xl">Application Status</h2>
       
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AppliedJobs;
