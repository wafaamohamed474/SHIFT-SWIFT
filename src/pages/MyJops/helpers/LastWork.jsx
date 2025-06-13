import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../components/button/Button";
import { useEffect, useState } from "react";
import { getUserData } from "../../../services/authService";
import { AddRating, GetLastwork } from "../../../services/api/member";
import { useAlert } from "../../../context/AlertContext";

const LastWork = () => {
  const memberID = getUserData().memberId;
  const [lastWorkList, setLastWorkList] = useState([]);
  const [feedback, setFeedback] = useState({});
  const { showAlert } = useAlert();

  useEffect(() => {
    const fetchLastWork = async () => {
      try {
        const response = await GetLastwork();
        setLastWorkList(response.data || []);
      } catch (error) {
        console.error("Failed to fetch last work:", error);
      }
    };
    fetchLastWork();
  }, []);

  const handleInputChange = (companyId, field, value) => {
    setFeedback((prev) => ({
      ...prev,
      [companyId]: {
        ...prev[companyId],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (companyId) => {
    const { score, comment } = feedback[companyId] || {};
    if (!score) {
      showAlert("Please rate before submitting.", "error");
      return;
    }

    const data = { score, comment };

    try {
      await AddRating(companyId, memberID, data);

      showAlert("Rating submitted successfully!", "success");
      setFeedback((prev) => ({
        ...prev,
        [companyId]: { score: 0, comment: "" },
      }));
    } catch (err) {
    if (err?.response?.data?.statusCode === 409)
    {
      showAlert("You have already rated this company" , "error")
    }
      console.error("Failed to submit rating:", err);
    }
  };

  return (
    <div className="w-full mt-7">
      {lastWorkList.map((last) => {
        const companyId = last.companyId;
        const score = feedback[companyId]?.score || 0;
        const hovered = feedback[companyId]?.hovered || 0;
        const comment = feedback[companyId]?.comment || "";

        return (
          <div
            key={last.jobId}
            className="rounded-md bg-fill-bg-color w-full px-4 pt-8 pb-3 mb-10 border border-border-color"
          >
            <div className="flex justify-between items-start mb-5 border-b border-border-color pb-5">
              <div>
                <h2 className="font-semibold text-3xl">
                  {last.firstName + " " + last.lastName}
                </h2>
                <span className="text-dark-text text-sm font-semibold">
                  {last.description}
                </span>
              </div>
              <div className="w-16 h-16">
                <img src={last.companyPictureUrl} alt="company logo" />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-xl text-main-text mb-2">
                Rate your last experience with us!
              </p>
              <div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleInputChange(companyId, "score", num)}
                    onMouseEnter={() =>
                      handleInputChange(companyId, "hovered", num)
                    }
                    onMouseLeave={() =>
                      handleInputChange(companyId, "hovered", 0)
                    }
                    className="px-1"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className={
                        (hovered || score) >= num
                          ? "text-yellow-400"
                          : "text-dark-text"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={comment}
              onChange={(e) =>
                handleInputChange(companyId, "comment", e.target.value)
              }
              className="w-full rounded-md border border-border-color bg-transparent text-dark-text p-2 text-sm focus:outline-none mt-3 mb-2"
              placeholder="Any other suggestions?"
            />

            <Button
              type="button"
              variant="primary"
              label="Submit"
              className="w-full py-3"
              onClick={() => handleSubmit(companyId)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LastWork;
