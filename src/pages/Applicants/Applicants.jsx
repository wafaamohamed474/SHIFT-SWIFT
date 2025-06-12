import { useState } from "react";
import Button from "../../components/button/Button";
import Received from "./helpers/Received";
import ShortList from "./helpers/ShortList";
import Requests from "./helpers/Requists";
import { useSearchParams } from "react-router";

const Applicants = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [previousTab, setPreviousTab] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [searchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  const handleViewApplicant = (applicant) => {
    setPreviousTab(activeTab);
    setSelectedApplicant(applicant);
    setActiveTab("request");
  };

  return (
    <div className="w-full">
      <div className="md:pl-10  lg:w-2/3">
        <h1 className="font-bold text-4xl">
          Applicants
        </h1>

        <div className="mt-7">
          <div className="mt-10 flex gap-4">
            <Button type="button" label="Received" variant={activeTab === "received" ? "active" : "disable"} onClick={() => handleToggle('received')} />
            <Button type="button" label="Short List" variant={activeTab === "shortList" ? "active" : "disable"} onClick={() => handleToggle('shortList')} />
          </div>

          {activeTab === 'received' && <Received onPrimaryAction={handleViewApplicant} jobId={jobId} />}
          {activeTab === 'shortList' && <ShortList onView={handleViewApplicant} />}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
