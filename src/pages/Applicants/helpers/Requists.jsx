import {
  faGraduationCap,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import last from "../../../assets/Arrow_Undo_Down_Left.png";
import { useEffect, useState } from "react";
import {
  acceptApplicant,
  getSpecificApplicantForJob,
  rejectApplicant,
} from "../../../services/api/company";
import { useAlert } from "../../../context/AlertContext";

function Requists({ jobId, memberId, onDecision }) {
  const [applicant, setApplicant] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();

  const handleAccept = async () => {
    try {
      await acceptApplicant(jobId, memberId);
      showAlert("Accepted successfully");
      onDecision();
    } catch (error) {
      console.error("Failed to accept. Please try again.", error);
    }
  };

  const handleReject = async () => {
    try {
      await rejectApplicant(jobId, memberId);
      showAlert("Rejected successfully");
      onDecision();
    } catch (error) {
      console.error("Failed to reject. Please try again.", error);
    }
  };

  useEffect(() => {
    const fetchApplicant = async () => {
      try {
        const data = await getSpecificApplicantForJob(jobId, memberId);
        setApplicant(data);
       console.log("request", data);
      } catch (err) {
        console.error("Failed to load applicant", err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId && memberId) {
      fetchApplicant();
    }
  }, [jobId, memberId]);

  if (loading) return <div className="p-10 text-lg">Loading...</div>;
  if (!applicant)
    return (
      <div className="p-10 text-red-600 text-lg">No applicant data available.</div>
    );

  return (
    <div className="w-full">
      <div className="md:pl-10">
        {/* Header */}
        <div className="flex border-b border-dark-text pb-5">
          <div className="w-24 h-24 rounded-2xl">
            <img
              className="rounded-2xl w-full h-full"
              src={applicant.memberImageUrl}
              alt="applicant"
            />
          </div>
          <div className="md:pl-10">
            <h2 className="font-semibold text-3xl mb-1">{applicant.jobTitle}</h2>
            <span className="text-xl  mb-1">{applicant.companyFirstName +" " + applicant.companyLastName }</span>
          </div>
        </div>

        {/* Last Work */}
        <div className="flex items-center gap-4 py-5">
          <img src={last} className="w-6" alt="last work" />
          <h1 className="text-2xl font-semibold">Last Work</h1>
        </div>
        {applicant.lastWorkInJob ? (
          <div className="flex border-b border-dark-text pb-5">
            <div className="w-24 h-24 rounded-2xl">
              <img
                className="rounded-2xl w-full h-full"
                src={applicant.memberImageUrl}
                alt="company"
              />
            </div>
            <div className="md:pl-10">
              <h2 className="font-semibold text-3xl mb-2">
                {applicant.lastWorkInJob.title}
              </h2>
              <span className="text-xl  mb-2">
                {applicant.lastWorkInJob.firstName + " " +applicant.lastWorkInJob.lastName }
              </span>
              <p className="text-lg text-gray-500">
                {new Date(applicant.lastWorkInJob.postedOn).toLocaleDateString()}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mb-4">No last job available.</p>
        )}

        {/* Education */}
        <div className="flex items-center gap-4 py-5">
          <FontAwesomeIcon icon={faGraduationCap} className="text-2xl text-dark-text" />
          <h1 className="text-2xl font-semibold">Education</h1>
        </div>
        <div className=" border-b border-dark-text pb-5">
          {applicant.educations && applicant.educations.length > 0 ? (
            <div className="mb-4">
              <h2 className="font-semibold text-2xl mb-1">
                {applicant.educations[0].level} - {applicant.educations[length].faculty}
              </h2>
              <span className="text-xl">{applicant.educations[length].universityName}</span>
            </div>
          ) : (
            <p className="text-gray-500">No education data available.</p>
          )}
        </div>

        {/* Phone */}
        <div className="py-5 border-b border-dark-text pb-5">
          <div className="flex items-center gap-4 mb-2">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-dark-text" />
            <h1 className="text-2xl font-semibold">Phone Number</h1>
          </div>
          <p className="text-xl">{applicant.phoneNumber}</p>
        </div>

        {/* Location */}
        <div className="py-5  pb-10">
          <div className="flex items-center gap-4 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-dark-text" />
            <h1 className="text-2xl font-semibold">Location</h1>
          </div>
          <p className="text-xl">{applicant.location}</p>
        </div>

        

        {/* Buttons */}
        <div className="flex gap-5">
          <button
            className="bg-red-700 text-white text-sm font-semibold rounded-xl w-48 p-2"
            onClick={handleReject}
          >
            Rejected
          </button>
          <button
            className="bg-green-700 text-white text-sm font-semibold rounded-xl w-48 p-2"
            onClick={handleAccept}
          >
            Accepted
          </button>
        </div>
      </div>
    </div>
  );
}

export default Requists;
