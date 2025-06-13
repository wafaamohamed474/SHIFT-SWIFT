import { useEffect, useState } from "react";
import NoSavePhoto from "../../../assets/NoSavePhoto.png";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";
import { getApplicantsForJob, addToShortList } from "../../../services/api/company";
import { useLocation } from "react-router";
import { useAlert } from "../../../context/AlertContext";

const Received = ({ onPrimaryAction }) => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { showAlert } = useAlert();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get("jobId");

  const handleMoveToShortList = async (applicant) => {
    try {
      await addToShortList(jobId, applicant.memberId);
      showAlert("Applicant added to short list");
      // إزالة المتقدم من القائمة بعد نقله
      setApplicants((prev) => prev.filter((a) => a.memberId !== applicant.memberId));
    } catch (error) {
      // ممكن تضيفي showAlert هنا لو حابة تعرضي خطأ
      console.error("Failed to move applicant to shortlist", error);
    }
  };

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const data = await getApplicantsForJob(jobId);
        // عرض فقط المتقدمين الجدد (status = 1)
        setApplicants(data.filter((app) => app.status === 1));
        console.log("Filtered applicants", data);
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
        applicants.map((applicant) => (
          <ApplicantCard
            key={applicant.memberId}
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
