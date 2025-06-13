import { useState } from "react";
import Button from "../../components/button/Button";
import Received from "./helpers/Received";
import ShortList from "./helpers/ShortList";
import Requists from "./helpers/Requists";
import { useSearchParams } from "react-router";

const Applicants = () => {
  const [activeTab, setActiveTab] = useState("received");       // التبويب الحالي
  const [previousTab, setPreviousTab] = useState(null);         // التبويب السابق عند عرض التفاصيل
  const [refresh, setRefresh] = useState(0);                    // مفتاح لتحديث البيانات

  const [searchParams, setSearchParams] = useSearchParams();
  const jobId = searchParams.get("jobId");
  const memberId = searchParams.get("memberId");

  // التنقل بين التبويبات الرئيسية
  const handleToggle = (tab) => setActiveTab(tab);

  // عند الضغط على View لعرض تفاصيل متقدم
  const handleViewApplicant = ({ memberId }) => {
    setPreviousTab(activeTab);                                  // حفظ التبويب الحالي
    setSearchParams({ jobId, memberId });                        // تحديث الرابط بالمتقدم
    setActiveTab("request");                                     // فتح تبويب التفاصيل
  };

  // بعد قبول/رفض المتقدم
  const handleDecision = () => {
    setRefresh((prev) => prev + 1);                              // تحديث القائمة
    setSearchParams({ jobId });                                  // حذف memberId من الرابط
    setActiveTab(previousTab || "received");                     // الرجوع للتبويب السابق
  };

  return (
    <div className="w-full">
      <div className="md:pl-10 lg:w-2/3">
        <h1 className="font-bold text-4xl pb-4">
          {memberId ? "Requests Received" : "Applicants"}
        </h1>

        {/* أزرار التبويبات */}
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
          </div>
        )}

        {/* محتوى التبويبات */}
        <div className="mt-7">
          {!memberId && activeTab === "received" && (
            <Received
              jobId={jobId}
              onPrimaryAction={handleViewApplicant}
              refresh={refresh}
            />
          )}

          {!memberId && activeTab === "shortList" && (
            <ShortList
              onView={handleViewApplicant}
              refresh={refresh} // لو محتاجة تحدث القائمة
            />
          )}

          {memberId && (
            <Requists
              jobId={jobId}
              memberId={memberId}
              onDecision={handleDecision} // يتم استدعاؤه بعد Accept / Reject
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Applicants;
