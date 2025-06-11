import { useState } from "react";
import Button from "../../components/button/Button";
import AppliedJobs from "./helpers/AppliedJobs";
import LastWork from "./helpers/LastWork";
import SavedJobs from "./helpers/SavedJobs";

const MyJops = () => {
  const [activeTab, setActiveTab] = useState("saved");

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-full">
      <div className="md:pl-10  lg:w-2/3">
        <h1 className="font-bold text-4xl">My Jobs</h1>
        <div className="mt-7">
          <div className="mt-10 flex gap-4">
            <Button type="button" label="Saved" variant={activeTab === "saved" ? "active" : "disable"} onClick={()=>handleToggle('saved')} />
            <Button type="button" label="Applied" variant={activeTab === "applied" ? "active" : "disable"} onClick={()=>handleToggle('applied')}  />
            <Button type="button" label="Last Work" variant={activeTab === "lastWork" ? "active" : "disable"} onClick={()=>handleToggle('lastWork')}  />
          </div>
          {activeTab === 'saved' && <SavedJobs/>}
          {activeTab === 'applied' && <AppliedJobs/>}
          {activeTab === 'lastWork' && <LastWork/>}
           
        </div>
      </div>
    </div>
  );
};

export default MyJops;
