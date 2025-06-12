import { useEffect, useState } from "react";
import NoSavePhoto from "../../../assets/NoSavePhoto.png";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";
import { getApplicantsForJob } from "../../../services/api/company";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const Received = ({ onPrimaryAction }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get("jobId");

  const handleMoveToShortList = (applicant) => {
    const storedApplicants = JSON.parse(localStorage.getItem("shortList")) || [];
    const isAlreadyAdded = storedApplicants.some(
      (e) => e.name === applicant.name && e.jobName === applicant.jobName
    );

    if (!isAlreadyAdded) {
      const updatedJobs = [...storedApplicants, applicant];
      localStorage.setItem("shortList", JSON.stringify(updatedJobs));
      toast.success(`${applicant.name} has been added to your Shortlist!`);
    } else {
      toast.info(`${applicant.name} is already in your Shortlist.`);
    }
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const data = await getApplicantsForJob(jobId);
        setApplicants(data);
        console.log("applicants", data);
      } catch (err) {
        setApplicants([]);
        setError("Error fetching applicants");
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchApplicants();
    }
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mt-7">
      {applicants.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full my-20 text-center px-4">
          <img src={NoSavePhoto} alt="No saved Applicants" className="w-40 md:w-1/4 mb-6" />
          <h1 className="text-2xl font-semibold mb-2">No Applicants Yet ..!</h1>
          <p className="text-gray-600 mb-8 max-w-md">
            No applicants have been added yet. Check back later.
          </p>
        </div>
      ) : (
        applicants.map((applicant, index) => (
          <ApplicantCard
            key={index}
            applicant={applicant}
            primaryLabel="View"
            secondaryLabel="Move to Short List"
            onPrimaryAction={() => onPrimaryAction(applicant)}
            onSecondaryAction={() => handleMoveToShortList(applicant)}
          />
        ))
      )}
    </div>
  );
};

export default Received;
