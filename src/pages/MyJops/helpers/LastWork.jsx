import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compnayLogo from "../../../assets/Frame 1618873105.png";
 
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/button/Button";

const LastWork = () => {
  return (
    <div className="w-full mt-7">
      <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
        {/* ====================== */}
        <div className="flex justify-between items-start mb-5 border-b border-border-color pb-5">
          <div>
            <h2 className="font-semibold text-3xl">Arabic Call Center</h2>
            <span className="text-dark-text text-sm font-semibold">
              Rog Web
            </span>
          </div>
          <div className="w-16 h-16">
            <img src={compnayLogo} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-main-text mb-2">Rate your Last experience with us!</p>
          <div>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
          </div>
        </div>
        <textarea className="w-full rounded-md border border-border-color bg-transparent text-dark-text p-2 text-sm focus:outline-none mt-3 mb-2" placeholder="Any other suggestions?"/>
        <Button type="submit" variant="primary" label="Submit" className="w-full py-3"/>
      </div>

      <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
        {/* ====================== */}
        <div className="flex justify-between items-start mb-5 border-b border-border-color pb-5">
          <div>
            <h2 className="font-semibold text-3xl">Arabic Call Center</h2>
            <span className="text-dark-text text-sm font-semibold">
              Rog Web
            </span>
          </div>
          <div className="w-16 h-16">
            <img src={compnayLogo} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-main-text mb-2">Rate your Last experience with us!</p>
          <div>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
            <button className="px-1">
              <FontAwesomeIcon icon={faStar} className="text-dark-text" />
            </button>
          </div>
        </div>
        <textarea className="w-full rounded-md border border-border-color bg-transparent text-dark-text p-2 text-sm focus:outline-none mt-3 mb-2" placeholder="Any other suggestions?"/>
        <Button type="submit" variant="primary" label="Submit" className="w-full py-3"/>
      </div>
    </div>
  );
};

export default LastWork;
