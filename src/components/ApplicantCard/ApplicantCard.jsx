import {
  faClock,
  faMoneyBill1,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/Button";

const ApplicantCard = ({ applicant, onPrimaryAction, onSecondaryAction, primaryLabel, secondaryLabel }) => {
  return (
    <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
      {/* Applicant Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="font-semibold text-3xl">{applicant.name}</h2>
          <span className="text-dark-text text-sm font-semibold">{applicant.jobName}</span>
        </div>
        <div className="w-20 h-20">
          <img
            src={applicant.applicantPhoto}
            alt="Applicant Logo"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      {/* Applicant Info */}
      <div className="flex flex-wrap justify-between items-start gap-y-3">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faClock} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.typeJob}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMoneyBill1} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold">{applicant.rating}</span>
          <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
          <span className="text-sm font-semibold text-main-color">
            ({applicant.reviews} reviews)
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {secondaryLabel && (
          <Button
            type="button"
            label={secondaryLabel}
            variant="secondary"
            className="w-full md:w-64 text-lg border-main-color text-main-color"
            onClick={onSecondaryAction}
          />
        )}
        {primaryLabel && (
          <Button
            type="button"
            label={primaryLabel}
            variant="primary"
            className="w-full md:w-28 text-lg"
            onClick={onPrimaryAction}
          />
        )}
      </div>
    </div>
  );
};

export default ApplicantCard;
