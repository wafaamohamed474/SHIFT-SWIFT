
import { useEffect, useState } from "react";
import { getApplicantsForJob } from "../../../services/api/company";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";

const Accepted = ({ jobId, onView }) => {
  const [acceptedApplicants, setAcceptedApplicants] = useState([]);

  useEffect(() => {
    const fetchAccepted = async () => {
      const allApplicants = await getApplicantsForJob(jobId);
      const accepted = allApplicants?.filter((a) => a.status === 2);
      setAcceptedApplicants(accepted);
    };
    fetchAccepted();
  }, [jobId]);

  return (
    <div className="flex flex-col gap-4">
      {acceptedApplicants.length === 0 ? (
        <p>No accepted applicants yet.</p>
      ) : (
        acceptedApplicants.map((applicant) => (
          <ApplicantCard
            key={applicant.memberId}
            applicant={applicant}
            onPrimaryAction={() => onView(applicant)}
          />
        ))
      )}
    </div>
  );
};

export default Accepted;
