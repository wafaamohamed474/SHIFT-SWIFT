import { useEffect, useState } from "react";
import NoSavePhoto from "../../../assets/NoSavePhoto.png";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";
import {
  getApplicantsForJob,
  getRandomApplicants,
} from "../../../services/api/company";
import { useAlert } from "../../../context/AlertContext";
import { useLocation } from "react-router";

const Received = ({ jobId: propJobId, onPrimaryAction, refresh, onAddToShortList }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const queryJobId = query.get("jobId");
  const jobId = propJobId || queryJobId;

  useEffect(() => {
    const fetchApplicants = async () => {
      setLoading(true);
      try {
        let data = [];
        if (jobId) {
          data = await getApplicantsForJob(jobId);
          console.log("data from recived" , data);
          
          data = data.filter((app) => app.status === 1 || app.status === 5);
        } else {
          data = await getRandomApplicants();
        }
        setApplicants(data);
      } catch (err) {
        setApplicants([]);
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [jobId, refresh]);

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="w-full mt-7">
      {applicants.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full my-20 text-center px-4">
          <img src={NoSavePhoto} alt="No Applicants" className="w-40 md:w-1/4 mb-6" />
          <h1 className="text-2xl font-semibold mb-2">
            {jobId ? "No Applicants Yet ..!" : "No Random Applicants ..!"}
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            {jobId
              ? "No applicants have been added yet. Check back later."
              : "No random applicants available now. Try again later."}
          </p>
        </div>
      ) : (
        applicants.map((applicant) => (
          <ApplicantCard
            key={applicant.memberId}
            applicant={applicant}
            primaryLabel="View"
            secondaryLabel={jobId ? "Move to Short List" : undefined}
            onPrimaryAction={() => onPrimaryAction(applicant.memberId)}
            onSecondaryAction={
              jobId ? () => onAddToShortList(jobId, applicant.memberId) : undefined
            }
          />
        ))
      )}
    </div>
  );
};

export default Received;
