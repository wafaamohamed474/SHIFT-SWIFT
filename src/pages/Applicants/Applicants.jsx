import { useState } from "react";
import Button from "../../components/button/Button";
import Received from "./helpers/Received";
import ShortList from "./helpers/ShortList";
import Requists from "./helpers/Requists";
import AcceptedList from "./helpers/AcceptedList";
import { useSearchParams } from "react-router";
import { addToShortList, removeFromShortList } from "../../services/api/company";
import { useAlert } from "../../context/AlertContext";

const Applicants = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [previousTab, setPreviousTab] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const { showAlert } = useAlert();
  const [searchParams, setSearchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const memberId = searchParams.get("memberId");

  const handleToggle = (tab) => setActiveTab(tab);

  const handleViewApplicant = (applicant) => {
    setPreviousTab(activeTab);
    setSearchParams({ jobId, memberId: applicant });
    setActiveTab("request");
  };

  const handleAddToShortList = async (jobId, memberId) => {
  try {
    await addToShortList(jobId, memberId);
    showAlert("Applicant added to short list");
    setRefresh((prev) => prev + 1); //refresh
  } catch (error) {
    console.error("Failed to add to shortlist", error);
    showAlert("Failed to add to shortlist");
  }
};

const handleRemoveFromShortList = async (jobId, memberId) => {
  try {
    await removeFromShortList(jobId, memberId);
    showAlert("Applicant removed from short list");
    setRefresh((prev) => prev + 1);
  } catch (error) {
    console.error("Failed to remove from shortlist", error);
    showAlert("Failed to remove from shortlist");
  }
};

  const handleDecision = () => {
    setRefresh((prev) => prev + 1);
    setSearchParams({ jobId });
    setActiveTab(previousTab || "received");
  };

  return (
    <div className="w-full">
      <div className="md:pl-10 lg:w-2/3">
        <h1 className="font-bold text-4xl pb-4">
          {memberId ? "Requests Received" : "Applicants"}
        </h1>

        {!memberId && (
          <div className="mt-4 flex gap-4">
            <Button
              label="Received"
              variant={activeTab === "received" ? "active" : "disable"}
              onClick={() => handleToggle("received")}
            />
            <Button
              label="Short List"
              variant={activeTab === "shortList" ? "active" : "disable"}
              onClick={() => handleToggle("shortList")}
            />
            <Button
              label="Accepted"
              variant={activeTab === "accepted" ? "active" : "disable"}
              onClick={() => handleToggle("accepted")}
            />
          </div>
        )}

        <div className="mt-7">
          {!memberId && activeTab === "received" && (
            <Received
            jobId={jobId}
            onPrimaryAction={handleViewApplicant}
            refresh={refresh}
            onAddToShortList={handleAddToShortList}
          />
          )}

          {!memberId && activeTab === "shortList" && (
            <ShortList
            jobId={jobId}
            onView={handleViewApplicant}
            refresh={refresh}
            onRemove={handleRemoveFromShortList}
          />
          )}

          {!memberId && activeTab === "accepted" && (
            <AcceptedList
              jobId={jobId}
              refresh={refresh}
            />
          )}

          {memberId && (
            <Requists
              jobId={jobId}
              memberId={memberId}
              onDecision={handleDecision}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
