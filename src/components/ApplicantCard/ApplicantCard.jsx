import {
} from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/Button";

const ApplicantCard = ({ applicant, onPrimaryAction, onSecondaryAction, primaryLabel, secondaryLabel }) => {
  return (
    <div className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color">
      {/* Applicant Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="font-semibold text-3xl">{applicant.fullName ? applicant.fullName : " "}</h2>
          <span className="text-dark-text text-sm font-semibold">{applicant.jobTitle}</span>
        </div>
        <div className="w-20 h-20">
          <img
            src={applicant.memberImageUrl}
            alt="Applicant Logo"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      {/* Applicant Info */}
      <div className="flex flex-wrap items-start gap-10">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationDot} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhone} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.phoneNumber}</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUniversity} className="text-dark-text" />
          <span className="text-sm font-semibold">{applicant.educations}</span>
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
