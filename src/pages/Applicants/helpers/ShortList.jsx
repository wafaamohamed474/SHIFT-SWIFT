import { useEffect, useState } from "react";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";
import Button from "../../../components/button/Button";
import NoSavePhoto from "../../../assets/NoSavePhoto.png";
import { useNavigate } from "react-router";
const ShortList = ({ onView }) => {
  const [shortListApplicants, setShortList] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const storedApplicants = JSON.parse(localStorage.getItem("shortList")) || [];
    setShortList(storedApplicants);
  }, []);

  const handleRemoveFromShortList = (applicantToRemove) => {
    const updatedApplicants = shortListApplicants.filter(
      (applicant) =>
        !(applicant.name === applicantToRemove.name && applicant.jobName === applicantToRemove.jobName)
    );
    setShortList(updatedApplicants);
    localStorage.setItem("shortList", JSON.stringify(updatedApplicants));
  };

  return (
    <div className="w-full mt-7">
      {shortListApplicants.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full my-20 text-center px-4">
          <img
            src={NoSavePhoto}
            alt="No saved Applicants"
            className="w-40 md:w-1/4 mb-6"
          />
          <h1 className="text-2xl font-semibold mb-2">No Saved Applicants Yet!</h1>
          <p className="text-gray-600 mb-8 max-w-md">
          Your notification will appear here once you've received them.
          </p>
          <Button
            type="submit"
            label="Go To Home"
            variant="primary"
            className="w-60 md:w-96 py-2 text-lg"
            onClick={() => navigate("/home")}
          />
        </div>
      ) : (
        shortListApplicants.map((applicant, index) => (
          <ApplicantCard
            key={index}
            applicant={applicant}
            primaryLabel="View"
            secondaryLabel="Remove from Short List"
            onPrimaryAction={() => onView(applicant)}
            onSecondaryAction={() => handleRemoveFromShortList(applicant)}
            secondaryBtnStyle="text-red-600 border-red-600"
          />
        ))
      )}
    </div>
  );
};

export default ShortList;
