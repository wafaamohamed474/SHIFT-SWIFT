import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import compnayLogo from "../../../assets/Frame 1618873105.png";
import {
  faClock,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";
import { faBookmark, faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/button/Button";
 

const SavedJobs = () => {
  return (
    <div className="w-full mt-7">
      <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
        {/* ====================== */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="font-semibold text-3xl">Arabic Call Center</h2>
            <span className="text-dark-text text-sm font-semibold">Rog Web</span>
          </div>
          <div className="w-16 h-16">
            <img src={compnayLogo} />
          </div>
        </div>
        {/* ===================== */}
        <div className="flex justify-between items-start">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Cairo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Full Time</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyBill1} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">6000 EGP/Month</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="px-1 rounded   mr-1">
              <span className="text-sm font-semibold">4</span>
              <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1"/>
            </div>
            <span className="text-sm font-semibold text-main-color">(51,032 reviews)</span>
          </div>
        </div>
        {/* ========= */}
        <div className="mt-5 flex gap-4">
              <Button type="reset" label={<><FontAwesomeIcon icon={faBookmark} className="mr-2"/> Saved</>} variant="secondary" className="w-1/4 text-main-color border-main-color"/>
              <Button type="submit" label="View" variant="primary" className="w-1/4"/>
        </div>
      </div>

      <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
        {/* ====================== */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="font-semibold text-3xl">Arabic Call Center</h2>
            <span className="text-dark-text text-sm font-semibold">Rog Web</span>
          </div>
          <div className="w-16 h-16">
            <img src={compnayLogo} />
          </div>
        </div>
        {/* ===================== */}
        <div className="flex justify-between items-start">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Cairo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Full Time</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyBill1} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">6000 EGP/Month</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="px-1 rounded   mr-1">
              <span className="text-sm font-semibold">4</span>
              <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1"/>
            </div>
            <span className="text-sm font-semibold text-main-color">(51,032 reviews)</span>
          </div>
        </div>
        {/* ========= */}
        <div className="mt-5 flex gap-4">
              <Button type="reset" label={<><FontAwesomeIcon icon={faBookmark} className="mr-2"/> Saved</>} variant="secondary" className="w-1/4 text-main-color border-main-color"/>
              <Button type="submit" label="View" variant="primary" className="w-1/4"/>
        </div>
      </div>

      <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
        {/* ====================== */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <h2 className="font-semibold text-3xl">Arabic Call Center</h2>
            <span className="text-dark-text text-sm font-semibold">Rog Web</span>
          </div>
          <div className="w-16 h-16">
            <img src={compnayLogo} />
          </div>
        </div>
        {/* ===================== */}
        <div className="flex justify-between items-start">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Cairo</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">Full Time</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faMoneyBill1} className="text-sm text-dark-text pr-3"/>
            <span className="text-sm font-semibold">6000 EGP/Month</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="px-1 rounded   mr-1">
              <span className="text-sm font-semibold">4</span>
              <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400 pl-1"/>
            </div>
            <span className="text-sm font-semibold text-main-color">(51,032 reviews)</span>
          </div>
        </div>
        {/* ========= */}
        <div className="mt-5 flex gap-4">
              <Button type="reset" label={<><FontAwesomeIcon icon={faBookmark} className="mr-2"/> Saved</>} variant="secondary" className="w-1/4 text-main-color border-main-color"/>
              <Button type="submit" label="View" variant="primary" className="w-1/4"/>
        </div>
      </div>

       

       
    </div>
  );
};

export default SavedJobs;
