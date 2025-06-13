import { useEffect, useState } from "react";
import ApplicantCard from "../../../components/ApplicantCard/ApplicantCard";
import Button from "../../../components/button/Button";
import NoSavePhoto from "../../../assets/NoSavePhoto.png";
import { useNavigate, useLocation } from "react-router";
import { getShortlistedApplicants, removeFromShortList } from "../../../services/api/company";
import { useAlert } from "../../../context/AlertContext";

const ShortList = ({ onView }) => {
  const [shortListApplicants, setShortListApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const jobId = query.get("jobId");
  const { showAlert } = useAlert();

  useEffect(() => {
    const fetchShortListed = async () => {
      try {
        if (jobId) {
          const data = await getShortlistedApplicants(jobId);
          setShortListApplicants(data.data);
          console.log("shortlist", data);
        }
      } catch (error) {
        console.log("Failed to fetch short list", error);
        setShortListApplicants([]);
      } finally {
        setLoading(false);
      }
    };

    fetchShortListed();
  }, [jobId]);

  const handleRemoveFromShortList = async (applicantToRemove) => {
    try {
      await removeFromShortList(jobId, applicantToRemove.memberId); // طلب فعلي للـ API
      const updated = shortListApplicants.filter(
        (a) => a.memberId !== applicantToRemove.memberId
      );
      setShortListApplicants(updated);
      showAlert("Removed from short list successfully");
    } catch (error) {
      console.error("Error removing applicant from shortlist", error);
      showAlert("Failed to remove from short list", "error");
    }
  };

  if (loading) return <div>Loading...</div>;

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
